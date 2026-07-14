# Implementation Plan: Consistent "Hawaii Kai" spelling (no okina) site-wide

**Story ID:** #208589
**Feature:** None — story has no parent Feature
**Date:** 2026-07-14
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a visitor reading the site, I want every 'Hawai'i Kai' / 'Hawai'i' mention to consistently drop the okina and read 'Hawaii Kai' / 'Hawaii', So that the location name displays consistently and matches the already-fixed visit-card address.

**Acceptance Criteria:**
**Rules:**
1. Hero subheading reads 'A care home in Hawaii Kai' (`app/page.tsx` ~L46)
2. Marquee strip, first copy, reads '...Hawaii Kai · Honolulu...' (`app/page.tsx` ~L73)
3. Marquee strip, second copy, reads '...Hawaii Kai · Honolulu...' (`app/page.tsx` ~L76)
4. License line reads '...Hawaii Dept. of Health (OHCA)...' (`app/page.tsx` ~L304)
5. Footer tagline reads 'A family-style care home in Hawaii Kai.' (`app/page.tsx` ~L362)
6. Footer address reads 'Hawaii Kai · 96825' (`app/page.tsx` ~L388)
7. Footer legal line reads 'Licensed ARCH Hawaii Type I...' (`app/page.tsx` ~L394)
8. Page metadata title reads 'Casa Colina Care — A care home in Hawaii Kai' (`app/layout.tsx` ~L19)
9. Testimonial byline reads 'A. Kekoa · daughter of resident, Hawaii Kai' (`app/components/TestimonialCarousel.tsx` ~L20)

---

## Scope

What this plan covers:
- Dropping the okina from all 9 remaining "Hawai'i Kai" / "Hawai'i" occurrences across `app/page.tsx`, `app/layout.tsx`, and `app/components/TestimonialCarousel.tsx`, per the story's acceptance criteria.

What this plan does NOT cover (deferred or out of scope):
- The visit-card address (`app/page.tsx` ~L346) already reads "Hawaii Kai" without an okina — fixed by prior story #208367, not touched here.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx` L46 | Hero subheading — "A care home in Hawaiʻi Kai" → drop okina |
| `app/page.tsx` L73, L76 | Trust/marquee strip — string is duplicated twice in the JSX for the seamless CSS scroll loop (`.strip-track`); both copies contain "Hawaiʻi Kai" and must be edited identically |
| `app/page.tsx` L304 | Credentials section license line — "Hawaiʻi Dept. of Health (OHCA)" → drop okina |
| `app/page.tsx` L362 | Footer tagline — "A family-style care home in Hawaiʻi Kai." → drop okina |
| `app/page.tsx` L388 | Footer address list item — "Hawaiʻi Kai · 96825" → drop okina |
| `app/page.tsx` L394 | Footer legal line — "Licensed ARCH Hawaiʻi Type I" → drop okina |
| `app/layout.tsx` L19 | `metadata.title` (SEO/browser tab) — "A care home in Hawai'i Kai" → drop okina |
| `app/components/TestimonialCarousel.tsx` L20 | Testimonial byline — "daughter of resident, Hawai'i Kai" → drop okina |

*Confirmed via `grep -n "Hawai" app/` during story creation — no other files reference the okina spelling.*

---

## Approach

1. Open `app/page.tsx` and replace the okina (`ʻ` / `'`) in "Hawai'i" at the 7 identified locations, producing plain "Hawaii".
2. For the marquee strip (L73, L76): this string is intentionally duplicated twice in the JSX so the CSS scroll animation loops seamlessly — edit **both** copies identically, not `replace_all` (the file also contains other unrelated "Hawaiʻi" instances that must stay untouched until reached individually, per the per-location edit approach below).
3. Open `app/layout.tsx` and fix the `metadata.title` string at L19.
4. Open `app/components/TestimonialCarousel.tsx` and fix the testimonial byline at L20.
5. Apply each fix as a targeted, distinct string replacement (not a blind `replace_all` across the whole file) since "Hawaiʻi"/"Hawai'i" appears in multiple unrelated strings in the same file with different surrounding punctuation/casing.
6. Save and let Turbopack hot-reload; if styles/text don't refresh, touch `app/globals.css` per the project's known Turbopack gotcha.
7. Visually verify all 9 locations render correctly in the browser (matches Test Case #208591's steps).

Key decisions and trade-offs:
- Match each occurrence by its surrounding text, not a global find/replace, since the okina character can appear as either `ʻ` (U+02BB) or a plain apostrophe `'` depending on the source, and a blind `replace_all` risks missing variants or over-matching unrelated apostrophes.

---

## Dependencies

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-1: hero subheading says "Hawaii Kai" | E2E (manual/Playwright) | Load `/`, read the hero subheading, assert it reads "A care home in Hawaii Kai" |
| AC-2/AC-3: marquee strip (both copies) say "Hawaii Kai" | E2E (manual/Playwright) | Observe the scrolling trust strip, assert both looping copies read "...Hawaii Kai · Honolulu..." |
| AC-4: license line says "Hawaii Dept. of Health" | E2E (manual/Playwright) | Scroll to Credentials section, assert license line reads "...Hawaii Dept. of Health (OHCA)..." |
| AC-5: footer tagline says "Hawaii Kai" | E2E (manual/Playwright) | Scroll to footer, assert tagline reads "A family-style care home in Hawaii Kai." |
| AC-6: footer address says "Hawaii Kai" | E2E (manual/Playwright) | Scroll to footer, assert address reads "Hawaii Kai · 96825" |
| AC-7: footer legal line says "Hawaii Type I" | E2E (manual/Playwright) | Scroll to footer legal row, assert it reads "Licensed ARCH Hawaii Type I..." |
| AC-8: page metadata title says "Hawaii Kai" | E2E (manual/Playwright) | Inspect browser tab title / page `<title>`, assert it reads "Casa Colina Care — A care home in Hawaii Kai" |
| AC-9: testimonial byline says "Hawaii Kai" | E2E (manual/Playwright) | Read the Kekoa testimonial byline, assert it reads "A. Kekoa · daughter of resident, Hawaii Kai" |

Covered by ADO Test Case #208591 (linked via Tests relationship to this story).

---

## Open Questions

No open questions.
