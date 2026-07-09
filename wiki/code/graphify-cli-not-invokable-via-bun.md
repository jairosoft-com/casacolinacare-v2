---
title: graphify CLI not invokable via bun/bunx
type: code
tags: [graphify, bun, tooling, blocked]
created: 2026-07-07
updated: 2026-07-07
source_count: 1
aliases: [graphify update failed, graphify command not found]
---

# graphify CLI not invokable via bun/bunx

## Problem

CLAUDE.md requires running `graphify update .` after modifying code to keep `graphify-out/` current. In this session, `graphify` was not a resolvable command via PATH (see [[bun/bunx not on PATH in Windows Claude Code environment]]), and running it through the package-runner fallback also failed:

```
bunx graphify update .
# → error: could not determine executable to run for package graphify
```

Unlike `@playwright/cli` (which resolved via its full package name `bunx @playwright/cli`), `graphify` doesn't appear to be a published package under that bare name, or its bin entry isn't named `graphify`.

## Status

Unresolved as of this session — code changes to `app/page.tsx`, `app/layout.tsx`, and `app/globals.css` were made without refreshing the graph. `graphify-out/manifest.json` still reflects pre-edit mtimes/hashes for those files.

## Next step

Find how `graphify` is actually installed/invoked in this repo (check for a local script, a differently-named package, or a global install path analogous to `~/.bun/bin/`) before relying on `graphify query`/`graphify update` again.

## Related

- [[bun/bunx not on PATH in Windows Claude Code environment]]
- [[graphify Scope for casacolinacare-v2]] — existing page on what graphify should scope to, written before this invocation gap was discovered
- [[graphify --update Re-extraction Gotchas]] — the merge/re-extraction mechanics that run once `graphify` is invocable and scoped

## Sources

- casacolinacare-v2 dev session 2026-07-07
