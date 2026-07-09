---
name: project-casa-colina
description: Casa Colina Care v2 — Next.js 16 marketing site for a Hawaiʻi Kai residential care home; implemented from Claude Design hi-fi
metadata: 
  node_type: memory
  type: project
  originSessionId: fff978e9-5dba-4bdd-acb8-f1962f3654ab
---

# Casa Colina Care v2

**Stack:** Next.js 16.2.9, Tailwind v4 (`@tailwindcss/postcss`), Turbopack, Bun, TypeScript

**What it is:** Marketing/landing page for a six-bed residential care home in Hawai'i Kai, Honolulu. Implemented directly from a Claude Design hi-fi (`Casa Colina Care - Lanai Hi-Fi.html`). Design project ID: `019dbeb6-8ab7-7f00-b833-08e6fb634dc8`.

**Why:** Owner (Kriss) is building the site from scratch; this is the first page.

**How to apply:** Context for all styling/content decisions. The design is the single source of truth for the look and feel.

## Key implementation details

- `app/page.tsx` — `"use client"` — full landing page JSX (testimonial carousel via React state, scroll reveal via IntersectionObserver in useEffect)
- `app/globals.css` — raw design CSS + `@import "tailwindcss"` + `@theme inline` for font variable mapping
- `app/layout.tsx` — Fraunces (variable, italic, opsz axis) + Inter fonts via `next/font/google`
- `public/assets/` — placeholder directory; local images from the design project could not be downloaded (DesignSync truncates at 256 KB). User needs to copy them manually: `caregiver-resident.png`, `home-kokohead.jpg`, `home-living-room-wide.jpg`, `home-kitchen-island.jpg`, `home-lanai-chairs.jpg`, `home-bathroom-modern.jpg`, `home-dog-portrait.jpg`
- Hero uses Unsplash URL directly (no local copy needed)
- Design fonts: Fraunces serif (display sizes, opsz axis) + Inter sans

## Fraunces font config (required shape)

```ts
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],           // weight must be OMITTED (not an array) when axes is set
});
```

Specifying `weight: ["300","400","500"]` alongside `axes` throws a build error in Next.js 16.
