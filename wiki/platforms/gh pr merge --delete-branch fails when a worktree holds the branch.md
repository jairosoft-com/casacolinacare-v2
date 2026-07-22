---
title: gh pr merge --delete-branch fails when a worktree holds the branch
type: platform
tags: [github-cli, git, worktree, pr-merge]
created: 2026-07-22
updated: 2026-07-22
source_count: 0
aliases: [gh pr merge delete-branch worktree, failed to delete local branch used by worktree]
provenance: synthesis
---

# gh pr merge --delete-branch fails when a worktree holds the branch

## Problem

`gh pr merge --squash --delete-branch --admin` behaves differently depending on whether the PR's
head branch is currently checked out in a `git worktree`:

- **With an active worktree on the branch:** the command exits 1 with `"failed to delete local
  branch ... used by worktree"`. The squash-merge itself still succeeds, but the *remote* branch
  deletion also silently doesn't happen — confirmed by `git fetch --prune` still showing the
  remote ref afterward — even though `--delete-branch` was passed and no error mentioned the
  remote at all.
- **With no worktree attached (a plain feature branch):** the same command cleanly deletes both
  remote and local branches in one shot, no follow-up needed.

## Fix

- If a worktree is involved, remove the worktree first (see
  [[Windows git worktree remove fails due to own shell cwd]] for Windows-specific removal
  issues), then delete the local branch (`git branch -D <branch>`, force needed post-squash — see
  that page's note on squash-merged branches).
- Explicitly delete the remote branch yourself if `--delete-branch` didn't: `git push origin
  --delete <branch>`. Don't assume it happened just because the merge succeeded.

## Related

- [[Windows git worktree remove fails due to own shell cwd]]
- [[CI-gated PR merge via background poll-and-merge script]]
- [[CasaColinaCare.com (Azure DevOps Project)]]

## Sources

- Session: Story #208916 end-to-end + kriss-homepage-new2 hotfixes (2026-07-22)
