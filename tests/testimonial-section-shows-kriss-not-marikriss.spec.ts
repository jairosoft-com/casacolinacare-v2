import { expect, test } from '@playwright/test';

// Test Case 208877 - Testimonial section shows Kriss (not Marikriss)
test('testimonial section refers to Kriss, not Marikriss', async ({ page }) => {
  await page.goto('/');

  const intro = page.locator('.testi-body p').first();
  await expect(intro).toContainText('Kriss Aseniero');
  await expect(intro).not.toContainText('Marikriss');

  const cite = page.locator('.testimonial cite');
  await expect(cite).toHaveText('♡ Kriss');
});
