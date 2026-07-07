---
title: Turbopack CSS file-watch miss on programmatic write
type: code
tags: [next.js, turbopack, css, hmr, debugging]
created: 2026-06-21
updated: 2026-06-21
source_count: 1
aliases: [turbopack css stale, turbopack hmr miss, turbopack file watcher]
---

# Turbopack CSS file-watch miss on programmatic write

## Problem

When a CSS file is written programmatically (by a tool, script, or AI assistant) while `next dev` is already running, Turbopack's file watcher may silently miss the change. The old compiled CSS chunk continues to be served — no build error appears in the browser or terminal.

## Symptom

The page loads without errors, but styles are wrong:

- Body background is the old color
- `font-family` is the old font
- Layout classes (`.nav`, `.hero`, etc.) don't apply
- Computed style checks in DevTools return old values

Checking the compiled chunk confirms it still has old content despite the source file being updated.

## Fix

```sh
touch app/globals.css
```

Running `touch` updates the file's mtime, which reliably triggers Turbopack to reprocess the file. The compiled chunk grows to reflect the new content; a browser hard-refresh then picks it up.

## Why it happens

Turbopack watches files via the OS file notification API (kqueue on macOS). Programmatic writes sometimes don't emit a notification event — or the event fires before the write is fully flushed — leaving the watcher unaware of the change.

## Related

- [[Next.js 16 Turbopack Root Confusion]] — a separate Turbopack caching issue caused by parent-directory lockfiles
- [[Wiki Gotchas Lack Code-Side Back-References]]

## Sources

- casacolinacare-v2 dev session 2026-06-21
