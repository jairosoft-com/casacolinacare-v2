---
title: Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type
type: platform
tags: [azure-devops, work-item-fields, html, markdown, rich-text]
created: 2026-07-08
updated: 2026-07-08
source_count: 1
aliases: [multilineFieldsFormat, ado html vs markdown fields]
---

# Azure DevOps multiline field format (HTML vs Markdown) varies per work item, not by type

## Problem

The rendering format of multiline fields (`System.Description`,
`Microsoft.VSTS.Common.AcceptanceCriteria`) is stored per work item in the response's
`multilineFieldsFormat` map (values `"html"` or `"markdown"`) — it is **not** fixed by work item
type or process template. Two User Stories in the same project can have one field in HTML and
the other in Markdown.

Writing the wrong syntax doesn't error — it just renders wrong:
- HTML `<div>` line breaks show up as literal text in a Markdown-format field (plain `\n` alone
  does not create a line break there either — everything runs together as one paragraph).
- Markdown `- [ ]` checklist syntax shows as literal dashes in an HTML-format field.

Additional gotcha found in the same session: backtick-wrapped angle-bracket text (e.g.
`` `<Image alt>` ``) gets silently stripped by ADO's sanitizer even inside backticks — the
rendered field just shows empty backticks. Avoid literal `<...>` syntax in field values; describe
the element in prose instead (e.g. "the Image component's alt text").

## Fix

Always check `multilineFieldsFormat` on the fetched work item before writing to a multiline
field:

- If `"html"`: use one `<div>` per line for line breaks, `<b>` for bold.
- If `"markdown"`: use plain `\n` for line breaks and `**bold**`; `- [ ] text` renders as a real,
  checkable checkbox.

## Related

- [[Azure DevOps User Story Tasks panel renders as a checklist only with per-AC child Tasks]]

## Sources

- casacolinacare-v2 dev session 2026-07-08
