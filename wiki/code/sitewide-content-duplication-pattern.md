---
title: Casa Colina site duplicates marketing facts across sections
type: code
tags: [page.tsx, content, maintenance, grep-first]
created: 2026-07-07
updated: 2026-07-07
source_count: 1
aliases: [content duplication, grep before editing copy, marquee duplication]
---

# Casa Colina site duplicates marketing facts across sections

## Pattern

Marketing facts on this single-page site (`app/page.tsx`, `app/layout.tsx`) are restated verbatim in multiple, unrelated markup locations rather than sourced from one constant. Observed across several content-fix tasks in the same session:

| Fact | Locations |
|---|---|
| Phone number | nav (`.phone`), visit-card, footer contact list |
| Resident count | hero subheading, SEO meta description (`layout.tsx`), marquee strip (×2), story-section "-bed home" copy, footer tagline |
| License tier (ARCH II→I) | marquee strip (×2), Credentials section heading, footer legal line |

A screenshot annotation that circles **one** instance (e.g., the hero sentence) is easy to mistake for the full scope — the same fact is usually live in 2-5 other places.

## Second duplication axis: the marquee strip itself

Independent of the above, the trust/marquee strip (`app/page.tsx`, two `<span>` blocks around what was originally lines 150 and 153) contains the **entire same string duplicated twice** in the JSX, so the CSS scroll animation (`.strip-track`) has a seamless loop. Any edit to that strip's text must apply to both copies — `replace_all: true` on the exact substring handles this in one edit.

## Rule of thumb

Before editing any single-instance marketing-copy annotation, `grep` the fact (phone number, count, license tier, ownership claim, etc.) across `app/` first. If it's a multi-occurrence fact, surface the full list to the user and confirm scope before drafting the story — don't assume the screenshot's one circled instance is the only place to fix.

## Related

- [[cred-grid CSS hardcodes column count to card count]] — a downstream layout consequence of one of these fact-duplication fixes (removing the Memory Care Certified credential)

## Sources

- casacolinacare-v2 dev session 2026-07-07 — phone number, resident count, ARCH license/ownership content-fix stories (ADO #208115, #208124, #208125)
