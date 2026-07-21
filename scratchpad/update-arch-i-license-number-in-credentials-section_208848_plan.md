# Implementation Plan: Update ARCH I license number in credentials section

**Story ID:** #208848
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-21
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the "State Licensed ARCH I" credentials card to show the current license number, So that the displayed accreditation matches Casa Colina Care's actual state license record.

**Acceptance Criteria:**
1. Given a visitor views the "Credentials & accreditations" section, When the section loads, Then the "State Licensed ARCH I" card reads `License OCHA #1808-C · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually` — not `License #HI-01840 · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually`.

---

## Scope

What this plan covers:
- Updating the license-number text in the "State Licensed ARCH I" credential card (`app/page.tsx:308`) from `License #HI-01840` to `License OCHA #1808-C`.

What this plan does NOT cover (deferred or out of scope):
- No change to the card's seal icon (★), heading ("State Licensed ARCH I"), or the "Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually" wording — confirmed unchanged in the live design source.
- No change to the other three credential cards (DOH Inspected, CPR & First Aid, Background Checks) — out of scope for this story.
- No change to `.cred` / `.cred-grid` CSS (`app/globals.css`) — this is a text-only change, no layout impact.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:308` | The `<p>` line inside the "State Licensed ARCH I" `.cred` card — text must change from `License #HI-01840 · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually` to `License OCHA #1808-C · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually` |
| `tests/credentials.spec.ts` | Already contains the red test (Test Case #208851, added this session) asserting the target text — should turn green once the swap is implemented; no changes needed to this file itself |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:308` — change the license text from `License #HI-01840 · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually` to `License OCHA #1808-C · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually`.
2. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if the change doesn't reflect (known project gotcha).
3. Run `bun run test:e2e` — confirm `tests/credentials.spec.ts` (both the 208613 and 208851 tests) pass and no other spec regresses.

Key decisions and trade-offs:
- Single-line text-only change — no structural, CSS, or asset changes required, since the card's icon and heading are unchanged in the live design source (verified via `DesignSync.get_file` on the Lanai Hi-Fi project).

---

## Dependencies

No external dependencies identified. Task #208850 (bootstrap task already created under this story) covers this same scope.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-208848-1: "State Licensed ARCH I" card shows `License OCHA #1808-C · ...` | E2E (Playwright) | Covered by `tests/credentials.spec.ts` — test `208851 — State Licensed ARCH I credential shows the updated license number` asserts the `.cred` card (filtered by heading "State Licensed ARCH I") contains the new license text and does not contain `License #HI-01840` |

---

## Open Questions

No open questions — the exact before/after text was confirmed via the live design source and the AC specifies it verbatim.
