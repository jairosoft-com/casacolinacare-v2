import { expect, test } from '@playwright/test';

// Test Case TBD - Footer "Speak with us" address reads "Honolulu" (not "Hawaii Kai")
test('footer speak-with-us address shows Honolulu', async ({ page }) => {
  await page.goto('/');

  const footerAddress = page.locator('footer li', { hasText: '96825' });
  await expect(footerAddress).toBeVisible();
  await expect(footerAddress).toHaveText('Honolulu · 96825');
});
