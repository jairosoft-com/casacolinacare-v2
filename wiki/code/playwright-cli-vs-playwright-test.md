---
title: playwright-cli vs @playwright/test — two separate tools
type: code
tags: [playwright, testing, browser-automation, tooling]
created: 2026-06-22
updated: 2026-07-07
source_count: 2
aliases: [playwright-cli, playwright test runner, @playwright/test]
---

# playwright-cli vs @playwright/test — two separate tools

Two Playwright-ecosystem packages that serve entirely different purposes and are often confused.

## playwright-cli (`@playwright/cli`)

- Interactive **browser driver** for exploration, bug hunting, and screenshot capture.
- Global install: `npm install -g @playwright/cli` (v0.1.14 as of this session).
- Invoked as `playwright-cli open`, `playwright-cli snapshot`, `playwright-cli screenshot --filename=screenshots/<name>.png`.
- **Does NOT run `.spec.ts` files.** It has no concept of a test suite.
- Used in this project for manual bug hunting and page exploration.

## @playwright/test

- The **test runner** that executes `.spec.ts` / `.spec.js` suites.
- Must be added as a devDependency: `bun add -d @playwright/test`.
- Requires a `playwright.config.ts` in the project root.
- Invoked as `playwright test` (or via `bun run test:e2e` with the script configured).
- Produces HTML reports (`playwright-report/`), traces, and test-results artifacts.

## Key distinction

Having `playwright-cli` installed (globally or locally) does **not** mean `.spec.ts` files can run — you need `@playwright/test` separately. This is a common source of confusion in projects that start with browser automation and later add a formal test suite.

## This project's setup

| Tool | Where | Version | Purpose |
|------|-------|---------|---------|
| `playwright-cli` | global (`~/.nvm/.../bin/playwright-cli`) | 0.1.14 | Bug hunting, snapshots, manual screenshots |
| `@playwright/test` | devDependency | 1.61.0 | Regression spec (`tests/bugs.spec.ts`) |

> [!conflict] Global install assumption doesn't hold on every machine
> This page originally assumed a global `playwright-cli` binary (from a macOS/nvm session). On a Windows session (2026-07-07), `playwright-cli` was not on PATH at all — no global install existed. The working invocation was `bunx @playwright/cli <command>`, and since `bunx` itself wasn't on PATH either (see [[bun/bunx not on PATH in Windows Claude Code environment]]), the full call was:
> ```powershell
> & "$env:USERPROFILE\.bun\bin\bunx.exe" @playwright/cli open http://localhost:3000
> ```
> Treat "is playwright-cli globally installed" as environment-dependent — check `Get-Command playwright-cli` (or `which`) before assuming either path works.

## Related

- [[Turbopack CSS file-watch miss on programmatic write]] — separate Turbopack tooling quirk
- [[Next.js 16 Breaking Changes]]
- [[bun/bunx not on PATH in Windows Claude Code environment]]

## Sources

- casacolinacare-v2 dev session 2026-06-22
- casacolinacare-v2 dev session 2026-07-07
