---
title: Next.js 16 ComponentMod.handler Architecture
type: code
tags: [next.js, app-router, architecture]
created: 2026-06-21
updated: 2026-06-21
source_count: 1
aliases: [ComponentMod handler, app-page handler]
---

# Next.js 16 ComponentMod.handler Architecture

## Overview

In Next.js 16, all App Router page rendering is dispatched through:

```js
// base-server.js:1462
await components.ComponentMod.handler(handlerReq, handlerRes, { waitUntil: this.getWaitUntil() });
```

This replaces the older rendering path used in Next.js 13–15.

## How It Works

1. `components.ComponentMod` is the compiled module for the page, loaded from `.next/dev/server/app/page.js` (or the build equivalent).
2. The `handler` export is compiled from `node_modules/next/dist/esm/build/templates/app-page.js` — the template Next.js uses for every app route.
3. Turbopack registers `handler` as a lazy getter via `__turbopack_context__.s(["handler", () => handler, ...])` (esmExport). The export is only resolved when accessed.
4. `page.js` loads the necessary chunks via `R.c(chunkPath)` then returns `R.m(moduleId).exports` — so `ComponentMod` is the fully-evaluated module object including the `handler` export.

## Failure Mode

If `ComponentMod.handler` is `undefined`, Next.js throws:

```
TypeError: components.ComponentMod.handler is not a function
```

The most common cause in development is a stale or mixed `.next/` cache — see [[Next.js 16 Turbopack Root Confusion]].

## Related

- [[Next.js 16 Turbopack Root Confusion]]
- [[Next.js 16 Breaking Changes]]

## Sources

- casacolinacare-v2 dev session 2026-06-21
