---
name: feedback-screenshots-subfolder
description: "All playwright-cli and Playwright test screenshots must be saved into the screenshots/ subfolder, not the repo root"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 26005c53-2389-4aae-9163-3cdbe526e2f3
---

Always save screenshots into the `screenshots/` subfolder of the project root.

**Why:** The user explicitly asked for this to keep the repo root clean; the folder was created and existing screenshots were migrated there on 2026-06-22.

**How to apply:**
- `playwright-cli screenshot --filename=screenshots/<name>.png` — always prefix with `screenshots/`
- Playwright test runner: if `outputDir` or screenshot paths are configured, point to `screenshots/`
- `screenshots/` is git-ignored, so captures are local only and never committed accidentally
- The root-level `/*.png` gitignore pattern remains as a backstop, but `screenshots/` is the canonical home
