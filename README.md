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

| Category        | Details                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| **Routing**     | Next.js 15 App Router — file-based, zero config                         |
| **Type safety** | TypeScript strict mode throughout                                       |
| **Styling**     | Tailwind CSS v3 with custom HSL design tokens, dark/light mode          |
| **Components**  | Radix UI & Headless UI for accessible primitives                        |
| **Animations**  | Framer Motion — smooth, performant transitions                          |
| **Forms**       | React Hook Form + Zod validation with live field-level errors           |
| **Email**       | Contact form backed by Web3Forms with HTML sanitization (server-side)   |
| **Theming**     | Dark/light mode via `next-themes`, no flash on load                     |
| **State**       | Jotai for atomic state, TanStack Query for async data                   |
| **MDX**         | `next-mdx-remote` for markdown/MDX content support                      |
| **PWA**         | Web app manifest, theme-color, full icon set                            |
| **CI/CD**       | GitHub Actions — zero-warning lint, format check, type-check, and build |
| **Git hooks**   | Husky + lint-staged: auto-fix on commit, type-check enforced pre-commit |

---

## Getting Started

**Prerequisites:** Node.js 20+ and pnpm 9+.

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

| Script              | Description                               |
| ------------------- | ----------------------------------------- |
| `pnpm dev`          | Start dev server at `localhost:3000`      |
| `pnpm build`        | Production build                          |
| `pnpm start`        | Serve the production build locally        |
| `pnpm lint`         | Lint with ESLint (zero warnings enforced) |
| `pnpm type-check`   | Run `tsc --noEmit` type checking          |
| `pnpm format`       | Format all files with Prettier            |
| `pnpm format:check` | Check formatting without writing          |

---

## Project Structure

```
.
├── app/                  # Next.js App Router — pages, layouts, API routes
│   ├── api/github/       # Pinned repos proxy route (ISR, revalidates every 1h)
│   ├── manifest.ts       # PWA web app manifest
│   └── globals.css       # Design tokens (HSL CSS variables, dark mode)
├── components/
│   ├── sections/         # Page sections: Hero, Skills, Experience, Education,
│   │                     #   Projects, Research, Opensource, Contact
│   ├── shared/           # SectionHeader, SocialMedia
│   └── ui/               # Button, Modal, Nav, Footer, ThemeToggle
├── lib/
│   ├── portfolio.ts      # All portfolio content (single source of truth)
│   ├── github.ts         # GitHub GraphQL API — fetch pinned repos (ISR, 1h)
│   ├── types.ts          # Shared TypeScript interfaces
│   └── utils.ts          # cn() helper, formatDate()
├── public/               # Static assets — favicons, images, manifest icons
├── types/                # Global TypeScript declarations
├── .husky/               # Git hooks (pre-commit: lint-staged + type-check)
└── .github/              # CI/CD workflow definitions
```

---

## Customizing Content

All portfolio data lives in a single file: [`lib/portfolio.ts`](lib/portfolio.ts). Edit the named exports to update each section of the site.

| Export                             | Section                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `seo`                              | Metadata, OpenGraph, Twitter card                                                           |
| `greeting`                         | Hero — name, subtitle, resume link                                                          |
| `socialMediaLinks`                 | Footer, Contact — icon resolved from `lucide-react` by name                                 |
| `skills`                           | Home — skill cards with tech chips and bullet points                                        |
| `competitiveSites`                 | Education — learning platform links                                                         |
| `degrees`                          | Education — academic degrees                                                                |
| `certifications`                   | Education — professional certifications                                                     |
| `experience`                       | Experience — work history and internships                                                   |
| `volunteerships`                   | Open Source — community involvement                                                         |
| `projects`                         | Projects — **fallback** cards (live data comes from GitHub pinned repos via `GITHUB_TOKEN`) |
| `research`                         | Research — publications with paper/code links                                               |
| `contactSection`, `addressSection` | Contact — form header and location                                                          |

### Adding a social link icon

`socialMediaLinks` resolves icons dynamically from `lucide-react` using the `iconClass` field. Set it to any PascalCase export name from lucide (e.g. `"Github"`, `"Linkedin"`, `"Twitter"`, `"FileText"`).

---

## Images

All images referenced in `lib/portfolio.ts` must be placed in `public/images/`. Next.js's `<Image>` component handles optimization (AVIF/WebP) automatically. Remote images from `github.com` and `avatars.githubusercontent.com` are also allowed via `next.config.ts`.

---

## Contact Form

The contact form at `/contact` validates submissions on the client with Zod and posts directly to Web3Forms' API endpoint from the browser. The form includes the hCaptcha token and the configured access key in the JSON body so Web3Forms can validate and deliver the message. HTML output is sanitized before sending.

Set the following environment variables to enable email delivery:

| Variable                           | Description                                                                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key used client-side when the form posts directly to Web3Forms. Set this in Vercel or `.env.local` for local dev.                            |
| `NEXT_PUBLIC_HCAPTCHA_SITEKEY`     | hCaptcha site key used by the client HCaptcha widget. For the free Web3Forms integration you can use the shared site key; set this in Vercel or `.env.local`. |
| `GITHUB_TOKEN`                     | GitHub personal access token                                                                                                                                  |
| `GITHUB_USERNAME`                  | Your GitHub username (used for the pinned repos query)                                                                                                        |

### hCaptcha (React integration)

This project uses the React-controlled integration via `@hcaptcha/react-hcaptcha` so the captcha lifecycle is managed inside the `Contact` component. The code is implemented in `components/sections/Contact/Contact.tsx` and posts the form directly to Web3Forms' REST API.

1. Install the package (if you haven't already):

```bash
pnpm add @hcaptcha/react-hcaptcha
```

2. Site key: set `NEXT_PUBLIC_HCAPTCHA_SITEKEY` to your hCaptcha site key.

3. How it works in this repo:

- The `Contact` form uses `react-hook-form`. When the HCaptcha `onVerify` callback fires, the token is saved into the form state with `setValue('hCaptchaToken', token)`.
- On submit the token is read from the form data and included in the JSON body under the `h-captcha-response` property (Web3Forms expects that key).
- The `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is included in the same POST body for the current client-side flow.
- On successful submission the HCaptcha widget is reset via a `ref` so users can submit again if needed.

---

## Deployment

The recommended platform is [Vercel](https://vercel.com), which detects Next.js automatically. The build output is configured as `standalone` in `next.config.ts`, which is also suitable for self-hosted Docker deployments.

1. Push `migrate/nextjs` to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Set the root directory to `.`
4. Add environment variables in the Vercel project settings:

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — client-side access key (current default)
- `NEXT_PUBLIC_HCAPTCHA_SITEKEY` — hCaptcha site key for the client widget
- (optional, recommended for production) `WEB3FORMS_ACCESS_KEY` — server-side secret if you implement a proxy

5. Click **Deploy** — Vercel generates a preview URL for every PR

---

## Accessibility & Quality

- Full keyboard navigation with visible focus rings via `:focus-visible`
- ARIA labels on all icon-only interactive elements
- `aria-current="page"` on active nav links
- Form fields have associated labels, `aria-invalid`, and inline `role="alert"` error descriptions
- Mobile nav is animated with Framer Motion and toggles `aria-expanded`
- Theme toggle avoids hydration mismatch with a mounted guard

---

## Migration Notes

This branch is a complete rewrite from the original Create React App v1 codebase.

### Architecture

|                     | Before (CRA v1)               | After (Next.js 15)                                                  |
| ------------------- | ----------------------------- | ------------------------------------------------------------------- |
| **Framework**       | React 16.10, CRA              | React 19, Next.js 15 App Router                                     |
| **Language**        | JavaScript                    | TypeScript (strict)                                                 |
| **Routing**         | HashRouter                    | File-based App Router                                               |
| **Styling**         | styled-components + CSS files | Tailwind CSS v3 with HSL tokens                                     |
| **SEO**             | react-helmet                  | Next.js Metadata API + `manifest.ts`                                |
| **Icons**           | Font Awesome                  | lucide-react (SVG, tree-shaken)                                     |
| **Data**            | Apollo GraphQL                | Static `lib/portfolio.ts` + GitHub GraphQL API (`@octokit/graphql`) |
| **Email**           | None                          | Web3Forms via `/api/contact`                                        |
| **UI primitives**   | baseui Accordion              | Radix UI + Headless UI                                              |
| **Animations**      | react-reveal / react-spring   | Framer Motion                                                       |
| **Package manager** | npm                           | pnpm 9                                                              |
| **CI/CD**           | None                          | GitHub Actions                                                      |
| **Git hooks**       | None                          | Husky + lint-staged                                                 |

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
| _(new)_              | `/research`                           |

Old hash-based URLs (`/#/experience`) are no longer supported. Add redirects in `next.config.ts` if you need backward compatibility.

### Asset Migration

- **Images:** Move from `src/assests/images/` → `public/images/`
- **SVGs:** Inline SVGs removed; reference files from `/images/` instead
- **Fonts:** Now loaded via `next/font/google` (Inter) and `lucide-react`

### Known Limitations

1. Contact form requires an access key to deliver emails. By default the project posts directly to Web3Forms using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (client-side). For a secret server-side key, implement the optional server proxy and use `WEB3FORMS_ACCESS_KEY` instead.
2. GitHub pinned repos (`/projects`) require `GITHUB_TOKEN` and `GITHUB_USERNAME` env vars; missing vars cause the page to render an empty list

---

## License

[MIT](LICENSE) © [TiDev00](https://github.com/TiDev00)
