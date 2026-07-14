# Implementation Plan: Update footer tagline founding year to 2026

**Story ID:** #208606
**Feature:** None (orphaned story — no parent Feature linked)
**Date:** 2026-07-14
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a visitor to the Casa Colina Care site, I want the footer tagline to say "Open since 2026" instead of "Open since 2019", So that the site reflects an accurate, current founding year.

**Acceptance Criteria:**
**Scenarios:**

1. Given a visitor loads the Casa Colina Care home page, When they view the footer tagline, Then it reads "...Real aloha. Open since 2026." instead of "...Open since 2019."
2. Given the rendered page source, When searching for the string "2019" in the footer tagline, Then no match is found.

---

## Scope

What this plan covers:
- Update the hardcoded footer tagline string in `app/page.tsx` so the year reads 2026 instead of 2019.
- Add automated test coverage asserting the corrected tagline text.

What this plan does NOT cover (deferred or out of scope):
- The hi-fi design mockup files (`claude_design/hale.jsx`, `claude_design/lanai.jsx`, `claude_design/kupuna.jsx`, and their `.html` counterparts) also contain "Open since 2019". These are static design references per `AGENTS.md`, not rendered by the live app, and are not covered by this story's AC. See Open Questions.
- Other wording differences between the original screenshot mock and the live site (e.g., "Hawai'i Kai" vs "Hawaii Kai", "Six residents" vs "Five residents") — out of scope; the story targets only the year.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:362` | Footer `<p className="tag">` — contains the hardcoded tagline string with "Open since 2019". This is the single line to edit. |
| `tests/bugs.spec.ts` | Existing Playwright regression spec (ADO 207036–207043, per `AGENTS.md`). No current coverage of the footer tagline year — a new assertion should be added here or as a standalone spec. |

*Design-reference files (`claude_design/*.jsx`, `claude_design/*.html`) also match "2019" but are explicitly out of scope per above — not listed as touchpoints for this story.*

---

## Approach

1. Edit `app/page.tsx:362` — replace `2019` with `2026` in the footer tagline string.
2. Start `bun run dev` and visually confirm the footer tagline renders correctly (touch `app/globals.css` first if styles don't hot-reload, per the known Turbopack gotcha).
3. Add a Playwright assertion (in `tests/bugs.spec.ts` or a new spec) verifying the footer `.tag` text contains "Open since 2026." and does not contain "2019" — this operationalizes ADO Test Case #208608.
4. Run `bun run lint` and `bun run test:e2e` to confirm no regressions.
5. Commit referencing `AB#208606`.

Key decisions and trade-offs:
- Scope intentionally limited to `app/page.tsx` (the live, rendered copy) per the story's AC. The `claude_design/*` mockups are left untouched as historical design snapshots unless the user separately requests parity.

---

## Dependencies

| Dependency | Type | Notes |
|------------|------|-------|
| ADO Test Case #208608 ("Footer tagline displays 'Open since 2026'") | Downstream | Already filed, linked via Tests to this story. Should be executed/marked once the fix lands. |

*No external dependencies identified.*

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| Scenario 1: tagline reads "...Open since 2026." | E2E (Playwright) | Load home page, scroll to footer, assert `.tag` text contains "Open since 2026." |
| Scenario 2: no "2019" remains in tagline | E2E (Playwright) | Assert `.tag` text does not contain "2019" |

---

## Open Questions

1. Should the `claude_design/*` hi-fi mockup files (`hale.jsx`, `lanai.jsx`, `kupuna.jsx` and their `.html` counterparts) also be updated to 2026 for design-source parity, or intentionally left as historical snapshots? — Product/design owner to confirm.
2. This story has no parent Feature (flagged LOW during `/jx-pm:refine-story`, left unresolved by choice). Should it be grouped under a "Site content maintenance" Feature, or remain standalone?
