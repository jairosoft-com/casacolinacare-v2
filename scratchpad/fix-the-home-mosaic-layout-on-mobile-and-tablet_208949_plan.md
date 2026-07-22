# Implementation Plan: Fix "The Home" mosaic layout on mobile and tablet

**Story ID:** #208949
**Feature:** none — orphaned story, no parent Feature
**Date:** 2026-07-22
**State:** New  |  **Points:** 2

---

## Story Summary

**Narrative:**
As a website visitor on a phone or tablet, I want "The Home" mosaic section's six photos to render in a proportional, non-cramped layout, So that the gallery reads as an intentional showcase of the home instead of a broken grid.

**Acceptance Criteria:**
1. Given a visitor views "The Home" section at a mobile viewport (390px wide), When the mosaic renders, Then the six photos stack in a single column at full container width, with no image overlapping another and no disproportionate aspect-ratio distortion beyond the site's standard `object-fit: cover`.
2. Given a visitor views "The Home" section at a tablet viewport (768px wide), When the mosaic renders, Then neither the mosaic container nor any image overflows or clips at the viewport edge — the mosaic's bounding box stays within `.wrap`'s width.
3. Given a visitor views "The Home" section at desktop widths (≥1320px), When the mosaic renders, Then the existing 12-column grid layout is unchanged from current production (no regression).

---

## Scope

What this plan covers:
- Add a mobile responsive breakpoint for `.mosaic` in `app/globals.css` so the six photos stack in a single full-width column below ~860px, instead of staying in the fixed 12-column/120px-row desktop grid.
- Refactor the six mosaic tiles' grid placement in `app/page.tsx` from inline `style={{gridColumn, gridRow}}` to dedicated CSS classes, since inline styles override any media query and would otherwise make the breakpoint a no-op.
- Verify desktop (≥1320px) layout is pixel-for-pixel unchanged (AC-3 regression guard).

What this plan does NOT cover (deferred or out of scope):
- `.place-head`'s mobile layout (the "THE HOME" eyebrow + heading grid) isn't gated by any AC, but is visibly broken at 390px in the current screenshots (large dead gap next to a many-line-wrapped heading). Flagged as an open question below — may be worth fixing in the same PR even though not strictly required.
- Tablet's literal "overflow/clipping" condition (AC-2) already passes on unfixed code per the spec run this session — this plan does not need to change tablet behavior, only confirm it stays passing after the mobile fix.
- No changes to image assets, alt text, or captions.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/globals.css:147-151` | `.mosaic`/`.mosaic-img`/`.mosaic-cap` — the grid and tile rules that need a mobile breakpoint. |
| `app/globals.css:144-146` | `.place-head` — the eyebrow+heading grid above the mosaic; not AC-gated but visibly broken on mobile (see Open Questions). |
| `app/globals.css:74-81`, `:165-168` | Existing `@media (max-width: 860px)` (nav) and `@media (max-width: 900px)` (testimonial) breakpoints — precedent to match for consistency (breakpoint value, placement in file). |
| `app/page.tsx:169-230` | The six `.mosaic-img` divs with inline `gridColumn`/`gridRow` styles per image — must move to CSS classes for the breakpoint to have any effect (see Approach step 1). |
| `tests/the-home-mosaic-renders-correctly-across-mobile-tablet-and-desktop.spec.ts` | Regression spec for Test Case #208951, written ahead of implementation. Mobile-stacking test currently red (real bug); tablet-overflow and desktop-regression tests already green today (regression guards, not red-before-fix). |

---

## Approach

1. Move the six mosaic tiles' grid placement from inline `style={{gridColumn, gridRow}}` in `app/page.tsx` to six dedicated CSS classes (e.g. `.mosaic-img-1` … `.mosaic-img-6`) defined in `app/globals.css`, each carrying the same `grid-column`/`grid-row` values currently inline. **This step is required, not optional** — inline styles win over any stylesheet rule regardless of specificity or media query, so a breakpoint added while these stay inline will silently have no effect.
2. Add a `@media (max-width: 860px)` block (matching the nav's existing breakpoint value) that sets `.mosaic{grid-template-columns:1fr;grid-auto-rows:auto}` and each `.mosaic-img-N{grid-column:1/-1;grid-row:auto}`, plus a fixed height or `aspect-ratio` per tile so images don't collapse to zero height once the fixed 120px row height no longer applies.
3. In the same breakpoint (or a separate one, see Open Questions), adjust `.place-head` from `grid-template-columns:auto 1fr;align-items:end` to a stacked single-column layout so the eyebrow label doesn't leave a large dead gap beside a many-line-wrapped heading.
4. Run the existing spec (`tests/the-home-mosaic-renders-correctly-across-mobile-tablet-and-desktop.spec.ts`) plus a manual visual check at 390px/768px/1440px to confirm AC-1 goes green and AC-2/AC-3 stay green.
5. Re-run `tests/bugs.spec.ts` at the mobile viewport to confirm this change doesn't reintroduce the already-known, unrelated #207036 nav-overflow regression in the same viewport neighborhood.

Key decisions and trade-offs:
- The inline-style specificity issue is the reason a naive "just add a media query" fix would appear to do nothing — call this out explicitly during implementation so it isn't rediscovered the hard way.
- Tile height at the mobile breakpoint (fixed px vs. `aspect-ratio`) isn't specified by any AC beyond "no disproportionate distortion" — implementer's call, see Open Questions.

---

## Dependencies

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-1: mobile single-column stacking | E2E (Playwright) | `tests/the-home-mosaic-renders-correctly-across-mobile-tablet-and-desktop.spec.ts`'s first test asserts each `.mosaic-img` width is ≥95% of `.mosaic`'s width and no vertical overlap between tiles at 390px — currently **failing** (165.6px vs. required >279.3px). |
| AC-2: tablet no overflow/clipping | E2E (Playwright) | Same spec's second test asserts `.mosaic`'s bounding box and `document.scrollWidth` stay within 768px — currently **passing** on unfixed code; keep green after the fix. |
| AC-3: desktop unchanged | E2E (Playwright) | Same spec's third test asserts the first two mosaic tiles remain horizontally adjacent (not stacked) at 1440px — currently **passing**; keep green after the fix. |

---

## Open Questions

1. Should `.place-head`'s broken mobile spacing (eyebrow + heading) be fixed in this same story, or split into a separate follow-up? It isn't gated by any AC, but it's visibly part of the same "this section looks broken on mobile" complaint.
2. What height or aspect-ratio should each stacked mobile tile use? AC-1 only requires "no disproportionate distortion" — needs a concrete value picked during implementation (e.g. a fixed height like 280px, or `aspect-ratio: 4/3`).
