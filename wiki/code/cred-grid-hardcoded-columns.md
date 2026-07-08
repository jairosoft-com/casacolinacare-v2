---
title: cred-grid CSS hardcodes column count to card count
type: code
tags: [css, grid, globals.css, layout-gotcha]
created: 2026-07-07
updated: 2026-07-07
source_count: 1
aliases: [credentials grid gap, cred-grid layout break]
---

# cred-grid CSS hardcodes column count to card count

## Problem

`app/globals.css` defines the Credentials section grid as:

```css
.cred-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0; ...}
```

The `5` is hardcoded to match the exact number of `.cred` card `<div>`s rendered in `app/page.tsx`. Adding or removing a credential card without also updating this value leaves an empty gap (if a card is removed) or squeezes cards narrower than intended (if one is added), since the grid still reserves the old column count.

## Fix

When changing the number of `.cred` cards in the Credentials section, update `grid-template-columns:repeat(N,1fr)` in `globals.css` to match the new count `N` in the same change.

## Related

- [[Casa Colina site duplicates marketing facts across sections]] — this gotcha surfaced while removing the "Memory Care Certified" card as part of a content-accuracy fix

## Sources

- casacolinacare-v2 dev session 2026-07-07 — ADO story #208128
