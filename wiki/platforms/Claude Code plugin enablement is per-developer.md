---
title: Claude Code plugin enablement is per-developer
type: platform
tags: [claude-code, plugins, settings, onboarding]
created: 2026-07-14
updated: 2026-07-14
source_count: 0
aliases: [enabledPlugins, settings.local.json plugins, share plugins across team]
provenance: synthesis
---

# Claude Code plugin enablement is per-developer

## Key claims

- `enabledPlugins` normally lives in the **gitignored `.claude/settings.local.json`** — it is per-machine local state, so a teammate cloning the repo inherits **no** enabled plugins.
- To declare a repo's plugin set for the whole team, commit an `enabledPlugins` block to **`.claude/settings.json`** (tracked). Opening the repo then auto-enables those plugins — but only ones the developer has already installed; entries for uninstalled plugins are simply ignored.
- Plugin **installs and marketplaces stay per-machine** (`~/.claude/plugins/`). Committing `enabledPlugins` shares the *intent*, not the install — each dev still adds the marketplaces and installs the plugins.
- This repo's required plugin set and setup steps are documented in `docs/plugins-for-this-repo.md`.

## Related

- [[Claude Code Plugin CLI and Skills-Dir Plugins]]
- [[Claude Code Plugin Marketplace Naming Ambiguities]]

## Sources

- Session: Langfuse tracing + plugin/skill onboarding (2026-07-14)
