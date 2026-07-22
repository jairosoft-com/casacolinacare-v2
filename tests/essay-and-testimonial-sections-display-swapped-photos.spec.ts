import { expect, test } from '@playwright/test';

// Test Case 208839 - Essay and testimonial sections display swapped photos
test('essay section shows kriss-homepage-new1 photo, testimonial shows kriss-homepage-new photo', async ({ page }) => {
  await page.goto('/');

  const heroImg = page.locator('.hero-img img');
  await expect(heroImg).toHaveAttribute('src', /images\.unsplash\.com/);

  const essayImg = page.locator('.essay-img img');
  await essayImg.scrollIntoViewIfNeeded();
  await expect(essayImg).toHaveAttribute('src', /kriss-homepage-new1\.png/);

  const testimonialImg = page.locator('.testi-img img');
  await testimonialImg.scrollIntoViewIfNeeded();
  await expect(testimonialImg).toHaveAttribute('src', /kriss-homepage-new\.png/);
});
