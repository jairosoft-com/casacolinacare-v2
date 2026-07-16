# Graph Report - casacolinacare-v2  (2026-07-16)

## Corpus Check
- 57 files · ~15,336 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 370 nodes · 336 edges · 43 communities (38 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8ccc4d18`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Vercel CLI first deploy auto-connects GitHub
- devDependencies
- Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type
- Taxonomy
- compilerOptions
- README.md
- graphify CLI not invokable via bun/bunx
- Setup steps
- Wiki Index
- jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree
- Claude Code Plugins for This Repo
- Claude Code Plugin CLI and Skills-Dir Plugins
- next/font — axes + weight constraint for variable fonts
- AGENTS.md + CLAUDE.md shim pattern
- Bug-driven TDD — red spec before fix
- CLAUDE.md
- playwright-cli vs @playwright/test — two separate tools
- Turbopack CSS file-watch miss on programmatic write
- Next.js 16 Breaking Changes
- page.tsx
- bun/bunx not on PATH in Windows Claude Code environment
- DesignSync `get_file` truncates binary assets at 256 KB
- Next.js 16 ComponentMod.handler Architecture
- Next.js 16 Turbopack Root Confusion
- Casa Colina site duplicates marketing facts across sections
- Wiki Log
- Backlog
- cred-grid CSS hardcodes column count to card count
- Azure DevOps MCP has no "whoami" tool — use core_get_identity_ids
- layout.tsx
- Wiki Gotchas Lack Code-Side Back-References
- CasaColinaCare.com (Azure DevOps Project)
- graphify Scope for casacolinacare-v2
- CLAUDE.md
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Wiki Index` - 11 edges
3. `Taxonomy` - 11 edges
4. `Claude Code Plugins for This Repo` - 8 edges
5. `next/font — axes + weight constraint for variable fonts` - 8 edges
6. `AGENTS.md + CLAUDE.md shim pattern` - 8 edges
7. `Bug-driven TDD — red spec before fix` - 8 edges
8. `Setup steps` - 7 edges
9. `Vercel React Best Practices Skill` - 7 edges
10. `Page Conventions` - 7 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (43 total, 5 thin omitted)

### Community 0 - "Vercel CLI first deploy auto-connects GitHub"
Cohesion: 0.08
Nodes (25): Behavior, Confirmed environment, Implication, Related, Sources, Vercel bun auto-detection, Behavior, Confirmed in this project (+17 more)

### Community 1 - "devDependencies"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, eslint, eslint-config-next, @playwright/test (+17 more)

### Community 2 - "Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type"
Cohesion: 0.09
Nodes (20): Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type, Fix, Problem, Related, Sources, Azure DevOps Task fields reject certain values on state-transition updates, Fix, Problem (+12 more)

### Community 3 - "Taxonomy"
Cohesion: 0.09
Nodes (21): Code, Concepts, Contradiction Handling, Cross-References, Custom Rules, Decisions, Entities, Ideas (+13 more)

### Community 4 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 5 - "README.md"
Cohesion: 0.12
Nodes (14): Is it installed here? Yes., Path A — You use Claude Code on THIS repo (nothing to install), Path B — Install it in a DIFFERENT project, or for a non-Claude agent, References, Updating the skill, Vercel React Best Practices Skill, Verify it works, ⚠️ Windows caveat (symlink) (+6 more)

### Community 6 - "graphify CLI not invokable via bun/bunx"
Cohesion: 0.14
Nodes (12): graphify CLI not invokable via bun/bunx, Next step, Problem, Related, Sources, Status, build_merge replace-on-re-extract drops ALL of a file's edges, Content-only code edits are AST-invariant — skip re-extraction (+4 more)

### Community 7 - "Setup steps"
Cohesion: 0.17
Nodes (12): 1. Get your Langfuse keys, 2. Install & enable the plugin (yours to do — not shared by the repo), 3. Add your credentials to `.claude/settings.local.json`, 4. Install the Langfuse SDK for the hook's interpreter, 5. Restart Claude Code, 6. Verify it's tracing, How it works (30-second version), Langfuse Local Dev Setup (+4 more)

### Community 8 - "Wiki Index"
Cohesion: 0.17
Nodes (11): Code, Concepts, Decisions, Entities, Ideas, Platforms, Plugins, Projects (+3 more)

### Community 9 - "jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree"
Cohesion: 0.17
Nodes (10): Fix, jx-pm:impl-story-plan's worktree isolation can't see changes already staged in the main tree, Problem, Related, Sources, Fix, Problem, Related (+2 more)

### Community 10 - "Claude Code Plugins for This Repo"
Cohesion: 0.18
Nodes (11): 1. Add the marketplaces, 2. Install the plugins, 3. Per-plugin configuration, Claude Code Plugins for This Repo, Explicitly NOT used (dropped on purpose), How enablement works here (two parts), Notes, Optional plugins (+3 more)

### Community 11 - "Claude Code Plugin CLI and Skills-Dir Plugins"
Cohesion: 0.20
Nodes (8): Claude Code Plugin CLI and Skills-Dir Plugins, Key claims, Related, Sources, Claude Code Plugin Marketplace Naming Ambiguities, Key claims, Related, Sources

### Community 12 - "next/font — axes + weight constraint for variable fonts"
Cohesion: 0.22
Nodes (8): Context, Correct pattern, Error, next/font — axes + weight constraint for variable fonts, Related, Rule, Sources, Wrong pattern (throws)

### Community 13 - "AGENTS.md + CLAUDE.md shim pattern"
Cohesion: 0.22
Nodes (8): AGENTS.md + CLAUDE.md shim pattern, File structure, Pattern, Problem, Sources, This project, What does NOT go in AGENTS.md, What goes in AGENTS.md

### Community 14 - "Bug-driven TDD — red spec before fix"
Cohesion: 0.22
Nodes (8): Assertion style, Bug-driven TDD — red spec before fix, Naming convention, Pattern, Related, Sources, This project's implementation, Why it works

### Community 15 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Architecture, CLAUDE.md, Commands, Key behaviors in `app/page.tsx`, Known gotchas, Package manager, This is NOT the Next.js you know

### Community 16 - "playwright-cli vs @playwright/test — two separate tools"
Cohesion: 0.25
Nodes (7): Key distinction, playwright-cli (`@playwright/cli`), playwright-cli vs @playwright/test — two separate tools, @playwright/test, Related, Sources, This project's setup

### Community 17 - "Turbopack CSS file-watch miss on programmatic write"
Cohesion: 0.25
Nodes (7): Fix, Problem, Related, Sources, Symptom, Turbopack CSS file-watch miss on programmatic write, Why it happens

### Community 18 - "Next.js 16 Breaking Changes"
Cohesion: 0.25
Nodes (7): App Router Render Path, Async Request APIs — Fully Removed, Image Config Breaking Changes, `middleware` Renamed to `proxy`, Next.js 16 Breaking Changes, Sources, Turbopack Is Now Default

### Community 20 - "bun/bunx not on PATH in Windows Claude Code environment"
Cohesion: 0.29
Nodes (6): bun/bunx not on PATH in Windows Claude Code environment, Fix, Problem, Related, Sources, Why it happens

### Community 21 - "DesignSync `get_file` truncates binary assets at 256 KB"
Cohesion: 0.29
Nodes (6): Context, DesignSync `get_file` truncates binary assets at 256 KB, Detection, Problem, Sources, Workaround

### Community 22 - "Next.js 16 ComponentMod.handler Architecture"
Cohesion: 0.29
Nodes (6): Failure Mode, How It Works, Next.js 16 ComponentMod.handler Architecture, Overview, Related, Sources

### Community 23 - "Next.js 16 Turbopack Root Confusion"
Cohesion: 0.29
Nodes (6): Fix, Next.js 16 Turbopack Root Confusion, Problem, Related, Sources, Why It Happens

### Community 24 - "Casa Colina site duplicates marketing facts across sections"
Cohesion: 0.29
Nodes (6): Casa Colina site duplicates marketing facts across sections, Pattern, Related, Rule of thumb, Second duplication axis: the marquee strip itself, Sources

### Community 25 - "Wiki Log"
Cohesion: 0.29
Nodes (6): 2026-06-21 17:15:07 PDT — Init, 2026-06-22 — Session insights (jx-kb:insights), 2026-07-06 — Session Insights: Plugin mgmt + ADO project mapping, 2026-07-07 — Session Insights: content-fix stories + tooling PATH gaps, 2026-07-13 — Session Insights: ADO story creation, refinement, and implementation for #208447/#208450, Wiki Log

### Community 26 - "Backlog"
Cohesion: 0.33
Nodes (5): Backlog, P0 — Critical, P1 — High, P2 — Medium, P3 — Low

### Community 27 - "cred-grid CSS hardcodes column count to card count"
Cohesion: 0.33
Nodes (5): cred-grid CSS hardcodes column count to card count, Fix, Problem, Related, Sources

### Community 28 - "Azure DevOps MCP has no "whoami" tool — use core_get_identity_ids"
Cohesion: 0.33
Nodes (5): Azure DevOps MCP has no "whoami" tool — use core_get_identity_ids, Fix, Problem, Related, Sources

### Community 29 - "layout.tsx"
Cohesion: 0.40
Nodes (3): fraunces, inter, metadata

### Community 30 - "Wiki Gotchas Lack Code-Side Back-References"
Cohesion: 0.40
Nodes (4): Key claims, Related, Sources, Wiki Gotchas Lack Code-Side Back-References

### Community 31 - "CasaColinaCare.com (Azure DevOps Project)"
Cohesion: 0.40
Nodes (4): CasaColinaCare.com (Azure DevOps Project), Key claims, Related, Sources

### Community 32 - "graphify Scope for casacolinacare-v2"
Cohesion: 0.40
Nodes (4): Evidence: an incomplete ignore leaks ~120 files into --update, graphify Scope for casacolinacare-v2, Key claims, Sources

## Knowledge Gaps
- **262 isolated node(s):** `SmoothLinkProps`, `fraunces`, `inter`, `metadata`, `eslintConfig` (+257 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Langfuse Local Dev Setup` connect `Setup steps` to `README.md`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `Claude Code Plugins for This Repo` connect `Claude Code Plugins for This Repo` to `README.md`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `SmoothLinkProps`, `fraunces`, `inter` to the rest of the system?**
  _262 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Vercel CLI first deploy auto-connects GitHub` be split into smaller, more focused modules?**
  _Cohesion score 0.07635467980295567 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Taxonomy` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._