---
title: Windows git worktree remove fails due to own shell cwd
type: platform
tags: [windows, git, worktree, claude-code]
created: 2026-07-13
updated: 2026-07-22
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
3. **(2026-07-22)** Windows path-length limits, unrelated to locks. `git worktree remove --force`
   failed with `"Filename too long"` on a worktree containing deeply nested paths — a symlinked
   `node_modules` plus Playwright's `test-results/` output. No process held it and the shell's cwd
   was elsewhere; this is purely `MAX_PATH`-style truncation in git's own delete routine.

## Fix

- Cause 1: find and kill the process — `Get-CimInstance Win32_Process | Where-Object
  { $_.CommandLine -like "*<worktree-name>*" }`, then `Stop-Process -Force`.
- Cause 2: `cd` the shell back to the repo root before attempting removal. If `git worktree
  remove` reports `"<path>" is not a working tree`, git already pruned the registration but the
  directory itself may still be locked — retry the OS-level delete after the `cd`.
- Cause 3: skip `git worktree remove`/bash `rm` and delete with PowerShell instead —
  `Remove-Item -LiteralPath <path> -Recurse -Force` handles long paths where git's and bash's
  delete routines choke. Follow with `git worktree prune` to clear the now-stale registration.

Separately: after a squash-merge, `git branch -d <branch>` always fails with `"not fully
merged"` — the squash commit on the target branch isn't a descendant of the feature branch tip,
so git can't verify it via ancestry. Safe to force with `git branch -D <branch>` once you've
confirmed the squash actually landed on the target branch.

## Related

- [[jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree]]

## Sources
- Session: ADO story creation, refinement, and implementation for #208447/#208450 (2026-07-13)
- Session: Story #208916 end-to-end + kriss-homepage-new2 hotfixes (2026-07-22)
