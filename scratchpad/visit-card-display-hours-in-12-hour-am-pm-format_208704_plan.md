# Implementation Plan: Visit Card — Display hours in 12-hour AM/PM format

**Story ID:** #208704
**Feature:** #192184 ("General: Enhancements")
**Date:** 2026-07-15
**State:** New  |  **Points:** 1  |  **Priority:** 3
**Iteration:** Jairosoft Portfolio\2026-PI8\Iteration 8.2

---

## Story Summary

**Narrative:**
As a website visitor, I want the visiting hours shown in 12-hour AM/PM format so that I can quickly understand when to call or visit without deciphering abbreviations.

**Acceptance Criteria:**
1. Given the homepage is loaded, When the visitor views the Visit section's contact card, Then the hours should read "8:00 AM – 7:00 PM" instead of "8a–7p".
2. Given the hours text is updated, When the visitor views the card, Then the "Mon–Sat" day range remains unchanged — only the time format changes.

---

## Scope

What this plan covers:
- Reformatting the abbreviated hours string in the visit-card hours line (`app/page.tsx:353`) from "8a–7p" to "8:00 AM – 7:00 PM".

What this plan does NOT cover (deferred or out of scope):
- No change to the "Mon–Sat" day-range text or the "Urgent: same number, anytime" line in the same `.hours` block.
- No change to `.hours` styling/layout in `app/globals.css` — text-only edit, confirmed no wrapping/width issue expected from the slightly longer string.
- This is the only occurrence of the abbreviated hours format in the codebase (confirmed via grep) — no footer or duplicate instance to reconcile.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:353` | `<span>Mon–Sat · 8a–7p</span>` inside the `.visit-card .hours` block — the line targeted by both ACs |
| `app/globals.css` (`.hours`) | Existing styling for the hours line; text-only change, no selector/structural touch expected |

---

## Approach

1. Edit `app/page.tsx:353` — replace `8a–7p` with `8:00 AM – 7:00 PM`, keeping `Mon–Sat · ` unchanged.
2. Start `bun run dev` and visually confirm the hours render correctly (touch `app/globals.css` first if styles don't hot-reload, per the known Turbopack gotcha).
3. Visually verify against ADO Test Case #208709's 2 steps.
4. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts`.
5. Commit referencing `AB#208704`.

Key decisions and trade-offs:
- Scoped strictly to the time portion of the string, per the screenshot annotation which circled only "8a–7p" and specified the new format — the "Mon–Sat" prefix is deliberately left untouched.

---

## Dependencies

| Dependency | Type | Notes |
|------------|------|-------|
| ADO Test Case #208709 ("Verify Visit Card hours display in 12-hour AM/PM format") | Downstream | Already filed, linked via Tests to this story. Should be executed/marked once the fix lands. |

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| Scenario 1: hours read "8:00 AM – 7:00 PM" | Manual / Visual (E2E-eligible) | Given the homepage is loaded and scrolled to the Visit section contact card, When the hours line is read, Then it displays "8:00 AM – 7:00 PM" instead of "8a–7p" (covered by ADO Test Case #208709, step 2) |
| Scenario 2: "Mon–Sat" day range unchanged | Manual / Visual | Given the hours text is updated, When the card is viewed, Then "Mon–Sat" still precedes the time range unchanged (covered by ADO Test Case #208709, step 2) |

---

## Open Questions

No open questions.
