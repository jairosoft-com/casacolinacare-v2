# Implementation Plan: Wire up footer 'Visit' nav links and add missing section anchors

**Story ID:** #209484
**Feature:** none (standalone story)
**Date:** 2026-07-29
**State:** New  |  **Points:** 3

---

## Story Summary

**Narrative:**
As a website visitor, I want the footer's Home/About/Care/The home links to actually navigate to those sections, so that I can jump around the site from the footer instead of clicking dead text.

**Acceptance Criteria:**
1. Given the footer "Visit" list, when I click "Home", then the page smooth-scrolls to #top.
2. Given the footer "Visit" list, when I click "About", then the page smooth-scrolls to #about.
3. Given the footer "Visit" list, when I click "Care", then the page smooth-scrolls to #care (id already exists).
4. Given the footer "Visit" list, when I click "The home", then the page smooth-scrolls to #place (id already exists).
5. Given the hero section and TestimonialSection, when the page loads, then the hero `<section>` has `id="top"` and the testimonial `<section>` has `id="about"`.

---

## Scope

What this plan covers:
- Add `id="top"` to the hero `<section>` (`app/page.tsx`) and `id="about"` to the testimonial `<section>` (`app/components/TestimonialSection.tsx`).
- Wrap the footer "Visit" list's 4 items in `SmoothLink` pointing to `#top`, `#about`, `#care`, `#place`.

What this plan does NOT cover:
- `#care` and `#place` already exist (pillars and mosaic sections) — no changes needed there.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:37` | Hero `<section className="hero">` — needs `id="top"` |
| `app/components/TestimonialSection.tsx:5` | Testimonial `<section className="testimonial">` — needs `id="about"` |
| `app/page.tsx:371-377` | Footer "Visit" `<ul>` — 4 plain `<li>`s need `SmoothLink` wrapping |

---

## Approach

1. `app/page.tsx:37` — add `id="top"` to the hero section.
2. `app/components/TestimonialSection.tsx:5` — add `id="about"` to the testimonial section.
3. `app/page.tsx:371-377` — wrap each footer Visit `<li>` text in `SmoothLink`: Home→`#top`, About→`#about`, Care→`#care`, The home→`#place`.
4. Run `bun run dev`, verify the pre-written spec (`tests/footer-visit-links-navigate-to-correct-sections.spec.ts`, currently red) turns green.
5. Run Test Case #209556 manually to confirm all 4 links scroll correctly and the two new ids are present.

Key decisions and trade-offs:
- Use `SmoothLink` (already imported in `page.tsx`) for consistency with every other in-page anchor on this site.
- `footer li` for Learn column stays untouched (no AC covers it, matches design which also leaves it plain).

---

## Dependencies

No external dependencies. Sibling stories #209468/#209472/#209478 (merged), #209491 touch different, non-overlapping parts of `app/page.tsx`.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-209484-1: Home → #top | E2E (Playwright) | Given the footer, when "Home" is clicked, then page scrolls to #top |
| AC-209484-2: About → #about | E2E (Playwright) | Given the footer, when "About" is clicked, then page scrolls to #about |
| AC-209484-3: Care → #care | E2E (Playwright) | Given the footer, then "Care" link has href="#care" |
| AC-209484-4: The home → #place | E2E (Playwright) | Given the footer, then "The home" link has href="#place" |
| AC-209484-5: anchor ids present | E2E (Playwright) | Given the page loads, then `#top` and `#about` each resolve to exactly one element |

Spec already written (red): `tests/footer-visit-links-navigate-to-correct-sections.spec.ts`, per Test Case #209556.

---

## Open Questions

No open questions.
