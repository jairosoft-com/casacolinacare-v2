# Implementation Plan: Wire up pillar 'more' links to their sections

**Story ID:** #209472
**Feature:** none (standalone story)
**Date:** 2026-07-29
**State:** New  |  **Points:** 2

---

## Story Summary

**Narrative:**
As a website visitor, I want the pillar "more" links (Personal plans, Real food, Quiet grounds) to actually navigate to the relevant section, so that I can jump straight to care details or home photos instead of clicking dead text.

**Acceptance Criteria:**
1. Given the Pillars section, when I click "Read about care →" under Personal plans, then the page smooth-scrolls to #care-levels.
2. Given the Pillars section, when I click "A day at the home →" under Real food, then the page smooth-scrolls to #place.
3. Given the Pillars section, when I click "See the home →" under Quiet grounds, then the page smooth-scrolls to #place.
4. Given the Pillars section, when I view the 24/7 presence pillar, then "Meet the team →" remains plain text (unchanged, no link, matching the design).

---

## Scope

What this plan covers:
- Wrap 3 of 4 pillar "more" texts in `SmoothLink` (Personal plans → `#care-levels`, Real food → `#place`, Quiet grounds → `#place`).
- Add `.pillar .more a` / `:hover` CSS so the new links inherit the existing terracotta color/no-underline and get the design's hover-opacity affordance.

What this plan does NOT cover:
- Pillar ii ("24/7 presence" / "Meet the team →") stays plain text — no link in the design, AC4 explicitly requires no change here.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:138,144,150,156` | The 4 pillar `.more` divs — 3 of 4 need their text wrapped in `SmoothLink` |
| `app/globals.css:139` | `.pillar .more` rule — needs sibling `.pillar .more a` / `:hover` rules added (currently absent since no links existed yet) |

`SmoothLink` (`app/components/SmoothLink.tsx`) is already imported in `page.tsx` and used elsewhere (nav, hero, CTAs) — no new import needed.

---

## Approach

1. In `app/page.tsx`, wrap "Read about care →" (line 138) in `<SmoothLink href="#care-levels">`.
2. Leave "Meet the team →" (line 144) untouched.
3. Wrap "A day at the home →" (line 150) in `<SmoothLink href="#place">`.
4. Wrap "See the home →" (line 156) in `<SmoothLink href="#place">`.
5. In `app/globals.css`, add after line 139:
   `.pillar .more a{color:inherit;text-decoration:none;transition:opacity .2s}`
   `.pillar .more a:hover{opacity:.65}`
6. Run `bun run dev`, click each of the 3 new links, confirm scroll target; confirm pillar ii is unchanged (still plain text, not clickable).
7. Run Test Case #209525 (already filed, Tests link) to confirm all 4 ACs.

Key decisions and trade-offs:
- Use `SmoothLink` (not a plain `<a>`) for consistency with every other in-page anchor on this site (nav, hero CTAs, mosaic "Schedule a private visit").

---

## Dependencies

No external dependencies. Sibling stories #209468 (merged), #209478, #209484, #209491 touch different, non-overlapping parts of `app/page.tsx`.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-209472-1: Personal plans → #care-levels | E2E (Playwright) | Given pillars section, when "Read about care →" is clicked, then page scrolls to #care-levels |
| AC-209472-2: Real food → #place | E2E (Playwright) | Given pillars section, when "A day at the home →" is clicked, then page scrolls to #place |
| AC-209472-3: Quiet grounds → #place | E2E (Playwright) | Given pillars section, when "See the home →" is clicked, then page scrolls to #place |
| AC-209472-4: 24/7 presence unchanged | Visual / E2E | Given pillars section, then "Meet the team →" is plain text, not a link |

Test Case #209525 (ADO, linked via Tests) codifies these four checks manually.

---

## Open Questions

No open questions.
