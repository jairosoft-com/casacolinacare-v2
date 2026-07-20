---
title: Claude Code to Langfuse session tracing
type: platform
tags: [langfuse, claude-code, observability, hooks]
created: 2026-07-14
updated: 2026-07-14
source_count: 0
aliases: [langfuse hook, claude code langfuse, TRACE_TO_LANGFUSE, langfuse_hook.py]
provenance: synthesis
---

# Claude Code to Langfuse session tracing

This repo traces Claude Code sessions (prompts, turns, tool calls, token usage) to Langfuse via the `langfuse-observability` plugin's **Stop hook** (`.claude/hooks/langfuse_hook.py`). Setup is subtle because of how the hook reads credentials.

## Key claims

- The hook reads credentials from **`os.environ` only** — `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, and `TRACE_TO_LANGFUSE` (which must equal the string `"true"`). It has **no `.env` loader**.
- Claude Code injects env into hook subprocesses from a settings `env` block, so keys must live in the **gitignored `.claude/settings.local.json`** `env` block. A bare `.env` is **not** auto-injected — tracing keeps working in a session that already captured the vars but silently dies on a fresh restart.
- **Fail-open traps (all silent):** a missing `langfuse`/`opentelemetry` SDK makes the hook `sys.exit(0)` *before* it logs anything (so there is **no log line at all**); missing keys or `TRACE_TO_LANGFUSE != "true"` returns 0 with nothing sent. Verify via `~/.claude/state/langfuse_hook.log` (look for `Processed N turns`).
- Never put keys in tracked `.claude/settings.json` — only gitignored `settings.local.json` / `.env`. (A secret key was found committed in `settings.json` this session and moved out.)
- The tracer targets `langfuse>=4.0,<5`.

## Related

- [[Claude Code Plugin Marketplace Naming Ambiguities]] — the two "langfuse" plugins are the same plugin on two marketplaces
- [[Claude Code plugin enablement is per-developer]]

## Sources

- Session: Langfuse tracing + plugin/skill onboarding (2026-07-14)
