# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

1. Think before acting. Read existing files before writing code.
2. Be concise in output but thorough in reasoning.
3. Prefer editing over rewriting whole files.
4. Do not re-read files you have already read unless the file may have changed.
5. Test your code before declaring done.
6. No sycophantic openers or closing fluff.
7. Keep solutions simple and direct.
8. User instructions always override this file.
9. No hacer previsualizaciones con herramientas de preview a menos que el usuario lo pida explícitamente.
10. No mencionar pasos innecesarios como "voy a hacer esto" o "parece que no funciona, voy a intentar esto" — solo las palabras indispensables.

## Commands

```bash
npm run dev          # Dev server (Vite, port 5173)
npm run build        # Vite build → dist/
npm run build:seo    # Build + prerender (Puppeteer, requires Sanity)
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit (tsconfig.app.json)
```

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion. No tests.

**Routing:** `react-router-dom` v7, all routes defined in `src/App.tsx`. The app wraps each page in a `<ScrollReveal>` (Framer Motion `whileInView`) which means sections are invisible until scrolled into view.

**Pages & structure:**
- `src/pages/` — top-level pages (Home, About, Blog, Contact, Services)
- `src/pages/servicesPages/<service>/` — each service has its own folder with a `main<Service>.tsx` entry and subcomponents
- `src/components/General/` — shared: Navbar, Footer, Loader, ScrollReveal, InteractiveBackground

**Marketing Digital page** (`/servicios/marketing-digital`) is the most complex:
- `mainMktDigital.tsx` — composes sections in order
- `weprom/MetaSection.tsx` — simulated Meta/Instagram/TikTok ad carousel. Contains `ADS_DATABASE` array and `renderMetaAd()` dispatcher. Ad components: `SingleMediaAd`, `CarouselAd`, `SingleImageAd`, `InstagramCarouselAd`, `InstagramReelAd`, `TikTokCarouselAd`, `TikTokVideoAd`, `LinkedInAd`
- `weprom/utils.tsx` — shared `ImageWithFallback`, `ExpandableText`, `SocialActions`, `COLORS`, `FONTS`
- `weprom/ProjectResults.tsx` — Swiper coverflow carousel with client stats

**Blog:** Posts come from Sanity CMS (projectId `k3wb9a79`, dataset `production`). Queries in `src/lib/sanityQueries.ts`. Blog post content rendered with `@portabletext/react`.

**Deployment:** Static prerendering via Puppeteer (`prerender.js`) generates `.html` files for each route into `dist/`. Served on Vercel with HTML rewrites.

**Git remotes:** `upstream` = Jhosue900/figma-design (push target), `origin` = axelmtz443 fork. Always push to `upstream`.

**Assets:** All images/videos imported as ES modules from `src/images/`. Service page ad assets live in `src/images/mktdigital_meta/`.
