---
title: Azure DevOps wit_update_work_item rejects mixed-field-type batches
type: platform
tags: [azure-devops, work-item-fields, batching, json-patch]
created: 2026-07-13
updated: 2026-07-13
source_count: 0
aliases: [ado batching error, "the type changed without a value"]
provenance: synthesis
---

# Azure DevOps wit_update_work_item rejects mixed-field-type batches

## Problem

Combining an AC/Description content-and-format patch (e.g.
`Microsoft.VSTS.Common.AcceptanceCriteria` + its `multilineFieldsFormat` entry) with unrelated
scalar fields (`Microsoft.VSTS.Common.Priority`, `Microsoft.VSTS.Scheduling.StoryPoints`,
`Microsoft.VSTS.Common.ValueArea`) in a single `wit_update_work_item` call fails with a generic
error: `"The type changed without a value. Please provide a valid value."` This happened
identically across two separate User Stories (#208447, #208450) in the same session — not a
one-off fluke.

## Fix

Split into separate single-purpose calls instead of one combined patch:
1. AC content + its `multilineFieldsFormat` entry, together.
2. Priority, alone.
3. StoryPoints, alone.

Each isolated call succeeded. The tool schema gives no hint about why mixed batches fail —
this was discovered empirically.

## Related

- [[Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type]]
- [[Azure DevOps Task fields reject certain values on state-transition updates]]

## Sources
- Session: ADO story creation, refinement, and implementation for #208447/#208450 (2026-07-13)
