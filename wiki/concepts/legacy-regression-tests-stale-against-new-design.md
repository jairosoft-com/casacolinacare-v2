---
title: Legacy regression tests can go stale against a new design source
type: concept
tags: [testing, playwright, design, ado, tech-debt]
created: 2026-07-29
updated: 2026-07-29
source_count: 0
aliases: [stale red tests, design vs bug conflict]
provenance: synthesis
---

# Legacy regression tests can go stale against a new design source

## Pattern

When a project re-imports a design (e.g. via [[Claude Design MCP (DesignSync) for design-fidelity diffing|Claude Design MCP]]) and a Playwright red-test suite ([[Bug-driven TDD — red spec before fix]]) predates that import, some pre-existing tests can encode assumptions the new design explicitly contradicts. The test isn't wrong when it was written — the ground truth moved.

## Evidence

Three concrete cases surfaced in this project's `tests/bugs.spec.ts` while implementing a batch of design-fidelity stories:

- **#207041** assumed the Visit-section CTA buttons would be *fixed* (given real hrefs). The current design instead calls for *removing* them entirely (the hero already has its own CTA) — the fix that was actually correct made the test fail for a completely different reason than before.
- **#207043** assumed all 4 pillar CTAs get real links. The design only wires 3 of 4 (one pillar intentionally has no link target on this single-page site).
- **#207042**'s own locator has an independent bug (see [[Playwright :has() filter matches ancestor elements, not just descendants]]) that miscounts anchors regardless of app state — it went from a coincidental false-pass to a false-fail as unrelated page content changed.

## Resolution pattern used

Implement per the actual current design, then comment on the ADO bug documenting *why* the test's premise is now stale and what a human needs to decide (close as won't-fix/superseded, or rewrite the test). Don't silently rewrite the test to force a pass, and don't block the real implementation work waiting on bug triage — flag and move on.

## Related

- [[Bug-driven TDD — red spec before fix]]
- [[Playwright :has() filter matches ancestor elements, not just descendants]]
- [[CasaColinaCare.com (Azure DevOps Project)]]
- [[Casa Colina main has 7 pre-existing failing bugs.spec.ts tests]]

## Sources

- Session: Lanai design-fidelity batch (5 stories) + hover/favicon/scroll-spy fixes (2026-07-29)
