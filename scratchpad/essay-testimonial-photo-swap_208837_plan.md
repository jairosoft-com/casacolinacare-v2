# Implementation Plan: Essay/testimonial photo swap

**Story ID:** #208837
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-21
**State:** New  |  **Points:** 2

---

## Story Summary

**Narrative:**
As a website visitor, I want the "A letter from our home" essay section to show the caregiver-resident photo and the testimonial section to show the kriss-homepage-new photo, So that each section's image matches the finalized Lanai Hi-Fi design — a caregiver-resident moment illustrating the essay, and Kriss's own photo beside her testimonial.

**Acceptance Criteria:**
1. Given a visitor views the "A letter from our home" essay section, When the section loads, Then the photo displayed is `caregiver-resident.png` (not `kriss-homepage-new.png`).
2. Given a visitor views the testimonial section, When the section loads, Then the photo displayed is `kriss-homepage-new.png` (not `caregiver-resident.png`).

---

## Scope

What this plan covers:
- Swapping the `Image` `src` in the essay section (`app/page.tsx:93`) from `/assets/kriss-homepage-new.png` back to `/assets/caregiver-resident.png`, and updating its `alt` text.
- Swapping the `Image` `src` in `app/components/TestimonialSection.tsx:21` from `/assets/caregiver-resident.png` to `/assets/kriss-homepage-new.png`, and updating its `alt` text.
- Updating the existing testimonial spec that hard-codes the old alt text, so it doesn't regress.

What this plan does NOT cover (deferred or out of scope):
- No change to the hero section image (still the Unsplash stock photo) — explicitly out of scope per the story.
- No change to `.essay-img` / `.testi-img` CSS (`app/globals.css`) — both containers use `aspect-ratio` + `fill`/`objectFit: cover`, which already crop/center either source image regardless of native dimensions (confirmed when `kriss-homepage-new.png` was first moved into the essay section in story #208450).
- Neither asset file needs to be added — both `caregiver-resident.png` and `kriss-homepage-new.png` already exist in `public/assets/`.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:93-94` | Essay section `Image` — `src` must change from `/assets/kriss-homepage-new.png` to `/assets/caregiver-resident.png`; `alt` must describe a caregiver/resident moment instead of Kriss |
| `app/components/TestimonialSection.tsx:21-22` | Testimonial `Image` — `src` must change from `/assets/caregiver-resident.png` to `/assets/kriss-homepage-new.png`; `alt` must describe Kriss instead of "Marikriss with a resident" |
| `tests/testimonial-section-shows-the-founder-story-design-and-stays-responsive.spec.ts:16` | Asserts `page.getByRole('img', { name: 'Marikriss with a resident' })` — this locator breaks once the testimonial `alt` text changes; must be updated to the new alt string |
| `tests/essay-and-testimonial-sections-display-swapped-photos.spec.ts` | Already-written red test (Test Case #208839) asserting the target `src` values for hero/essay/testimonial — should turn green once the swap is implemented; no changes needed to this file itself |
| `public/assets/caregiver-resident.png`, `public/assets/kriss-homepage-new.png` | Both assets already present in the repo — confirmed via existing usage, no new files needed |
| `app/globals.css` (`.essay-img`, `.testi-img`) | Confirmed no edit needed — `objectFit: cover` in both `Image` components absorbs any aspect-ratio difference between sources |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:93` — change essay `Image` `src` to `/assets/caregiver-resident.png`.
2. Edit `app/page.tsx:94` — update `alt` to describe a caregiver/resident moment (e.g., "A caregiver sharing a quiet moment with a resident").
3. Edit `app/components/TestimonialSection.tsx:21` — change testimonial `Image` `src` to `/assets/kriss-homepage-new.png`.
4. Edit `app/components/TestimonialSection.tsx:22` — update `alt` to describe Kriss (e.g., "Kriss, RN, sharing a quiet moment with a resident").
5. Update `tests/testimonial-section-shows-the-founder-story-design-and-stays-responsive.spec.ts:16` — change the expected accessible name in `getByRole('img', { name: ... })` to match the new testimonial `alt` text.
6. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if changes don't reflect (known project gotcha).
7. Run `bun run test:e2e` — confirm `essay-and-testimonial-sections-display-swapped-photos.spec.ts` turns green and no other spec regresses.

Key decisions and trade-offs:
- Source-only + alt-text changes — no CSS/structural edits, since `objectFit: cover` already handles differing image proportions (same precedent as story #208450).
- Reusing the pre-208450 essay alt text for the essay section, and the pre-208450 essay alt text's counterpart for testimonial, keeps `alt` copy consistent with what was previously validated for each photo.

---

## Dependencies

No external dependencies identified. Both image assets already exist in `public/assets/`. Task #208838 (bootstrap task already created under this story) covers this same scope.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-208837-1: essay-section photo is `caregiver-resident.png` | E2E (Playwright) | Covered by `tests/essay-and-testimonial-sections-display-swapped-photos.spec.ts` — asserts `.essay-img img` src matches `/caregiver-resident\.png/` |
| AC-208837-2: testimonial-section photo is `kriss-homepage-new.png` | E2E (Playwright) | Covered by the same spec — asserts `.testi-img img` src matches `/kriss-homepage-new\.png/`; also re-validated by the updated `testimonial-section-shows-the-founder-story-design-and-stays-responsive.spec.ts` |
| Regression: hero section unchanged | E2E (Playwright) | Same spec asserts `.hero-img img` src still matches `images.unsplash.com` |

---

## Open Questions

No open questions — ACs specify exact filenames and the touchpoints are already confirmed in source.
