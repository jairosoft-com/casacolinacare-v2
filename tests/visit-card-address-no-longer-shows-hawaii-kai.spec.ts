import { expect, test } from '@playwright/test';

// Test Case 208879 - Visit-card address no longer shows Hawaii Kai
test('visit-card address shows Honolulu only, no Hawaii Kai', async ({ page }) => {
  await page.goto('/');

  const addr = page.locator('.visit-card .addr');
  await addr.scrollIntoViewIfNeeded();
  await expect(addr).toContainText('189 Anapalau Street');
  await expect(addr).toContainText('Honolulu, HI 96825');
  await expect(addr).not.toContainText('Hawaii Kai');
});
