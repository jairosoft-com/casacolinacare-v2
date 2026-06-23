---
title: Vercel bun auto-detection
type: platform
tags: [vercel, bun, deployment, next.js, package-manager]
created: 2026-06-22
updated: 2026-06-22
source_count: 1
aliases: [vercel bun, bun vercel deploy]
---

# Vercel bun auto-detection

## Behavior

When `vercel --prod --yes` is run from a project that has a `bun.lock` file (and no `package-lock.json` or `pnpm-lock.yaml`), Vercel's build system (v3, CLI v54+) automatically selects bun as the package manager for the cloud build:

1. `bun install` — install dependencies
2. `bun run build` — run the build script

No `vercel.json` override is required. The presence of `bun.lock` is the signal.

## Confirmed environment

- Vercel CLI: 54.1.0 / 54.14.0
- Project: Next.js 16.2.9 + bun 1.3.x
- Build log confirms: `bun install v1.3.12` → `$ next build`

## Implication

`vercel.json` with `"installCommand": "bun install"` is **not needed** for standard Next.js + bun projects. Only add it if you need to override the detected defaults (e.g. custom install flags, monorepo scoping).

## Related

- [[Next.js 16 Breaking Changes]]
- [[Next.js 16 Turbopack Root Confusion]]

## Sources

- casacolinacare-v2 dev session 2026-06-22
