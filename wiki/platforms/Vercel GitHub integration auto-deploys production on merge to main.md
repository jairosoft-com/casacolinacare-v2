---
title: Vercel GitHub integration auto-deploys production on merge to main
type: platform
tags: [vercel, github, deployment, ci-cd]
created: 2026-07-13
updated: 2026-07-13
source_count: 0
aliases: [vercel auto deploy, no manual vercel deploy needed]
provenance: synthesis
---

# Vercel GitHub integration auto-deploys production on merge to main

## Problem / Context

This repo has no `vercel.json`, no `.vercel/` project-link file, and no local `vercel` CLI —
deployment is entirely driven by Vercel's GitHub App integration, visible only as PR status
checks ("Vercel" / "Vercel Preview Comments"). It's easy to assume a manual deploy step is
needed after merging.

## Fact

Merging a PR to `main` automatically triggers a Production deployment — no manual `vercel --prod`
step required. Confirm it happened (and its result) via:

```bash
gh api repos/<owner>/<repo>/deployments --jq '.[0] | {id, environment, created_at, sha}'
gh api repos/<owner>/<repo>/deployments/<id>/statuses --jq '.[0] | {state, environment_url}'
```

Look for `environment: "Production"` with `sha` matching the merge commit, then check its status
`state` (`"success"`).

The per-deployment `environment_url` returned (a `*.vercel.app` URL) is SSO-protected and won't
load directly in a browser without a Vercel login — the actual public site is the project's
custom domain (`www.casacolinacare.com` for this project), which is what to verify against
instead.

## Related

- [[Vercel bun auto-detection]]
- [[Vercel CLI first deploy auto-connects GitHub]]
- [[Vercel domain alias vs project domains API]]

## Sources
- Session: ADO story creation, refinement, and implementation for #208447/#208450 (2026-07-13)
