# Implementation Plan: Update DOH Inspected credential date to March 2026

**Story ID:** #208613
**Feature:** None (orphaned story — no parent Feature linked)
**Date:** 2026-07-14
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a visitor to the Casa Colina Care site, I want the DOH Inspected credential to show "March 2026" instead of "March 2025", So that the site reflects the most recent inspection date.

**Acceptance Criteria:**
**Scenarios:**

1. Given a visitor loads the Casa Colina Care home page, When they view the DOH Inspected credential in the Credentials & accreditations section, Then it reads "March 2026 · no deficiencies" instead of "March 2025 · no deficiencies".
2. Given the rendered page source, When searching for the string "March 2025" in the DOH Inspected credential, Then no match is found.

---

## Scope

What this plan covers:
- Update the hardcoded DOH Inspected credential date string in `app/page.tsx` so it reads March 2026 instead of March 2025.
- Add automated test coverage asserting the corrected credential text.

What this plan does NOT cover (deferred or out of scope):
- The hi-fi design mockup files (`claude_design/kupuna.jsx`, `claude_design/Casa Colina Care - Kupuna Hi-Fi.html`, `claude_design/Casa Colina Care - Lanai Hi-Fi.html`) also reference "March 2025" (and, in `kupuna.jsx`, an FAQ answer mentioning "most recent DOH inspection in March 2025"). These are static design references per `AGENTS.md`, not rendered by the live app, and are not covered by this story's AC.

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:313` | Credentials & accreditations section — `<p>March 2025 · no deficiencies</p>` inside the "DOH Inspected" `.cred` card. This is the single line to edit. |
| `tests/bugs.spec.ts` | Existing Playwright regression spec (ADO 207036–207043, per `AGENTS.md`). No current coverage of the DOH Inspected credential date — a new assertion should be added here or as a standalone spec. |

*Design-reference files (`claude_design/kupuna.jsx`, `claude_design/*.html`) also match "March 2025" but are explicitly out of scope per above — not listed as touchpoints for this story.*

---

## Approach

1. Edit `app/page.tsx:313` — replace `March 2025` with `March 2026` in the DOH Inspected credential text.
2. Start `bun run dev` and visually confirm the credential renders correctly (touch `app/globals.css` first if styles don't hot-reload, per the known Turbopack gotcha).
3. Add a Playwright assertion (in `tests/bugs.spec.ts` or a new spec) verifying the DOH Inspected credential text contains "March 2026 · no deficiencies" and does not contain "March 2025" — this operationalizes ADO Test Case #208615.
4. Run `bun run lint` and `bun run test:e2e` to confirm no regressions.
5. Commit referencing `AB#208613`.

Key decisions and trade-offs:
- Scope intentionally limited to `app/page.tsx` (the live, rendered copy) per the story's AC, consistent with the approach taken for story #208606. The `claude_design/*` mockups are left untouched as historical design snapshots unless the user separately requests parity.

---

## Dependencies

| Dependency | Type | Notes |
|------------|------|-------|
| ADO Test Case #208615 ("DOH Inspected credential displays 'March 2026'") | Downstream | Already filed, linked via Tests to this story. Should be executed/marked once the fix lands. |

*No external dependencies identified.*

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| Scenario 1: credential reads "March 2026 · no deficiencies" | E2E (Playwright) | Load home page, scroll to Credentials & accreditations section, assert DOH Inspected `.cred p` text contains "March 2026 · no deficiencies" |
| Scenario 2: no "March 2025" remains in credential | E2E (Playwright) | Assert the DOH Inspected credential text does not contain "March 2025" |

---

## Open Questions

1. Should the `claude_design/*` hi-fi mockup files (`kupuna.jsx`, and the corresponding `.html` files, including the FAQ line in `kupuna.jsx` referencing "March 2025") also be updated to March 2026 for design-source parity, or intentionally left as historical snapshots? — Product/design owner to confirm. Same open question as #208606's parallel year-update.
2. This story has no parent Feature (flagged LOW during `/jx-pm:refine-story`, left unresolved by choice). Should it be grouped under a "Site content maintenance" Feature alongside #208606, or remain standalone?
