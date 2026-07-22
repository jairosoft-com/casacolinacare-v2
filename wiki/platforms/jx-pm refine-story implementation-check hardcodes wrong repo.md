---
title: jx-pm refine-story implementation-check hardcodes wrong repo
type: platform
tags: [jx-pm, claude-code, skill-bug, github]
created: 2026-07-22
updated: 2026-07-22
source_count: 0
aliases: [refine-story wrong repo, implementation-check hardcoded repo]
provenance: synthesis
---

# jx-pm refine-story implementation-check hardcodes wrong repo

## Problem

`jx-pm:refine-story`'s Phase 5 (implementation status check) hardcodes `jairosoft-com/jodex-plugins`
as the GitHub repo to search for PRs, branches, and commits — correct when the skill runs inside
its own home repo, but wrong for every other project it's invoked in. Trusting the default would
report false "no implementation evidence found" on any project other than jodex-plugins itself,
since it's searching the wrong repo's PR/commit history entirely.

## Fix

Before running the implementation check, read `git remote get-url origin` in the target repo and
search *that* repo's GitHub history instead of the skill's hardcoded default (here,
`jairosoft-com/casacolinacare-v2` instead of `jairosoft-com/jodex-plugins`).

## Related

- [[CasaColinaCare.com (Azure DevOps Project)]]

## Sources

- Session: Story #208916 end-to-end + kriss-homepage-new2 hotfixes (2026-07-22)
