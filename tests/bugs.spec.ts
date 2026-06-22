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

  test('207040 — care-level cards are actionable links (not inert cursor:pointer divs)', async ({ page }) => {
    await page.goto('/');
    // .care-row has cursor:pointer but currently contains no <a href> child
    const linkCount = await page.locator('.care-row a[href]').count();
    // Fixed: each of the 4 care rows must contain an anchor with a real destination
    expect(linkCount).toBe(4);
  });

  test('207041 — visit-section CTAs do not use href="#" (do not scroll to top)', async ({ page }) => {
    await page.goto('/');
    // Both .visit-actions CTAs currently have href="#" which scrolls the page to the top
    const ctaLocator = page.locator('.visit-actions a');
    await expect(ctaLocator).toHaveCount(2);

    const hrefs = await ctaLocator.evaluateAll((els) =>
      els.map((el) => (el as HTMLAnchorElement).getAttribute('href'))
    );
    // Fixed: neither CTA may use "#" as its href
    for (const href of hrefs) {
      expect(href).not.toBe('#');
    }
  });

  test('207042 — footer "Visit" column items are anchor links, not plain text', async ({ page }) => {
    await page.goto('/');
    // The footer Visit column (Home, About, Care, The home) currently uses plain <li> text
    const visitColumnLinks = page
      .locator('footer div')
      .filter({ has: page.locator('h4', { hasText: 'Visit' }) })
      .locator('li a');

    // Fixed: all 4 items in the Visit column must be anchor elements
    await expect(visitColumnLinks).toHaveCount(4);
  });

  test('207043 — pillar CTAs (".more") are anchor links, not inert divs', async ({ page }) => {
    await page.goto('/');
    // .pillar .more is currently a <div> — e.g. <div class="more">Read about care →</div>
    const moreLinkCount = await page.locator('.pillar a.more[href]').count();
    // Fixed: all 4 pillar CTAs must be anchor elements with a real href
    expect(moreLinkCount).toBe(4);
  });
});
