# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev       # Vite dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
```

There is no test suite, linter or TypeScript setup. Check changes with `npm run build` and by viewing the site in the dev server.

## Architecture

A single-page React 18 + Vite portfolio (plain JSX, no router, no state library, no animation library; all motion is CSS).

- **Content is data-driven.** Everything shown on the site (profile, jobs, projects, skills, education, links) lives in `src/data/portfolio.js`. Components only render it. For content changes, edit that file, not the components. Project screenshots and the profile photo are imported at the top of `portfolio.js` from `src/assets/`; the CV is served from `public/`.
- **Project filter:** the filter chips in `Work.jsx` are built from `projects[].stack` and match by exact string. The filter state lives in `App.jsx` and is passed to `Work`.
- **Data-shape conventions** (documented in comments in `portfolio.js`): `experience` is newest first, and promotions go in a job's `roles` array (newest first; `roles[0]` is shown as the current title). The first `workHighlights` entry renders as the large bento card. `featured: true` on a project makes a wide card, but only when the filter is "All". An optional `demo` URL adds a "Live demo" link.
- **Icons:** `Icon.jsx` maps string keys (used in `profile.socials[].icon` and `workHighlights[].icon`) to react-icons components. A new icon key must be added to that map.
- **Styles:** `src/styles.css` holds project-wide styles (tokens, base elements, shared `.btn`/`.chip`/`.tags`/`.icon-btn`/`.socials`) and is imported in `main.jsx` *before* `App`. Each component imports its own `src/styles/<Component>.css`. Keep that order: some component rules override global ones with equal specificity (e.g. `.contact__title` over `.h2`, `.academic__tags` over `.tags`).
- **Theming:** Design tokens are CSS custom properties on `:root` (dark by default), overridden under `:root[data-theme="light"]`. `Nav.jsx` sets `document.documentElement.dataset.theme` and persists it to `localStorage` (falling back to `prefers-color-scheme`).
- **Nav highlighting:** `useActiveSection` in `src/hooks.js` uses an IntersectionObserver over the section ids listed in `Nav.jsx`. A new section needs a matching `id` and an entry in that `links` array.

## Contact form (EmailJS)

`Contact.jsx` sends via `@emailjs/browser` using `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` (copy `.env.example` to `.env`). When any key is missing, the form falls back to a `mailto:` link, so the site works without them. The EmailJS template expects the fields `{{from_name}}`, `{{reply_to}}` and `{{message}}`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`, with the EmailJS keys injected from repository secrets. `vite.config.js` uses `base: "./"` so the build works at any Pages path (`/portfolio/` or the root). Keep asset references relative (e.g. `profile.cv` is `./Sagara_Krishantha_CV.pdf`).
