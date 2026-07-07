---
title: graphify Scope for casacolinacare-v2
type: platform
tags: [graphify, tooling]
created: 2026-07-06
updated: 2026-07-06
source_count: 0
aliases: [graphify corpus scope]
provenance: synthesis
---

# graphify Scope for casacolinacare-v2

A full-repo `/graphify` scan of casacolinacare-v2 hits ~5.65M words, well over the 2M-word warning threshold — dominated by `.claude/` (31 files, agent session logs) and `claude_design/` (31 files, hi-fi design assets), neither of which adds real code or documentation signal to the graph.

## Key claims

- Recommended scope for this repo: `app/`, `tests/`, `wiki/`, and root-level config files (28 files total) — small, fast, and skips the corpus-size warning entirely.
- `.claude/` and `claude_design/` should be excluded from the scan unless specifically auditing session history or design-asset provenance.

## Sources

- Session: Plugin mgmt + ADO project mapping (2026-07-06)
