# Implementation Plan: Update Respite & Short-Stay description to specify two-week minimum stay

**Story ID:** #208364
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-13
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor considering respite care, I want the Respite & Short-Stay description to state a minimum stay of two weeks (instead of "from a weekend to a few weeks"), So that I have accurate expectations about the minimum length of a respite stay before contacting Casa Colina.

**Acceptance Criteria:**
1. Given a visitor views the "Levels of Care" section, When they read item iii's description, Then it reads "Short-term stays with a minimum stay of two weeks — so family caregivers can rest, travel, or recover." (not "Short-term stays — from a weekend to a few weeks — so family caregivers can rest, travel, or recover.")

---

## Scope

What this plan covers:
- Replacing the item-iii description paragraph's leading clause with the new two-week-minimum copy.

What this plan does NOT cover (deferred or out of scope):
- No change to the item-iii heading ("Respite & Short-Stay" stays as-is).
- No structural, styling, or layout changes to `.care-row`.
- No change to the other three care-level rows (i, ii, iv) — story #208360's "Special Diet Certified" change (item ii) is separate and already merged to `main`.
- No update to `tests/bugs.spec.ts` — its one care-row assertion (`207040`) checks link count, not text, so it is unaffected.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:272` | `<p>Short-term stays — from a weekend to a few weeks — so family caregivers can rest, travel, or recover.</p>` — the description targeted by AC1 |
| `app/globals.css` (`.care-row`, `.num`, `.arrow`) | Existing styling for the row; confirmed text-only change, no selector/structural touch needed |
| `tests/bugs.spec.ts:59-64` (test `207040`) | Asserts `.care-row a[href]` link count = 4; not text-dependent, verified no conflict with this change |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:272` — replace the paragraph text with: "Short-term stays with a minimum stay of two weeks — so family caregivers can rest, travel, or recover."
2. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if the change doesn't reflect (known project gotcha, not expected for a `.tsx`-only edit).
3. Visually verify against ADO Test Case #208366's 2 steps.
4. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts` (specifically test `207040`).

Key decisions and trade-offs:
- Pure content swap — only the leading clause of the paragraph changes; the trailing " — so family caregivers can rest, travel, or recover." clause is preserved verbatim to keep the sentence grammatical.
- No copy softening or paraphrasing — AC text is used verbatim per the source screenshot annotation, consistent with the corrections-style pattern used for story #208360 and the earlier 208115/208123-208128 batch.

---

## Dependencies

No external dependencies identified. No parent Feature linked (orphaned story, flagged as LOW during refine-story review — non-blocking).

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1: description reads the new two-week-minimum copy | Manual / Visual (E2E-eligible) | Given the homepage is loaded and scrolled to "Levels of Care", When item iii's description is read, Then it displays the exact new copy (covered by ADO Test Case #208366, step 2) |

---

## Open Questions

No open questions.
