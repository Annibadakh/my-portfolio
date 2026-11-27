# Aniket Badakh · Portfolio v2

Personal portfolio of Aniket Badakh, software engineer (backend & full-stack).
Built with **React 18, Vite, Tailwind CSS 3, React Router and lucide-react**.

v1 (static HTML/CSS) stays live from the `main` branch at https://annibadakh.github.io/my-portfolio/.
This `version-2` branch is the redesign, previewed on Netlify.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build
```

## Deploy on Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` sends every path to `index.html` so routes like `/case-studies/...` work on refresh.

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

Fonts: Syne (headings), Manrope (body), IBM Plex Mono (labels and code).

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
