# Graph Report - .  (2026-07-07)

## Corpus Check
- 36 files · ~58,175 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 102 nodes · 134 edges · 14 communities (8 shown, 6 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `Wiki Index` - 17 edges
2. `compilerOptions` - 16 edges
3. `Wiki Log` - 13 edges
4. `Claude Code Plugin Marketplace Naming Ambiguities` - 11 edges
5. `AGENTS.md — Project Guidance` - 7 edges
6. `Wiki Gotchas Lack Code-Side Back-References` - 7 edges
7. `Next.js 16 Breaking Changes` - 7 edges
8. `Vercel bun Auto-Detection` - 7 edges
9. `scripts` - 6 edges
10. `Next.js 16 Turbopack Root Confusion` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AGENTS.md — Project Guidance` --conceptually_related_to--> `Next.js 16 Turbopack Root Confusion`  [INFERRED]
  AGENTS.md → wiki/code/Next.js 16 Turbopack Root Confusion.md
- `AGENTS.md — Project Guidance` --conceptually_related_to--> `Turbopack CSS file-watch miss on programmatic write`  [INFERRED]
  AGENTS.md → wiki/code/turbopack-css-filewatcher-miss.md
- `AGENTS.md — Project Guidance` --conceptually_related_to--> `Next.js 16 Breaking Changes`  [INFERRED]
  AGENTS.md → wiki/platforms/Next.js 16 Breaking Changes.md
- `AGENTS.md — Project Guidance` --conceptually_related_to--> `Vercel bun Auto-Detection`  [INFERRED]
  AGENTS.md → wiki/platforms/Vercel bun auto-detection.md
- `CLAUDE.md — Shim File` --references--> `AGENTS.md — Project Guidance`  [EXTRACTED]
  CLAUDE.md → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Turbopack Development Pitfalls** — code_next_js_16_turbopack_root_confusion, code_turbopack_css_filewatcher_miss, platforms_next_js_16_breaking_changes [INFERRED 0.85]
- **Wiki-to-Code Backlink Gap Pattern** — concepts_wiki_gotchas_lack_code_side_back_references, code_next_font_axes_weight_constraint, code_turbopack_css_filewatcher_miss, app_layout, app_globals [INFERRED 0.85]
- **ADO Bug-to-Test Traceability Chain** — concepts_bug_driven_tdd_red_spec, entities_casacolinacare_com_azure_devops_project, tests_bugs_spec [EXTRACTED 1.00]
- **Git-Related Plugin Naming Ambiguity** — platforms_claude_code_plugin_marketplace_naming_ambiguities, platforms_claude_code_plugin_marketplace_naming_ambiguities_commit_commands, platforms_claude_code_plugin_marketplace_naming_ambiguities_github, platforms_claude_code_plugin_marketplace_naming_ambiguities_gitlab [EXTRACTED 1.00]
- **Vercel Deployment Workflow** — platforms_vercel_bun_auto_detection, platforms_vercel_cli_first_deploy_auto_connects_github, platforms_vercel_domain_alias_vs_project_domains_api [INFERRED 0.85]

## Communities (14 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.24
Nodes (21): AGENTS.md — Project Guidance, CLAUDE.md — Shim File, next/font — axes + weight constraint for variable fonts, Fraunces (variable font, opsz axis), Next.js 16 ComponentMod.handler Architecture, Next.js 16 Turbopack Root Confusion, playwright-cli vs @playwright/test — two separate tools, Turbopack CSS file-watch miss on programmatic write (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (19): dependencies, next, react, react-dom, devDependencies, eslint, eslint-config-next, @playwright/test (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (11): Claude Code Plugin CLI and Skills-Dir Plugins, graphify (skills-dir plugin example), Claude Code Plugin Marketplace Naming Ambiguities, azure plugin (Azure cloud-ops, claude-plugins-official), claude-plugins-official (marketplace), commit-commands plugin, github plugin (GitHub MCP server), gitlab plugin (GitLab MCP server) (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.29
Nodes (3): SmoothLink(), SmoothLinkProps, quotes

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test:e2e

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (3): fraunces, inter, metadata

## Knowledge Gaps
- **58 isolated node(s):** `SmoothLinkProps`, `quotes`, `fraunces`, `inter`, `metadata` (+53 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Wiki Index` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `Claude Code Plugin Marketplace Naming Ambiguities` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **What connects `SmoothLinkProps`, `quotes`, `fraunces` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._