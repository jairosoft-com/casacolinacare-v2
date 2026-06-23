---
title: Wiki Index
updated: 2026-06-22
page_count: 12
---

# Wiki Index

## Ideas

_No ideas yet._

## Concepts

- [[Bug-driven TDD — red spec before fix]] — write failing tests asserting fixed behavior before writing any fix; ADO ID in test name gives direct traceability
- [[AGENTS.md + CLAUDE.md shim pattern]] — store agent guidance in AGENTS.md; CLAUDE.md is a one-line `@AGENTS.md` shim for multi-agent projects

## Entities

_No entities yet._

## Topics

_No topics yet._

## Plugins

_No plugins yet._

## Platforms

- [[Next.js 16 Breaking Changes]] — Turbopack default, async-only request APIs, middleware→proxy rename, new render path
- [[Vercel bun auto-detection]] — `bun.lock` presence causes Vercel build system to use bun automatically; no vercel.json needed
- [[Vercel CLI first deploy auto-connects GitHub]] — `vercel --prod --yes` with a GitHub remote auto-links the repo; no `vercel git connect` step needed
- [[Vercel domain alias vs project domains API]] — aliases API (`/v4/aliases?domain=`) is authoritative for domain routing; project domains endpoint can lag

## Projects

_No projects yet._

## Decisions

_No decisions yet._

## Code

- [[next/font — axes + weight constraint for variable fonts]] — `axes` requires `weight` to be omitted; explicit weight array alongside `axes` throws a build error
- [[Turbopack CSS file-watch miss on programmatic write]] — programmatic file writes may not trigger HMR; `touch` the file to force recompile
- [[Next.js 16 Turbopack Root Confusion]] — Turbopack infers parent dir as root when parent lockfiles exist; fix with `turbopack: { root: __dirname }` + clear `.next/`
- [[DesignSync get_file truncates binary assets at 256 KB]] — binary images cap at 256 KB (`truncated: true`); use the archived project folder instead
- [[Next.js 16 ComponentMod.handler Architecture]] — All App Router pages render via `ComponentMod.handler(req, res, ctx)` in base-server.js:1462
- [[playwright-cli vs @playwright/test — two separate tools]] — playwright-cli is an interactive browser driver; @playwright/test is the spec runner; installing one does not imply the other

## Sources

_No sources yet._
