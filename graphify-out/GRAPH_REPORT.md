# Graph Report - .  (2026-07-16)

## Corpus Check
- Corpus is ~15,378 words - fits in a single context window. You may not need a graph.

## Summary
- 165 nodes · 175 edges · 22 communities (15 shown, 7 thin omitted)
- Extraction: 93% EXTRACTED · 5% INFERRED · 2% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.74)
- Token cost: 247,998 input · 0 output

## Community Hubs (Navigation)
- Code Gotchas & Vendored Skills
- Dev Dependencies
- TypeScript Compiler Options
- Langfuse Observability & Plugins
- App Layout & ADO Tooling
- Package Manifest
- Site Behaviors & Project Docs
- TSConfig Include/Exclude Globs
- ADO Field Quirks & Vercel Deploy
- React Page Components
- Next.js/React Dependencies
- ESLint Flat Config
- Next.js Config File
- PostCSS Config
- Claude Code Plugin Ecosystem
- Wiki Contradiction Convention
- CLAUDE.md/AGENTS.md Shim Pattern
- graphify Project Scope

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Wiki Index Page` - 11 edges
3. `AGENTS.md - Project Guidance Document` - 10 edges
4. `Wiki Log Page` - 9 edges
5. `include` - 7 edges
6. `Langfuse Local Dev Setup Guide` - 7 edges
7. `scripts` - 6 edges
8. `CasaColinaCare.com (Azure DevOps Project)` - 6 edges
9. `Claude Code Plugins for This Repo Guide` - 5 edges
10. `13 Required Claude Code Plugins` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Wiki Gotchas Lack Code-Side Back-References` --references--> `fraunces`  [AMBIGUOUS]
  wiki/concepts/Wiki Gotchas Lack Code-Side Back-References.md → app/layout.tsx
- `Wiki Gotchas Lack Code-Side Back-References` --references--> `inter`  [AMBIGUOUS]
  wiki/concepts/Wiki Gotchas Lack Code-Side Back-References.md → app/layout.tsx
- `Langfuse Hook Fail-open Design` --semantically_similar_to--> `Wiki Tiebreaker Rule (Route to Ideas)`  [INFERRED] [semantically similar]
  docs/langfuse-local-setup.md → wiki/_schema.md
- `build_merge Replace-on-Re-extract Drops All File Edges` --semantically_similar_to--> `Langfuse Setup Troubleshooting Table`  [INFERRED] [semantically similar]
  wiki/code/graphify-update-re-extraction-gotchas.md → docs/langfuse-local-setup.md
- `Windows Symlink Caveat for Vendored Skill` --conceptually_related_to--> `bun/bunx not on PATH in Windows Claude Code Environment`  [AMBIGUOUS]
  docs/vercel-react-best-practices-setup.md → wiki/code/bun-bunx-not-on-path-windows.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **wiki/code pages implement the Code taxonomy bucket** — wiki__schema_taxonomy, wiki_code_next_js_16_componentmod_handler_architecture_page, wiki_code_next_js_16_turbopack_root_confusion_page, wiki_code_bun_bunx_not_on_path_windows_page, wiki_code_cred_grid_hardcoded_columns_page, wiki_code_designsync_binary_truncation_page, wiki_code_graphify_cli_not_invokable_via_bun_page, wiki_code_graphify_update_re_extraction_gotchas_page, wiki_code_next_font_axes_weight_constraint_page, wiki_code_playwright_cli_vs_playwright_test_page, wiki_code_sitewide_content_duplication_pattern_page [EXTRACTED 1.00]
- **Windows PATH/environment-resolution gotchas discovered in the same sessions** — wiki_code_bun_bunx_not_on_path_windows_page, wiki_code_graphify_cli_not_invokable_via_bun_page, wiki_code_playwright_cli_vs_playwright_test_conflict_callout [INFERRED 0.85]
- **graphify CLI usage rule plus its invocation and re-extraction gotchas** — claude_graphify_rules, wiki_code_graphify_cli_not_invokable_via_bun_page, wiki_code_graphify_update_re_extraction_gotchas_page [INFERRED 0.85]
- **ADO wit_update_work_item field-validation quirks** — wiki_platforms_azure_devops_task_fields_reject_certain_values_on_state_transition_updates, wiki_platforms_azure_devops_multiline_field_format_html_vs_markdown_varies_per_work_item_not_by_type, wiki_platforms_azure_devops_wit_update_work_item_rejects_mixed_field_type_batches [INFERRED 0.85]
- **Vercel deployment pipeline behavior for casacolinacare-v2** — wiki_platforms_vercel_cli_first_deploy_auto_connects_github, wiki_platforms_vercel_bun_auto_detection, wiki_platforms_vercel_github_integration_auto_deploys_production_on_merge_to_main, wiki_platforms_vercel_domain_alias_vs_project_domains_api [INFERRED 0.85]
- **Claude Code plugin/skill tooling ecosystem for casacolinacare-v2** — wiki_platforms_claude_code_plugin_cli_and_skills_dir_plugins, wiki_platforms_claude_code_plugin_marketplace_naming_ambiguities, wiki_platforms_graphify_scope_for_casacolinacare_v2 [INFERRED 0.85]

## Communities (22 total, 7 thin omitted)

### Community 0 - "Code Gotchas & Vendored Skills"
Cohesion: 0.13
Nodes (23): Turbopack CSS Hot-reload Gotcha, graphify Usage Rules, 13 Required Claude Code Plugins, Path B: npx add-skill Install, Vercel React Best Practices Skill Guide, Vendored vercel-react-best-practices Skill, Windows Symlink Caveat for Vendored Skill, README Code Quality (Vercel Skill) Section (+15 more)

### Community 1 - "Dev Dependencies"
Cohesion: 0.11
Nodes (19): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @playwright/test, tailwindcss, @tailwindcss/postcss (+11 more)

### Community 2 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 3 - "Langfuse Observability & Plugins"
Cohesion: 0.14
Nodes (15): Langfuse Env Var Credential Injection, Langfuse Hook Fail-open Design, Langfuse Local Dev Setup Guide, Langfuse Claude Code Stop Hook, Langfuse Setup Troubleshooting Table, Explicitly Dropped Plugins Rationale, Optional codex Plugin, Claude Code Plugins for This Repo Guide (+7 more)

### Community 4 - "App Layout & ADO Tooling"
Cohesion: 0.18
Nodes (11): fraunces, inter, metadata, Turbopack CSS file-watch miss on programmatic write, Bug-driven TDD — red spec before fix, Wiki Gotchas Lack Code-Side Back-References, CasaColinaCare.com (Azure DevOps Project), ADO Bug #207038 — nav links don't update URL hash (+3 more)

### Community 5 - "Package Manifest"
Cohesion: 0.16
Nodes (13): ignoreScripts, name, private, scripts, build, dev, lint, start (+5 more)

### Community 6 - "Site Behaviors & Project Docs"
Cohesion: 0.18
Nodes (11): Playwright CI Workflow, Casa Colina Care Site Architecture Overview, AGENTS.md - Project Guidance Document, Ken Burns Hero Animation, Next.js 16 Breaking-Changes Warning, Bun-only Package Manager Rule, Playwright Browser Install Gotcha, Reveal Animations (IntersectionObserver) (+3 more)

### Community 7 - "TSConfig Include/Exclude Globs"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 8 - "ADO Field Quirks & Vercel Deploy"
Cohesion: 0.29
Nodes (10): Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type, Azure DevOps Task fields reject certain values on state-transition updates, TF401320 (ADO field validation error), Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks, Azure DevOps wit_update_work_item rejects mixed-field-type batches, Next.js 16 Breaking Changes, Vercel bun auto-detection, Vercel CLI first deploy auto-connects GitHub (+2 more)

### Community 9 - "React Page Components"
Cohesion: 0.29
Nodes (3): SmoothLink(), SmoothLinkProps, quotes

### Community 10 - "Next.js/React Dependencies"
Cohesion: 0.29
Nodes (7): next, dependencies, next, react, react-dom, react, react-dom

## Ambiguous Edges - Review These
- `fraunces` → `Wiki Gotchas Lack Code-Side Back-References`  [AMBIGUOUS]
  wiki/concepts/Wiki Gotchas Lack Code-Side Back-References.md · relation: references
- `inter` → `Wiki Gotchas Lack Code-Side Back-References`  [AMBIGUOUS]
  wiki/concepts/Wiki Gotchas Lack Code-Side Back-References.md · relation: references
- `Windows Symlink Caveat for Vendored Skill` → `bun/bunx not on PATH in Windows Claude Code Environment`  [AMBIGUOUS]
  docs/vercel-react-best-practices-setup.md · relation: conceptually_related_to

## Knowledge Gaps
- **71 isolated node(s):** `SmoothLinkProps`, `quotes`, `metadata`, `eslintConfig`, `nextConfig` (+66 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `fraunces` and `Wiki Gotchas Lack Code-Side Back-References`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `inter` and `Wiki Gotchas Lack Code-Side Back-References`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Windows Symlink Caveat for Vendored Skill` and `bun/bunx not on PATH in Windows Claude Code Environment`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Wiki Index Page` connect `Code Gotchas & Vendored Skills` to `Langfuse Observability & Plugins`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Manifest`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `13 Required Claude Code Plugins` connect `Code Gotchas & Vendored Skills` to `Langfuse Observability & Plugins`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `SmoothLinkProps`, `quotes`, `metadata` to the rest of the system?**
  _71 weakly-connected nodes found - possible documentation gaps or missing edges._