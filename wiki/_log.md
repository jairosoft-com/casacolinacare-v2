---
title: Wiki Log
---

# Wiki Log

## 2026-07-13 — Session Insights: ADO story creation, refinement, and implementation for #208447/#208450

- **Operation**: insights
- **Label**: ADO story creation, refinement, and implementation for #208447/#208450
- **Pages created**:
  - `platforms/Azure DevOps wit_update_work_item rejects mixed-field-type batches.md` (platform)
  - `platforms/Windows git worktree remove fails due to own shell cwd.md` (platform)
  - `platforms/Vercel GitHub integration auto-deploys production on merge to main.md` (platform)
- **Pages updated**:
  - `platforms/jx-pm impl-story-plan's worktree isolation can't see changes already staged in the main tree.md` — broadened to cover completely untracked files, not just staged tracked changes
  - `platforms/Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type.md` — added conflict callout contradicting the prior "backticks get stripped" claim
  - `platforms/Vercel CLI first deploy auto-connects GitHub.md` — cross-reference added
  - `platforms/Azure DevOps Task fields reject certain values on state-transition updates.md` — cross-reference added
- **Ideas extracted**: 0
- **Conflicts flagged**: 1 (ADO backtick-stripping claim contradicted by this session's evidence)
- **Cross-references added**: 4
- **Outcome**: Success

## 2026-07-07 — Session Insights: content-fix stories + tooling PATH gaps

- **Operation**: insights
- **Label**: Content-fix stories (phone/residents/ARCH license/lanai) + Windows tooling PATH gaps
- **Pages created**:
  - `code/bun-bunx-not-on-path-windows.md` (code)
  - `code/graphify-cli-not-invokable-via-bun.md` (code)
  - `code/sitewide-content-duplication-pattern.md` (code)
  - `code/cred-grid-hardcoded-columns.md` (code)
  - `platforms/Azure DevOps MCP identity lookup.md` (platform)
- **Pages updated**:
  - `code/playwright-cli-vs-playwright-test.md` — added conflict callout: no global install on this Windows session, must use `bunx @playwright/cli`
- **Ideas extracted**: 0
- **Conflicts flagged**: 1 (playwright-cli global-install assumption doesn't hold cross-machine)
- **Cross-references added**: 7
- **Outcome**: Success

## 2026-07-06 — Session Insights: Plugin mgmt + ADO project mapping

- **Operation**: insights
- **Label**: Plugin mgmt + ADO project mapping
- **Pages created**:
  - `platforms/Claude Code Plugin CLI and Skills-Dir Plugins.md` (platform)
  - `platforms/Claude Code Plugin Marketplace Naming Ambiguities.md` (platform)
  - `entities/CasaColinaCare.com (Azure DevOps Project).md` (entity)
  - `concepts/Wiki Gotchas Lack Code-Side Back-References.md` (concept)
  - `platforms/graphify Scope for casacolinacare-v2.md` (platform)
- **Pages updated**:
  - `concepts/bug-driven-tdd-red-spec.md` — added backlink to ADO project entity
  - `code/next-font-axes-weight-constraint.md` — added backlink to code-coupling-gap concept
  - `code/turbopack-css-filewatcher-miss.md` — added backlink to code-coupling-gap concept
- **Ideas extracted**: 0
- **Conflicts flagged**: 0
- **Cross-references added**: 3
- **Outcome**: Success

## 2026-06-22 — Session insights (jx-kb:insights)

- **Operation**: insights extraction
- **Pages added**: 6
  - `code/playwright-cli-vs-playwright-test.md`
  - `concepts/bug-driven-tdd-red-spec.md`
  - `platforms/Vercel bun auto-detection.md`
  - `platforms/Vercel CLI first deploy auto-connects GitHub.md`
  - `concepts/agents-md-claude-md-shim-pattern.md`
  - `platforms/Vercel domain alias vs project domains API.md`
- **Source session**: Playwright spec setup + Vercel first deploy for casacolinacare-v2

## 2026-06-21 17:15:07 PDT — Init

- **Operation**: init
- **Wiki path**: wiki/
- **Outcome**: Created wiki structure with 10 taxonomy buckets
- **Pages created**: _schema.md, _index.md, _log.md, _backlog.md
