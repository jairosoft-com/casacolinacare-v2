---
title: graphify --update Re-extraction Gotchas
type: code
tags: [graphify, update, ast, build-merge]
created: 2026-07-08
updated: 2026-07-08
source_count: 0
aliases: [graphify update re-extraction, graphify replace-on-re-extract, graphify phantom import ids]
provenance: synthesis
---

# graphify --update Re-extraction Gotchas

Two coupled mechanics govern how `graphify --update` re-extracts changed files. Both surfaced while updating this repo's graph after a mixed code + wiki change, and either can silently degrade the graph if ignored. Correct `.graphifyignore` scoping — see [[graphify Scope for casacolinacare-v2]] — is a prerequisite before any of this applies.

## Content-only code edits are AST-invariant — skip re-extraction

graphify's AST pass captures *structure* (imports, functions, classes), not string content. A commit that only changes copy (e.g. a phone number or marketing text) leaves the AST identical, so re-extracting those files adds nothing — the existing nodes and edges are already correct.

Worse, re-extracting a **lone** code file *without its import targets in the same batch* produces **phantom full-path import IDs**: `app_page → users_jairo_..._app_components_smoothlink_tsx` (an absolute-path-derived placeholder) instead of the resolved short node ID `app_page → components_smoothlink`. Extracting the whole `app/` directory together did not fix the module-level `imports_from` edge either. The safe move for a content-only code change is to **not re-extract it** and let the existing correct edges stand.

## build_merge replace-on-re-extract drops ALL of a file's edges

`build_merge`'s replace-on-re-extract drops **every** node and edge whose `source_file` is in the new chunk *before* merging the new fragment in. Correct for stale content — but it means an **incomplete** re-extraction silently loses still-valid edges.

Under-extracting the wiki hub files `_index.md` and `_log.md` (writing only a few of their links) dropped **29 valid `references` edges** — the index and log legitimately link to every page. Only after reproducing their **complete** link sets (22 links from `_index.md`, 18 from `_log.md`) did the merge come back with **+0 edges removed**. Rule: when re-extracting an index/log/hub file, reproduce its entire link set, or those edges vanish.

## Verification

After any `--update`, diff the merged graph against a pre-merge backup of `graph.json`: the `removed nodes` and `removed edges` sets should be empty (or contain only genuinely-stale entries). A non-empty removed-edge set is the signal that a re-extraction was incomplete.

## Related

- [[graphify Scope for casacolinacare-v2]] — the `.graphifyignore` scoping that must be correct before `--update` runs
- [[graphify CLI not invokable via bun/bunx]] — separate graphify invocation gotcha

## Sources

- Session: graphify-update-mechanics (2026-07-08)
