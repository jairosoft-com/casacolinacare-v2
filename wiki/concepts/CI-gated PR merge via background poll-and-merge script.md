---
title: CI-gated PR merge via background poll-and-merge script
type: concept
tags: [github-cli, ci, automation, playwright]
created: 2026-07-22
updated: 2026-07-22
source_count: 0
aliases: [poll gh pr checks and merge, wait for CI then merge]
provenance: synthesis
---

# CI-gated PR merge via background poll-and-merge script

## Pattern

When asked to "merge the PR" while CI is still running, run a single background Bash command
that:

1. Polls `gh pr checks <N> --json name,bucket` every ~20s until no check reports
   `"bucket":"pending"`.
2. Branches on the result: if any check is `"bucket":"fail"`, print a distinct marker (e.g.
   `CI_FAILED`) and stop without merging; otherwise run `gh pr merge --squash --delete-branch`
   and print a success marker.

```bash
until s=$(gh pr checks <N> --json name,bucket 2>&1) && ! echo "$s" | grep -q '"bucket":"pending"'; do
  sleep 20
done
if echo "$s" | grep -q '"bucket":"fail"'; then
  echo "CI_FAILED"
else
  gh pr merge <N> --squash --delete-branch
  echo "MERGED"
fi
```

## Why

- Avoids merging blind against in-progress checks (a real risk if you fire `gh pr merge`
  immediately on request).
- Avoids blocking synchronously on a multi-minute CI run — the background-task mechanism
  notifies once the script exits, so the agent can do other things (or nothing) while it waits.
- On failure, still requires a human decision before overriding: whether the failing check is a
  known, unrelated baseline issue (safe to merge past with `--admin`) or a real regression this PR
  introduced. The script surfaces the outcome; it doesn't auto-override.

## Applied

Used three times in one session (PRs #9, #10, #11 on casacolinacare-v2) — all three hit the same
pre-existing, unrelated `bugs.spec.ts` failures on `main`
([[Casa Colina main has 7 pre-existing failing bugs.spec.ts tests]]), confirmed identical each
time before merging past them with `--admin`.

## Related

- [[gh pr merge --delete-branch fails when a worktree holds the branch]]
- [[Casa Colina main has 7 pre-existing failing bugs.spec.ts tests]]

## Sources

- Session: Story #208916 end-to-end + kriss-homepage-new2 hotfixes (2026-07-22)
