# Graph Report - .  (2026-07-08)

## Corpus Check
- 12 files · ~9,673 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 110 nodes · 157 edges · 17 communities (11 shown, 6 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Package Manifest & Deps|Package Manifest & Deps]]
- [[_COMMUNITY_Claude Code Plugins|Claude Code Plugins]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_Tooling & CLI Gotchas|Tooling & CLI Gotchas]]
- [[_COMMUNITY_Next.jsVercel Platform Notes|Next.js/Vercel Platform Notes]]
- [[_COMMUNITY_Layout & Content Gotchas|Layout & Content Gotchas]]
- [[_COMMUNITY_Page & Client Islands|Page & Client Islands]]
- [[_COMMUNITY_ADO & Test Suite|ADO & Test Suite]]
- [[_COMMUNITY_AGENTSCLAUDE Shim|AGENTS/CLAUDE Shim]]
- [[_COMMUNITY_Variable Font Config|Variable Font Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_README|README]]
- [[_COMMUNITY_Wiki Backlog|Wiki Backlog]]

## God Nodes (most connected - your core abstractions)
1. `Wiki Index` - 23 edges
2. `Wiki Log` - 18 edges
3. `compilerOptions` - 16 edges
4. `Claude Code Plugin Marketplace Naming Ambiguities` - 11 edges
5. `playwright-cli vs @playwright/test — two separate tools` - 9 edges
6. `AGENTS.md — Project Guidance` - 7 edges
7. `Wiki Gotchas Lack Code-Side Back-References` - 7 edges
8. `CasaColinaCare.com (Azure DevOps Project)` - 7 edges
9. `Next.js 16 Breaking Changes` - 7 edges
10. `Vercel bun Auto-Detection` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Casa Colina site duplicates marketing facts across sections` --references--> `metadata`  [EXTRACTED]
  wiki/code/sitewide-content-duplication-pattern.md → app/layout.tsx
- `cred-grid CSS hardcodes column count to card count` --references--> `Page()`  [EXTRACTED]
  wiki/code/cred-grid-hardcoded-columns.md → app/page.tsx
- `Casa Colina site duplicates marketing facts across sections` --references--> `Page()`  [EXTRACTED]
  wiki/code/sitewide-content-duplication-pattern.md → app/page.tsx
- `AGENTS.md — Project Guidance` --conceptually_related_to--> `Next.js 16 Turbopack Root Confusion`  [INFERRED]
  AGENTS.md → wiki/code/Next.js 16 Turbopack Root Confusion.md
- `AGENTS.md — Project Guidance` --conceptually_related_to--> `Turbopack CSS file-watch miss on programmatic write`  [INFERRED]
  AGENTS.md → wiki/code/turbopack-css-filewatcher-miss.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Windows Claude Code PATH/tooling gap (2026-07-07 session)** — code_bun_bunx_not_on_path_windows, code_graphify_cli_not_invokable_via_bun, code_playwright_cli_vs_playwright_test [INFERRED 0.85]

## Communities (17 total, 6 thin omitted)

### Community 0 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Package Manifest & Deps"
Cohesion: 0.12
Nodes (15): dependencies, next, react, react-dom, ignoreScripts, name, private, scripts (+7 more)

### Community 2 - "Claude Code Plugins"
Cohesion: 0.22
Nodes (11): Claude Code Plugin CLI and Skills-Dir Plugins, graphify (skills-dir plugin example), Claude Code Plugin Marketplace Naming Ambiguities, azure plugin (Azure cloud-ops, claude-plugins-official), claude-plugins-official (marketplace), commit-commands plugin, github plugin (GitHub MCP server), gitlab plugin (GitLab MCP server) (+3 more)

### Community 3 - "Dev Dependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @playwright/test, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 4 - "Tooling & CLI Gotchas"
Cohesion: 0.42
Nodes (9): bun/bunx not on PATH in Windows Claude Code environment, graphify CLI not invokable via bun/bunx, playwright-cli vs @playwright/test — two separate tools, @playwright/cli (interactive browser driver), @playwright/test (spec test runner), Turbopack CSS file-watch miss on programmatic write, Wiki Gotchas Lack Code-Side Back-References, graphify Scope for casacolinacare-v2 (+1 more)

### Community 5 - "Next.js/Vercel Platform Notes"
Cohesion: 0.44
Nodes (9): DesignSync get_file Truncates Binary Assets at 256 KB, Next.js 16 ComponentMod.handler Architecture, Next.js 16 Turbopack Root Confusion, Next.js 16 Breaking Changes, Vercel bun Auto-Detection, Vercel CLI First Deploy Auto-Connects GitHub, Vercel Domain Alias vs Project Domains API, Wiki Index (+1 more)

### Community 6 - "Layout & Content Gotchas"
Cohesion: 0.29
Nodes (6): fraunces, inter, metadata, Page(), cred-grid CSS hardcodes column count to card count, Casa Colina site duplicates marketing facts across sections

### Community 7 - "Page & Client Islands"
Cohesion: 0.33
Nodes (3): SmoothLink(), SmoothLinkProps, quotes

### Community 8 - "ADO & Test Suite"
Cohesion: 0.40
Nodes (5): Bug-driven TDD — red spec before fix, CasaColinaCare.com (Azure DevOps Project), CasaColinaDestination.com (unrelated ADO project), Azure DevOps MCP has no whoami tool — use core_get_identity_ids, core_get_identity_ids (ADO MCP identity tool)

### Community 9 - "AGENTS/CLAUDE Shim"
Cohesion: 1.00
Nodes (3): AGENTS.md — Project Guidance, CLAUDE.md — Shim File, AGENTS.md + CLAUDE.md Shim Pattern

## Knowledge Gaps
- **60 isolated node(s):** `SmoothLinkProps`, `quotes`, `fraunces`, `inter`, `eslintConfig` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Wiki Index` connect `Next.js/Vercel Platform Notes` to `Claude Code Plugins`, `Tooling & CLI Gotchas`, `Layout & Content Gotchas`, `ADO & Test Suite`, `AGENTS/CLAUDE Shim`, `Variable Font Config`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `Wiki Log` connect `Tooling & CLI Gotchas` to `Claude Code Plugins`, `Next.js/Vercel Platform Notes`, `Layout & Content Gotchas`, `ADO & Test Suite`, `AGENTS/CLAUDE Shim`, `Variable Font Config`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `Claude Code Plugin Marketplace Naming Ambiguities` connect `Claude Code Plugins` to `Tooling & CLI Gotchas`, `Next.js/Vercel Platform Notes`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **What connects `SmoothLinkProps`, `quotes`, `fraunces` to the rest of the system?**
  _61 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Package Manifest & Deps` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._