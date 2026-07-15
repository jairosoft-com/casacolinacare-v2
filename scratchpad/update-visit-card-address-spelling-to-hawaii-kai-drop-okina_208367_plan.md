# Implementation Plan: Update visit-card address spelling to "Hawaii Kai" (drop ʻokina)

**Story ID:** #208367
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-13
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor viewing the "Visit" section contact card, I want the address to read "Hawaii Kai" instead of "Hawaiʻi Kai", So that the address matches the plain-text spelling Casa Colina wants displayed there.

**Acceptance Criteria:**
1. Given a visitor views the "Visit" section contact card, When they read the address line, Then it reads "189 Anapalau Street" / "Hawaii Kai · Honolulu, HI 96825" (not "Hawaiʻi Kai · Honolulu, HI 96825").

---

## Scope

What this plan covers:
- Replacing the ʻokina in "Hawaiʻi Kai" with a plain "Hawaii Kai" spelling, in the visit-card address only (`app/page.tsx:346`).

What this plan does NOT cover (deferred or out of scope):
- No change to the footer "Visit" column address (`app/page.tsx:388`), which shares the same "Hawaiʻi Kai" spelling — out of scope per the screenshot annotation, which only marked the visit card.
- No change to the other "Hawaiʻi Kai" occurrences sitewide (hero tag `app/page.tsx:46`, trust strip `app/page.tsx:73,76`, footer tagline `app/page.tsx:362`).
- No structural or styling changes to `.visit-card`.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:346` | `Hawaiʻi Kai · Honolulu, HI 96825` inside the `.visit-card` address block — the line targeted by AC1 |
| `app/globals.css` (`.visit-card`, `.addr`) | Existing styling for the card; confirmed text-only change, no selector/structural touch needed |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:346` — replace `Hawaiʻi Kai · Honolulu, HI 96825` with `Hawaii Kai · Honolulu, HI 96825` (drop the ʻokina character only in this line).
2. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if the change doesn't reflect (known project gotcha, not expected for a `.tsx`-only edit).
3. Visually verify against ADO Test Case #208369's 2 steps.
4. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts`.

Key decisions and trade-offs:
- Scoped strictly to the one instance circled in the source screenshot — the footer's identical-looking address line (`app/page.tsx:388`) and the other three sitewide "Hawaiʻi Kai" occurrences are deliberately left untouched, since only the visit card was annotated. If a sitewide spelling change is wanted later, that should be its own story to avoid silently expanding this one's scope.

---

## Dependencies

No external dependencies identified. No parent Feature linked (orphaned story, flagged as LOW during refine-story review — non-blocking).

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1: visit-card address reads "Hawaii Kai" | Manual / Visual (E2E-eligible) | Given the homepage is loaded and scrolled to the "Visit" section contact card, When the address line is read, Then it displays "Hawaii Kai · Honolulu, HI 96825" (covered by ADO Test Case #208369, step 2) |

---

## Open Questions

No open questions.
