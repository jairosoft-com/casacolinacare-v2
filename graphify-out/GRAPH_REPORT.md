# Graph Report - .  (2026-06-26)

## Corpus Check
- Large corpus: 101 files · ~5,651,267 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 81 nodes · 92 edges · 14 communities (8 shown, 6 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Project Docs & Wiki|Project Docs & Wiki]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_Dev Toolchain|Dev Toolchain]]
- [[_COMMUNITY_Build Scripts|Build Scripts]]
- [[_COMMUNITY_App Layout|App Layout]]
- [[_COMMUNITY_Page Component|Page Component]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Project Readme|Project Readme]]
- [[_COMMUNITY_Wiki Backlog|Wiki Backlog]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Wiki Index` - 13 edges
3. `Next.js 16 Breaking Changes` - 7 edges
4. `Vercel bun Auto-Detection` - 7 edges
5. `scripts` - 6 edges
6. `AGENTS.md — Project Guidance` - 6 edges
7. `Wiki Log` - 6 edges
8. `Next.js 16 Turbopack Root Confusion` - 6 edges
9. `playwright-cli vs @playwright/test — two separate tools` - 5 edges
10. `Turbopack CSS file-watch miss on programmatic write` - 4 edges

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
- **Vercel Deployment Workflow** — platforms_vercel_bun_auto_detection, platforms_vercel_cli_first_deploy_auto_connects_github, platforms_vercel_domain_alias_vs_project_domains_api [INFERRED 0.85]
- **Playwright Regression Testing Workflow** — concepts_bug_driven_tdd_red_spec, code_playwright_cli_vs_playwright_test, agents [INFERRED 0.75]

## Communities (14 total, 6 thin omitted)

### Community 0 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Project Docs & Wiki"
Cohesion: 0.29
Nodes (17): AGENTS.md — Project Guidance, CLAUDE.md — Shim File, DesignSync get_file Truncates Binary Assets at 256 KB, next/font axes + weight constraint for variable fonts, Next.js 16 ComponentMod.handler Architecture, Next.js 16 Turbopack Root Confusion, playwright-cli vs @playwright/test — two separate tools, Turbopack CSS file-watch miss on programmatic write (+9 more)

### Community 2 - "Runtime Dependencies"
Cohesion: 0.20
Nodes (9): dependencies, next, react, react-dom, ignoreScripts, name, private, trustedDependencies (+1 more)

### Community 3 - "Dev Toolchain"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @playwright/test, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 4 - "Build Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test:e2e

### Community 5 - "App Layout"
Cohesion: 0.40
Nodes (3): fraunces, inter, metadata

## Knowledge Gaps
- **49 isolated node(s):** `fraunces`, `inter`, `metadata`, `quotes`, `eslintConfig` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Toolchain` to `Runtime Dependencies`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `scripts` connect `Build Scripts` to `Runtime Dependencies`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `fraunces`, `inter`, `metadata` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._