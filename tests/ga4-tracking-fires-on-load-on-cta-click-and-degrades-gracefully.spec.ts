/**
 * Casa Colina Care — GA4 tracking spec
 *
 * Encodes ADO Test Case #209726 (Tests Story #209384).
 * AC1/AC2 tests FAIL on the current codebase — GA4 is not yet wired up. That is
 * intentional; they turn green once the story is implemented.
 * AC3 (graceful degradation) already passes today, since there is no GA4 script
 * to block yet — it stays green as a guard against future regressions.
 *
 * Run: bun run test:e2e -- -g "GA4"
 */

import { expect, test } from '@playwright/test';

// Test Case 209726 - GA4 tracking fires on load, on CTA click, and degrades gracefully
test.describe('GA4 tracking', () => {
  test('AC1 — pageview event fires to GA4 on page load', async ({ page }) => {
    await page.goto('/');

    const dataLayerLength = await page.evaluate(() => {
      const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      return Array.isArray(dl) ? dl.length : -1;
    });

    // Fixed: gtag.js must be loaded and initialized, pushing at least one entry
    // (the implicit page_view) onto window.dataLayer.
    expect(dataLayerLength).toBeGreaterThan(0);
  });

  test('AC2 — clicking the "Request a visit" CTA sends a GA4 custom event', async ({ page }) => {
    await page.goto('/');

    const dataLayerLengthBefore = await page.evaluate(() => {
      const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      return Array.isArray(dl) ? dl.length : 0;
    });

    await page.getByRole('link', { name: /Request a visit/ }).first().click();

    const ctaEventFired = await page.evaluate((before) => {
      const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (!Array.isArray(dl)) return false;
      return dl.length > before;
    }, dataLayerLengthBefore);

    // Fixed: the CTA click handler must push a custom event (e.g. cta_click) to dataLayer.
    expect(ctaEventFired).toBe(true);
  });

  test('AC3 — page still renders and functions if the GA4 script is blocked', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => route.abort());
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Request a visit/ }).first()).toBeVisible();
    expect(consoleErrors).toEqual([]);
  });
});
