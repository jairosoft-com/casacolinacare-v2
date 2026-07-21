/**
 * Casa Colina Care — Credentials content spec
 *
 * Covers content-accuracy checks for the Credentials & accreditations section
 * that fall outside the bug-regression scope of bugs.spec.ts.
 *
 * Run: bun run test:e2e
 */

import { expect, test } from '@playwright/test';

test.describe('Casa Colina — credentials content', () => {
  test('208613 — DOH Inspected credential shows the current inspection date', async ({ page }) => {
    await page.goto('/');
    const credText = await page
      .locator('.cred')
      .filter({ has: page.locator('h4', { hasText: 'DOH Inspected' }) })
      .locator('p')
      .innerText();

    expect(credText).toContain('March 2026 · no deficiencies');
    expect(credText).not.toContain('March 2025');
  });

  test('208878 — State Licensed ARCH I credential shows OHCA, not OCHA', async ({ page }) => {
    await page.goto('/');
    const credText = await page
      .locator('.cred')
      .filter({ has: page.locator('h4', { hasText: 'State Licensed ARCH I' }) })
      .locator('p')
      .innerText();

    expect(credText).toContain('License OHCA #1808-C · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually');
    expect(credText).not.toContain('License OCHA #1808-C');
  });
});
