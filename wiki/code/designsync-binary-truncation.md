---
title: DesignSync get_file truncates binary assets at 256 KB
type: code
tags: [designsync, claude-design, mcp, images, assets]
created: 2026-06-21
updated: 2026-06-21
source_count: 1
aliases: [designsync images, claude design assets, get_file truncation]
---

# DesignSync `get_file` truncates binary assets at 256 KB

## Problem

When fetching image files from a Claude Design project via the DesignSync MCP tool (`get_file`), binary content is returned as base64 but the response is hard-capped at 256 KB. The response includes `"truncated": true` when the limit is hit. Decoding the truncated base64 produces a corrupt file.

Any image larger than ~192 KB on disk will be truncated (256 KB base64 ≈ 192 KB binary).

## Detection

Check the response JSON for:

```json
{ "truncated": true }
```

If `truncated` is absent or `false`, the full file was returned.

## Workaround

Export/archive the design project from Claude Design, then copy assets from the local archive:

```
claude_design/<ProjectName>/assets/<filename>
```

Archived projects contain the original, untruncated image files. Copy them directly to `public/assets/` (or wherever the Next.js app expects them).

## Context

Discovered while attempting to download home photos for the Casa Colina Care landing page. All seven photos exceeded the 256 KB limit. The archived project was at `claude_design/Casacolina.com/assets/`.

## Sources

- casacolinacare-v2 dev session 2026-06-21
