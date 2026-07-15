import { expect, test } from '@playwright/test';

// Test Case TBD - Footer tagline displays 'Open since 2026'
test('footer tagline shows updated founding year', async ({ page }) => {
  await page.goto('/');

  const tagline = page.locator('footer .tag');
  await expect(tagline).toBeVisible();
  await expect(tagline).toHaveText(
    'A family-style care home in Hawaii Kai. Five residents. Real aloha. Open since 2026.'
  );
});
