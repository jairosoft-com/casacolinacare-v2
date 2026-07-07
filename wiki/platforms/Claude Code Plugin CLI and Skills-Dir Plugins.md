---
title: Claude Code Plugin CLI and Skills-Dir Plugins
type: platform
tags: [claude-code, plugins, cli]
created: 2026-07-06
updated: 2026-07-06
source_count: 0
aliases: [claude plugin install, skills-dir plugin]
provenance: synthesis
---

# Claude Code Plugin CLI and Skills-Dir Plugins

Claude Code has a full non-interactive CLI for plugin management, separate from the interactive `/plugin` command, plus a lighter-weight "skills-dir" mechanism that bypasses the plugin system entirely.

## Key claims

- `claude plugin install <name>@<marketplace>` installs from any known marketplace; `claude plugin list` shows every install with its scope (user/project/local) and enabled/disabled state; `claude plugin details <name>` shows component inventory and projected token cost.
- Skills placed directly under `~/.claude/skills/<name>/` (e.g. `graphify`, `langfuse`) auto-load as "skills-dir plugins" every session — they never appear in `claude plugin list` output or `~/.claude/plugins/installed_plugins.json`, since they bypass the marketplace/install flow entirely.

## Related

- [[Claude Code Plugin Marketplace Naming Ambiguities]]

## Sources

- Session: Plugin mgmt + ADO project mapping (2026-07-06)
