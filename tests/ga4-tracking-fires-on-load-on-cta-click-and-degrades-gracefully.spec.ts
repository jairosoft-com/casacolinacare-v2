/**
 * Casa Colina Care — GA4 tracking spec
 *
 * Encodes ADO Test Case #209726 (Tests Story #209384).
 * AC1/AC2 require NEXT_PUBLIC_GA_ID to be set (env var, e.g. via .env.local) —
 * without it, the app deliberately skips rendering the GA4 scripts (see AC3),
 * so those two tests fall back to red rather than false-passing.
 *
 * Run: NEXT_PUBLIC_GA_ID=G-TEST0000 bun run test:e2e -- -g "GA4"
 */

import { expect, test } from '@playwright/test';

// Test Case 209726 - GA4 tracking fires on load, on CTA click, and degrades gracefully
test.describe('GA4 tracking', () => {
  test('AC1 — pageview event fires to GA4 on page load', async ({ page }) => {
    await page.goto('/');

    // next/script's "afterInteractive" strategy runs after hydration, not
    // necessarily by the 'load' event — poll instead of reading immediately.
    await page.waitForFunction(
      () => {
        const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
        return Array.isArray(dl) && dl.length > 0;
      },
      undefined,
      { timeout: 5000 }
    );

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
    await page.waitForFunction(
      () => {
        const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
        return Array.isArray(dl) && dl.length > 0;
      },
      undefined,
      { timeout: 5000 }
    );

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
    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => route.abort());
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Request a visit/ }).first()).toBeVisible();
    // Browser-level "failed to load resource" logs from the deliberate route.abort()
    // above are expected and not asserted on — only uncaught JS exceptions matter here.
    expect(pageErrors).toEqual([]);
  });
});
