---
title: Claude Code Plugin Marketplace Naming Ambiguities
type: platform
tags: [claude-code, plugins, marketplace]
created: 2026-07-06
updated: 2026-07-06
source_count: 0
aliases: [git plugin, ado plugin, langfuse plugin collision]
provenance: synthesis
---

# Claude Code Plugin Marketplace Naming Ambiguities

Several plugin names a user might reasonably ask for don't exist as literal marketplace entries, and some published names collide with unrelated content. Worth checking `claude plugin install` candidates carefully before assuming a name maps 1:1 to intent.

## Key claims

- No plugin is literally named "git" — the closest matches in `claude-plugins-official` are `commit-commands` (simple git workflow helper: commit/push/PR), `github` (GitHub MCP server), and `gitlab` (GitLab MCP server). These serve different purposes; pick by what you actually need.
- No plugin is scoped to Azure DevOps specifically. `azure@claude-plugins-official` is a broad, general-purpose Azure cloud-ops plugin (50+ services: resources, deployments, cost) — not Boards/DevOps-specific. ADO Boards/work-item access can instead come from a separately-configured `mcp__azure-devops__*` MCP server plus the `jx-pm:ado` skill.
- `langfuse@claude-plugins-official` (skills only, sourced from `langfuse/skills.git`) and `langfuse-observability@claude-plugins-official` (adds Stop/SessionEnd hooks that ship trace data to a Langfuse host, sourced from a different repo) are two distinct plugins with confusingly similar names — installing one does not give you the other. The observability variant requires `LANGFUSE_SECRET_KEY`/`LANGFUSE_PUBLIC_KEY` config before it activates.

## Related

- [[Claude Code Plugin CLI and Skills-Dir Plugins]]

## Sources

- Session: Plugin mgmt + ADO project mapping (2026-07-06)
