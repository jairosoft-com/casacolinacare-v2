---
title: bun/bunx not on PATH in Windows Claude Code environment
type: code
tags: [bun, windows, path, tooling, powershell, bash]
created: 2026-07-07
updated: 2026-07-07
source_count: 1
aliases: [bun command not found, bunx command not found, bun full path]
---

# bun/bunx not on PATH in Windows Claude Code environment

## Problem

On this Windows machine, `bun` and `bunx` are not resolvable via `PATH` in either terminal tool available to Claude Code:

- Bash tool (Git Bash / `/usr/bin/bash`): `bun: command not found` (exit 127)
- PowerShell tool: `The term 'bun' is not recognized as the name of a cmdlet...` (`CommandNotFoundException`)

This is despite `bun` being fully functional when the user runs it themselves in their normal shell — the discrepancy is specific to the non-interactive/sandboxed shells these tools spawn, which don't source the same profile/PATH additions.

## Fix

Locate the real install path and invoke by full path:

```powershell
Get-ChildItem "$env:USERPROFILE\.bun\bin"
# → bun.exe, bunx.exe live here
```

Then call directly:

```powershell
& "$env:USERPROFILE\.bun\bin\bun.exe" run dev
& "$env:USERPROFILE\.bun\bin\bunx.exe" @playwright/cli open http://localhost:3000
```

`run_in_background: true` works fine with the full-path invocation for long-running processes like `bun run dev`.

## Why it happens

Background/tool-spawned shells on Windows often get a minimal, non-login environment that doesn't replay the user's shell profile (`.bashrc`, PowerShell `$PROFILE`) where `bun`'s install script normally prepends `~/.bun/bin` to `PATH`.

## Related

- [[playwright-cli vs @playwright/test — two separate tools]] — same session, needed the same full-path workaround for `bunx`
- [[graphify CLI not invokable via bun/bunx]] — same-session tooling gap, different root cause

## Sources

- casacolinacare-v2 dev session 2026-07-07
