import { expect, test } from '@playwright/test';

// Test Case 208951 - "The Home" mosaic renders correctly across mobile, tablet, and desktop
test('The Home mosaic stacks full-width on mobile without overlap or distortion', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const mosaic = page.locator('.mosaic');
  await mosaic.scrollIntoViewIfNeeded();

  const mosaicBox = await mosaic.boundingBox();
  const images = page.locator('.mosaic .mosaic-img');
  await expect(images).toHaveCount(6);

  const boxes = [];
  for (let i = 0; i < 6; i++) {
    boxes.push(await images.nth(i).boundingBox());
  }

  // Each image should span (near) the full mosaic width -- a single stacked column
  for (const box of boxes) {
    expect(box.width).toBeGreaterThan(mosaicBox.width * 0.95);
  }

  // Images should not overlap vertically -- each one starts at or after the previous one ends
  for (let i = 1; i < boxes.length; i++) {
    expect(boxes[i].y).toBeGreaterThanOrEqual(boxes[i - 1].y + boxes[i - 1].height - 1);
  }
});

test('The Home mosaic does not overflow the viewport on tablet', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/');

  const mosaic = page.locator('.mosaic');
  await mosaic.scrollIntoViewIfNeeded();

  const mosaicBox = await mosaic.boundingBox();
  expect(mosaicBox.x + mosaicBox.width).toBeLessThanOrEqual(768 + 1);

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(scrollWidth).toBeLessThanOrEqual(768 + 1);
});

test('The Home mosaic keeps its 12-column desktop layout', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const images = page.locator('.mosaic .mosaic-img');
  await images.first().scrollIntoViewIfNeeded();

  const first = await images.nth(0).boundingBox();
  const second = await images.nth(1).boundingBox();

  // On desktop the first two mosaic tiles sit side by side, not stacked
  const overlapVertically = first.y < second.y + second.height && second.y < first.y + first.height;
  expect(overlapVertically).toBe(true);
  expect(second.x).toBeGreaterThan(first.x);
});
