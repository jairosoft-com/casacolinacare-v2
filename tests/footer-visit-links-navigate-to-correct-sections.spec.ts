import { test, expect } from '@playwright/test';

// Test Case 209556 - Footer Visit links navigate to correct sections
test('footer Visit list links to their sections, and hero/testimonial have the needed anchor ids', async ({ page }) => {
  await page.goto('/');

  // Scope to the ul immediately following the "Visit" h4, avoiding ancestor divs
  // that also contain that heading as a descendant (see ADO Bug #207042).
  const visitList = page.locator('footer h4:text-is("Visit") + ul');

  const homeLink = visitList.getByRole('link', { name: 'Home' });
  await expect(homeLink).toHaveAttribute('href', '#top');
  const aboutLink = visitList.getByRole('link', { name: 'About' });
  await expect(aboutLink).toHaveAttribute('href', '#about');
  const careLink = visitList.getByRole('link', { name: 'Care' });
  await expect(careLink).toHaveAttribute('href', '#care');
  const homeSectionLink = visitList.getByRole('link', { name: 'The home' });
  await expect(homeSectionLink).toHaveAttribute('href', '#place');

  await expect(page.locator('#top')).toHaveCount(1);
  await expect(page.locator('#about')).toHaveCount(1);

  await homeLink.click();
  await expect(page.locator('#top')).toBeInViewport();

  await aboutLink.click();
  await expect(page.locator('#about')).toBeInViewport();
});
