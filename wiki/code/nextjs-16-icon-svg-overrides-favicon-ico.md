---
title: "Next.js 16 app/icon.svg overrides app/favicon.ico"
type: code
tags: [nextjs, favicon, metadata, app-router]
created: 2026-07-29
updated: 2026-07-29
source_count: 0
aliases: [nextjs favicon convention, app icon priority]
provenance: synthesis
---

# Next.js 16 `app/icon.svg` overrides `app/favicon.ico`

## Fact

Next.js's file-based icon convention: an `app/icon.(ico|jpg|jpeg|png|svg)` file placed
anywhere under `app/**/*` is auto-detected and emitted as

```html
<link rel="icon" href="/icon.svg?<generated>" type="image/svg+xml" sizes="any" />
```

This takes priority over the more limited `app/favicon.ico` slot, which may only live at the
app root and only supports `.ico`. Both link tags can coexist, but the `icon` convention is the
one to use for anything beyond a bare `.ico`.

## Context

In this project, a custom `favicon.svg` (house-outline mark, terracotta heart, matching the
site's ink/terracotta palette) sat unused in `public/assets/` while `app/favicon.ico` — the
unmodified `create-next-app` scaffold default — kept showing in the browser tab. Fixed by
copying the custom SVG's content into `app/icon.svg` and deleting the stale `favicon.ico`
entirely (to avoid any legacy direct `/favicon.ico` browser fallback request finding it).

## Related

- [[Next.js 16 Breaking Changes]]
- [[Next.js 16 ComponentMod.handler Architecture]]

## Sources

- Session: Lanai design-fidelity batch (5 stories) + hover/favicon/scroll-spy fixes (2026-07-29)
