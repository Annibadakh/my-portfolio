# Aniket Badakh · Portfolio v2

Personal portfolio of Aniket Badakh, software engineer (backend & full-stack).
Built with **React 18, Vite, Tailwind CSS 3, React Router and lucide-react**.

Live at https://annibadakh.github.io/my-portfolio/ (deployed from `main`). The old static HTML/CSS
version is kept on the `old-design` branch.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build
```

## Deploy

**GitHub Pages (main):** `.github/workflows/deploy-pages.yml` builds and publishes the site on every push to `main`.
One-time setup: repo Settings → Pages → Build and deployment → Source: **GitHub Actions**.
The workflow builds with `GITHUB_PAGES=true`, which sets Vite's base path to `/my-portfolio/`, and copies
`index.html` to `404.html` so deep links such as `/case-studies/...` work.

**Netlify (optional):** build command `npm run build`, publish directory `dist`. Node version comes from `.nvmrc`.
`public/_redirects` handles SPA routes. No environment variables are required; optionally set
`VITE_FORMSPREE_ENDPOINT` (see `.env.example`).

Files in `public/` are linked through `asset()` in `src/utils/asset.js` so they work under either base path.

## Where to edit content

All text lives in `src/data/`, so most updates don't touch JSX:

| File | What it holds |
|---|---|
| `profile.js` | name, intro, about, email, social links, hero stats, form endpoint |
| `experience.js` | jobs for the Experience timeline |
| `projects.js` | featured projects and "More projects" cards |
| `caseStudies.js` | case study pages (architecture lanes, flows, decisions) |
| `skills.js` | grouped skills |
| `achievements.js` | publications, achievements, certifications, education |

The resume PDF is `public/Aniket_Badakh_Resume.pdf`. Replace the file to update it.

## Theme

Colours are CSS variables in `src/index.css` (Graphite Violet palette: light values on `:root`, dark on `.dark`),
mapped to Tailwind names in `tailwind.config.js` (`bg`, `surface`, `ink`, `muted`, `line`, `accent`, `second`, `chip`).
The theme toggle stores the visitor's choice in `localStorage` and otherwise follows the OS setting.

Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels and code).

## Structure

```
src/
  components/layout/   Header, Footer, Layout, ThemeToggle
  components/ui/       Section, ArchitectureDiagram, BrandIcons, ExternalLink
  sections/            Hero, Stats, About, Experience, Projects, CaseStudies, Skills, Achievements, Contact
  pages/               Home, CaseStudy, NotFound
  data/                all content
  context/             ThemeContext
```
