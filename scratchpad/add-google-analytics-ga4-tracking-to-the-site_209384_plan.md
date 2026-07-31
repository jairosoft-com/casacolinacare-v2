# Implementation Plan: Add Google Analytics (GA4) tracking to the site

**Story ID:** #209384
**Feature:** none — orphaned story (no parent Feature linked in ADO)
**Date:** 2026-07-31
**State:** New  |  **Points:** 2

---

## Story Summary

**Narrative:**
Enabler: Integrate Google Analytics 4 (GA4) tracking into the Casa Colina Care marketing site so that visitor traffic and behavior can be measured to inform marketing decisions.

**Acceptance Criteria:**

System Behavior:
1. When any visitor loads the site's single page (`/`), the GA4 tag fires and sends a pageview event to the configured GA4 property.
2. When a user clicks the primary "Visit us" / contact CTA, a GA4 custom event (e.g. `cta_click`) is sent capturing which CTA was clicked.
3. When the GA4 script is blocked (ad blocker) or fails to load, the rest of the page continues to render and function normally — no console errors, no broken UI.

Rules:
4. The GA4 Measurement ID is provided via an environment variable (e.g. `NEXT_PUBLIC_GA_ID`), never hardcoded in source.
5. The GA4 script loads via Next.js's `next/script` component with the `afterInteractive` strategy so it doesn't block initial render or Core Web Vitals.
6. The GA4 Realtime report shows an active user when verified against a live/staging deployment.

**Scope decision (confirmed with user 2026-07-31):** AC2 tracks the sticky **nav** "Request a visit" CTA only. The site also has a hero "Request a consultation" CTA and a mosaic-section "Schedule a private visit" CTA (both also linking to `#visit`) — those are explicitly out of scope for this story. This matches the scope already encoded in ADO Test Case #209726 and `tests/ga4-tracking-fires-on-load-on-cta-click-and-degrades-gracefully.spec.ts`.

---

## Scope

What this plan covers:
- Loading the GA4 `gtag.js` bootstrap site-wide via `next/script` (`afterInteractive`), sourced from an env var.
- Firing a `cta_click` custom event when the nav "Request a visit" CTA is clicked.
- Graceful no-op behavior when GA4 is blocked/unavailable (ad blocker, env var unset).
- A `.env.example` documenting the required env var (no real ID committed).

What this plan does NOT cover (deferred or out of scope):
- Tracking the hero or mosaic CTAs (explicitly deferred per user decision above).
- Obtaining the real production GA4 Measurement ID (see Open Questions).
- Linking this story to a parent Feature (flagged as a LOW finding during refine; not blocking).

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/layout.tsx` | Root layout (server component) — correct place to mount the site-wide `next/script` gtag.js bootstrap per Next.js 16 docs ("Application Scripts" pattern). Currently has no script tags. |
| `app/page.tsx` | Client component (`'use client'`) containing the nav `SmoothLink` for "Request a visit" (line 21) — needs an `onClick` side effect added here to fire `cta_click`. |
| `app/components/SmoothLink.tsx` | Shared smooth-scroll anchor used by all nav/CTA links. Currently has no `onClick` prop — needs one added so callers can attach tracking without duplicating the scroll-hijack logic. |
| `app/lib/gtag.ts` *(new file)* | Proposed: a single `trackEvent(name, params)` helper that no-ops safely if `window.gtag` is undefined — centralizes the "GA4 might not be loaded" guard (AC3) instead of repeating the check at each call site. |
| `.env.example` *(new file)* | Documents `NEXT_PUBLIC_GA_ID` for local setup; `.env*` is already gitignored (confirmed), so no real ID is ever committed. |
| `tests/ga4-tracking-fires-on-load-on-cta-click-and-degrades-gracefully.spec.ts` | Already written (this session) — encodes AC1–AC3. AC1/AC2 are currently red; this implementation must turn them green without regressing AC3. |

*Confirmed via `node_modules/next/dist/docs/01-app/02-guides/scripts.md` (Next.js 16.2.9): `next/script` API and `afterInteractive` default strategy are unchanged from the general pattern — no version-specific deviation found.*

---

## Approach

1. **Env var scaffolding** — Add `.env.example` with `NEXT_PUBLIC_GA_ID=` (empty/placeholder) and a comment explaining it's the GA4 Measurement ID. Read it in `layout.tsx` via `process.env.NEXT_PUBLIC_GA_ID`.
2. **Mount gtag.js in `app/layout.tsx`** — Add two `next/script` tags with `strategy="afterInteractive"`: one loading `https://www.googletagmanager.com/gtag/js?id={gaId}`, one inline bootstrap script (`window.dataLayer = window.dataLayer || []; gtag('js', new Date()); gtag('config', gaId);`). **Skip rendering both tags entirely if `gaId` is falsy** — cleaner local dev, and doubles as part of the AC3 safety net.
3. **Add `app/lib/gtag.ts`** — export `trackEvent(name: string, params?: Record<string, unknown>)` that checks `typeof window !== 'undefined' && typeof window.gtag === 'function'` before calling `window.gtag('event', name, params)`; no-ops otherwise (ad blocker / script-blocked case).
4. **Extend `SmoothLink`** — add an optional `onClick?: () => void` prop, invoked inside the existing `handleClick` alongside (not replacing) the scroll/hash logic.
5. **Wire the nav CTA** — in `app/page.tsx`, pass `onClick={() => trackEvent('cta_click', { cta: 'nav_request_a_visit' })}` to the nav's "Request a visit" `SmoothLink` only.
6. **Local verification** — run `bun run test:e2e -- -g "GA4"` twice: once with a dummy `NEXT_PUBLIC_GA_ID` set (AC1/AC2 should go green) and once with it unset (AC3 must still hold, nothing should throw).
7. **Deployment verification (AC6)** — once a real Measurement ID is available, set it on the staging/live deployment and confirm an active user appears in the GA4 Realtime report. Manual step, not part of the automated suite.

Key decisions and trade-offs:
- Use the vanilla two-`<Script>` gtag.js snippet rather than adding a wrapper package (e.g. `@next/third-parties`) — avoids a new dependency for what's a two-script integration, consistent with this codebase's no-unnecessary-abstraction style.
- Centralize all custom-event calls through `trackEvent()` rather than inlining `window.gtag(...)` at each call site, so the ad-blocker guard (AC3) lives in exactly one place.
- Omitting the script tags entirely when the env var is unset (rather than rendering with an empty ID) keeps local dev console-clean and is itself a legitimate way to satisfy AC3 today, since there's nothing to fail to load.

---

## Dependencies

No external dependencies identified. Depends on ADO Test Case #209726 and its Playwright spec (already created this session) as the acceptance check for AC1–AC3.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1 — pageview fires on load | E2E (existing) | `tests/ga4-tracking-fires-on-load-on-cta-click-and-degrades-gracefully.spec.ts` — after `page.goto('/')`, `window.dataLayer.length > 0`. Currently red; must go green. |
| AC2 — CTA click sends custom event | E2E (existing) | Same spec — click nav "Request a visit", assert `dataLayer` grew by ≥1 entry. Currently red; must go green. |
| AC3 — graceful degradation | E2E (existing) | Same spec — block `googletagmanager.com`/`google-analytics.com`, reload, assert hero heading + CTA still visible and zero console errors. Already green; must stay green. |
| AC4 — env var, not hardcoded | Code review | Verify `layout.tsx` reads `process.env.NEXT_PUBLIC_GA_ID`; grep for any literal `G-XXXXXXX`-shaped string in source. Not Playwright-testable. |
| AC5 — `next/script`, `afterInteractive` | Code review | Verify both `<Script>` tags in `layout.tsx` specify `strategy="afterInteractive"`. Not Playwright-testable. |
| AC6 — GA4 Realtime shows active user | Manual, post-deploy | Set the real Measurement ID on staging/live, load the site, check the GA4 Realtime report for an active user. Not automatable locally. |

---

## Open Questions

1. **What is the actual GA4 Measurement ID for the production property?** — Needed before AC6 can be verified; development/local testing can proceed against a dummy ID (e.g. `G-TEST0000`) in the meantime. *(Marketing/client to provide.)*

*Resolved during planning:* which CTA(s) fire `cta_click` — confirmed nav "Request a visit" only (see Scope section above).
