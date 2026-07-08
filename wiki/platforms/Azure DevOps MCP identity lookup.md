---
title: Azure DevOps MCP has no "whoami" tool — use core_get_identity_ids
type: platform
tags: [azure-devops, mcp, identity, tooling]
created: 2026-07-07
updated: 2026-07-07
source_count: 1
aliases: [ado whoami, ado get me, azure devops current user]
---

# Azure DevOps MCP has no "whoami" tool — use core_get_identity_ids

## Problem

Unlike the GitHub MCP server (`mcp__github__get_me`), the azure-devops MCP server exposes no direct "get my profile" or "whoami" tool.

## Fix

Resolve the current user's identity via `mcp__azure-devops__core_get_identity_ids`, passing their email or display name as `searchFilter`:

```json
{"searchFilter": "user@example.com"}
```

Returns:

```json
[{
  "id": "<identity-guid>",
  "displayName": "Full Name",
  "descriptor": "Microsoft.IdentityModel.Claims.ClaimsIdentity;<tenant-guid>\\user@example.com"
}]
```

The user's email isn't always known ahead of time — check the `userEmail` system-reminder context (populated from the logged-in Claude Code account) before asking.

## Related

- [[CasaColinaCare.com (Azure DevOps Project)]]

## Sources

- casacolinacare-v2 dev session 2026-07-07
