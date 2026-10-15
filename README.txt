MOHAMMED GHAZAL PORTFOLIO

Preview: open index.html in your browser.

Display preferences:
Use the sun/moon button in the header to switch light and dark themes.
Use the language button to switch English and Arabic; Arabic uses a right-to-left layout.
Preferences are saved in the browser when local storage is available. The initial theme follows the system preference.
All styles live in the single stylesheet styles.css, ordered as design tokens, base layout, then presentation layers, a final polish layer, and a motion and atmosphere layer.
Translations, preference controls, scroll progress, and reveal animations live in experience.js.
Animations respect the browser's reduced-motion setting. Navigation and image links work without JavaScript.
Arabic typography uses Tajawal from Google Fonts, with Dubai and system fonts as fallbacks when the font service is unavailable.
The header, footer, and favicon switch between theme-matched SVG monograms.
Section headings, project content, service cards, and gallery images reveal on scroll; grouped items use staggered timing.
The hero statistics count up once they enter the viewport; reduced motion shows the final numbers immediately.
Background SVG orbital shapes and faint constellation details fill the page margins, with a softer geometric halo behind the portrait. Colors follow the theme. Slow motion pauses offscreen or when the tab is hidden, and becomes static with reduced motion enabled.
The About section includes a custom inline SVG robot holding a mobile app, with gentle hovering, blinking, and orbital motion. Its colors follow the theme; animation pauses offscreen and respects reduced motion.
Freelance profile buttons include platform marks. Upwork and Freelancer SVGs are local in assets/platforms; Mostaql and Khamsat logos load from external sources with Arabic wordmark fallbacks. Source links are documented in assets/platforms/SOURCES.md.
Freelance profiles appear as brand-accented cards with staggered scroll reveals and a pointer-following glow on desktop. Profile actions stay visible on touch devices; reduced motion disables movement.
Get in touch includes Facebook and Instagram profile cards alongside email and WhatsApp. Social icons are inline SVGs, links open profiles in a new tab, and labels support English and Arabic. Facebook and Instagram are also available in the footer.
When changing English page text or generated project metadata, update the matching Arabic translation in experience.js.
Screenshot walkthrough order is defined per application in screen_flows in tools/build_showcase.py. Galleries start with launch/authentication and progress through features and final states, keeping dark/light variants together. Separate preview_screens selections show three varied screens that illustrate each app's features.

Atmosphere and motion:
The fixed background adds two slowly drifting aurora glows, a faint film-grain texture, and a soft light that follows the cursor on desktop.
A small corner constellation draws itself once on load and then twinkles; the orbital shapes drift as the page scrolls using scroll-driven animation, with a JavaScript fallback for browsers that lack it.
Hero headlines rise into view and the accent phrase shimmers.
Featured project, platform, and certificate cards reveal a rotating accent ring on hover, project covers tilt gently in 3D, and the technology strip runs as a seamless marquee that pauses on hover or keyboard focus.
Legibility is preserved in both themes, and every effect is switched off by reduced motion. All content and image links remain visible without JavaScript.

Deploy to Netlify:
1. Extract this ZIP into a folder.
2. In Netlify, go to Projects > Upload your project files.
3. Choose the extracted folder containing index.html, styles.css, and the other root files.
4. Follow the page instructions and publish when ready.

No install, build command, environment variables, or paid dependencies are required.

Edit index.html to change the content, project descriptions, and contact details.
Edit styles.css to change colors, typography, spacing, and responsive layouts.
The website uses the GitHub URL and business email supplied in the conversation.
The supplied portrait, PDF resume, four marketplace profile links, and devZ screenshots are included.
Other project descriptions are summaries without public demo links.
Email buttons open the visitor's email application. WhatsApp links open a chat with +972592923130 and a prefilled project inquiry; the visitor sends it themselves. There is no contact form or backend.

The devZ gallery includes four supplied screenshots, an accessible image viewer with keyboard navigation, and subtle motion that respects reduced-motion preferences. Images remain accessible as direct links when JavaScript is disabled.

Selected work appears directly after the introduction. Mobile navigation includes an expandable menu with Escape support; navigation remains visible when JavaScript is disabled. Desktop navigation highlights the section currently in view.

Certificates:
Three supplied Avatar attendance certificates appear after About, with 90 total training hours.
The gallery uses the original English and Arabic artwork in certificates/ and the supplied verification URLs.
The language switch also updates numbers, training-hour wording, image descriptions, accessible link labels,
and the viewer counter. Arabic uses RTL layout while credential IDs remain isolated left-to-right.
Certificate styles live in styles.css and the keyboard-accessible viewer lives in certificates.js.
Theme-aware cards feature staggered scroll reveals and a pointer glow; reduced motion is supported.
Run python tools/build_certificates.py to regenerate this section. Metadata lives in that script.
The project showcase generator preserves the certificate section.
Include certificates/ and certificates.js when deploying the static site.

Performance and sharing:
Screenshots, certificates, logos, and the portrait ship as WebP with their original PNG or JPEG files kept as fallbacks. Run python tools/optimize_assets.py to rebuild the derivatives.
The portrait loads through a responsive srcset (assets/profile-480/720/960/1440.webp) so smaller screens download smaller files.
The shared preview image is assets/og-image.png, and robots.txt plus sitemap.xml point crawlers at the Netlify URL.
