# Implementation Plan: Consistent "Casa Colina Care" brand naming on home page

**Story ID:** #208584
**Feature:** None — story has no parent Feature
**Date:** 2026-07-14
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a visitor reading the home page, I want every brand mention to consistently say 'Casa Colina Care' (not the bare 'Casa Colina'), So that the site presents a single, professional brand name throughout.

**Acceptance Criteria:**
**Rules:**
1. The story-section headline reads 'We opened Casa Colina Care because aloha shouldn't end at a hospital door.' (`app/page.tsx` ~L98)
2. The story-section first paragraph reads 'Casa Colina Care is a five-bed home, not a facility...' (`app/page.tsx` ~L101)
3. The pillars-section subheading reads '...held daily at Casa Colina Care — the small things...' (`app/page.tsx` ~L127)
4. The footer brand line reads 'Casa Colina Care' instead of 'Casa Colina' (`app/page.tsx` ~L361)

---

## Scope

What this plan covers:
- Replacing the 4 bare "Casa Colina" text occurrences in `app/page.tsx` with "Casa Colina Care", per the story's acceptance criteria.

What this plan does NOT cover (deferred or out of scope):
- No other "Casa Colina" mentions exist outside `app/page.tsx` (nav brand, footer legal line, and `app/layout.tsx` metadata title already correctly say "Casa Colina Care" — verified by grep, not touched by this story).

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx` L98 | Story-section `<h2>` headline — "We opened Casa Colina because..." → add "Care" |
| `app/page.tsx` L101 | Story-section first `<p className="drop">`-adjacent paragraph — "Casa Colina is a five-bed home..." → add "Care" |
| `app/page.tsx` L127 | Pillars-section subheading `<p>` — "...every day at Casa Colina —..." → add "Care" |
| `app/page.tsx` L361 | Footer `<div className="brand">Casa Colina</div>` → add "Care" |

*No other files reference the bare "Casa Colina" string — confirmed via `grep -n "Casa Colina" app/` during story creation.*

---

## Approach

1. Open `app/page.tsx` and locate the 4 lines above (line numbers may drift slightly from prior edits — match on the surrounding text, not the line number alone).
2. Replace `Casa Colina` with `Casa Colina Care` at each of the 4 locations, being careful not to double up on the 3 lines elsewhere in the file that already correctly say "Casa Colina Care" (nav brand L13, footer legal L393) or the `layout.tsx` metadata title (already correct) — a blind `replace_all` on "Casa Colina" would incorrectly turn those into "Casa Colina Care Care".
3. Save and let Turbopack hot-reload; if the dev server is already running and styles/text don't refresh, touch `app/globals.css` per the project's known Turbopack gotcha (unrelated to this fix but a common false alarm).
4. Visually verify all 4 locations render correctly in the browser (matches Test Case #208587's steps).

Key decisions and trade-offs:
- Use 4 targeted, distinct string replacements (not `replace_all`) since the string "Casa Colina" is a substring of the already-correct "Casa Colina Care" elsewhere in the same file — a global replace would corrupt those.

---

## Dependencies

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-1: story-section headline says "Casa Colina Care" | E2E (manual/Playwright) | Load `/`, read the "A Letter From Our Home" headline, assert it reads "We opened Casa Colina Care because aloha shouldn't end at a hospital door." |
| AC-2: story-section first paragraph says "Casa Colina Care" | E2E (manual/Playwright) | Read the first paragraph under the headline, assert it begins "Casa Colina Care is a five-bed home, not a facility." |
| AC-3: pillars subheading says "Casa Colina Care" | E2E (manual/Playwright) | Scroll to the "Four commitments" section, assert subheading reads "...held daily at Casa Colina Care — the small things..." |
| AC-4: footer brand line says "Casa Colina Care" | E2E (manual/Playwright) | Scroll to the footer, assert the brand line reads "Casa Colina Care" |

Covered by ADO Test Case #208587 (linked via Tests relationship to this story).

---

## Open Questions

No open questions.
