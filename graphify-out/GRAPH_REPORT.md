# Graph Report - .  (2026-07-07)

## Corpus Check
- 28 files · ~5,651,267 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 92 nodes · 120 edges · 14 communities (8 shown, 6 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.87)
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
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `Wiki Index` - 17 edges
2. `compilerOptions` - 16 edges
3. `Wiki Log` - 15 edges
4. `Claude Code Plugin Marketplace Naming Ambiguities` - 8 edges
5. `Next.js 16 Breaking Changes` - 7 edges
6. `Vercel bun Auto-Detection` - 7 edges
7. `scripts` - 6 edges
8. `AGENTS.md — Project Guidance` - 6 edges
9. `Next.js 16 Turbopack Root Confusion` - 6 edges
10. `Turbopack CSS file-watch miss on programmatic write` - 6 edges

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
- **2026-07-06 Plugin mgmt + ADO project mapping session pages** — platforms_claude_code_plugin_cli_and_skills_dir_plugins, platforms_claude_code_plugin_marketplace_naming_ambiguities, entities_casacolinacare_com_azure_devops_project, concepts_wiki_gotchas_lack_code_side_back_references, platforms_graphify_scope_for_casacolinacare_v2 [EXTRACTED 1.00]
- **Code-side back-reference gap pattern (concept + illustrating code gotchas)** — concepts_wiki_gotchas_lack_code_side_back_references, code_next_font_axes_weight_constraint, code_turbopack_css_filewatcher_miss [EXTRACTED 1.00]
- **ADO bug tracking to red-spec test workflow** — concepts_bug_driven_tdd_red_spec, entities_casacolinacare_com_azure_devops_project, code_playwright_cli_vs_playwright_test [INFERRED 0.85]

## Communities (14 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.30
Nodes (18): AGENTS.md — Project Guidance, CLAUDE.md — Shim File, next/font — axes + weight constraint for variable fonts, Next.js 16 ComponentMod.handler Architecture, Next.js 16 Turbopack Root Confusion, playwright-cli vs @playwright/test — two separate tools, Turbopack CSS file-watch miss on programmatic write, AGENTS.md + CLAUDE.md Shim Pattern (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (15): dependencies, next, react, react-dom, ignoreScripts, name, private, scripts (+7 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @playwright/test, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (7): Claude Code Plugin CLI and Skills-Dir Plugins, Claude Code Plugin Marketplace Naming Ambiguities, azure (Claude Code plugin, general cloud-ops), commit-commands (Claude Code plugin, git workflow helper), github (Claude Code plugin, GitHub MCP server), langfuse (Claude Code plugin, skills only), langfuse-observability (Claude Code plugin, Stop/SessionEnd hooks)

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (3): fraunces, inter, metadata

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): Bug-driven TDD — red spec before fix, CasaColinaCare.com (Azure DevOps Project), CasaColinaDestination.com (unrelated ADO project)

## Knowledge Gaps
- **52 isolated node(s):** `fraunces`, `inter`, `metadata`, `quotes`, `eslintConfig` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Wiki Index` connect `Community 1` to `Community 4`, `Community 6`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 3` to `Community 2`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `Wiki Log` connect `Community 1` to `Community 4`, `Community 6`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `fraunces`, `inter`, `metadata` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._