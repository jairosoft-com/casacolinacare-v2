# Implementation Plan: Update "A letter from our home" essay photo to kriss-homepage-new1

**Story ID:** #208916
**Feature:** none — orphaned story, no parent Feature
**Date:** 2026-07-22
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the "A letter from our home" essay section to display the updated photo of Kriss (`kriss-homepage-new1.png`), So that the section shows her latest approved photo instead of the generic caregiver-resident image.

**Acceptance Criteria:**
1. Given a visitor views the "A letter from our home" essay section (`app/page.tsx`, `#story`), When the section loads, Then the image displayed is `/assets/kriss-homepage-new1.png`, not `/assets/caregiver-resident.png`.
2. Given the updated image, When it renders, Then its `alt` text is updated to describe Kriss (not the previous "A caregiver sharing a quiet moment with a resident" copy), and the existing `fill` / `objectFit: cover` / `sizes` styling is preserved.
3. Given `public/assets/kriss-homepage-new1.png` is currently untracked in git, When this story is implemented, Then the file is committed to the repo alongside the code change.

---

## Scope

What this plan covers:
- Swap the `essay-img` `<Image>` `src` in `app/page.tsx`'s `#story` section from `/assets/caregiver-resident.png` to `/assets/kriss-homepage-new1.png`.
- Update that image's `alt` text to describe Kriss instead of a generic caregiver/resident moment.
- Commit the already-present `public/assets/kriss-homepage-new1.png` asset (currently untracked).
- Update the pre-existing regression test that hard-codes the old essay-section image, so it doesn't start failing after this change.

What this plan does NOT cover (deferred or out of scope):
- `app/components/TestimonialSection.tsx`'s image (`kriss-homepage-new.png`, no `1`) — untouched, different image entirely.
- No change to `fill`, `objectFit`, or `sizes` values — AC-2 requires these preserved as-is.
- No parent Feature to link or reconcile — story is standalone.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:91-99` | The `.essay-img` `<Image>` in the `#story` section — `src` and `alt` change here. |
| `public/assets/kriss-homepage-new1.png` | New asset already on disk (1.37MB), currently untracked — needs `git add`. |
| `tests/essay-and-testimonial-sections-display-swapped-photos.spec.ts:12` | Asserts essay image is `caregiver-resident.png` — will start failing once this story ships; must be updated in the same change. |
| `tests/a-letter-from-our-home-essay-section-shows-updated-kriss-homepage-new1-photo.spec.ts` | Regression spec for Test Case #208920, written ahead of implementation; currently red on `src`/`alt` assertions, expected to go green once this lands. |
| `app/components/TestimonialSection.tsx:21` | Uses `kriss-homepage-new.png` — out of scope, do not modify. |

---

## Approach

1. Update `app/page.tsx`'s essay-img `<Image src=...>` from `/assets/caregiver-resident.png` to `/assets/kriss-homepage-new1.png`.
2. Update that `<Image>`'s `alt` text to describe Kriss (e.g., "Kriss, RN, owner and director of Casa Colina Care") — do not touch `fill`, `objectFit`, or `sizes`.
3. `git add public/assets/kriss-homepage-new1.png` so the asset is tracked alongside the code change.
4. Update `tests/essay-and-testimonial-sections-display-swapped-photos.spec.ts`'s essay-image assertion to expect `kriss-homepage-new1.png` instead of `caregiver-resident.png` (keep the hero and testimonial assertions unchanged).
5. Run `bun run dev`, visually confirm the essay section renders the new photo with unchanged layout.
6. Run `npx playwright test tests/a-letter-from-our-home-essay-section-shows-updated-kriss-homepage-new1-photo.spec.ts tests/essay-and-testimonial-sections-display-swapped-photos.spec.ts` and confirm both pass.

Key decisions and trade-offs:
- The exact replacement `alt` copy isn't specified by the AC beyond "describe Kriss" — implementer has latitude here; the new regression spec only asserts the old caregiver copy is gone, not a specific new string.
- `caregiver-resident.png` itself is left in `public/assets/` (not deleted) since nothing in the AC calls for its removal and no other section currently references it — safe to leave for now.

---

## Dependencies

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-1: essay-section image is `kriss-homepage-new1.png` | E2E (Playwright) | `tests/a-letter-from-our-home-essay-section-shows-updated-kriss-homepage-new1-photo.spec.ts` asserts `.essay-img img` `src` matches `/kriss-homepage-new1\.png/` |
| AC-2: alt text updated, styling preserved | E2E (Playwright) | Same spec asserts `alt` no longer matches `/caregiver/i`, `sizes` unchanged, and `object-fit: cover` computed style unchanged |
| AC-3: asset committed to git | Manual / code review | Confirm `git status` shows no untracked assets and `git show HEAD --stat` includes `public/assets/kriss-homepage-new1.png` |

---

## Open Questions

1. What should the new `alt` text say exactly? — implementer's call; only constraint is it must not read as the old caregiver/resident copy.
2. Should `caregiver-resident.png` be deleted from `public/assets/` now that nothing references it, or kept for potential reuse? — product/design call, not blocking this story.
