---
title: Azure DevOps Task fields reject certain values on state-transition updates
type: platform
tags: [azure-devops, work-item-fields, task, state-transition]
created: 2026-07-08
updated: 2026-07-08
source_count: 1
aliases: [TF401320, ado invalid field value]
---

# Azure DevOps Task fields reject certain values on state-transition updates

## Problem

Two `wit_update_work_item` calls that seem reasonable both fail with `TF401320`:

1. Setting `System.Reason` to a custom string when changing `System.State` (e.g. `"Removed"`) →
   `Rule Error for field Reason... contains the value '...' that is not in the list of supported
   values`. The Reason field only accepts values from the work item type's defined transition
   set (e.g. "New", "Completed", "Removed from the backlog"), not arbitrary text.
2. Setting `Microsoft.VSTS.Scheduling.RemainingWork` to `"0"` when closing a task →
   `InvalidNotEmpty`. ADO treats an explicit zero as an empty value this rule won't accept.

## Fix

- Omit `System.Reason` from the update entirely — ADO auto-fills a valid default reason for the
  target state (observed: "Completed" when moving Task → Closed, "Removed from the backlog" when
  moving → Removed).
- Don't try to zero out `RemainingWork` when closing a task — just set `System.State` and
  `Microsoft.VSTS.Scheduling.CompletedWork`; leave `RemainingWork` at its prior value.

## Related

- [[Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks]]
- [[Azure DevOps wit_update_work_item rejects mixed-field-type batches]]

## Sources

- casacolinacare-v2 dev session 2026-07-08
