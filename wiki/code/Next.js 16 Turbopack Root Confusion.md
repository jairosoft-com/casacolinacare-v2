---
title: Next.js 16 Turbopack Root Confusion
type: code
tags: [next.js, turbopack, debugging]
created: 2026-06-21
updated: 2026-06-21
source_count: 1
aliases: [turbopack mixed root, turbopack project root]
---

# Next.js 16 Turbopack Root Confusion

## Problem

If lockfiles exist in a parent directory (e.g. `~/package.json`, `~/pnpm-lock.yaml`), Turbopack infers the parent as the project root. The `.next/` cache ends up with mixed compilation: some chunks resolve `[project]/node_modules/…` (correct) while others resolve using the parent path `[project]/Projects/…/node_modules/…` (wrong). This breaks module exports at runtime — the symptom is `TypeError: components.ComponentMod.handler is not a function`.

## Fix

**Step 1 — Pin the workspace root in `next.config.ts`:**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
```

**Step 2 — Clear the stale cache and restart:**

```sh
rm -rf .next && bun dev
```

## Why It Happens

Turbopack walks up the directory tree looking for lockfiles to determine the workspace root. A `pnpm-lock.yaml` or `package-lock.json` in a parent directory will cause it to claim that parent as the root, even if it has nothing to do with the current project.

## Related

- [[Next.js 16 ComponentMod.handler Architecture]]
- [[Next.js 16 Breaking Changes]]

## Sources

- casacolinacare-v2 dev session 2026-06-21
