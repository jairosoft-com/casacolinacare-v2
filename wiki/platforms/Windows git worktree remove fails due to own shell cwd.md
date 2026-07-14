---
title: Windows git worktree remove fails due to own shell cwd
type: platform
tags: [windows, git, worktree, claude-code]
created: 2026-07-13
updated: 2026-07-13
source_count: 0
aliases: [worktree cleanup windows, access is denied worktree]
provenance: synthesis
---

# Windows git worktree remove fails due to own shell cwd

## Problem

Two distinct causes were hit back-to-back cleaning up implementation worktrees on Windows, both
surfacing as `git worktree remove --force` or a directory delete failing with "Access is denied"
/ "being used by another process" / "Filename too long":

1. A leftover `next dev` / Turbopack `node.exe` process still running from that worktree holds
   file locks on `.next/` cache and `node_modules/.bin/*.exe`.
2. The agent's own persistent Bash/PowerShell shell still has its working directory `cd`'d inside
   the worktree from an earlier command in the same session. On Windows this holds a directory
   handle open and blocks delete/rename even with zero other processes running — confirmed by
   testing `Rename-Item` on the bare top-level folder, which failed with "in use" while every
   file-level lock check came back clean.

## Fix

- Cause 1: find and kill the process — `Get-CimInstance Win32_Process | Where-Object
  { $_.CommandLine -like "*<worktree-name>*" }`, then `Stop-Process -Force`.
- Cause 2: `cd` the shell back to the repo root before attempting removal. If `git worktree
  remove` reports `"<path>" is not a working tree`, git already pruned the registration but the
  directory itself may still be locked — retry the OS-level delete after the `cd`.

## Related

- [[jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree]]

## Sources
- Session: ADO story creation, refinement, and implementation for #208447/#208450 (2026-07-13)
