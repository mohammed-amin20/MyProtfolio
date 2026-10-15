"""Rebuild the static project showcase from the supplied assets. Run from project root."""
from pathlib import Path
from html import escape
from urllib.parse import quote
import re

projects = [
 dict(id='devz', folder='devz', name='devZ', category='community', label='Developer community', color='#67d9ed', logo='logo.png', title='A place to ask.<br>A community to grow.', description='A developer Q&A community with coding questions, profiles, company job postings, and moderation tools.', role='Android frontend · Graduation project', contribution='Implemented Android interfaces and frontend state with Clean Architecture and MVI, across community, company, and admin experiences.', tags=['Kotlin','Jetpack Compose','Clean Architecture','MVI'], features=['Questions & answers','Jobs & companies','Admin tools'], repo='https://github.com/mohammed-amin20/devz', note='Screens rendered from the actual Compose UI using automated screenshot tests.'),
 dict(id='memo', folder='memo', name='Memo', category='productivity', label='Offline notes', color='#a7dce0', logo='logo.png', title='Small thoughts.<br>Room for big ideas.', description='An on-device notes app with search, categories, pinned notes, and a PIN-protected hidden notes area.', role='Android application', contribution='Local note management with Room, reactive Compose interfaces, bilingual layouts, and light and dark themes.', tags=['Kotlin','Jetpack Compose','Room','Hilt'], features=['Offline notes','Search & categories','Hidden notes'], repo='https://github.com/mohammed-amin20/Memo', note='Compose preview renders of the actual UI, including editor, vault, and account states.'),
 dict(id='dictionary', folder='dictionary', name='Dictionary', category='reference', label='Language & learning', color='#e6c879', logo='logo.png', title='Find the word.<br>Understand the meaning.', description='English word lookup with definitions, phonetics, pronunciation audio, and Arabic translation in a focused reading interface.', role='Android application', contribution='A Kotlin and Compose app with an MVI presentation layer, API integration, and clear loading and connectivity states.', tags=['Kotlin','Jetpack Compose','MVI','Retrofit'], features=['Word definitions','Audio pronunciation','Arabic translation'], repo='https://github.com/mohammed-amin20/Dictionary', note='Supplied app captures showing lookup, results, loading, and connectivity states.'),
 dict(id='rick', folder='rick-and-morty', name='Rick & Morty', category='entertainment', label='Character explorer', color='#b4e777', logo='portal-logo.svg', title='One app.<br>A whole multiverse.', description='A character explorer with cinematic cards, live search, detailed profiles, and playful loading and empty states.', role='Android application', contribution='Clean Architecture and MVI with API-backed character browsing, Room caching, and shared-element navigation.', tags=['Kotlin','Jetpack Compose','Room','Retrofit'], features=['Character search','Rich profiles','Offline cache'], repo='https://github.com/mohammed-amin20/Rick-And-Morty', note='Supplied device captures in both themes, including character and network states.'),
]

preview_screens = {
 'devz': ['login-content-dark.png', 'feed-content-dark.png', 'profile-content-dark.png'],
 'memo': ['notes-dark.png', 'add-edit-note-dark.png', 'hidden-notes-list-dark.png'],
 'dictionary': ['home-dark.jpeg', 'output-dark.jpeg', 'no-internet-dark.jpeg'],
 'rick': ['home-dark.jpeg', 'search-dark.jpeg', 'details-dark.jpeg'],
}

screen_flows = {
 'devz': [
  'splash', 'onboarding', 'login', 'signup', 'feed', 'question-details',
  'add-edit-question', 'job-detail', 'notifications', 'profile', 'edit-profile',
  'settings', 'pending-approval', 'company-dashboard', 'post-job',
  'company-job-detail', 'company-profile', 'edit-company-profile',
  'admin-dashboard', 'manage-users', 'manage-questions', 'manage-answers',
  'manage-announcements', 'manage-jobs', 'manage-companies', 'manage-reports',
  'admin-profile', 'banned',
 ],
 'memo': [
  'splash', 'login', 'signup', 'no-notes', 'add-edit-note', 'notes', 'search',
  'selected', 'pin-setup', 'pin-setup-confirm', 'pin-setup-mismatch',
  'pin-verify', 'pin-verify-locked', 'pin-verify-forget-dialog',
  'hidden-notes-empty', 'hidden-notes-list', 'hidden-notes-select-mode',
  'settings', 'settings-narrow', 'settings-logout-dialog',
 ],
 'dictionary': ['splash', 'home', 'search-loading', 'output', 'no-internet'],
 'rick': ['splash', 'loading', 'home', 'search', 'details', 'failed-notfound'],
}

def screen_name(path):
 return re.sub(r'-(dark|light)$', '', path.stem).replace('-content', '')

def screen_order(path, project):
 flow = screen_flows[project['id']]
 name = screen_name(path)
 position = flow.index(name) if name in flow else len(flow)
 theme = 0 if path.stem.endswith('-dark') else 1 if path.stem.endswith('-light') else 2
 return position, name, theme, path.name

def label(path):
 return screen_name(path).replace('-',' ').capitalize()

def image_link(p,project,cover=False):
 theme='light' if 'light' in p.stem else 'dark' if 'dark' in p.stem else 'both'
 url=quote(p.as_posix(),safe='/'); webp=quote(p.with_suffix('.webp').as_posix(),safe='/'); caption=label(p)
 return f'<figure class="screen" data-theme="{theme}"><a class="screenshot-link" href="{webp}" data-project="{project["id"]}" data-theme="{theme}" data-caption="{escape(caption)}" aria-label="Enlarge {escape(project["name"])} {escape(caption)}"><picture><source type="image/webp" srcset="{webp}"><img src="{url}" alt="{escape(project["name"])}: {escape(caption)}, {theme} theme" loading="lazy" decoding="async" width="411" height="891"></picture></a><figcaption>{escape(caption)}</figcaption></figure>'

cards=[]
for number,p in enumerate(projects,1):
 folder=Path('assets')/p['folder']
 images=sorted((x for x in folder.iterdir() if x.suffix.lower() in ('.png','.jpeg','.jpg') and x.stem!='logo'), key=lambda image: screen_order(image, p))
 # Curated covers show the breadth of each app; galleries retain walkthrough order.
 primary=[folder/name for name in preview_screens[p['id']]]
 for image in primary:
  if image not in images:
   raise ValueError(f'Missing preview screenshot: {image}')
 logo_src=quote((folder/p["logo"]).as_posix(),safe="/")
 if p['logo'].endswith('.svg'):
  icon=f'<img src="{logo_src}" alt="" width="44" height="44" loading="lazy">'
 elif p['logo']:
  icon=f'<picture><source type="image/webp" srcset="{quote((folder/p["logo"]).with_suffix(".webp").as_posix(),safe="/")}"><img src="{logo_src}" alt="" width="44" height="44" loading="lazy"></picture>'
 else:
  icon='<span class="memo-icon" aria-hidden="true">m.</span>'
 repo=f'<a class="project-source" href="{p["repo"]}" target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span></a>' if p['repo'] else ''
 cards.append(f'''<article class="project-card" id="project-{p['id']}" data-category="{p['category']}" data-project="{p['id']}" data-name="{escape(p['name'])}" style="--project-accent:{p['color']}">
 <div class="project-intro"><div class="project-brand">{icon}<div><span class="project-category">{p['label']}</span><h3>{escape(p['name'])}</h3></div><span class="project-number">0{number}</span></div>
 <div class="project-layout"><div class="project-copy"><h4>{p['title']}</h4><p>{p['description']}</p><div class="chips">{''.join('<span>'+x+'</span>' for x in p['tags'])}</div><ul class="feature-list">{''.join('<li>'+x+'</li>' for x in p['features'])}</ul><details class="contribution"><summary>Behind the build</summary><p><strong>{p['role']}</strong><br>{p['contribution']}</p></details>{repo}</div><div class="project-cover">{''.join(image_link(x,p,True) for x in primary)}</div></div></div>
 <details class="project-gallery"><summary><span>Explore all {len(images)} app screens</span><span class="gallery-plus" aria-hidden="true">+</span></summary><div class="gallery-toolbar"><p>Every detail, in both themes.</p><div class="theme-controls" role="group" aria-label="{escape(p['name'])} screenshot theme"><button type="button" data-theme-filter="all" aria-pressed="true">All</button><button type="button" data-theme-filter="dark" aria-pressed="false">Dark</button><button type="button" data-theme-filter="light" aria-pressed="false">Light</button></div></div><p class="capture-note">{p['note']}</p><div class="screen-grid">{''.join(image_link(x,p) for x in images)}</div></details></article>''')

work=f'''<section id="work" class="section showcase"><div class="sectionhead" data-section="01 / PROJECTS"><div><div class="eyebrow">The app collection</div><h2>Real apps.<br>Every screen tells a story.</h2></div><p>From developer communities to everyday tools. Explore the interfaces, interactions, and details behind my work.</p></div><div class="work-toolbar"><div class="project-filters" role="group" aria-label="Filter projects"><button type="button" data-filter="all" aria-pressed="true">All work <span>5</span></button><button type="button" data-filter="community" aria-pressed="false">Community</button><button type="button" data-filter="productivity" aria-pressed="false">Productivity</button><button type="button" data-filter="reference" aria-pressed="false">Reference</button><button type="button" data-filter="entertainment" aria-pressed="false">Entertainment</button><button type="button" data-filter="business" aria-pressed="false">Business</button></div><span id="project-results" role="status">5 projects</span></div><div class="project-collection">{''.join(cards)}
<article class="project-card business-project" data-category="business"><span class="tag">Flutter · Supabase · In development</span><h3>Accounting application</h3><p>Sole developer of a company accounting application. Core functionality is completed; offline support, customer messaging, and reports remain in development.</p><div class="chips"><span>Flutter</span><span>Supabase</span><span>Business software</span></div><span class="business-status"><span aria-hidden="true"></span>In development since September 2026</span></article></div><div class="actions"><a class="button" href="https://github.com/mohammed-amin20" target="_blank" rel="noopener noreferrer">More on GitHub <span aria-hidden="true">↗</span></a></div></section>'''
path=Path('index.html'); html=path.read_text(encoding='utf-8')
start=html.index('<section id="work"'); end=html.index('<section id="services"')
html=html[:start]+work+'\n'+html[end:]
if 'showcase.css' not in html: html=html.replace('<link rel="stylesheet" href="identity.css">','<link rel="stylesheet" href="identity.css">\n<link rel="stylesheet" href="showcase.css">')
html=html.replace('Your next idea.<br>A mobile app<br><em>built with care.</em>','Good ideas deserve<br><em>great mobile apps.</em>')
html=html.replace("I'm Mohammed. I turn ideas and designs into practical mobile experiences, from the first interface to the features your users need next.","I'm Mohammed, an Android &amp; Flutter developer. I build thoughtful interfaces and reliable mobile experiences — from the first sketch to the next release.")
# Preserve the preference bootstrap and external interaction scripts.
if 'src="portfolio.js"' not in html:
 html=html.replace('</body>', '<script src="portfolio.js" defer></script>\n</body>')
html=html.replace('<h2 id="viewer-title">devZ screenshot</h2>','<h2 id="viewer-title">App screenshot</h2>')
html=html.replace('<span>© 2026 Mohammed Ghazal. Android & Flutter Developer.</span>','<span class="footer-identity"><img class="footer-mark" src="assets/mg-mark.svg" alt="" width="32" height="32"><span>© 2026 Mohammed Ghazal.<br>Thoughtful interfaces. Reliable mobile apps.</span></span>')
path.write_text(html,encoding='utf-8')
print(f'Built {len(projects)} screenshot showcases with {sum(len(list((Path("assets")/p["folder"]).glob("*.png")))+len(list((Path("assets")/p["folder"]).glob("*.jpeg")))-(1 if p["logo"]=="logo.png" else 0) for p in projects)} supplied app screens.')
