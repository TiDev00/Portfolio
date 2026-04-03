# Migration Notes

This document records all changes made when migrating from the original Create React App (CRA) v1 portfolio to Next.js 15 + TypeScript.

---

## Architecture Changes

| Before (CRA v1) | After (Next.js 15) |
|---|---|
| React 16.10, CRA `react-scripts` | React 19, Next.js 15 App Router |
| JavaScript only | TypeScript 5 — `"strict": true` |
| `HashRouter` (7 routes) | Next.js file-based App Router |
| `styled-components` + CSS files | Tailwind CSS + CSS custom properties |
| `react-helmet` for SEO | Next.js Metadata API |
| Font Awesome class-based icons | lucide-react SVG icons |
| Iconify `<span>` tags | Inline tech skill chips |
| Apollo GraphQL (GitHub API) | Static JSON data (`lib/portfolio.ts`) |
| `baseui` Accordion | Custom Tailwind accordion/cards |
| `react-reveal` animations | Framer Motion |
| `react-router-dom` | Next.js `Link` + `usePathname` |
| `node-sass` | Tailwind CSS |
| `gh-pages` deployment | Vercel (configured by repo owner) |
| npm | pnpm 10 |
| No TypeScript | TypeScript strict mode |
| No tests | Vitest + RTL + Playwright |
| No Storybook | Storybook v8 |
| No CI | GitHub Actions (lint→type-check→test→build) |

---

## Route Changes

| Old route (HashRouter) | New route (App Router) |
|---|---|
| `/#/` or `/#/home` | `/` |
| `/#/experience` | `/experience` |
| `/#/education` | `/education` |
| `/#/projects` | `/projects` |
| `/#/opensource` | `/opensource` |
| `/#/contact` | `/contact` |
| `/#/splash` | Removed — no splash screen in v2 |

The splash screen (`isSplash: true`) with the animated LoaderLogo SVG was removed. Next.js handles loading states natively. If needed, add a `loading.tsx` in `app/`.

---

## Content Changes

### Preserved (100%)
- All professional experience entries (11 total)
- All degrees (4)
- All certifications (4)
- All competitive site links
- All social media links (5)
- All 6 open source projects
- Contact information and address
- SEO metadata

### Improved
- Skill descriptions expanded with more detail
- Company descriptions improved for clarity
- Added missing company descriptions for freelance and volunteer roles
- Resume link updated to current OneDrive link

### Removed
- Splash screen animation
- Apollo GraphQL real-time GitHub stats (replaced with static data)
- OpenSource tab showing live PR/Issue charts (replaced with community highlight section)
- `react-chartjs-2` charts for PR/Issue analytics
- `react-spring` animations (replaced by Framer Motion)
- `baseui` dependency
- `styletron-*` dependencies
- 10-theme colour picker (replaced by light/dark mode)

---

## Asset Migration

### Images
Original images were stored in `src/assests/images/` (note typo — `assests` not `assets`). In Next.js v2, all images must be in `public/images/`.

To recover images from git history:
```bash
git checkout legacy/main -- src/assests/images/
cp -r src/assests/images/* public/images/
rm -rf src/
```

All image references in `lib/portfolio.ts` use the path `/images/<filename>`.

### SVG Illustrations
The following inline SVG illustrations from the original CRA build were **removed** from source code:
- `FeelingProud.svg` (Hero section) — replaced by a CSS monogram placeholder
- `DataScienceImg.svg`, `FullStackImg.svg`, `CloudInfraImg.svg` (skill sections) — replaced by skill chips
- `address_image.svg`, `manOnTable.svg` (contact page) — referenced from `public/images/` if restored
- `experience.svg` (experience page) — not used in v2

### Fonts
- Previously loaded via CDN in `public/index.html` (Font Awesome 4.7.0)
- v2 uses `lucide-react` SVGs + `next/font/google` (Inter)

---

## Dependency Removals

The following CRA-era dependencies are **not** present in v2:

| Removed | Reason |
|---|---|
| `react-scripts` | Replaced by Next.js |
| `react-router-dom` | Next.js handles routing |
| `styled-components` | Tailwind CSS |
| `radium` | Tailwind CSS |
| `baseui` / `styletron-*` | No longer needed |
| `apollo-boost` / `@apollo/react-hooks` | Static data replaces GraphQL |
| `graphql` | Static data replaces GraphQL |
| `react-helmet` | Next.js Metadata API |
| `react-reveal` | Framer Motion |
| `react-spring` | Framer Motion |
| `node-sass` | Tailwind CSS |
| `chart.js` / `react-chartjs-2` | Charts section removed |
| `@iconify/react` | lucide-react |
| `gh-pages` | Vercel |
| `react-bootstrap` / `bootstrap` | Tailwind CSS |
| `node-fetch` | Next.js Server Runtime |

---

## Breaking Changes for Existing URLs

If you had shared direct `#` hash-router URLs (e.g. `https://tidev00.github.io/#/experience`), these will no longer work. The new clean paths are:
- `/experience`
- `/education`
- `/projects`
- `/opensource`
- `/contact`

Add `next.config.ts` redirects if you need to preserve old hash-based URLs.

---

## Known Limitations

1. **Images must be manually migrated** from git history to `public/images/` (see above).
2. **Contact form** requires a mail provider integration (Resend, SendGrid, etc.) to actually send emails — see `app/api/contact/route.ts`.
3. **Real-time GitHub stats** (PR/issue counts from API) were removed. Add a Server Component with GitHub REST API calls if this is desired.
4. **Google Analytics / AdSense** scripts from the original `public/index.html` are not carried over. Add them via `next/script` in `app/layout.tsx` if needed.
