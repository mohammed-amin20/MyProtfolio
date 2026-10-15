# Repository Guidelines

## Project Structure & Module Organization

This repository is a static developer portfolio built with HTML, CSS, and vanilla JavaScript. `index.html` contains the page content; `portfolio.js` implements navigation, project filters, theme filters, and the screenshot viewer; `experience.js` holds the translation table, theme/language preferences, scroll progress, reveals, and counters; `certificates.js` drives the certificate dialog. All styling lives in the single `styles.css`, ordered as design tokens, base layout, then presentation layers (identity, showcase, experience, certificates) and a final polish layer appended last.

`assets/` holds logos, the portrait, CV, WebP derivatives, and screenshots grouped under `devz/`, `memo/`, `dictionary/`, and `rick-and-morty/`. `tools/build_showcase.py` generates the work section inside `index.html` and `tools/build_certificates.py` generates the certificate section; `tools/optimize_assets.py` rebuilds the WebP derivatives. `robots.txt`, `sitemap.xml`, and the social preview `assets/og-image.png` are served from the repository root. There is no application backend or dedicated test directory.

## Build, Test, and Development Commands

- `Start-Process ./index.html`: open the portfolio directly in the default browser on Windows.
- `python -m http.server 8000`: serve the repository locally; visit `http://localhost:8000`.
- `python tools/build_showcase.py`: regenerate the work section from project metadata and assets. Run from the repository root; this rewrites part of `index.html`, so review the resulting changes.
- `python tools/build_certificates.py`: regenerate the certificate section from the metadata in that script.
- `python tools/optimize_assets.py`: rebuild the WebP derivatives for screenshots, certificates, logos, and the profile portrait.

No dependency installation or production build is required. Deployment uses the static files directly, as described in `README.txt`.

## Coding Style & Naming Conventions

Follow the surrounding file's formatting. JavaScript uses two-space indentation, `const`/`let`, single-quoted strings, and camelCase names. HTML and CSS are compact; avoid unrelated reformatting. Use descriptive kebab-case classes and `data-*` attributes. Keep Python helper names in snake_case. No formatter or linter is configured.

Preserve asset filename casing and existing paths. Keep generated project metadata in `tools/build_showcase.py` synchronized with showcase changes so regeneration retains them.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Check changes in a browser at desktop and mobile widths. Exercise menu toggling, project and theme filters, gallery navigation, Escape handling, and focus restoration. Verify image, CV, email, and WhatsApp links. Preserve keyboard accessibility, reduced-motion support, and navigation/image access with JavaScript disabled.

## Commit & Pull Request Guidelines

This checkout has no Git history available to establish commit conventions. Use concise imperative messages, such as `Fix mobile gallery spacing`. Pull requests should explain the change, link relevant issues, list manual checks, and include desktop/mobile screenshots for visual changes. Identify regenerated markup and asset additions explicitly.
