# Claude Code Plugins for This Repo

This repo's AI-assisted workflow relies on a specific set of Claude Code plugins. The repo **declares** the required ones in `.claude/settings.json` (`enabledPlugins`), but plugin *installation* is per-machine — so each developer still adds the marketplaces and installs the plugins once. This doc lists what's required, what's optional, and how to set it up.

## How enablement works here (two parts)

1. **Declared by the repo** — `.claude/settings.json` commits an `enabledPlugins` block, so once you have a plugin installed, opening this repo enables it automatically. (Entries for plugins you haven't installed are simply ignored.)
2. **Installed by you** — plugins live in your `~/.claude`, not the repo. You add the marketplaces and install the plugins once per machine (Setup below).

## Required plugins (13) — declared in `settings.json`

| Plugin | Marketplace | Why this repo needs it |
|---|---|---|
| `typescript-lsp` | claude-plugins-official | TypeScript / Next.js language-server support |
| `playwright` | claude-plugins-official | Playwright browser automation |
| `github` | claude-plugins-official | Repo is hosted on GitHub |
| `commit-commands` | claude-plugins-official | Commit / push / PR workflow |
| `pr-review-toolkit` | claude-plugins-official | AI pull-request review |
| `vercel` | claude-plugins-official | Vercel deployment integration *(distinct from the vendored `vercel-react-best-practices` **skill** — see [vercel-react-best-practices-setup.md](vercel-react-best-practices-setup.md))* |
| `langfuse` | langfuse-observability | Claude Code session tracing — see [langfuse-local-setup.md](langfuse-local-setup.md) |
| `jx-core` | jodex-plugins | Shared dependency of all `jx-*` plugins |
| `jx-pm` | jodex-plugins | Azure DevOps work items / boards (this repo maps to the CasaColinaCare.com ADO project) |
| `jx-qa` | jodex-plugins | QA / E2E workflows |
| `jx-kb` | jodex-plugins | The `wiki/` knowledge base |
| `jx-dev` | jodex-plugins | Spec / task authoring |
| `jx-local` | jodex-plugins | Scaffold local `.agent/` skills & prompts |

## Optional plugins

| Plugin | Marketplace | Why you might add it |
|---|---|---|
| `codex` | openai-codex | Codex second-opinion / rescue. Not enabled by the repo — install and enable it yourself if you want it. Requires the OpenAI Codex CLI/runtime locally. |

## Setup

### 1. Add the marketplaces
In Claude Code, run **`/plugin`** → *Marketplaces* → add:
- `claude-plugins-official` (usually already available)
- `langfuse-observability` (GitHub-sourced)
- `jodex-plugins` (internal/team **directory** marketplace — get its path from your team)
- `openai-codex` — only if you want the optional `codex` plugin

### 2. Install the plugins
Still in **`/plugin`**, install the 13 required plugins above, then run **`/reload-plugins`**. Because the repo declares them in `enabledPlugins`, they enable automatically for this project once installed.

### 3. Per-plugin configuration
A few need one-time setup beyond install:

- **`langfuse`** — Langfuse keys + `TRACE_TO_LANGFUSE=true` in gitignored `.claude/settings.local.json`. Full steps: **[docs/langfuse-local-setup.md](langfuse-local-setup.md)**.
- **`jx-pm`** — Azure DevOps access; resolve identity via the ADO MCP (`core_get_identity_ids`) and authenticate per your team's ADO setup.
- **`vercel`** — Vercel account/CLI auth for deployment actions.
- **`github`** — uses your `gh` / GitHub auth.

## Verify

Run **`/plugin`** (or your skill list) and confirm the 13 required plugins show as enabled. Namespaced skills should be available, e.g. `jx-pm:*`, `jx-kb:*`, `jx-qa:*`, `jx-dev:*`, `jx-local:*`, `commit-commands:*`.

## Explicitly NOT used (dropped on purpose)

| Plugin | Why dropped |
|---|---|
| `jx-skill` | Not authoring distributable jodex skills in this repo (`jx-local` covers local `.agent/` skills) |
| `plugin-dev` | Not authoring Claude Code plugins here |
| `skill-creator` | Not authoring marketplace skills here |
| `langfuse-observability@claude-plugins-official` | Same v1.0.0 plugin as `langfuse@langfuse-observability`, from a different marketplace — this repo standardizes on the `langfuse-observability` marketplace copy |
| `llm-wiki` | Superseded by `jx-kb` for this repo's wiki |
| `Qa-Ai` | Superseded by `jx-qa` |
| `gitlab` | Repo is on GitHub, not GitLab |

## Notes

- Plugin *installs* are per-machine; only the *enablement intent* travels with the repo via `settings.json`.
- There are **two "langfuse" plugins** — the same v1.0.0 plugin published to two marketplaces. Install just the one from the `langfuse-observability` marketplace (`langfuse@langfuse-observability`).
