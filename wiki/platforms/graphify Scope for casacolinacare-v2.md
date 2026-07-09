---
title: graphify Scope for casacolinacare-v2
type: platform
tags: [graphify, tooling, graphifyignore]
created: 2026-07-06
updated: 2026-07-08
source_count: 0
aliases: [graphify corpus scope]
provenance: synthesis
---

# graphify Scope for casacolinacare-v2

A full-repo `/graphify` scan of casacolinacare-v2 hits ~5.65M words, well over the 2M-word warning threshold — dominated by `.claude/` (agent session logs) and `claude_design/` (hi-fi design assets), neither of which adds real code or documentation signal to the graph.

## Key claims

- Recommended scope for this repo: `app/`, `tests/`, `wiki/`, and root-level config files — small, fast, and skips the corpus-size warning entirely.
- Scope is enforced by a **`.graphifyignore`** file at the repo root. The incremental `--update` path (`detect_incremental`) **does** honor `.graphifyignore`, so keeping that file complete is what keeps every update clean.
- Exclude `.claude/`, `.agents/`, `scratchpad/`, and `claude_design/`. The `.agents/` (vendored skill rule docs) and `scratchpad/` (plan files) directories were committed into the repo after the initial scoping and must be excluded too — `.graphifyignore` did not originally list them.

## Evidence: an incomplete ignore leaks ~120 files into --update

With only `claude_design/` and `public/` in `.graphifyignore`, a `--update` scan flagged **131 "new" files** — ~120 of them `.claude/data/sessions/*.json` transcripts, `.claude/hooks/*.py` scripts, and 100+ `.agents/skills/**` rule docs. Adding `.claude/`, `.agents/`, and `scratchpad/` dropped the scan to **12 real in-scope files with 0 leakage**. See [[graphify --update Re-extraction Gotchas]] for what governs the merge once detection is clean.

## Sources

- Session: Plugin mgmt + ADO project mapping (2026-07-06)
- Session: graphify-update-mechanics (2026-07-08)
