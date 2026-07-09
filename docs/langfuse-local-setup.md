# Langfuse Local Dev Setup

This project traces **Claude Code sessions** (your prompts, the assistant's turns, tool calls, and token usage) to [Langfuse](https://langfuse.com) for observability. This is **not** app-level tracing of the Next.js site — it instruments the AI coding sessions you run against this repo.

Each developer uses **their own Langfuse project and keys**. Your traces go to your project only; nothing is shared, and no secret key is ever committed to the repo.

---

## How it works (30-second version)

- The **`langfuse@langfuse-observability`** plugin registers a Claude Code **Stop hook**.
- On each turn, the hook (`.claude/hooks/langfuse_hook.py`) parses the session transcript and emits a Langfuse **trace → generation → tool** tree with token usage, tagged `claude-code` and scoped by session id.
- The hook reads its credentials from **environment variables** (`LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `TRACE_TO_LANGFUSE`), which Claude Code injects from your **`.claude/settings.local.json`** `env` block.
- It is **fail-open**: if the SDK or keys are missing, or `TRACE_TO_LANGFUSE` isn't `"true"`, it silently does nothing and never blocks or slows your session.

---

## Prerequisites

1. **A Langfuse account.** Sign up at [cloud.langfuse.com](https://cloud.langfuse.com) (free tier, no credit card) — this project uses the **US** region (`https://us.cloud.langfuse.com`). Self-hosting also works; just use your own host URL.
2. **The `langfuse@langfuse-observability` plugin installed and enabled** in your Claude Code (see Step 2). Plugin enablement lives in the per-developer, **gitignored** `.claude/settings.local.json`, so it is **not** delivered by cloning the repo — each developer enables it themselves. (The hook script `.claude/hooks/langfuse_hook.py` *is* committed, so every clone has it; it only runs once the plugin is enabled.)
3. **The Langfuse Python SDK** installed for the interpreter Claude Code runs hooks with (see Step 4). The hook targets **`langfuse>=4.0,<5`** plus `opentelemetry`.

---

## Setup steps

### 1. Get your Langfuse keys

1. Log in to Langfuse and **create a project** (e.g. `casacolinacare-v2`).
2. Go to **Settings → API Keys → Create new API keys**.
3. Copy the **Public Key** (`pk-lf-…`) and **Secret Key** (`sk-lf-…`). Treat the secret key like a password.

### 2. Install & enable the plugin (yours to do — not shared by the repo)

`.claude/settings.local.json` is **gitignored**, so plugin enablement is **not** delivered by cloning — you enable it locally. In Claude Code, run **`/plugin`**, install/enable **`langfuse@langfuse-observability`**, then **`/reload-plugins`**. That writes the enablement into your own `settings.local.json`:

```jsonc
// .claude/settings.local.json  (yours, gitignored)
{
  "enabledPlugins": {
    "langfuse@langfuse-observability": true
  }
}
```

### 3. Add your credentials to `.claude/settings.local.json`

`.claude/settings.local.json` is **gitignored** — this is the correct home for secrets. Add an `env` block with **your own** keys:

```jsonc
// .claude/settings.local.json
{
  "env": {
    "LANGFUSE_PUBLIC_KEY": "pk-lf-YOUR-KEY",
    "LANGFUSE_SECRET_KEY": "sk-lf-YOUR-KEY",
    "LANGFUSE_BASE_URL": "https://us.cloud.langfuse.com",
    "LANGFUSE_HOST": "https://us.cloud.langfuse.com",
    "TRACE_TO_LANGFUSE": "true"
  },
  "enabledPlugins": {
    "langfuse@langfuse-observability": true
  }
}
```

> **Never put these keys in `.claude/settings.json`** or any other git-tracked file — that file is committed and would leak your secret key. Only `settings.local.json` (and `.env`) are gitignored.

Optional debugging flag: `"CC_LANGFUSE_DEBUG": "true"` in the same `env` block turns on verbose hook logging.

### 4. Install the Langfuse SDK for the hook's interpreter

The hook imports `langfuse` and `opentelemetry`. If they aren't importable, the hook **silently exits (no log, no trace)** — this is the #1 cause of "it's not working."

```bash
pip install "langfuse>=4.0,<5"
```

Install it for the **Python that Claude Code uses to run hooks**. If you're unsure which interpreter that is, install into the environment Claude Code launches from, then verify via the log in Step 6.

### 5. Restart Claude Code

The `env` block is read at **session start**, so **fully restart Claude Code** (or start a new session) after editing `settings.local.json`. A `/reload` alone may not re-inject env into hook subprocesses.

### 6. Verify it's tracing

Run one prompt, then check the hook's log:

```bash
tail -n 5 ~/.claude/state/langfuse_hook.log
```

A working setup shows lines like:

```
2026-07-08 12:25:40 [INFO] Processed 1 turns in 0.04s (session=…)
```

Then open **Langfuse → Traces**, filter by the tag **`claude-code`** (or your session id) — you should see a trace per turn with nested generations and tool calls.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Log file never appears / no new lines, keys are set | Langfuse SDK not installed for the hook's interpreter (hook exits before logging) | `pip install "langfuse>=4.0,<5"` for the right Python (Step 4) |
| Log says nothing, no traces | `TRACE_TO_LANGFUSE` not `"true"`, or keys missing from env | Check the `env` block (Step 3); **restart** Claude Code (Step 5) |
| `emit_turn failed: … SDK … missing _otel_tracer` in log | Wrong Langfuse SDK major version | Pin `langfuse>=4.0,<5` |
| Worked, then stopped after restart | Keys were only in `.env` (not auto-injected into hooks) | Put them in the `settings.local.json` `env` block (Step 3) |
| Traces appear in the wrong project | Using someone else's / a stale key | Use your own project's keys |

Turn on `CC_LANGFUSE_DEBUG=true` for verbose logging while diagnosing.

---

## Security notes

- Secret keys live **only** in gitignored files (`.claude/settings.local.json`, `.env`). Never commit them; never paste them into shared transcripts, screenshots, or PRs.
- If a secret key is ever committed or shared, **rotate it** in Langfuse (Settings → API Keys) immediately.
- Each developer uses their own keys. If your team prefers a **single shared project**, one owner creates it and distributes the keys through a secrets manager (1Password, Doppler, etc.) — **not** through the repo.
