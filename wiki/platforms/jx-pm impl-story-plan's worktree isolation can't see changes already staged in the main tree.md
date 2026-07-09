---
title: jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree
type: platform
tags: [claude-code, jx-pm, worktree, git, plugin]
created: 2026-07-08
updated: 2026-07-08
source_count: 1
aliases: [impl-story-plan worktree, staged changes worktree mismatch]
---

# jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree

## Problem

`jx-pm:impl-story-plan` is designed to implement each child Task inside a fresh, isolated git
worktree — useful when a task requires new code changes that shouldn't collide with the user's
working tree. But when a task's only remaining work is "commit an already-`git add`-staged
change," an isolated worktree is the wrong tool: a fresh worktree checkout starts from `HEAD` and
has no visibility into the main tree's staged-but-uncommitted index state. The diff simply
doesn't exist there to commit.

## Fix

Before creating a worktree, check whether the task is actually "write new code" (worktree is
correct) or "operate on the current tree's uncommitted state" (commit staged changes, resolve a
conflict, etc. — must happen in the main working tree). For the latter, skip the worktree and
operate directly in the main tree, confirming with the user first since it deviates from the
skill's default behavior.

## Related

- [[CasaColinaCare.com (Azure DevOps Project)]]

## Sources

- casacolinacare-v2 dev session 2026-07-08
