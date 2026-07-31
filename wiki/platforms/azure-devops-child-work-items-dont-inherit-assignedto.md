---
title: Azure DevOps child work items don't inherit AssignedTo from parent
type: platform
tags: [azure-devops, ado, work-items, assignment]
created: 2026-07-29
updated: 2026-07-29
source_count: 0
aliases: [ado assignment inheritance, task assignedto]
provenance: synthesis
---

# Azure DevOps child work items don't inherit `AssignedTo` from parent

## Fact

Moving a parent User Story to `Active` via `wit_update_work_item` auto-populates
`System.AssignedTo` with the calling identity (whoever the ADO API call is authenticated as).
Child Tasks created via `wit_add_child_work_items` and Test Cases created via
`testplan_create_test_case` do **not** inherit this — they're created unassigned regardless of
the parent story's assignee, since neither creation call accepts an `AssignedTo` field
directly.

## How to apply

Explicitly patch `System.AssignedTo` on each child Task/Test Case via a follow-up
`wit_update_work_item` call (using the identity's email or unique name, e.g.
`jvillanueva@jairosoft.com`) if consistent assignment across the whole story hierarchy is
wanted. This has to be done per work item — there's no batch/cascade option.

## Related

- [[Azure DevOps Task fields reject certain values on state-transition updates]]
- [[Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks]]
- [[CasaColinaCare.com (Azure DevOps Project)]]

## Sources

- Session: Lanai design-fidelity batch (5 stories) + hover/favicon/scroll-spy fixes (2026-07-29)
