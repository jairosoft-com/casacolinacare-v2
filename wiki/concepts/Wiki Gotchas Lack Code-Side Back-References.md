---
title: Wiki Gotchas Lack Code-Side Back-References
type: concept
tags: [graphify, documentation, code-coupling]
created: 2026-07-06
updated: 2026-07-06
source_count: 0
aliases: [documentation-code gap]
provenance: synthesis
---

# Wiki Gotchas Lack Code-Side Back-References

Running `/graphify` over this repo's `app/`, `tests/`, and `wiki/` and inspecting the resulting graph's edges showed that documented gotchas exist only in the wiki, with zero structural link back to the source lines they apply to.

## Key claims

- `fraunces`/`inter` in `app/layout.tsx` have no edge to [[next/font — axes + weight constraint for variable fonts]], and `app/globals.css` has no edge to [[Turbopack CSS file-watch miss on programmatic write]] — the graph confirmed both wiki articles are structurally isolated from the code they describe.
- Risk: refactoring the font config or `globals.css` without separately checking the wiki could silently reintroduce a known, already-solved bug, since nothing in the code points a future editor at the constraint.
- Possible mitigation (not yet applied): a one-line code comment near the risky line pointing at the wiki article, so the connection survives even without re-running graphify.

## Related

- [[next/font — axes + weight constraint for variable fonts]]
- [[Turbopack CSS file-watch miss on programmatic write]]

## Sources

- Session: Plugin mgmt + ADO project mapping (2026-07-06)
