import { expect, test } from '@playwright/test';

// Test Case 208737 - Testimonial section shows the founder-story design and stays responsive
test('testimonial section renders founder-story design and stays responsive', async ({ page }) => {
  await page.goto('/');

  const section = page.locator('.testimonial');
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible();

  const heading = page.getByRole('heading', { name: 'Discover the heart behind our' });
  await expect(heading).toBeVisible();

  const textColumn = page.locator('.testimonial-inner > div').first();
  const photoWrap = page.locator('.testi-img-wrap');
  const photo = page.getByRole('img', { name: 'Marikriss with a resident' });
  await expect(photo).toBeVisible();
  await expect(photoWrap.locator('.testi-img')).toHaveCSS('border-radius', '38px 160px');

  const cite = page.getByText('♡ Marikriss');
  await expect(cite).toBeVisible();

  // desktop: photo column sits beside the text column, not rotating/cycling
  const textBoxDesktop = await textColumn.boundingBox();
  const photoBoxDesktop = await photoWrap.boundingBox();
  expect(photoBoxDesktop!.x).toBeGreaterThan(textBoxDesktop!.x);
  await expect(cite).toBeVisible();

  // mobile: layout collapses to a single column with the photo above the text, no overflow
  await page.setViewportSize({ width: 375, height: 800 });
  const textBoxMobile = await textColumn.boundingBox();
  const photoBoxMobile = await photoWrap.boundingBox();
  expect(photoBoxMobile!.y).toBeLessThan(textBoxMobile!.y);
  expect(await section.evaluate((el) => el.scrollWidth)).toBeLessThanOrEqual(375);
});
