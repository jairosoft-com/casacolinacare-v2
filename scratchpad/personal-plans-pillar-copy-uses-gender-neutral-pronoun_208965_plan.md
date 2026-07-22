# Implementation Plan: Personal plans pillar copy uses gender-neutral pronoun

**Story ID:** #208965
**Feature:** none (orphaned — no parent Feature linked)
**Date:** 2026-07-22
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a site visitor, I want the "Personal plans" pillar copy to use gender-neutral language, So that the messaging doesn't presume a resident's gender.

**Acceptance Criteria:**
1. The "Personal plans" pillar paragraph reads "A care plan built for them — not a room number. Updated as needs change, with family at the table." (currently "built for her" at `app/page.tsx:137`).
2. No other pillar copy, layout, or styling is altered.

---

## Scope

What this plan covers:
- Change the single word "her" → "them" in the "Personal plans" pillar paragraph in `app/page.tsx`.

What this plan does NOT cover (deferred or out of scope):
- The "Real food" pillar (`app/page.tsx:99` in a live snapshot check) also uses gendered pronouns ("her tastes", "she'd like it"). Noticed during test authoring but explicitly out of scope — AC2 only guards against *this* story altering other pillars, it doesn't ask to fix them. Flag as a separate follow-up if the team wants consistent gender-neutral language across all four pillars.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:137` | The "Personal plans" pillar `<p>` — the exact line to edit. Sole touchpoint; no other file references this copy. |
| `tests/personal-plans-pillar-uses-gender-neutral-pronoun.spec.ts` | Playwright spec already written this session (via `/jx-qa:generate`) and confirmed red against current code. Turns green once the edit lands — this is the acceptance check, no new test needed. |

---

## Approach

1. Edit `app/page.tsx:137`: replace "built for her" with "built for them" (leave the rest of the sentence untouched).
2. Run `bun run dev` (if not already running) and visually confirm the pillar renders correctly at desktop and mobile widths — this is a pure text change with no layout impact, so a quick visual pass is sufficient, not required by AC.
3. Run `npx playwright test tests/personal-plans-pillar-uses-gender-neutral-pronoun.spec.ts` — expect it to pass now.
4. Run the full `bun run test:e2e` suite to confirm no regression in `tests/bugs.spec.ts` or other specs touching the pillars section.

Key decisions and trade-offs:
- One-word edit — no componentization or extraction needed; matches the size/simplicity of this project's other content-fix stories (1 point, single-file, no parent Feature).

---

## Dependencies

No external dependencies identified.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-1: pillar paragraph reads "...built for them..." | E2E (Playwright) | `tests/personal-plans-pillar-uses-gender-neutral-pronoun.spec.ts` — asserts the paragraph text via `getByRole('heading', { name: 'Personal plans' })` → parent → `<p>`. Already written, currently red. |
| AC-2: no other pillar copy/layout/styling altered | E2E (Playwright) | Same spec — asserts the other three pillar headings ("24/7 presence", "Real food", "Quiet grounds") remain visible. |

---

## Open Questions

No open questions.
