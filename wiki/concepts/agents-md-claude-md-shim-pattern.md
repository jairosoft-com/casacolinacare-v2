---
title: AGENTS.md + CLAUDE.md shim pattern
type: concept
tags: [claude-code, codex, agents, project-setup, multi-agent]
created: 2026-06-22
updated: 2026-06-22
source_count: 1
aliases: [AGENTS.md shim, CLAUDE.md shim, agent guidance pattern]
---

# AGENTS.md + CLAUDE.md shim pattern

## Problem

Different AI coding agents read different files for project context:
- **Claude Code** reads `CLAUDE.md` (and any `@`-imported files).
- **OpenAI Codex** and other agents read `AGENTS.md`.

Maintaining two files with the same content leads to drift.

## Pattern

Store all agent guidance in `AGENTS.md` (the canonical file). Make `CLAUDE.md` a one-line shim:

```
# CLAUDE.md
@AGENTS.md
```

Claude Code's `@` import directive reads `AGENTS.md` inline. Codex reads `AGENTS.md` directly. Both agents see identical guidance from a single source.

## File structure

```
repo/
  AGENTS.md     ← real content (commands, architecture, gotchas)
  CLAUDE.md     ← one line: @AGENTS.md
```

## What goes in AGENTS.md

- Build / test / dev commands (avoid the obvious)
- High-level architecture (things that require reading multiple files to understand)
- Package manager (especially if non-standard, e.g. bun)
- Known gotchas specific to the stack version (e.g. Next.js 16 breaking changes)
- Screenshot/output conventions

## What does NOT go in AGENTS.md

- Generic best practices ("write clean code", "handle errors")
- File-by-file inventory (agents can discover this)
- Anything already documented in `README.md` that isn't agent-specific

## This project

`casacolinacare-v2` uses this pattern. `CLAUDE.md` contains only `@AGENTS.md`; `AGENTS.md` has the full guidance including Next.js 16 warning, bun mandate, commands, architecture table, and known gotchas.

## Sources

- casacolinacare-v2 dev session 2026-06-22
