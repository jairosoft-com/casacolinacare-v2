---
title: Wiki Index
updated: 2026-06-21
page_count: 6
---

# Wiki Index

## Ideas

_No ideas yet._

## Concepts

_No concepts yet._

## Entities

_No entities yet._

## Topics

_No topics yet._

## Plugins

_No plugins yet._

## Platforms

- [[Next.js 16 Breaking Changes]] — Turbopack default, async-only request APIs, middleware→proxy rename, new render path

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

## Sources

_No sources yet._
