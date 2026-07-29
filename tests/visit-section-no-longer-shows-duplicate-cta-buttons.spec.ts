import { test, expect } from '@playwright/test';

// Test Case 209557 - Visit section no longer shows duplicate CTA buttons
test('Visit section has no duplicate CTA buttons and visit card is intact', async ({ page }) => {
  await page.goto('/');

  const visitSection = page.locator('section.visit');
  await visitSection.scrollIntoViewIfNeeded();

  await expect(visitSection.locator('.visit-actions')).toHaveCount(0);
  await expect(visitSection.getByRole('link', { name: 'Request a consultation' })).toHaveCount(0);
  await expect(visitSection.getByRole('link', { name: 'Schedule a visit' })).toHaveCount(0);

  const visitCard = visitSection.locator('.visit-card');
  await expect(visitCard).toBeVisible();
  await expect(visitCard.locator('.phone')).toBeVisible();
  await expect(visitCard.locator('.email')).toBeVisible();
  await expect(visitCard.locator('.addr')).toBeVisible();
  await expect(visitCard.locator('.hours')).toBeVisible();
});
