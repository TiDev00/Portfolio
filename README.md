# Portfolio

[![CI](https://github.com/TiDev00/Portfolio/actions/workflows/ci.yml/badge.svg?branch=migrate/nextjs)](https://github.com/TiDev00/Portfolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, production-ready personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS** — fast, accessible, and fully customizable.

> **Branch notice:** `migrate/nextjs` is the active development branch (Next.js 15 + TypeScript rewrite). For the previous stable release, see the [`main`](https://github.com/TiDev00/Portfolio/tree/main) branch.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Customizing Content](#customizing-content)
- [Images](#images)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Accessibility & Quality](#accessibility--quality)
- [Migration Notes](#migration-notes)
- [License](#license)

---

## Features

| Category        | Details                                                   |
| --------------- | --------------------------------------------------------- |
| **Routing**     | Next.js 15 App Router — file-based, zero config           |
| **Type safety** | TypeScript strict mode throughout                         |
| **Styling**     | Tailwind CSS with custom design tokens                    |
| **Components**  | Radix UI & Headless UI for accessible primitives          |
| **Animations**  | Framer Motion — smooth, performant transitions            |
| **Forms**       | React Hook Form + Zod validation                          |
| **Theming**     | Dark/light mode via `next-themes`, no flash               |
| **CI/CD**       | GitHub Actions — zero-warning lint, type-check, and build |

---

## Getting Started

**Prerequisites:** Node.js 18+ and [pnpm](https://pnpm.io/) 10+.

```bash
# 1. Clone and enter the repo
git clone https://github.com/TiDev00/Portfolio.git
cd Portfolio

# 2. Switch to the Next.js branch
git checkout migrate/nextjs

# 3. Install dependencies
pnpm install

# 4. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Script            | Description                               |
| ----------------- | ----------------------------------------- |
| `pnpm dev`        | Start dev server at `localhost:3000`      |
| `pnpm build`      | Production build                          |
| `pnpm start`      | Serve the production build locally        |
| `pnpm lint`       | Lint with ESLint (zero warnings enforced) |
| `pnpm type-check` | Run `tsc` type checking                   |
| `pnpm format`     | Format with Prettier                      |

---

## Project Structure

```
.
├── app/                  # Next.js App Router — pages, layouts, API routes
├── components/           # UI components, section components, shared elements
├── lib/                  # Portfolio data (portfolio.ts), types, utilities
├── public/               # Static assets — favicons, images
├── types/                # Global TypeScript type definitions
└── .github/              # CI/CD workflow definitions
```

---

## Customizing Content

All portfolio data lives in a single file: [`lib/portfolio.ts`](lib/portfolio.ts). Edit the named exports to update each section of the site.

| Export                             | Section         |
| ---------------------------------- | --------------- |
| `greeting`                         | Hero / landing  |
| `socialMediaLinks`                 | Footer, Contact |
| `skills`                           | Home — Skills   |
| `degrees`, `certifications`        | Education       |
| `experience`                       | Experience      |
| `projects`                         | Projects        |
| `contactSection`, `addressSection` | Contact         |

---

## Images

All images referenced in `lib/portfolio.ts` must be placed in `public/images/`. Next.js's `<Image>` component will handle optimization automatically.

---

## Contact Form

The `/api/contact` route validates incoming submissions with Zod and currently logs the payload. To send real emails, integrate a mail provider in `app/api/contact/route.ts`.

**Example using [Resend](https://resend.com):**

```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "portfolio@yourdomain.com",
  to: "you@yourdomain.com",
  subject: data.subject,
  text: data.message,
});
```

Set `RESEND_API_KEY` as an environment variable in your deployment (see [Deployment](#deployment)).

---

## Deployment

The recommended platform is [Vercel](https://vercel.com), which detects Next.js automatically.

1. Push `migrate/nextjs` to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Set the root directory to `.`
4. Add any required environment variables (e.g. `RESEND_API_KEY`)
5. Click **Deploy** — Vercel generates a preview URL for every PR
6. Merge to `main` to publish to your production domain

---

## Accessibility & Quality

- Full keyboard navigation with visible focus rings
- ARIA labels on all icon-only interactive elements
- `aria-current="page"` on active nav links
- Form fields have associated labels and inline error descriptions

---

## Migration Notes

This branch is a complete rewrite from the original Create React App v1 codebase.

### Architecture

|                     | Before (CRA v1)               | After (Next.js 15)               |
| ------------------- | ----------------------------- | -------------------------------- |
| **Framework**       | React 16.10, CRA              | React 19, Next.js 15 App Router  |
| **Language**        | JavaScript                    | TypeScript (strict)              |
| **Routing**         | HashRouter                    | File-based App Router            |
| **Styling**         | styled-components + CSS files | Tailwind CSS                     |
| **SEO**             | react-helmet                  | Next.js Metadata API             |
| **Icons**           | Font Awesome                  | lucide-react (SVG)               |
| **Data**            | Apollo GraphQL                | Static JSON / `lib/portfolio.ts` |
| **UI primitives**   | baseui Accordion              | Custom Tailwind components       |
| **Animations**      | react-reveal / react-spring   | Framer Motion                    |
| **Package manager** | npm                           | pnpm 10                          |
| **CI/CD**           | None                          | GitHub Actions                   |

### Routes

| Old (CRA HashRouter) | New (Next.js)                         |
| -------------------- | ------------------------------------- |
| `/#/` or `/home`     | `/`                                   |
| `/experience`        | `/experience`                         |
| `/education`         | `/education`                          |
| `/projects`          | `/projects`                           |
| `/opensource`        | `/opensource`                         |
| `/contact`           | `/contact`                            |
| `/splash`            | Removed — use `loading.tsx` if needed |

Old hash-based URLs (`/#/experience`) are no longer supported. Add redirects in `next.config.ts` if you need backward compatibility.

### Asset Migration

- **Images:** Move from `src/assests/images/` → `public/images/`
- **SVGs:** Inline SVGs removed; reference files from `/images/` instead
- **Fonts:** Now loaded via `next/font/google` (Inter) and `lucide-react`

### Limitations

1. Contact form requires a mail provider integration before it sends emails
2. Real-time GitHub contribution stats were removed (can be re-added via GitHub REST API)

---

## License

[MIT](LICENSE) © [TiDev00](https://github.com/TiDev00)
