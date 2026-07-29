# Implementation Plan: Remove duplicate CTA buttons from Visit section

**Story ID:** #209491
**Feature:** none (standalone story)
**Date:** 2026-07-29
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor, I want the Visit section to match the updated design without the redundant "Request a consultation"/"Schedule a visit" buttons, so that the section isn't cluttered with a duplicate CTA (the hero already has one).

**Acceptance Criteria:**
1. The `.visit-actions` div and its two buttons are removed from the Visit section in app/page.tsx.
2. No other content in the Visit section (eyebrow, heading, paragraph, visit-card) is affected.

---

## Scope

What this plan covers:
- Delete the `.visit-actions` block (lines 337-340 of `app/page.tsx`) — two placeholder `href="#"` buttons.

What this plan does NOT cover:
- No changes to the hero's existing "Request a consultation" CTA, or the visit-card.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:337-340` | `.visit-actions` div — the sole deletion target |

---

## Approach

1. Delete the `<div className="visit-actions">...</div>` block from the Visit section.
2. Run `bun run dev`, verify the pre-written spec (`tests/visit-section-no-longer-shows-duplicate-cta-buttons.spec.ts`, currently red) turns green.
3. Run Test Case #209557 manually to confirm the rest of the Visit section is untouched.

Key decisions and trade-offs:
- Pure deletion, no CSS cleanup needed — `.visit-actions` CSS rule in `globals.css` can stay (harmless if unused; out of scope to also remove).

---

## Dependencies

No external dependencies. Sibling stories #209468/#209472/#209478/#209484 (all merged) touch different, non-overlapping parts of `app/page.tsx`.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-209491-1: buttons removed | E2E (Playwright) | Given the Visit section, then `.visit-actions` has 0 elements |
| AC-209491-2: rest unaffected | E2E (Playwright) | Given the Visit section, then eyebrow/heading/paragraph/visit-card remain visible and unchanged |

Spec already written (red): `tests/visit-section-no-longer-shows-duplicate-cta-buttons.spec.ts`, per Test Case #209557.

---

## Open Questions

No open questions.
