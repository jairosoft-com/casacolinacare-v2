---
title: Vendored skills symlink breaks on Windows git
type: platform
tags: [windows, git, symlink, skills]
created: 2026-07-14
updated: 2026-07-14
source_count: 0
aliases: [core.symlinks, .claude/skills symlink, windows skill not loading]
provenance: synthesis
---

# Vendored skills symlink breaks on Windows git

## Key claims

- This repo vendors agent skills in `.agents/skills/<name>/` (real files) and activates them for Claude Code via a **git-tracked symlink** `.claude/skills/<name>` → `../../.agents/skills/<name>`.
- Git on Windows does **not** create symlinks by default. Without it, that path clones as a small text file (the link-target string), and the skill silently fails to load.
- Fix: `git config --global core.symlinks true`, then re-clone or `git checkout -- <path>` (may also require Windows Developer Mode / admin). Alternatively install a real copy via the skill's own installer (e.g. `npx add-skill vercel-labs/agent-skills` for the Vercel skill).

## Related

- [[bun/bunx not on PATH in Windows Claude Code environment]]
- [[Windows git worktree remove fails due to own shell cwd]]

## Sources

- Session: Langfuse tracing + plugin/skill onboarding (2026-07-14)
