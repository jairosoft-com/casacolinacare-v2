# Implementation Plan: Wire up tel/email/map links sitewide

**Story ID:** #209478
**Feature:** none (standalone story)
**Date:** 2026-07-29
**State:** New  |  **Points:** 3

---

## Story Summary

**Narrative:**
As a website visitor, I want the phone number, email, and street address to be clickable everywhere they appear, so that I can call, email, or get directions with one tap instead of copying text manually.

**Acceptance Criteria:**
1. Given the nav bar, when I view the phone number, then it is a tel:+18084441168 link.
2. Given the Visit section card, when I view phone/email/address, then phone is a tel: link, email is a mailto:kriss@casacolinacare.com link, and the address links to Google Maps (opens in a new tab, rel=noopener).
3. Given the footer "Speak with us" list, when I view phone/email/address, then the same three link types apply (tel:, mailto:, Google Maps).

---

## Scope

What this plan covers:
- Wrap the nav phone number in a `tel:` link.
- Wrap the visit card's phone, email, and address in `tel:`, `mailto:`, and Google Maps links respectively.
- Wrap the footer "Speak with us" phone, email, and address the same way.

What this plan does NOT cover:
- No visual/styling changes beyond what's needed for the anchors to inherit existing text styling (global `a{color:inherit;text-decoration:none}` already covers this — confirmed no new CSS needed).

---

## Code Touchpoints

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:25` | Nav phone `<span className="phone">` → needs `tel:` link |
| `app/page.tsx:345-351` | Visit card phone/email/addr divs → need `tel:`/`mailto:`/Google Maps links |
| `app/page.tsx:389-392` | Footer "Speak with us" `<li>` items → need the same three link types |

Google Maps URL (from the Lanai design source): `https://www.google.com/maps/search/?api=1&query=189+Anapalau+Street+Honolulu+HI+96825`

---

## Approach

1. Nav (line 25): replace `<span className="phone">+1 (808) 444-1168</span>` with the phone text wrapped in `<a href="tel:+18084441168">`.
2. Visit card (lines 345-351):
   - `<div className="phone">` → wrap text in `<a href="tel:+18084441168">`.
   - `<div className="email">` → wrap text in `<a href="mailto:kriss@casacolinacare.com">`.
   - `<div className="addr">` → wrap the two address lines in `<a href="{maps URL}" target="_blank" rel="noopener">`.
3. Footer (lines 389-392): wrap each of the phone/email/address `<li>` contents the same way (address li text split across two li's — combine or wrap each with the same href, matching the design's single anchor spanning both lines via `<br/>`).
4. Run `bun run dev`, verify the pre-written spec (`tests/tel-email-map-links-work-in-nav-visit-card-and-footer.spec.ts`, currently red) turns green.
5. Run Test Case #209554 manually to double check target/rel attributes on the map links.

Key decisions and trade-offs:
- Use plain `<a>` (not `SmoothLink`) since these are `tel:`/`mailto:`/external URLs, not in-page anchors — `SmoothLink` is only for `#`-prefixed same-page navigation.
- Footer address spans two `<li>` in current markup ("189 Anapalau Street" / "Honolulu · 96825"); the design wraps both lines in one anchor with a `<br/>`. Will merge into one `<li>` with one anchor to match the design and keep one Google Maps link instead of two.

---

## Dependencies

No external dependencies. Sibling stories #209468/#209472 (merged), #209484, #209491 touch different, non-overlapping parts of `app/page.tsx`.

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC-209478-1: nav tel: link | E2E (Playwright) | Given the nav, then the phone number has `href="tel:+18084441168"` |
| AC-209478-2: visit card tel/mailto/map | E2E (Playwright) | Given the visit card, then phone/email/address have the correct `tel:`/`mailto:`/maps hrefs, map link has `target="_blank"` + `rel="noopener"` |
| AC-209478-3: footer tel/mailto/map | E2E (Playwright) | Given the footer, then phone/email/address have the same three link types and attributes |

Spec already written (red): `tests/tel-email-map-links-work-in-nav-visit-card-and-footer.spec.ts`, per Test Case #209554.

---

## Open Questions

No open questions.
