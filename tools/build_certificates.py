"""Rebuild the certificate section using the supplied bilingual artwork."""
from html import escape
from pathlib import Path
from urllib.parse import quote
import re

ROOT = Path(__file__).resolve().parent.parent
credentials = [
    ('1-', 'Professional identity & positioning', 'Career foundations', 10,
     'Introduction to professional identity and positioning.', 'AVT-2026-0529'),
    ('2-', 'AI-powered productivity', 'Smarter workflows', 10,
     'Introduction to AI-powered productivity, automation & digital workflows.', 'AVT-2026-0979'),
    ('3-', 'Freelancing & remote work', 'Independent work', 70,
     'Freelancing & remote work enablement.', 'AVT-2026-1089'),
]
seal = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 2 3 2 3.6.4.8 3.5L21 11l-1.6 3.2-.8 3.5-3.6.4-3 2-3-2-3.6-.4-.8-3.5L3 11l1.6-3.1.8-3.5L9 4l3-2Z"/><path d="m8 11 2.5 2.5L16 8"/></svg>'
arrow = '<span aria-hidden="true">↗</span>'
cards = []
for number, (folder, title, category, hours, description, credential_id) in enumerate(credentials, 1):
    source = ROOT / 'certificates' / folder
    artwork = sorted(source.glob('*.png'))
    english = next(p for p in artwork if p.name.isascii())
    arabic = next(p for p in artwork if not p.name.isascii())
    url = lambda p: quote(p.relative_to(ROOT).as_posix(), safe='/')
    webp = lambda p: url(p.with_suffix('.webp'))
    verify = re.search(r'https://\S+', next(source.glob('*.txt')).read_text(encoding='utf-8')).group()
    cards.append(f'''<article class="certificate-card">
<div class="certificate-card-top"><span class="certificate-category">{category}</span><span class="certificate-number" data-certificate-number="{number}" aria-hidden="true">0{number}</span></div>
<a class="certificate-art" href="{webp(english)}" data-en="{webp(english)}" data-ar="{webp(arabic)}" aria-haspopup="dialog"><picture><source type="image/webp" srcset="{webp(english)}"><img src="{url(english)}" alt="{escape(title)}" width="1080" height="1080" loading="lazy" decoding="async"></picture><span class="certificate-preview"><span>View certificate</span> {arrow}</span></a>
<div class="certificate-copy"><div class="certificate-meta"><span>Avatar</span><span data-certificate-hours="{hours}">{hours} training hours</span></div><h3>{escape(title)}</h3><p>{escape(description)}</p><div class="certificate-issued"><span>Issued October 2026</span><code dir="ltr" lang="en">{credential_id}</code></div><a class="certificate-verify" href="{verify}" target="_blank" rel="noopener noreferrer">{seal}<span>Verify credential</span>{arrow}</a></div>
</article>''')
total_hours = sum(hours for *_, hours, _, _ in credentials)
section = f'''<!-- certificates:start -->
<section id="certificates" class="section certificates" aria-labelledby="certificates-title">
<div class="sectionhead" data-section="03 / CERTIFICATES"><div><div class="eyebrow">Always building. Always learning.</div><h2 id="certificates-title">More knowledge.<br><span>More possibilities.</span></h2></div><p>Continuing to grow beyond the code, from professional identity to smarter workflows and independent work.</p></div>
<div class="certificate-summary"><span class="certificate-summary-icon">{seal}</span><div><strong>Learning, documented.</strong><span>Certificates of attendance · Avatar</span></div><div class="certificate-total"><strong data-certificate-number="{len(credentials)}">0{len(credentials)}</strong><span>certificates</span></div><div class="certificate-total"><strong data-certificate-number="{total_hours}">{total_hours}</strong><span data-certificate-hours-unit>training hours</span></div></div>
<div class="certificate-grid">{''.join(cards)}</div>
</section>
<!-- certificates:end -->'''
page = ROOT / 'index.html'
html = page.read_text(encoding='utf-8')
if '<!-- certificates:start -->' in html:
    html = re.sub(r'<!-- certificates:start -->.*?<!-- certificates:end -->', lambda _: section, html, flags=re.S)
else:
    html = html.replace('<section class="platforms"', section + '\n<section class="platforms"', 1)
page.write_text(html, encoding='utf-8')
print(f'Built {len(cards)} bilingual certificate cards.')
