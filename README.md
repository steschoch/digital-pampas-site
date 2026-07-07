# Digital Pampas — Website

The marketing site for Digital Pampas, a B2B outbound infrastructure agency.
Built on top of the Digital Pampas Design System (`@digital-pampas/ds`) — tokens and
components. The site owns only page composition and copy, not visual primitives.

> **Stack:** React 18 · TypeScript · Vite · react-router-dom v7  
> **DS dependency:** `@digital-pampas/ds` via `file:../ds-digital-pampas`  
> **Local dev:** `http://localhost:5173`

---

## Run

```bash
# 1. Build the DS first (site imports the compiled output)
cd ../ds-digital-pampas && npm install && npm run build && cd ../website-digital-pampas

# 2. Install and run
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc -b + vite build
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (all 7 sections + footer) |
| `/cases` | Case Studies listing |
| `/blog` | Blog listing |

All routes are defined in `src/App.tsx`.

---

## Site architecture (7 sections)

The homepage flows through a deliberate conversion sequence built on the
Brand DNA and a two-round copy diagnosis:

```
01 · Nav             — 4 anchors + Case Studies + Blog + 1 CTA (Book a call)
02 · Hero            — promise + mechanism + proof metrics embedded
03 · The Problem     — pain identification; problem lands before the pitch
04 · What we don't do — honest filter (4 cards, coral accent)
05 · How we build it — 6 phases, scroll-driven progression
06 · Proof           — case studies + named testimonials, one section
07 · Ways to work    — 3 engagement models (visitor self-selects)
08 · Final CTA       — direct ask + real scarcity + risk reversal + form
09 · Footer          — dynamic year, portal link, low-commitment CTA band
```

**Progression logic:** Promise → Pain → Filter → Mechanism → Evidence → Fit → Action.
This sequence is designed for the B2B buyer at sophistication stage 4–5, who
dismisses aspiration and responds to specificity.

---

## Architecture

### Design System as sole visual source

The site imports everything visual from `@digital-pampas/ds`:

```ts
// src/main.tsx
import '@digital-pampas/ds/globals.css'   // all CSS tokens (3 layers)
import '@digital-pampas/ds/styles.css'    // component styles

// page files
import { Hero, HowWeBuildIt, Button, Card } from '@digital-pampas/ds'
```

No color value, spacing, or font is defined in this repo. If the brand changes,
the DS is updated — the site inherits automatically.

### Theme

Dark mode is the default (`data-color-scheme="dark"` on `<html>`). The `ThemeToggle`
component (from the DS) persists the user's choice in `localStorage` under key `dp-theme`.

### Scroll animation

`HowWeBuildIt` uses an `IntersectionObserver`-based scroll driver to advance the 6
process phases as the user scrolls. `prefers-reduced-motion` receives a static card
fallback — no animation fires, all phases visible at once.

---

## Project structure

```
website-digital-pampas/
├── src/
│   ├── App.tsx            # router + page assembly
│   ├── pages/             # HomePage, CasesPage, BlogPage
│   ├── styles/            # site-scoped CSS (layout only, never brand values)
│   └── data/              # static content (cases, blog posts)
├── public/                # static assets (og images, favicon)
└── package.json
```

---

## Key design decisions

**Copy in English.** The client operates internationally and sources leads from
English-speaking markets. The site reflects the product, not the founder's native language.

**Hero metrics embedded.** Process numbers (response rate, meetings booked, pipeline
built) anchor credibility from the first scroll — before any claim is made. Pattern
adopted from Stripe and Clay.

**"What we don't do" section.** An honest filter that eliminates the wrong-fit lead
before they schedule a call. Reduces wasted sales time and signals confidence.

**Scroll-driven process section.** Visitors read all 6 phases because they advance
passively with scroll — no click required. Tested against static accordions in the
UX audit.

---

## Relationship to other products

```
@digital-pampas/ds  ←  this repo imports
                        (tokens + components)

client-portal-digital-pampas  ←  linked in Footer (login link)
```

The footer contains a direct link to the client portal login. No shared state
between the two products — the link is the only coupling.
