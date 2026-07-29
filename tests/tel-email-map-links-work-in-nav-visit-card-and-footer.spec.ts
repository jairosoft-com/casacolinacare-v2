import { test, expect } from '@playwright/test';

// Test Case 209554 - tel/email/map links work in nav, visit card, and footer
test('nav, visit card, and footer expose real tel/mailto/map links', async ({ page }) => {
  await page.goto('/');

  const nav = page.locator('.nav');
  await expect(nav.locator('a[href="tel:+18084441168"]')).toHaveCount(1);

  const visitCard = page.locator('.visit-card');
  await visitCard.scrollIntoViewIfNeeded();
  await expect(visitCard.locator('a[href="tel:+18084441168"]')).toHaveCount(1);
  await expect(visitCard.locator('a[href="mailto:kriss@casacolinacare.com"]')).toHaveCount(1);
  const visitMapLink = visitCard.locator('a[href*="google.com/maps"]');
  await expect(visitMapLink).toHaveCount(1);
  await expect(visitMapLink).toHaveAttribute('target', '_blank');
  await expect(visitMapLink).toHaveAttribute('rel', /noopener/);

  const footer = page.locator('footer');
  await footer.scrollIntoViewIfNeeded();
  await expect(footer.locator('a[href="tel:+18084441168"]')).toHaveCount(1);
  await expect(footer.locator('a[href="mailto:kriss@casacolinacare.com"]')).toHaveCount(1);
  const footerMapLink = footer.locator('a[href*="google.com/maps"]');
  await expect(footerMapLink).toHaveCount(2);
  for (const link of await footerMapLink.all()) {
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  }
});
