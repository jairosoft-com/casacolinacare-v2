import { expect, test } from '@playwright/test';

// Test Case TBD - Verify Visit Card hours display in 12-hour AM/PM format
test('visit card hours show 12-hour AM/PM format', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const visitCard = page.locator('.visit-card');
  await expect(visitCard).toBeVisible();

  const hours = visitCard.locator('.hours span').first();
  await expect(hours).toBeVisible();
  await expect(hours).toHaveText('Mon–Sat · 8:00 AM – 7:00 PM');
});
