import { expect, test } from '@playwright/test';

// Test Case 208920 - "A letter from our home" essay section shows updated kriss-homepage-new1 photo
test('essay section shows updated kriss-homepage-new1 photo, not caregiver-resident', async ({ page }) => {
  await page.goto('/');

  const essayImg = page.locator('.essay-img img');
  await essayImg.scrollIntoViewIfNeeded();

  await expect(essayImg).toHaveAttribute('src', /kriss-homepage-new1\.png/);
  await expect(essayImg).not.toHaveAttribute('alt', /caregiver/i);
  await expect(essayImg).toHaveAttribute('sizes', '(min-width: 1320px) 473px, 42vw');
  await expect(essayImg).toHaveCSS('object-fit', 'cover');
});
