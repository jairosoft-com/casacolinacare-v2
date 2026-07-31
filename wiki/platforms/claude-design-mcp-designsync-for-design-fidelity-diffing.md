---
title: Claude Design MCP (DesignSync) for design-fidelity diffing
type: platform
tags: [claude-design, designsync, mcp, design-fidelity]
created: 2026-07-29
updated: 2026-07-29
source_count: 0
aliases: [DesignSync diffing workflow, design fidelity import]
provenance: synthesis
---

# Claude Design MCP (DesignSync) for design-fidelity diffing

## Pattern

The `DesignSync` tool's read methods (`list_files`, `get_file`) can pull a claude.ai/design
project's raw HTML/CSS source directly by project ID (the UUID embedded in the design's
share URL, e.g. `claude.ai/design/p/<project-id>?file=...`) — no browser rendering or
screenshot needed.

## Use in this project

Used to import `Casa Colina Care - Lanai Hi-Fi.html` and diff its raw markup/CSS against the
live Next.js site (`app/page.tsx`, `app/globals.css`). This surfaced concrete implementation
gaps a purely visual pass would likely miss: missing hover states (`.tel-link`/`.addr-link`
classes present in the design's CSS but never applied in code), missing anchor `id`s needed
for in-page navigation, unwired `tel:`/`mailto:`/Google Maps links, and unimplemented pillar
CTA links. Five ADO stories were scoped directly from this diff.

## Related caveat

`get_file` truncates binary assets over 256 KB — see
[[DesignSync get_file truncates binary assets at 256 KB]]. Text/HTML/CSS files (the diffing
use case here) are unaffected; only image assets hit the limit.

## Related

- [[DesignSync get_file truncates binary assets at 256 KB]]
- [[CasaColinaCare.com (Azure DevOps Project)]]
- [[Legacy regression tests can go stale against a new design source]]

## Sources

- Session: Lanai design-fidelity batch (5 stories) + hover/favicon/scroll-spy fixes (2026-07-29)
