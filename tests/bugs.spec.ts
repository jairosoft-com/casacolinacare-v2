/**
 * Casa Colina Care — Bug regression spec
 *
 * Each test encodes one ADO bug (207036–207043).
 * All 8 tests FAIL on the current (unfixed) codebase — that is intentional.
 * A test turns green when its corresponding bug is resolved.
 *
 * Run: bun run test:e2e
 */

import { expect, test } from '@playwright/test';

test.describe('Casa Colina — known bug regressions', () => {
  // ─── Mobile-viewport group ────────────────────────────────────────────────
  test.describe('mobile viewport (390×844)', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('207036 — nav fits horizontally at 390px (no horizontal page overflow)', async ({ page }) => {
      await page.goto('/');
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth - doc.clientWidth;
      });
      // Fixed: nav must not push the page wider than the viewport
      expect(overflow).toBe(0);
    });

    test('207037 — trust-strip marquee is clipped (strip has overflow-x: hidden)', async ({ page }) => {
      await page.goto('/');
      const overflowX = await page.evaluate(() => {
        const strip = document.querySelector('.strip');
        return strip ? getComputedStyle(strip).overflowX : 'element not found';
      });
      // Fixed: .strip must clip its scrolling track so it can't widen the page
      expect(overflowX).toBe('hidden');
    });
  });

  // ─── Desktop-viewport group (default) ─────────────────────────────────────

  test('207038 — clicking "About" nav link updates the URL hash to #story', async ({ page }) => {
    await page.goto('/');
    // handleAnchorClick currently calls window.scrollTo() without updating location.hash
    await page.locator('.nav-links').getByRole('link', { name: 'About' }).click();
    // Fixed: URL must reflect the anchor target
    await expect(page).toHaveURL(/#story$/);
  });

  test('207039 — phone and email are real tel:/mailto: links', async ({ page }) => {
    await page.goto('/');
    // Currently both are plain <span> / text nodes — not links
    const telCount = await page.locator('a[href^="tel:"]').count();
    const mailCount = await page.locator('a[href^="mailto:"]').count();
    // Fixed: at least one tel: link and one mailto: link anywhere on the page
    expect(telCount).toBeGreaterThanOrEqual(1);
    expect(mailCount).toBeGreaterThanOrEqual(1);
  });

  test('207040 — care-level cards no longer show misleading pointer cursor or arrow glyph', async ({ page }) => {
    await page.goto('/');
    // Fixed per this bug's AC: cards are intentionally non-interactive, so the pointer
    // cursor and arrow glyph (which implied clickability) are removed rather than
    // wired up to real links.
    const cursor = await page.locator('.care-row').first().evaluate((el) => getComputedStyle(el).cursor);
    expect(cursor).not.toBe('pointer');
    const arrowCount = await page.locator('.care-row .arrow').count();
    expect(arrowCount).toBe(0);
  });

  test('207041 — visit section no longer has misleading href="#" CTAs (superseded: CTAs removed in redesign)', async ({ page }) => {
    await page.goto('/');
    // The .visit-actions CTAs this bug was filed against no longer exist — the section
    // was redesigned to show direct contact info (.visit-card) instead of generic CTAs.
    await expect(page.locator('.visit-actions')).toHaveCount(0);
    // No anchor within the visit section should use the bare "#" placeholder href.
    const hashHrefCount = await page.locator('.visit a[href="#"]').count();
    expect(hashHrefCount).toBe(0);
  });

  test('207042 — footer "Visit" column items are anchor links, not plain text', async ({ page }) => {
    await page.goto('/');
    const visitColumnLinks = page.locator('footer .footer-col-visit li a');

    // Fixed: all 4 items in the Visit column must be anchor elements
    await expect(visitColumnLinks).toHaveCount(4);
  });

  test('207043 — pillar CTAs (".more") are anchor links, not inert divs', async ({ page }) => {
    await page.goto('/');
    // Fixed: 3 of 4 pillar CTAs are wired to real sections and must be anchors with a real href.
    const moreLinkCount = await page.locator('.pillar a.more[href]').count();
    expect(moreLinkCount).toBe(3);
    // "Meet the team" (pillar ii) has no target section yet — stays plain text pending a
    // product decision (see ADO 207043), so exactly one ".more" remains a non-anchor div.
    const moreDivCount = await page.locator('.pillar div.more').count();
    expect(moreDivCount).toBe(1);
  });
});
