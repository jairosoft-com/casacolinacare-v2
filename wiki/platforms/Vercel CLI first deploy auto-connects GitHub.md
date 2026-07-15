---
title: Vercel CLI first deploy auto-connects GitHub
type: platform
tags: [vercel, github, deployment, ci-cd, auto-deploy]
created: 2026-06-22
updated: 2026-06-22
source_count: 1
aliases: [vercel git connect, vercel github integration, vercel auto-deploy]
---

# Vercel CLI first deploy auto-connects GitHub

## Behavior

When `vercel --prod --yes` is run from a directory whose git `origin` remote points to a GitHub repository, Vercel CLI (v54+) automatically:

1. Detects the GitHub remote URL.
2. Connects the repository to the new Vercel project during the initial deploy.
3. Prints: `> Connecting GitHub repository: https://github.com/<org>/<repo>` → `> Connected`

**No separate `vercel git connect` command is needed.**

## Effect after linking

- Pushes to `main` → trigger a production build automatically.
- Pushes to any other branch / opening a PR → create a Vercel preview deployment.
- The Vercel dashboard shows the linked repo and deployment history per commit.

## Precondition

The Vercel GitHub App must already be installed on the GitHub organization/account. If it isn't, the CLI prints an authorization URL — the user must approve it in the browser once. After that, re-run the deploy and it connects automatically.

## Confirmed in this project

`casacolinacare-v2` was deployed with `vercel --prod --yes`; the GitHub repo `jairosoft-com/casacolinacare-v2` was auto-connected in the same command, producing production URL `https://casacolinacare-v2.vercel.app` (aliased to `https://www.casacolinacare.com`).

## Related

- [[Vercel bun auto-detection]]
- [[Vercel GitHub integration auto-deploys production on merge to main]]

## Sources

- casacolinacare-v2 dev session 2026-06-22
