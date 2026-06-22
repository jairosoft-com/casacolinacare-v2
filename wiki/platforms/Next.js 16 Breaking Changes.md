---
title: Next.js 16 Breaking Changes
type: platform
tags: [next.js, breaking-changes, upgrade]
created: 2026-06-21
updated: 2026-06-21
source_count: 1
aliases: [next 16, nextjs 16 upgrade]
---

# Next.js 16 Breaking Changes

Key changes from Next.js 15.x relevant to this project. Full guide: `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`

## Turbopack Is Now Default

Turbopack is the default bundler — the `--turbopack` flag is no longer needed (or valid). `next dev` uses Turbopack automatically.

See [[Next.js 16 Turbopack Root Confusion]] for a common dev-environment pitfall.

## Async Request APIs — Fully Removed

`cookies()`, `headers()`, `params`, and `searchParams` are fully async. There is no synchronous fallback. Every usage must be awaited:

```ts
// Next.js 16 — required
const cookieStore = await cookies();
const { id } = await params;
```

## `middleware` Renamed to `proxy`

The `middleware` key in `next.config` is now `proxy`.

## App Router Render Path

All App Router pages now render via `ComponentMod.handler(req, res, ctx)` — see [[Next.js 16 ComponentMod.handler Architecture]].

## Image Config Breaking Changes

Several image configuration keys were renamed. Check the upgrade guide for the full list before migrating an existing `next.config`.

## Sources

- `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`
- casacolinacare-v2 dev session 2026-06-21
