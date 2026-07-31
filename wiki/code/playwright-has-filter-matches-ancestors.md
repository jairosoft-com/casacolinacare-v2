---
title: "Playwright :has() filter matches ancestor elements, not just descendants"
type: code
tags: [playwright, testing, locators, gotcha]
created: 2026-07-29
updated: 2026-07-29
source_count: 0
aliases: [locator has filter bug, playwright has ancestor match]
provenance: synthesis
---

# Playwright `:has()` filter matches ancestor elements, not just descendants

## Problem

```js
page.locator('div').filter({ has: page.locator('h4', { hasText: 'X' }) })
```

matches *every* ancestor `div` that contains a matching `h4` descendant — not just the
immediate/intended wrapper. `:has()`-style containment checks walk the whole subtree, so any
outer container that happens to also contain the target heading qualifies too.

## Evidence

Broke `tests/bugs.spec.ts`'s 207042 check in this project:

```js
page.locator('footer div')
  .filter({ has: page.locator('h4', { hasText: 'Visit' }) })
  .locator('li a')
```

The intended target was the "Visit" column `<div>`. But the outer `footer .wrap` div *also*
"has" that `h4` as a descendant, so it matched too. `.locator('li a')` chained after the filter
then counted anchors from **both** matched divs — since the Visit div's anchors are a subset of
`.wrap`'s descendants, the query effectively counted every `li a` in the whole footer, not just
the Visit column.

This first caused a **false pass** (the combined count coincidentally matched the expected
value of 4) and later a **false fail** (the count changed for an unrelated reason — anchors were
added to a different footer column by a separate story) — the test was never actually verifying
the right scope, in either direction.

## Fix

Scope directly to the intended container instead of an ancestor-inclusive filter. An
adjacent-sibling selector avoids the problem entirely:

```js
page.locator('footer h4:text-is("Visit") + ul')
```

This only matches the `<ul>` immediately following the specific heading — no ancestor can
accidentally qualify.

## Related

- [[Legacy regression tests can go stale against a new design source]]
- [[Bug-driven TDD — red spec before fix]]
- [[playwright-cli vs @playwright/test — two separate tools]]

## Sources

- Session: Lanai design-fidelity batch (5 stories) + hover/favicon/scroll-spy fixes (2026-07-29)
