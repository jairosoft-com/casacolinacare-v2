# Implementation Plan: Restore hero tag pill badge styling to match Lanai design

**Story ID:** #209468
**Feature:** none (standalone story)
**Date:** 2026-07-29
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the hero's "A care home in Hawaiʻi Kai" tag to render as the floating pill badge from the Lanai design, so that the hero section matches the intended polished look instead of a plain text label.

**Acceptance Criteria:**
1. `.hero-tag` has background `rgba(26,22,18,0.42)`, `backdrop-filter: blur(8px)`, `border: 1px solid rgba(255,255,255,0.22)`, `border-radius: 999px`, padding `9px 18px`.
2. `.hero-tag` is positioned `top: 104px` with `z-index: 3` (up from `top: 34px`, no z-index).
3. Existing dot indicator and text content are unchanged.

---

## Scope

What this plan covers:
- CSS-only update to the `.hero-tag` rule in `app/globals.css` (background, blur, border, radius, padding, position, z-index).

What this plan does NOT cover (deferred or out of scope):
- No JSX/markup changes — `app/page.tsx`'s `.hero-tag` markup (dot + text) stays exactly as-is per AC3.
- Okina restoration ("Hawaiʻi" spelling) and hero-headline line-break — explicitly out of scope for this story batch (see prior stories 208589 and 208447/208370, which already made deliberate decisions on those exact points).

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/globals.css:99-100` | `.hero-tag` and `.hero-tag .dot` rules — the only edit target for this story |
| `app/page.tsx:49-51` | `.hero-tag` JSX markup (dot span + text) — read-only reference, confirms AC3 (no markup change needed) |

*No new files or components needed — this is a single CSS rule update.*

---

## Approach

1. Open `app/globals.css` and locate the `.hero-tag` rule (line 99).
2. Add `background: rgba(26,22,18,0.42)`, `backdrop-filter: blur(8px)`, `border: 1px solid rgba(255,255,255,0.22)`, `border-radius: 999px`, `padding: 9px 18px`.
3. Change `top: 34px` → `top: 104px`; add `z-index: 3`.
4. Leave `.hero-tag .dot` (line 100) and all of `app/page.tsx`'s hero-tag JSX untouched.
5. Run `bun run dev`, touch `app/globals.css` if Turbopack doesn't hot-reload (known gotcha, see `AGENTS.md`), and visually confirm the tag renders as a floating pill below the nav instead of a plain corner label.
6. Run Test Case #209505 (already filed in ADO, `Tests` link to this story) manually or via the Playwright spec once generated, to confirm all 3 ACs.

Key decisions and trade-offs:
- Pure CSS change, no component logic touched — lowest-risk implementation for this batch.
- `z-index: 3` is needed because the pill will visually sit near/overlapping the sticky nav (`z-index: 50`) and hero content; 3 is enough to lift it above the hero image/overlay without competing with the nav.

---

## Dependencies

No external dependencies identified. Sibling stories #209472/#209478/#209484/#209491 (same Lanai design-fidelity batch) touch different, non-overlapping parts of `app/page.tsx` and can be implemented independently and in any order.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-209468-1: pill background/blur/border/radius/padding | E2E (Playwright) | Given the homepage loads, when the hero-tag is inspected, then its computed style matches background/blur/border/radius/padding values |
| AC-209468-2: position top:104px, z-index:3 | E2E (Playwright) | Given the homepage loads, when the hero-tag is inspected, then computed `top` is 104px and `z-index` is 3 |
| AC-209468-3: dot + text unchanged | Visual / E2E (Playwright) | Given the homepage loads, when the hero section is viewed, then the dot indicator and "A care home in Hawaiʻi Kai" text render unchanged inside the new pill |

Test Case #209505 (ADO, linked via Tests) already codifies these three checks manually; a Playwright spec can be generated from it once this story is implemented (see `/jx-qa:generate` follow-up).

---

## Open Questions

No open questions — ACs specify exact CSS values, and the sibling design-fidelity stories confirm the scope boundaries.
