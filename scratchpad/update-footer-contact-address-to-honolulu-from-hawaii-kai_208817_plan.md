# Implementation Plan: Update footer contact address to "Honolulu" (from "Hawaii Kai")

**Story ID:** #208817
**Feature:** none (orphaned story — no parent Feature linked)
**Date:** 2026-07-20
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor viewing the footer's "Speak with us" contact card, I want the address line to read "Honolulu · 96825" instead of "Hawaii Kai · 96825", So that the footer address matches the city name Casa Colina wants displayed there.

**Acceptance Criteria:**
1. Given a visitor scrolls to the site footer, When they read the "Speak with us" contact block, Then the address line displays "Honolulu · 96825" (not "Hawaii Kai · 96825").

---

## Scope

What this plan covers:
- Changing the single footer address line at `app/page.tsx:392` from `Hawaii Kai · 96825` to `Honolulu · 96825`.

What this plan does NOT cover (deferred or out of scope):
- The separate `.visit-card` address block in the VISIT/CTA section (`app/page.tsx:349-350`, "Hawaii Kai · Honolulu, HI 96825") — visually similar but a different element, not the one annotated in the source screenshot, and it already contains "Honolulu."
- Updating existing Test Case #208591 ("Site shows 'Hawaii Kai' without the okina everywhere"), which has a step asserting the old `"Hawaii Kai · 96825"` footer text and will go stale once this ships — flagged for manual follow-up, not touched here.
- No other file in `app/` contains the string `Hawaii Kai · 96825` (confirmed via repo-wide grep) — this is a single-line, single-file change.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:392` | The exact line to change — footer "Speak with us" column, last `<li>` in the address block |
| `app/page.tsx:387-393` | Surrounding footer column context (`<h4>Speak with us</h4>` + `<ul>` with phone/email/address) |
| `tests/footer-speak-with-us-address-reads-honolulu-not-hawaii-kai.spec.ts` | Already-written Playwright regression test (currently red) that asserts the new text; will turn green once this change ships |

---

## Approach

1. Edit `app/page.tsx:392` — replace `Hawaii Kai · 96825` with `Honolulu · 96825` (single string literal change, no logic/markup change).
2. Run the existing regression test (`tests/footer-speak-with-us-address-reads-honolulu-not-hawaii-kai.spec.ts`) to confirm it now passes.
3. Manually verify in a browser that the footer's "Speak with us" column reads "189 Anapalau Street" / "Honolulu · 96825", and that the unrelated `.visit-card` address block is unchanged.

Key decisions and trade-offs:
- No component extraction or refactor — this is a static JSX text-content edit, consistent with how the two prior "Hawaii Kai" spelling stories (#208367, #208589) were implemented.

---

## Dependencies

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-1: footer "Speak with us" address reads "Honolulu · 96825" | E2E (Playwright) | Covered by `tests/footer-speak-with-us-address-reads-honolulu-not-hawaii-kai.spec.ts` and ADO Test Case #208819 — load `/`, locate `footer li` containing "96825", assert text equals "Honolulu · 96825" |

---

## Open Questions

1. Should Test Case #208591's stale footer-address step be corrected in the same PR, or handled as separate follow-up? (Product/QA owner)

*No other open questions — scope, target line, and verification are all unambiguous.*
