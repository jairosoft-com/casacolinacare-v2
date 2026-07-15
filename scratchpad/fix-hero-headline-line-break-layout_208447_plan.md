# Implementation Plan: Fix hero headline line-break layout

**Story ID:** #208447
**Feature:** — (no parent Feature linked)
**Date:** 2026-07-13
**State:** New  |  **Points:** 1

---

## Story Summary

**Narrative:**
As a website visitor landing on the homepage, I want the hero headline's line breaks to read "A place where mom / and dad can feel / at home." So that the phrase doesn't awkwardly isolate "mom" alone on the first line.

**Acceptance Criteria:**
1. Given a visitor views the homepage hero section, When they read the headline, Then the line breaks display as "A place where mom" / "and dad can feel" / "at home." — not the current "A place where mom" / "and dad" / "can feel at home."

---

## Scope

What this plan covers:
- Relocating the explicit `<br />` in the hero `<h1>` (`app/page.tsx:49`) so the line break falls after "mom" instead of after "dad", producing the annotated 3-line layout.

What this plan does NOT cover (deferred or out of scope):
- No change to the headline copy/wording itself (already correct per #208370 — "mom and dad").
- No change to hero-meta paragraph, CTAs, hero image, or Ken Burns animation.
- No change to `.hero-content` / `.hero h1` CSS rules — the two-column grid (`.hero-content` at `app/globals.css:72`) and `clamp()` font sizing (`app/globals.css:73`) are the root cause of the natural wrap, but the fix stays markup-only per the AC's exact line-break spec.

---

## Code Touchpoints

Files and modules relevant to this story:

| File / Module | Relevance |
|---------------|-----------|
| `app/page.tsx:49` | `<h1>A place where mom and dad <br />can feel <span className="i">at home.</span></h1>` — the `<br />` is currently positioned after "dad"; must move to after "mom" |
| `app/globals.css:72` (`.hero-content`) | Two-column grid (`grid-template-columns:1fr 1fr`) constrains the h1 to roughly half the 1440px max-width — this is why "A place where mom and dad" currently wraps naturally before reaching the explicit `<br />`, producing the wrong 3-line split. Confirmed no edit needed — the AC's target layout is achievable with markup only. |
| `app/globals.css:73` (`.hero h1`) | `font-size:clamp(48px,6.4vw,92px)` — confirms the wrap point is viewport/width-driven, not a fixed-width issue; informs why the current explicit break lands in the wrong place |

---

## Approach

High-level implementation strategy:

1. Edit `app/page.tsx:49` — move the `<br />` from after "dad" to after "mom": change `<h1>A place where mom and dad <br />can feel <span className="i">at home.</span></h1>` to `<h1>A place where mom <br />and dad can feel <span className="i">at home.</span></h1>`.
2. Save and let Turbopack hot-reload; touch `app/globals.css` as a fallback if the change doesn't reflect (known project gotcha).
3. Visually verify against ADO Test Case #208449's 2 steps at the default viewport width used elsewhere in this story batch (desktop, ~1440px container).
4. Spot-check narrower viewports (tablet/mobile) to confirm "and dad can feel" and "at home." still wrap sensibly — the AC only specifies the desktop 3-line target from the screenshot, but a quick check avoids introducing an obviously broken narrow-viewport wrap.
5. Run `bun run test:e2e` to confirm no regression in `tests/bugs.spec.ts`.

Key decisions and trade-offs:
- Markup-only fix (moving one `<br />`) — no CSS/structural changes, since the two-column grid and clamp() sizing already produce the desired wrap for "and dad can feel" once the first break is repositioned.
- No copy changes — text content is untouched; only the break point moves, consistent with the corrections-style pattern used for stories #208360, #208364, #208367, and #208370.

---

## Dependencies

| Dependency | Type | Notes |
|------------|------|-------|
| #208370 | Upstream (completed) | Introduced the "mom and dad" copy this story's layout fix builds on; already merged to `main`. |

---

## Test Plan per AC

| AC | Test Type | Scenario |
|----|-----------|----------|
| AC1: hero headline line breaks read "mom" / "and dad can feel" / "at home." | Manual / Visual (E2E-eligible) | Given the homepage is loaded, When the hero headline is read, Then it displays on three lines exactly as "A place where mom" / "and dad can feel" / "at home." (covered by ADO Test Case #208449, steps 1–2) |

---

## Open Questions

No open questions.
