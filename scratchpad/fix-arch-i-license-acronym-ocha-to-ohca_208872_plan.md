# Implementation Plan: Fix ARCH I license acronym: OCHA to OHCA

**Story ID:** #208872
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-22
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the "State Licensed ARCH I" credentials card to show the correct "OHCA" acronym, So that the license identifier is spelled correctly and consistent with the "(OHCA)" reference later in the same line.

**Acceptance Criteria:**
1. Given a visitor views the "Credentials & accreditations" section, When the section loads, Then the "State Licensed ARCH I" card reads `License OHCA #1808-C · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually` — not `License OCHA #1808-C · ...`.

---

## Scope

What this plan covers:
- Swapping the letters in the license prefix on `app/page.tsx:308` from `License OCHA #1808-C` to `License OHCA #1808-C`. The rest of the line ("Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually") is already correct and unchanged.
- Updating (or removing) the now-stale local Playwright assertion in `tests/credentials.spec.ts` that currently expects `OCHA` as correct.

What this plan does NOT cover (deferred or out of scope):
- No change to the card's seal icon, heading, or the other three credential cards.
- No change to ADO Test Case #208851 ("Credentials section shows updated ARCH I license number") — per an earlier explicit decision, that ADO record is left as historical/stale and not updated.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:308` | License text — `License OCHA #1808-C` → `License OHCA #1808-C` |
| `tests/credentials.spec.ts:25-35` (test `"208851 — State Licensed ARCH I credential shows the updated license number"`) | **Will break** once the source text changes — this local test currently asserts `OCHA` is correct. Must be updated (or removed as superseded) so CI doesn't regress. This is distinct from ADO Test Case #208851, which was deliberately left as-is. |
| `tests/credentials.spec.ts:37-47` (test `"208878 — State Licensed ARCH I credential shows OHCA, not OCHA"`) | Already-written red test (Test Case #208878) asserting the target text — should turn green once implemented |

---

## Approach

1. Edit `app/page.tsx:308` — change `License OCHA #1808-C` to `License OHCA #1808-C`.
2. Update `tests/credentials.spec.ts:25-35` — the "208851" test's assertions currently expect the old `OCHA` text; update them to expect `OHCA` (or remove the test entirely as superseded by the new "208878" test, since both would otherwise assert contradictory things about the same card). Recommend removing it, since test 208878 already covers the same card fully.
3. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if changes don't reflect (known project gotcha).
4. Run `bun run test:e2e` — confirm `credentials.spec.ts` passes end-to-end (no contradictory assertions) and no other spec regresses.

Key decisions and trade-offs:
- Single-character-level text fix — no structural changes.
- The stale local test in `credentials.spec.ts` must be reconciled (updated or removed) as part of this story's implementation — this is a code-correctness necessity, separate from the ADO Test Case record decision (which only affects the ADO backlog, not the running test suite).

---

## Dependencies

No external dependencies identified. Task #208875 (bootstrap task already created under this story) covers this same scope.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-208872-1: "State Licensed ARCH I" card shows `License OHCA #1808-C · ...` | E2E (Playwright) | Covered by `tests/credentials.spec.ts` test "208878" — asserts the card contains `License OHCA #1808-C · ...` and not `License OCHA #1808-C`. The older "208851" test must be reconciled so it doesn't assert the opposite. |

---

## Open Questions

1. Should the stale "208851" test in `tests/credentials.spec.ts` be removed outright, or updated in place to assert the new text? (Recommendation: remove, since "208878" already covers the same card — leaving both would be redundant even after fixing the assertion.) — implementer to confirm during execution.
