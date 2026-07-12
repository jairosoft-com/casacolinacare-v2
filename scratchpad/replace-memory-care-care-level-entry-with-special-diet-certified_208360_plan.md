# Implementation Plan: Replace "Memory Care" care-level entry with "Special Diet Certified"

**Story ID:** #208360
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-13
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor researching Casa Colina's care levels, I want the care-level list to show "Special Diet Certified" (with an accurate description) instead of "Memory Care", So that I see the dietary-care service Casa Colina actually offers rather than an incorrect memory-care listing.

**Acceptance Criteria:**
1. Given a visitor views the "Levels of Care" section, When they read item ii's heading, Then it reads "Special Diet Certified" (not "Memory Care").
2. Given a visitor views item ii's description, When they read it, Then it reads: "Provide therapeutic or texture-modified diets. The PCP (Primary Care Physician) maintains signed orders, posts menus a month in advance, and strictly documents any food substitutions."

---

## Scope

What this plan covers:
- Replacing the item-ii heading text `Memory Care` → `Special Diet Certified` in the "Levels of Care" section.
- Replacing the item-ii description paragraph with the new dietary-care copy.

What this plan does NOT cover (deferred or out of scope):
- No structural, styling, or layout changes to `.care-row` — this is a text-only content fix.
- No change to the other three care-level rows (i, iii, iv).
- No update to `tests/bugs.spec.ts` — its one care-row assertion (`207040`) checks link count, not text, so it is unaffected.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:265` | `<h3>Memory Care</h3>` — the heading targeted by AC1 |
| `app/page.tsx:266` | `<p>A quiet, structured environment...</p>` — the description targeted by AC2 |
| `app/globals.css` (`.care-row`, `.num`, `.arrow`) | Existing styling for the row; confirmed text-only change, no selector/structural touch needed |
| `tests/bugs.spec.ts:59-64` (test `207040`) | Asserts `.care-row a[href]` link count = 4; not text-dependent, verified no conflict with this change |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:265` — change `<h3>Memory Care</h3>` to `<h3>Special Diet Certified</h3>`.
2. Edit `app/page.tsx:266` — replace the paragraph text with: "Provide therapeutic or texture-modified diets. The PCP (Primary Care Physician) maintains signed orders, posts menus a month in advance, and strictly documents any food substitutions."
3. Save and let Turbopack hot-reload; if the change doesn't reflect, touch `app/globals.css` per the project's known CSS hot-reload gotcha (not expected to be needed for a `.tsx` edit, but noted as a fallback).
4. Visually verify in a local dev-server browser check against ADO Test Case #208363's 3 steps.
5. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts` (specifically test `207040`).

Key decisions and trade-offs:
- Treated as a pure content swap, not a redesign — item ii keeps its existing position (`ii.`), arrow, and row structure; only the heading and paragraph text change.
- No copy softening or paraphrasing — AC text is used verbatim per the source screenshot annotation, since this is a corrections-style content story (same pattern as prior stories 208115/208123-208128).

---

## Dependencies

No external dependencies identified. No parent Feature linked (orphaned story, flagged as LOW during refine-story review — non-blocking).

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1: heading reads "Special Diet Certified" | Manual / Visual (E2E-eligible) | Given the homepage is loaded and scrolled to "Levels of Care", When item ii's heading is read, Then it displays "Special Diet Certified" exactly (covered by ADO Test Case #208363, step 2) |
| AC2: description reads the new dietary-care copy | Manual / Visual (E2E-eligible) | Given the homepage is loaded and scrolled to "Levels of Care", When item ii's description is read, Then it displays the exact new copy (covered by ADO Test Case #208363, step 3) |

---

## Open Questions

No open questions.
