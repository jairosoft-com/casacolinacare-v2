# Implementation Plan: Simplify testimonial signature to "Kriss"

**Story ID:** #208871
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-22
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the testimonial section to refer to the administrator simply as "Kriss" rather than "Marikriss", So that it matches her name as shown in the finalized Lanai Hi-Fi design.

**Acceptance Criteria:**
1. Given a visitor views the testimonial section, When the intro line loads, Then it reads "Hi there! I'm Kriss Aseniero, Registered Nurse and the administrator of Casa Colina Care." — not "Marikriss Aseniero".
2. Given a visitor views the testimonial section, When the signature loads, Then it reads "♡ Kriss" — not "♡ Marikriss".

---

## Scope

What this plan covers:
- Changing "Marikriss" to "Kriss" in the testimonial intro paragraph (`app/components/TestimonialSection.tsx:10`).
- Changing "Marikriss" to "Kriss" in the testimonial signature/citation (`app/components/TestimonialSection.tsx:16`).
- Fixing the existing responsive-design spec's locator that still targets the old text.

What this plan does NOT cover (deferred or out of scope):
- No change to any other testimonial copy (career history, philosophy paragraphs, etc.) — only the two instances of the name change.
- No change to the testimonial photo, layout, or CSS.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/components/TestimonialSection.tsx:10` | Intro paragraph — "Marikriss Aseniero" → "Kriss Aseniero" |
| `app/components/TestimonialSection.tsx:16` | Signature `<cite>` — "♡ Marikriss" → "♡ Kriss" |
| `tests/testimonial-section-shows-the-founder-story-design-and-stays-responsive.spec.ts:20` | Uses `page.getByText('♡ Marikriss')` — **will break** once the signature text changes; must be updated to `page.getByText('♡ Kriss')` |
| `tests/testimonial-section-shows-kriss-not-marikriss.spec.ts` | Already-written red test (Test Case #208877) asserting both target strings — should turn green once implemented; no changes needed to this file itself |

---

## Approach

1. Edit `app/components/TestimonialSection.tsx:10` — change "Marikriss Aseniero" to "Kriss Aseniero".
2. Edit `app/components/TestimonialSection.tsx:16` — change "♡ Marikriss" to "♡ Kriss".
3. Edit `tests/testimonial-section-shows-the-founder-story-design-and-stays-responsive.spec.ts:20` — update `page.getByText('♡ Marikriss')` to `page.getByText('♡ Kriss')`.
4. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if changes don't reflect (known project gotcha).
5. Run `bun run test:e2e` — confirm `testimonial-section-shows-kriss-not-marikriss.spec.ts` turns green, the updated responsive-design spec still passes, and no other spec regresses.

Key decisions and trade-offs:
- Text-only change in two spots — no structural or CSS edits needed.
- The responsive-design spec's locator fix is mandatory, not optional: leaving it pointed at "♡ Marikriss" would cause a real CI failure (distinct from the two already-existing ADO Test Cases #208851/#208369 that were deliberately left as stale historical records per an earlier decision — those don't run in this repo's CI).

---

## Dependencies

No external dependencies identified. Task #208874 (bootstrap task already created under this story) covers this same scope.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-208871-1: intro line reads "...Kriss Aseniero..." | E2E (Playwright) | Covered by `tests/testimonial-section-shows-kriss-not-marikriss.spec.ts` — asserts `.testi-body p` contains "Kriss Aseniero" and not "Marikriss" |
| AC-208871-2: signature reads "♡ Kriss" | E2E (Playwright) | Covered by the same spec — asserts `.testimonial cite` has exact text "♡ Kriss"; also re-validated by the updated responsive-design spec |

---

## Open Questions

No open questions — ACs specify exact text and the touchpoints are already confirmed in source.
