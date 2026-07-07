---
title: Bug-driven TDD — red spec before fix
type: concept
tags: [testing, tdd, playwright, bug-tracking, ado]
created: 2026-06-22
updated: 2026-06-22
source_count: 1
aliases: [red spec, bug regression spec, failing test first]
---

# Bug-driven TDD — red spec before fix

## Pattern

When a backlog of known bugs is filed (e.g. as ADO work items), write a Playwright spec that asserts the **correct/fixed** behavior for each bug **before** writing any fix code. Every test fails immediately (the "red" state). As each bug is resolved, its test flips to green — no spec change needed.

## Why it works

- Forces a precise, executable description of what "fixed" means before touching code.
- Each green test is proof of fix, not opinion.
- The test suite becomes a permanent regression guard — the bug cannot silently reintroduce itself.

## Naming convention

Name each test with its ticket ID:
```ts
test('207038 — nav links update URL hash to #story', async ({ page }) => { ... })
```
This creates a direct traceability link: `bun run test:e2e -- -g "207038"` runs exactly the test for that bug. No cross-referencing required.

## Assertion style

Assert the **fixed** behavior (what should be true after the fix), not the current buggy behavior:
```ts
// ✓ asserts fixed behavior — fails today, passes after fix
await expect(page).toHaveURL(/#story$/);

// ✗ characterization test — passes today, must be inverted later
expect(page.url()).not.toContain('#story');
```

## This project's implementation

`tests/bugs.spec.ts` contains 8 tests for ADO bugs 207036–207043 (nav overflow, marquee, URL hash, tel:/mailto: links, inert care cards, placeholder CTAs, footer nav, pillar CTAs). All 8 were red at creation; 207037 passed immediately, revealing that the strip `overflow-x: hidden` was already in place.

## Related

- [[playwright-cli vs @playwright/test — two separate tools]]
- [[CasaColinaCare.com (Azure DevOps Project)]]

## Sources

- casacolinacare-v2 dev session 2026-06-22
