# Thierno Ibrahima Cissé — Portfolio (v2)

> Production-ready Next.js 15 + TypeScript rewrite of [TiDev00/Portfolio](https://github.com/TiDev00/Portfolio).

[![CI](https://github.com/TiDev00/Portfolio/actions/workflows/ci.yml/badge.svg?branch=migrate/nextjs)](https://github.com/TiDev00/Portfolio/actions/workflows/ci.yml)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 — `"strict": true` |
| Styling | Tailwind CSS + CSS custom properties |
| UI primitives | Radix UI + Headless UI |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Theme | next-themes (light/dark) |
| Tests | Vitest + RTL (unit) · Playwright (E2E) |
| Storybook | v8 with Vite builder |
| Lint/Format | ESLint + Prettier + Husky + lint-staged |
| CI/CD | GitHub Actions → Vercel |
| Package manager | pnpm |

---

## Quick Start

```bash
git clone https://github.com/TiDev00/Portfolio.git
cd Portfolio
git checkout migrate/nextjs
pnpm install
pnpm dev        # → http://localhost:3000
```

---

## Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint (zero warnings) |
| `pnpm type-check` | Run `tsc --noEmit` |
| `pnpm format` | Format all files with Prettier |
| `pnpm test` | Run Vitest unit tests |
| `pnpm test:coverage` | Unit tests with V8 coverage |
| `pnpm e2e` | Run Playwright E2E tests |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build Storybook static site |

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Nav + Footer + ThemeProvider)
│   ├── page.tsx            # Home (Hero + Skills)
│   ├── experience/         # Experience page
│   ├── education/          # Education, certifications & platforms
│   ├── projects/           # Projects grid with modal detail
│   ├── opensource/         # Open source activity
│   ├── contact/            # Contact form
│   └── api/contact/        # Contact form API route
├── components/
│   ├── ui/                 # Button, Nav, Footer, ThemeToggle, Modal
│   ├── sections/           # Hero, Skills, Experience, Education,
│   │                       # Projects, Contact, Opensource
│   └── shared/             # SocialMedia, SectionHeader
├── lib/
│   ├── portfolio.ts        # Typed content data (all pages)
│   ├── types.ts            # Shared TypeScript interfaces
│   └── utils.ts            # cn() helper + formatDate()
├── public/                 # Static assets (favicons, images)
├── tests/
│   ├── setup.ts            # Vitest + RTL global setup
│   └── e2e/                # Playwright tests
└── .storybook/             # Storybook configuration
```

---

## Customising Content

All portfolio data lives in **[lib/portfolio.ts](lib/portfolio.ts)** — a single fully-typed TypeScript file.

Edit these exports to update your content:

| Export | Page |
|---|---|
| `greeting` | Hero section |
| `socialMediaLinks` | Footer + Contact |
| `skills` | Home skills section |
| `degrees` / `certifications` | Education page |
| `experience` | Experience page |
| `projects` | Projects page |
| `contactSection` / `addressSection` | Contact page |

---

## Image Migration

Images referenced in `lib/portfolio.ts` must live in `public/images/`.

To recover original images from git history:

```bash
# Restore original images from the legacy branch
git checkout legacy/main -- src/assests/images/
# Move to public/images (note original typo 'assests')
cp -r src/assests/images/* public/images/
rm -rf src/
```

Required images:
- Company logos: `pomerleau_logo.jpg`, `teccart_logo.png`, `uqam.png`, `ciena_logo.png`, `atos_logo.png`, etc.
- Institution logos: `ucad.png`, `imes.png`
- Cert logos: `stanford_online_logo.png`, `deeplearning_ai_logo.png`, `HongKong_logo.jpg`
- Social: `github_logo.png`
- Illustrations: `manOnTable.svg`, `projects_image.svg` (optional — code uses fallbacks)

---

## Contact Form

The `/api/contact` route validates the form with Zod and logs the payload server-side. To send real emails, integrate a provider in `app/api/contact/route.ts`:

```ts
// Example with Resend
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ from: "...", to: "...", subject: data.subject, text: data.message });
```

---

## Deployment (Vercel)

1. Push the `migrate/nextjs` branch to GitHub.
2. In [Vercel](https://vercel.com), import the repository.
3. Framework preset — **Next.js** (detected automatically).
4. Set root directory to `.` (repo root).
5. Add environment variables if needed (e.g. `RESEND_API_KEY`).
6. Vercel will build and deploy; preview URLs appear per-PR automatically.
7. Once validated, merge `migrate/nextjs` → `main` for production.

---

## Accessibility

- All interactive elements are keyboard-navigable (focus rings).
- ARIA labels on icon-only buttons and links.
- `aria-current="page"` on active nav links.
- Form fields have associated labels and `aria-describedby` for errors.
- `axe-core` a11y checks run in the Storybook CI build.

---

## License

[MIT](LICENSE) © Thierno Ibrahima Cissé

