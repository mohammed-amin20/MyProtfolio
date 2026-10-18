<div align="center">

<img src="assets/mg-mark.svg" alt="Mohammed Ghazal monogram" width="76" height="76">

# Mohammed Ghazal

**Android & Flutter Developer | Gaza, Palestine**

Thoughtful interfaces. Reliable mobile apps.

[Explore the portfolio](https://mohammed-ghazal.netlify.app/) &nbsp; / &nbsp; [Selected work](https://mohammed-ghazal.netlify.app/#work) &nbsp; / &nbsp; [Let's talk](https://mohammed-ghazal.netlify.app/#contact)

[![Mohammed Ghazal portfolio preview](assets/og-image.png)](https://mohammed-ghazal.netlify.app/)

**English & Arabic** | **Light & dark themes** | **Responsive layouts** | **No build step**

</div>

## About this portfolio

A personal portfolio showcasing my Android and Flutter work, development services, and training certificates. Explore app interfaces, read about the work behind each project, and start a conversation about your next mobile app.

The website is built with HTML, CSS, and vanilla JavaScript. It runs as a static site, with no application backend or package installation required to preview it.

## The experience

| Feature | What to expect |
| --- | --- |
| Bilingual interface | English and Arabic, with right-to-left layouts and Tajawal Arabic typography. |
| Theme preferences | Light and dark modes, an initial system-based theme, and preferences saved when browser storage is available. |
| Project showcase | Category filters, app screenshot galleries, and per-gallery light/dark screenshot filters. |
| Accessible viewers | Screenshot and certificate dialogs with keyboard navigation, Escape handling, and focus restoration. |
| Considered motion | Scroll reveals, animated statistics, a living-code hero, and decorative effects with reduced-motion support. |
| Optimized imagery | WebP derivatives, original image fallbacks, and responsive portrait sizes. |
| Direct contact | A personal contact card with WhatsApp, browser-based Gmail compose, an alternative email-app link, and colored social icons. |
| Progressive enhancement | Navigation and direct image links remain usable without JavaScript. |

## Selected projects

| Project | Purpose | Featured technologies | Source |
| --- | --- | --- | --- |
| **devZ** | Developer Q&A community with profiles, jobs, and moderation tools. | Kotlin, Jetpack Compose, Clean Architecture, MVI | [Repository](https://github.com/mohammed-amin20/devz) |
| **Memo** | Offline notes with search, categories, and a PIN-protected hidden area. | Kotlin, Jetpack Compose, Room, Hilt | [Repository](https://github.com/mohammed-amin20/Memo) |
| **Dictionary** | English definitions, pronunciation audio, and Arabic translation. | Kotlin, Jetpack Compose, MVI, Retrofit | [Repository](https://github.com/mohammed-amin20/Dictionary) |
| **Rick & Morty** | Character browsing, search, detailed profiles, and offline caching. | Kotlin, Jetpack Compose, Room, Retrofit | [Repository](https://github.com/mohammed-amin20/Rick-And-Morty) |
| **Company accounting app** | Business application currently presented as work in progress. | Flutter, Supabase | In development |

The portfolio also includes three Avatar training certificates totaling 90 training hours, with English/Arabic artwork and credential verification links.

## Technology

**This website:** semantic HTML, CSS, vanilla JavaScript, inline SVG, and Python maintenance scripts.

**My mobile development toolkit:** Kotlin, Jetpack Compose, Flutter, Dart, Clean Architecture, MVI, Room, Hilt, Retrofit, Firebase, Supabase, and REST APIs.

## Run locally

Clone the repository:

```bash
git clone https://github.com/mohammed-amin20/MyProtfolio.git
cd MyProtfolio
```

Open `index.html` directly in your browser, or serve the folder with Python 3:

```bash
python -m http.server 8000
```

Visit [localhost:8000](http://localhost:8000). No Node.js installation, environment variables, or production build is needed.

## Repository guide

| Path | Responsibility |
| --- | --- |
| [`index.html`](index.html) | Page content, metadata, and generated project/certificate sections. |
| [`styles.css`](styles.css) | Theme tokens, layouts, component styling, responsive rules, and motion. |
| [`portfolio.js`](portfolio.js) | Navigation, project and screenshot theme filters, and the image viewer. |
| [`experience.js`](experience.js) | Arabic translations, theme/language preferences, reveals, counters, and motion helpers. |
| [`living-code.js`](living-code.js) | Animated code presentation in the hero. |
| [`certificates.js`](certificates.js) | Certificate viewer and its interactions. |
| [`assets/`](assets/) | Portrait, logos, CV, social preview, and project screenshots. |
| [`certificates/`](certificates/) | Original certificate artwork and WebP derivatives. |
| [`tools/`](tools/) | Scripts for regenerating content and optimizing images. |
| [`robots.txt`](robots.txt) / [`sitemap.xml`](sitemap.xml) | Search-engine discovery files. |

## Update the content

Edit general page content and contact links in `index.html`. Keep matching Arabic text in `experience.js` synchronized when changing English copy. Update colors, typography, and layout in `styles.css`.

Project and certificate sections are generated. Edit their metadata in the corresponding Python script so that future regeneration preserves your changes.

| Task | Command |
| --- | --- |
| Regenerate the project showcase | `python tools/build_showcase.py` |
| Regenerate the certificate section | `python tools/build_certificates.py` |
| Rebuild optimized image derivatives | `python tools/optimize_assets.py` |

Run these commands from the repository root and review the resulting diff. The showcase script also defines screenshot walkthrough order and preview selections.

Image optimization requires **Pillow**; it is optional for running the website:

```bash
python -m pip install Pillow
python tools/optimize_assets.py
```

Keep original images and existing filename casing intact. Platform logo sources are documented in [`assets/platforms/SOURCES.md`](assets/platforms/SOURCES.md).

## Check before publishing

There is no automated test framework configured. Preview changes at desktop and mobile widths, then check:

- English/Arabic layouts, light/dark themes, and reduced-motion behavior.
- Mobile navigation, project filters, and screenshot theme filters.
- Gallery and certificate navigation, Escape handling, and keyboard focus restoration.
- Image, CV, Gmail, alternative email-app, WhatsApp, and social links.
- Navigation and image access with JavaScript disabled.

The Gmail action opens a compose page with the recipient and subject filled in; visitors may need to sign in. The alternative email link uses their configured email application. WhatsApp opens a chat. Visitors send their messages themselves; the website does not submit a contact form.

## Deploy

Publish the repository's static files with Netlify or another static host. The publish directory is the repository root; no build command is required. Include the root HTML/CSS/JavaScript files, `assets/`, and `certificates/`.

If deploying to a different domain, update the canonical URL, social metadata, and structured data in `index.html`, along with `robots.txt` and `sitemap.xml`.

## Let's build something useful

[Chat on WhatsApp](https://wa.me/972592923130) | [Send via Gmail](https://mail.google.com/mail/?view=cm&fs=1&to=mohammedamenghzal03%40gmail.com) | [GitHub](https://github.com/mohammed-amin20)

Prefer a freelance platform? Find me on [Upwork](https://www.upwork.com/freelancers/~012fda40e3e6df2a37), [Mostaql](https://mostaql.com/u/Mohammed_AmenGH), [Khamsat](https://khamsat.com/user/mohammed_amengh), or [Freelancer](https://www.freelancer.com/u/MohammedAmenGH).

[Facebook](https://facebook.com/mohammed.ameen.03) | [Instagram](https://instagram.com/mo.a.03/)
