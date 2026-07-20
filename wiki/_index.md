---
title: Wiki Index
updated: 2026-07-14
page_count: 32
---

# Wiki Index

## Ideas

_No ideas yet._

## Concepts

- [[AGENTS.md + CLAUDE.md shim pattern]] — store agent guidance in AGENTS.md; CLAUDE.md is a one-line `@AGENTS.md` shim for multi-agent projects
- [[Bug-driven TDD — red spec before fix]] — write failing tests asserting fixed behavior before writing any fix; ADO ID in test name gives direct traceability
- [[Wiki Gotchas Lack Code-Side Back-References]] — graphify found documented gotchas (font axes, Turbopack CSS) have no structural link back to the source lines they apply to

## Entities

- [[CasaColinaCare.com (Azure DevOps Project)]] — this repo's ADO project (ID `35f6c5fd-...`); don't confuse with the unrelated `CasaColinaDestination.com` project

## Topics

_No topics yet._

## Plugins

_No plugins yet._

## Platforms

- [[Claude Code Plugin CLI and Skills-Dir Plugins]] — `claude plugin install/list/details` CLI; skills-dir plugins under `~/.claude/skills/` auto-load without marketplace install
- [[Claude Code Plugin Marketplace Naming Ambiguities]] — no exact "git"/"ado" plugin exists; `langfuse` vs `langfuse-observability` are distinct plugins
- [[Claude Code to Langfuse session tracing]] — the langfuse Stop hook reads keys from `os.environ` (no `.env` loader); put them in gitignored `settings.local.json`, not `.env`, or tracing dies on restart
- [[Claude Code plugin enablement is per-developer]] — `enabledPlugins` in gitignored `settings.local.json` isn't shared; commit it to `settings.json` to declare the repo's plugin set (installs stay per-machine)
- [[Vendored skills symlink breaks on Windows git]] — `.claude/skills/*` → `.agents/skills/*` symlinks need `core.symlinks=true` or they clone as text files on Windows and the skill won't load
- [[graphify Scope for casacolinacare-v2]] — scope to app/tests/wiki/root; exclude `.claude/` and `claude_design/` to avoid the 2M-word warning
- [[Next.js 16 Breaking Changes]] — Turbopack default, async-only request APIs, middleware→proxy rename, new render path
- [[Vercel bun auto-detection]] — `bun.lock` presence causes Vercel build system to use bun automatically; no vercel.json needed
- [[Vercel CLI first deploy auto-connects GitHub]] — `vercel --prod --yes` with a GitHub remote auto-links the repo; no `vercel git connect` step needed
- [[Vercel domain alias vs project domains API]] — aliases API (`/v4/aliases?domain=`) is authoritative for domain routing; project domains endpoint can lag
- [[Azure DevOps MCP identity lookup]] — no "whoami" tool; use `core_get_identity_ids` with an email/name `searchFilter`
- [[Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks]] — one child Task per Gherkin AC scenario, not one consolidated task, is what makes the Tasks panel render as a checkbox checklist
- [[Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type]] — check `multilineFieldsFormat` before writing; wrong syntax renders wrong without erroring
- [[Azure DevOps Task fields reject certain values on state-transition updates]] — omit `System.Reason` (ADO auto-fills it) and never set `RemainingWork` to `"0"` (throws `InvalidNotEmpty`)
- [[Azure DevOps wit_update_work_item rejects mixed-field-type batches]] — combining AC/format patches with unrelated scalar fields (Priority, StoryPoints) in one call fails; split into single-purpose calls
- [[jx-pm impl-story-plan's worktree isolation can't see changes already staged in the main tree]] — a fresh worktree checkout can't see the main tree's staged-but-uncommitted index, or completely untracked files
- [[Vercel GitHub integration auto-deploys production on merge to main]] — no manual `vercel --prod` needed; confirm via `gh api repos/.../deployments`
- [[Windows git worktree remove fails due to own shell cwd]] — a lingering dev-server process or the agent's own shell `cd`'d inside the worktree both block deletion on Windows

## Projects

_No projects yet._

## Decisions

_No decisions yet._

## Code

- [[next/font — axes + weight constraint for variable fonts]] — `axes` requires `weight` to be omitted; explicit weight array alongside `axes` throws a build error
- [[Turbopack CSS file-watch miss on programmatic write]] — programmatic file writes may not trigger HMR; `touch` the file to force recompile
- [[Next.js 16 Turbopack Root Confusion]] — Turbopack infers parent dir as root when parent lockfiles exist; fix with `turbopack: { root: __dirname }` + clear `.next/`
- [[DesignSync get_file truncates binary assets at 256 KB]] — binary images cap at 256 KB (`truncated: true`); use the archived project folder instead
- [[Next.js 16 ComponentMod.handler Architecture]] — All App Router pages render via `ComponentMod.handler(req, res, ctx)` in base-server.js:1462
- [[playwright-cli vs @playwright/test — two separate tools]] — playwright-cli is an interactive browser driver; @playwright/test is the spec runner; installing one does not imply the other
- [[bun/bunx not on PATH in Windows Claude Code environment]] — invoke via full path `$env:USERPROFILE\.bun\bin\bun.exe` / `bunx.exe` in Bash and PowerShell tools
- [[graphify CLI not invokable via bun/bunx]] — `bunx graphify` fails; CLAUDE.md's `graphify update .` step is currently blocked, invocation method unresolved
- [[graphify --update Re-extraction Gotchas]] — content-only code edits are AST-invariant (skip re-extraction); `build_merge` replace-on-re-extract drops all of a file's edges, so re-extract hub files completely (#graphify, #update)
- [[Casa Colina site duplicates marketing facts across sections]] — grep sitewide before editing any single annotated fact (phone, resident count, license tier); marquee strip also duplicates its own string twice for scroll animation
- [[cred-grid CSS hardcodes column count to card count]] — `.cred-grid`'s `repeat(N,1fr)` must be updated in lockstep with the number of `.cred` cards

## Sources

_No sources yet._
