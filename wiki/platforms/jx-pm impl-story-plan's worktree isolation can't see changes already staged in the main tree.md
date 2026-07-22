---
title: jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree
type: platform
tags: [claude-code, jx-pm, worktree, git, plugin]
created: 2026-07-08
updated: 2026-07-22
source_count: 1
aliases: [impl-story-plan worktree, staged changes worktree mismatch, untracked file worktree]
---

# jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree

## Problem

`jx-pm:impl-story-plan` is designed to implement each child Task inside a fresh, isolated git
worktree — useful when a task requires new code changes that shouldn't collide with the user's
working tree. But when a task's only remaining work is "commit an already-`git add`-staged
change," an isolated worktree is the wrong tool: a fresh worktree checkout starts from `HEAD` and
has no visibility into the main tree's staged-but-uncommitted index state. The diff simply
doesn't exist there to commit.

**Related case (2026-07-13):** the same blind spot applies to completely **untracked** files, not
just staged changes to tracked ones. A code change referenced a new image asset
(`public/assets/kriss-homepage-new.png`) that existed on disk in the main tree but had never been
`git add`-ed. The isolated worktree — checked out from git history only — didn't have it, which
surfaced as a Next.js image-optimizer 400 ("requested resource isn't a valid image") during
verification. Had this gone unnoticed, the same file would have been missing after merge in any
fresh clone, CI run, or production deploy, since `git worktree add` only materializes committed,
tracked content.

**Related case (2026-07-22):** the same blind spot extends to `node_modules/` itself. Running
`next dev` inside a freshly-created worktree failed immediately: `"couldn't find the Next.js
package (next/package.json)"` — because `node_modules/` is gitignored, and a worktree only
materializes committed, tracked content, exactly like the untracked-image case above but for the
entire dependency tree instead of one asset.

## Fix

Before creating a worktree, check whether the task is actually "write new code" (worktree is
correct) or "operate on the current tree's uncommitted state" (commit staged changes, resolve a
conflict, etc. — must happen in the main working tree). For the latter, skip the worktree and
operate directly in the main tree, confirming with the user first since it deviates from the
skill's default behavior.

For asset-swap style tasks specifically: run `git status` on the main tree first and check
whether any file the task references is untracked. If so, copy it into the worktree (or commit it
there directly) alongside the code change — otherwise the fix silently breaks outside the current
worktree.

For Node.js projects, also symlink `node_modules` from the main tree into the worktree
(`ln -s <main>/node_modules <worktree>/node_modules`) before running dev servers or tests there —
faster and sufficient versus a fresh install, and avoids the missing-package failure above.

## Related

- [[CasaColinaCare.com (Azure DevOps Project)]]
- [[Windows git worktree remove fails due to own shell cwd]]

## Sources

- casacolinacare-v2 dev session 2026-07-08
- Session: ADO story creation, refinement, and implementation for #208447/#208450 (2026-07-13)
- Session: Story #208916 end-to-end + kriss-homepage-new2 hotfixes (2026-07-22)
