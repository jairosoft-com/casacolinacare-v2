---
title: Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks
type: platform
tags: [azure-devops, user-story, tasks, checklist, acceptance-criteria]
created: 2026-07-08
updated: 2026-07-08
source_count: 1
aliases: [ado task checklist, per-ac tasks, one task per acceptance criterion]
---

# Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks

## Problem

A User Story's native "Tasks" panel in Azure Boards (checkbox + assignee avatar + title, with a
completed-count like "7/7") only renders as a checklist when there are multiple child Task work
items. A single consolidated "verify everything" task does not produce this view, even though
its description can capture the exact same information in prose.

## Pattern

Split each Acceptance Criterion (each Gherkin scenario) into its own child Task:

- Title convention: `AC1: <short scenario title>`, `AC2: ...`, sequential per story.
- Description: the full Given/When/Then for that one scenario, plus its file touchpoint(s).
- Non-AC prerequisite steps (e.g. "commit a staged code change" before verification is possible)
  get their own Task too, without an "AC" prefix.
- Out-of-scope/optional follow-ups discovered during verification get their own Task labeled
  "Optional: ...".

Confirmed against a user-provided reference screenshot of an unrelated story ("US-008-04") whose
Tasks panel showed checkboxed items titled "AC-008-09: ...", "AC-008-10: ...", etc., each
reflecting its own Resolved/Closed state.

## Related

- [[CasaColinaCare.com (Azure DevOps Project)]]
- [[Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type]]
- [[Azure DevOps Task fields reject certain values on state-transition updates]]

## Sources

- casacolinacare-v2 dev session 2026-07-08
