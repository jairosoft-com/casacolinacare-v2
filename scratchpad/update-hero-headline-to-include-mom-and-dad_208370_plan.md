# Implementation Plan: Update hero headline to include "mom and dad"

**Story ID:** #208370
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-13
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor landing on the homepage, I want the hero headline to read "A place where mom and dad can feel at home" instead of just "mom", So that the messaging reflects that Casa Colina welcomes both parents, not just mothers.

**Acceptance Criteria:**
1. Given a visitor views the homepage hero section, When they read the headline, Then it reads "A place where mom and dad can feel at home." (not "A place where mom can feel at home.").

---

## Scope

What this plan covers:
- Replacing the hero `<h1>` headline text in `app/page.tsx:49` to include "and dad".

What this plan does NOT cover (deferred or out of scope):
- No change to the hero-meta paragraph, CTAs, or hero image/Ken Burns animation.
- No change to any other "mom"/parent references sitewide (none currently found elsewhere on the page).
- No structural or styling changes to `.hero-content` / `.hero h1`.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:49` | `<h1>A place where mom <br />can feel <span className="i">at home.</span></h1>` — the headline targeted by AC1 |
| `app/globals.css` (`.hero-content`, `.hero h1`) | Existing styling; confirmed text-only change, no selector/structural touch needed |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:49` — change `<h1>A place where mom <br />can feel <span className="i">at home.</span></h1>` to read "A place where mom and dad <br />can feel <span className="i">at home.</span>" (inserting "and dad" after "mom", keeping the existing `<br />` line break and italic "at home." span).
2. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if the change doesn't reflect (known project gotcha, not expected for a `.tsx`-only edit).
3. Visually verify against ADO Test Case #208372's 2 steps.
4. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts`.

Key decisions and trade-offs:
- Kept the existing `<br />` and italic-span markup structure intact — only the text content changes, so the Ken Burns hero animation and layout are unaffected.
- No copy softening or paraphrasing — AC text is used verbatim per the source screenshot annotation, consistent with the corrections-style pattern used for stories #208360, #208364, and #208367.

---

## Dependencies

No external dependencies identified. No parent Feature linked (orphaned story, flagged as LOW during refine-story review — non-blocking).

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1: hero headline reads "mom and dad can feel at home" | Manual / Visual (E2E-eligible) | Given the homepage is loaded, When the hero headline is read, Then it displays "A place where mom and dad can feel at home." exactly (covered by ADO Test Case #208372, step 2) |

---

## Open Questions

No open questions.
