import { expect, test } from '@playwright/test';

// Test Case TBD - Personal plans pillar uses gender-neutral pronoun
test('personal plans pillar copy uses "them" not "her"', async ({ page }) => {
  await page.goto('/');

  const heading = page.getByRole('heading', { name: 'Personal plans' });
  await expect(heading).toBeVisible();

  const pillar = heading.locator('..');
  const description = pillar.locator('p');
  await expect(description).toHaveText(
    'A care plan built for them — not a room number. Updated as needs change, with family at the table.'
  );

  await expect(page.getByRole('heading', { name: '24/7 presence' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Real food' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Quiet grounds' })).toBeVisible();
});
