---
title: Vercel domain alias API vs project domains API
type: platform
tags: [vercel, domains, api, debugging, dns]
created: 2026-06-22
updated: 2026-06-22
source_count: 1
aliases: [vercel domain api, vercel alias api, vercel domain ownership]
---

# Vercel domain alias API vs project domains API

## Problem

Two Vercel API surfaces report domain-to-project relationships, and they can disagree:

| Surface | Endpoint | What it shows |
|---------|----------|---------------|
| `vercel domains inspect <domain>` / `GET /v9/projects/<id>/domains` | Project domains API | Domains explicitly added via project settings or `vercel domains add` |
| `GET /v4/aliases?domain=<domain>` | Aliases API | The actual deployment + project currently serving the domain |

A domain shown as belonging to Project A in `domains inspect` may actually be routing to Project B's deployment in the aliases table.

## Authoritative source

**`GET /v4/aliases?domain=<domain>&teamId=<teamId>`** is the ground truth for "what is serving this domain right now." It returns:

```json
{
  "aliases": [
    {
      "alias": "casacolinacare.com",
      "deploymentId": "dpl_...",
      "projectId": "prj_..."
    }
  ]
}
```

## When this matters

- Trying to move a domain between projects with `vercel domains add --force` and getting `alias_conflict` even though the project domains API says the domain isn't there.
- Diagnosing why `curl` hits a different project than `domains inspect` suggests.
- After a `vercel --prod --yes` deploy: the domains may be aliased to the new deployment without appearing in the old project's domain list.

## Fix / workaround

When `vercel domains add <domain> --force` fails:
1. Query the aliases API to find the actual `projectId` owning the domain.
2. Use `DELETE /v9/projects/<projectId>/domains/<domain>?teamId=<teamId>` to remove it from that project.
3. Then add it to the target project.

In practice, `vercel --prod --yes` on a repo with existing domain aliases wires them automatically — no manual removal needed.

## Related

- [[Vercel CLI first deploy auto-connects GitHub]]
- [[Vercel bun auto-detection]]

## Sources

- casacolinacare-v2 dev session 2026-06-22
