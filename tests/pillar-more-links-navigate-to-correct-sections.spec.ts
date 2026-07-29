import { test, expect } from '@playwright/test';

// Test Case 209525 - Pillar 'more' links navigate to correct sections
test('pillar more links navigate to their sections, except 24/7 presence', async ({ page }) => {
  await page.goto('/');

  const pillars = page.locator('.pillar');

  const careLink = pillars.nth(0).getByRole('link', { name: 'Read about care →' });
  await expect(careLink).toHaveAttribute('href', '#care-levels');
  await careLink.click();
  await expect(page.locator('#care-levels')).toBeInViewport();

  const foodLink = pillars.nth(2).getByRole('link', { name: 'A day at the home →' });
  await expect(foodLink).toHaveAttribute('href', '#place');
  await foodLink.click();
  await expect(page.locator('#place')).toBeInViewport();

  const groundsLink = pillars.nth(3).getByRole('link', { name: 'See the home →' });
  await expect(groundsLink).toHaveAttribute('href', '#place');

  const teamMore = pillars.nth(1).locator('.more');
  await expect(teamMore).toHaveText('Meet the team →');
  await expect(teamMore.locator('a')).toHaveCount(0);
});
