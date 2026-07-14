# Implementation Plan: Replace essay-section photo with Kriss photo

**Story ID:** #208450
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-13
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor reading "A letter from our home," I want the essay section photo to show the actual photo of Kriss, RN with a resident, So that the photo matches the real owner/director quoted beside it instead of a generic stock image.

**Acceptance Criteria:**
1. Given a visitor views the "A letter from our home" essay section, When the section loads, Then the photo displayed is `kriss-homepage-new.png` — not the current `caregiver-resident.png`.

---

## Scope

What this plan covers:
- Swapping the `Image` `src` in the essay section (`app/page.tsx:89`) from `/assets/caregiver-resident.png` to `/assets/kriss-homepage-new.png`, and updating the `alt` text (`app/page.tsx:90`) to describe the actual photo.

What this plan does NOT cover (deferred or out of scope):
- No change to `.essay-img` CSS (`app/globals.css:93`) — the container's fixed `aspect-ratio:4/5` plus the `Image`'s `fill` + `style={{ objectFit: 'cover' }}` (app/page.tsx:91-93) already crop/center any source image regardless of its native dimensions, so no layout changes are needed.
- No change to essay copy, eyebrow label, or the "Kriss, RN — Owner & Director" byline elsewhere in the section.
- `public/assets/caregiver-resident.png` is left in place (unused by this section afterward) rather than deleted, since it may still be referenced elsewhere or wanted for future use — deletion is out of scope unless requested.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:89` | `src="/assets/caregiver-resident.png"` — must change to `/assets/kriss-homepage-new.png` |
| `app/page.tsx:90` | `alt="A caregiver sharing a quiet moment with a resident"` — should be updated to accurately describe the new photo (Kriss, RN, with a resident) |
| `app/globals.css:93` (`.essay-img`) | `aspect-ratio:4/5` fixed container — confirmed no edit needed; `objectFit: cover` on the `Image` (app/page.tsx:93) absorbs any aspect-ratio difference between the old and new source images |
| `public/assets/kriss-homepage-new.png` | The replacement asset — already present in the repo, confirmed to exist |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:89` — change `src="/assets/caregiver-resident.png"` to `src="/assets/kriss-homepage-new.png"`.
2. Edit `app/page.tsx:90` — update `alt` text to describe the new photo (e.g., "Kriss, RN, with a resident at Casa Colina").
3. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if the change doesn't reflect (known project gotcha).
4. Visually verify against ADO Test Case #208452's 2 steps — confirm the essay section renders the new photo, correctly cropped/centered within the existing 4:5 container.
5. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts`.

Key decisions and trade-offs:
- Source-only change — no CSS/structural edits, since `objectFit: cover` already handles differing image proportions.
- Old asset (`caregiver-resident.png`) is left in `public/assets/` rather than removed, consistent with not making destructive changes beyond what the AC requires.

---

## Dependencies

No external dependencies identified. `public/assets/kriss-homepage-new.png` already exists in the repo (confirmed).

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1: essay-section photo is `kriss-homepage-new.png` | Manual / Visual (E2E-eligible) | Given the homepage is loaded and the "A letter from our home" essay section is in view, When the photo is inspected, Then its source is `kriss-homepage-new.png`, not `caregiver-resident.png` (covered by ADO Test Case #208452, steps 1–2) |

---

## Open Questions

No open questions.
