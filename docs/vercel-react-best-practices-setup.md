# Vercel React Best Practices Skill

This repo ships the **Vercel React Best Practices** agent skill — Vercel Engineering's performance guide for React/Next.js (v1.0.0, Jan 2026): 40+ rules across 8 categories (bundle size, rendering, re-renders, async/waterfalls, server, client, etc.), each with incorrect-vs-correct examples and impact metrics. AI coding agents use it when writing, reviewing, or refactoring React/Next.js code in this project.

## Is it installed here? Yes.

It's **vendored into the repo and committed**, so it travels with a clone:

- **Source of truth:** `.agents/skills/vercel-react-best-practices/` (real files — `SKILL.md`, `AGENTS.md`, `README.md`, `metadata.json`, `rules/*.md`).
- **Claude Code discovery:** `.claude/skills/vercel-react-best-practices` → a **symlink** to the `.agents/` copy. Claude Code auto-loads project skills from `.claude/skills/`, so the symlink is what activates it.
- Both paths are **git-tracked**, so cloning delivers the whole skill.

---

## Path A — You use Claude Code on THIS repo (nothing to install)

The skill is already present after you clone. To confirm it loaded:

1. Open the repo in Claude Code.
2. The skill lists as **`vercel-react-best-practices`** (check `/skills` or your skill list).

### ⚠️ Windows caveat (symlink)

The skill is wired via a **symlink** (`.claude/skills/vercel-react-best-practices` → `../../.agents/skills/...`). Git on Windows does **not** create symlinks by default — without it, that path clones as a small text file and the skill won't load. Fix once, then re-clone or re-checkout:

```bash
git config --global core.symlinks true        # then re-clone, OR:
git checkout -- .claude/skills/vercel-react-best-practices
```

You may also need Windows **Developer Mode** (or admin) enabled for git to create symlinks. Verify with:

```bash
# macOS/Linux
test -L .claude/skills/vercel-react-best-practices && echo "symlink OK" || echo "NOT a symlink — see fix above"
```

If symlinks are a recurring problem on your team's Windows machines, use Path B (`npx add-skill`) to install a real copy into your agent config instead.

---

## Path B — Install it in a DIFFERENT project, or for a non-Claude agent

Use Vercel's Agent Skills CLI. This is also the path for Cursor, GitHub Copilot, or Codex (they don't read `.claude/skills/`).

**Prerequisites:** a terminal in your project root; `npx` available.

1. **Run the installer:**
   ```bash
   npx add-skill vercel-labs/agent-skills
   ```
2. **Select the skill:** when prompted, arrow to **"React and Next.js performance optimization guidelines"** (`react-best-practices`), press **Space** to select, then **Enter**.
3. **Choose your AI coding agent:** pick Claude Code / Cursor / GitHub Copilot / Codex and confirm.

**Where it lands:** into your local agent config or project directory. The rule markdown files either compile into a central reference (e.g. `AGENTS.md`) or register as on-demand session context for your agent.

> Non-Claude agents can also just be pointed at the compiled reference already in this repo: `.agents/skills/vercel-react-best-practices/AGENTS.md`.

---

## Verify it works

Ask your agent something like *"Review this component against the Vercel React best practices"* — it should cite specific rules (e.g. bundle-size, re-render, or waterfall guidance) from the skill.

## Updating the skill

The pinned version is in `.agents/skills/vercel-react-best-practices/metadata.json` (currently `1.0.0`). To update the vendored copy, re-run `npx add-skill vercel-labs/agent-skills` targeting `.agents/skills/`, or replace the directory contents from the latest `vercel-labs/agent-skills` release, then commit the change so the whole team gets it.

## References

- Vercel Agent Skills: `vercel-labs/agent-skills` (installed via `npx add-skill`)
- Local skill: `.agents/skills/vercel-react-best-practices/` (README + `rules/`)
