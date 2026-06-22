# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## This is NOT the Next.js you know

Next.js **16.2.9** has breaking changes — APIs, conventions, and file structure may differ from your training data. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.

## Package manager

This project uses **bun**. Always use `bun` / `bunx`, never `npm` / `npx` / `yarn`.

## Commands

```bash
bun run dev          # dev server on :3000 (Turbopack)
bun run build        # production build
bun run lint         # ESLint
bun run test:e2e     # Playwright e2e suite (Chromium; auto-starts dev server if needed)
bun run test:e2e -- -g "207038"   # run a single test by title substring
bunx playwright show-report       # open last HTML test report
```

Save all screenshots (playwright-cli or test captures) into the `screenshots/` subfolder:
```bash
playwright-cli screenshot --filename=screenshots/my-capture.png
```

## Architecture

Single-page marketing site (Casa Colina Care, Hawaiʻi Kai). No routing beyond `/`.

| File | Role |
|------|------|
| `app/layout.tsx` | Fraunces + Inter fonts via `next/font/google`, page `<html>` shell, site metadata |
| `app/page.tsx` | Entire page as one `'use client'` component — nav, hero, story, pillars, mosaic, testimonial carousel, care levels, credentials, visit CTA, footer |
| `app/globals.css` | All styles. No CSS modules. Single file with section-scoped class names (`.nav`, `.hero`, `.strip`, `.pillar`, `.care-row`, `.visit`, etc.) |
| `tests/bugs.spec.ts` | Playwright regression spec — 8 red tests (ADO 207036–207043), one per known bug. All fail on unfixed code and turn green as bugs are resolved. |
| `playwright.config.ts` | Chromium only; `baseURL http://localhost:3000`; `reuseExistingServer: true` |
| `next.config.ts` | Turbopack root pinned to `__dirname` to avoid picking up a parent lockfile |
| `public/assets/` | Local images (home photos, caregiver shots) |
| `claude_design/` | Hi-fi design files (source of truth for the Lanai design) |

### Key behaviors in `app/page.tsx`
- **Smooth-scroll nav**: `handleAnchorClick` calls `window.scrollTo({ top: el.offsetTop - 70 })` and `e.preventDefault()`. It does **not** update `location.hash` (tracked as bug ADO 207038).
- **Testimonial carousel**: `useState` + `setInterval` at 7500 ms; fade transition via `opacity`.
- **Reveal animations**: `IntersectionObserver` adds `.in` to `.reveal` elements on scroll; also fires a 1500 ms fallback for above-the-fold elements.
- **Ken Burns hero**: CSS animation `kenburns` on `.hero-img`, 22 s infinite alternate.

## Known gotchas

**Turbopack CSS hot-reload**: After starting `bun run dev`, a CSS file may not hot-reload until it is touched (re-saved) at least once. If style changes aren't reflecting, `touch app/globals.css`.

**Playwright browser install**: If running e2e tests on a fresh clone, run `bunx playwright install chromium` first. Browsers are cached in `~/Library/Caches/ms-playwright/`.
