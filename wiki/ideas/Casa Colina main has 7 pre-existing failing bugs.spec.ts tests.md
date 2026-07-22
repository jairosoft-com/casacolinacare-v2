---
title: Casa Colina main has 7 pre-existing failing bugs.spec.ts tests
type: idea
tags: [casacolinacare-v2, testing, regression]
created: 2026-07-22
updated: 2026-07-22
source_count: 0
aliases: [bugs.spec.ts failing, 7 pre-existing failures]
provenance: synthesis
status: raw
---

# Casa Colina main has 7 pre-existing failing bugs.spec.ts tests

As of 2026-07-22, `tests/bugs.spec.ts` has 7 failing tests on unmodified `main` (all except
#207037). Confirmed unrelated to three photo-swap PRs merged the same day (#9, #10, #11 on
casacolinacare-v2) — each of the three CI runs showed the identical 7 failures plus 13 passing,
and the same failures reproduce running locally against unmodified `main`.

Each failing test already maps to an existing ADO Bug, all in state **New** (i.e. genuinely
unfixed, not a stale test) — no new defect needed, filing one would have duplicated these:

- [Bug #207036](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207036) — Nav overflows horizontally below 630px, no mobile menu
- [Bug #207038](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207038) — Anchor nav links don't update the URL hash
- [Bug #207039](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207039) — Phone/email are plain text, not tel:/mailto: links
- [Bug #207040](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207040) — Care-level cards show pointer cursor but do nothing on click
- [Bug #207041](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207041) — Visit-section CTAs link to `#`, scroll to top instead of staying
- [Bug #207042](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207042) — Footer navigation items are plain text, no anchor links
- [Bug #207043](https://dev.azure.com/jairo/CasaColinaCare.com/_workitems/edit/207043) — Pillar CTA text looks like links but is non-interactive

## Sources

- Session: Story #208916 end-to-end + kriss-homepage-new2 hotfixes (2026-07-22)
