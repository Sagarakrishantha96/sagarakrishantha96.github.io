# Sagara Krishantha — Portfolio (v3)

React + Vite single-page portfolio.

- **Hero request panel**: a live request travels through Interface → API → Data → Cloud;
  hover or tap a layer to see what I've built there.
- **Experience timeline** with the XpressJobs promotion and expandable contributions.
- **Selected work**: XpressJobs highlights, filterable personal projects, university projects.
- **Skills explorer**: pick a skill to see every job and project where it was used.
- Dark/light themes, active-section nav, copy-email button, contact form,
  reduced-motion support, and automatic deployment to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit your content

Everything — bio, jobs, projects, skills, links — is in **`src/data/portfolio.js`**.
You never need to touch the components to update the site.

- **New job:** add an object to the top of `experience`. For a promotion, add another
  entry to that job's `roles` (newest first).
- **Hero panel:** edit `stackLayers`.
- **XpressJobs highlights:** edit `workHighlights` (the first one is shown large).
- **New project:** add to `projects`, put the screenshot in `src/assets/projects/`
  and import it at the top of the file. Add `demo: "https://..."` to show a
  "Live demo" link. Set `featured: true` to make it a wide card (3 featured + 3
  normal fills the grid evenly).
- **Skills:** spell each technology the same way everywhere in the file; the Skills
  explorer matches names exactly.
- **New CV:** replace `public/Sagara_Krishantha_CV.pdf`.
- **Photo:** replace `src/assets/my.png` (square image).

## Contact form (EmailJS)

1. Copy `.env.example` to `.env`.
2. Fill in your Service ID, Template ID and Public Key from
   [emailjs.com](https://www.emailjs.com/) → Account / Email Services / Email Templates.
   Your template should use `{{from_name}}`, `{{reply_to}}` and `{{message}}`.
3. Without keys the form still works — it opens the visitor's email app instead.

## Deploy to GitHub Pages

The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every
push to `main`.

1. Push this project to your `portfolio` repo (replacing the old code).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. For the contact form, add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`
   and `VITE_EMAILJS_PUBLIC_KEY` under **Settings → Secrets and variables → Actions**.

The site will be at `https://sagarakrishantha96.github.io/portfolio/`.
To serve it at the root `https://sagarakrishantha96.github.io/`, name the repo
`sagarakrishantha96.github.io` instead — no code changes needed.

## Stack

React 18 · Vite · React Icons · EmailJS (no animation library; all motion is CSS)
