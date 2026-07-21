# Implementation Plan: Remove "Hawaii Kai" from visit-card address

**Story ID:** #208873
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-22
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the "Speak directly with Kriss" visit card's address to read just "Honolulu, HI 96825", So that it matches the finalized design and is consistent with the footer address.

**Acceptance Criteria:**
1. Given a visitor views the "Speak directly with Kriss" visit card, When the address line loads, Then it reads "189 Anapalau Street / Honolulu, HI 96825" — not "Hawaii Kai · Honolulu, HI 96825".

---

## Scope

What this plan covers:
- Removing the "Hawaii Kai · " prefix from the visit-card address (`app/page.tsx:350`), leaving just "Honolulu, HI 96825".

What this plan does NOT cover (deferred or out of scope):
- No change to the footer address (`app/page.tsx:392`) — already reads "Honolulu · 96825" without "Hawaii Kai", fixed in a prior story (#208817).
- No change to the footer tagline ("A family-style care home in Hawaii Kai...", `app/page.tsx:366`) or the hero/trust-strip "Hawaii Kai" mentions — those are different copy in different sections, explicitly out of scope for this story.
- No change to ADO Test Case #208369 ("Visit-card address reads 'Hawaii Kai' (no ʻokina)") — per an earlier explicit decision, that closed ADO record is left as historical and not updated.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:348-351` (`.addr` div) | Visit-card address — remove "Hawaii Kai · " prefix, leaving "189 Anapalau Street<br />Honolulu, HI 96825" |
| `tests/visit-card-address-no-longer-shows-hawaii-kai.spec.ts` | Already-written red test (Test Case #208879) asserting the target text — should turn green once implemented; no changes needed to this file itself |

No other local spec references this specific address string — confirmed via repo-wide search; `footer-tagline-displays-open-since-2026.spec.ts` and the footer-address spec reference different, unrelated copy.

---

## Approach

1. Edit `app/page.tsx:350` — remove "Hawaii Kai · " from the address line, leaving "Honolulu, HI 96825".
2. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if changes don't reflect (known project gotcha).
3. Run `bun run test:e2e` — confirm `tests/visit-card-address-no-longer-shows-hawaii-kai.spec.ts` turns green and no other spec regresses.

Key decisions and trade-offs:
- Text-only change, single line — no structural or CSS edits needed.
- Confirmed no other spec asserts this specific visit-card address string, so no additional test reconciliation is needed (unlike stories #208871 and #208872, which each had a stale local test to fix).

---

## Dependencies

No external dependencies identified. Task #208876 (bootstrap task already created under this story) covers this same scope.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-208873-1: visit-card address reads "189 Anapalau Street / Honolulu, HI 96825" | E2E (Playwright) | Covered by `tests/visit-card-address-no-longer-shows-hawaii-kai.spec.ts` — asserts `.visit-card .addr` contains both address lines and does not contain "Hawaii Kai" |

---

## Open Questions

No open questions — AC specifies exact text and the touchpoint is already confirmed in source, with no conflicting local tests.
