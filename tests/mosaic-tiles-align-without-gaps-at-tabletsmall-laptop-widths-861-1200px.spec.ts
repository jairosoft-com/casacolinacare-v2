import { expect, test } from '@playwright/test';

// Test Case 208960 - Mosaic tiles align without gaps at tablet/small-laptop widths (861-1200px)
test('mosaic tiles have no unexpected gaps or overlap at 900px', async ({ page }) => {
  await page.setViewportSize({ width: 900, height: 1024 });
  await page.goto('/');

  const mosaic = page.locator('.mosaic');
  await mosaic.scrollIntoViewIfNeeded();

  const images = page.locator('.mosaic .mosaic-img');
  await expect(images).toHaveCount(6);

  const boxes = [];
  for (let i = 0; i < 6; i++) {
    boxes.push(await images.nth(i).boundingBox());
  }

  // Adjacent tiles in the same column band should be separated by the intended
  // grid gap (14px) only -- not overlapping and not leaving unexplained dead space.
  const adjacentPairs = [
    [0, 3], // lawn (top-left) -> garden path (bottom-left)
    [1, 2], // living room (top-right) -> kitchen
    [2, 5], // kitchen -> floor tile
  ];
  for (const [aIdx, bIdx] of adjacentPairs) {
    const gap = boxes[bIdx].y - (boxes[aIdx].y + boxes[aIdx].height);
    expect(gap).toBeGreaterThanOrEqual(-1);
    expect(gap).toBeLessThanOrEqual(20);
  }
});

test('mosaic tile proportions stay consistent between 900px and desktop', async ({ page }) => {
  await page.setViewportSize({ width: 900, height: 1024 });
  await page.goto('/');

  const mosaic = page.locator('.mosaic');
  await mosaic.scrollIntoViewIfNeeded();
  const midWidthBox = await page.locator('.mosaic .mosaic-img').first().boundingBox();
  const midWidthRatio = midWidthBox.width / midWidthBox.height;

  await page.setViewportSize({ width: 1440, height: 900 });
  await mosaic.scrollIntoViewIfNeeded();
  const desktopBox = await page.locator('.mosaic .mosaic-img').first().boundingBox();
  const desktopRatio = desktopBox.width / desktopBox.height;

  // The lead tile's aspect ratio should be roughly the same shape at both widths --
  // a fixed-pixel row height while the column width scales with the viewport
  // distorts this ratio (squashed/tall at narrower widths).
  const relativeDiff = Math.abs(midWidthRatio - desktopRatio) / desktopRatio;
  expect(relativeDiff).toBeLessThan(0.2);
});

test('mosaic still stacks full-width on mobile (861px breakpoint unaffected)', async ({ page }) => {
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

  for (const box of boxes) {
    expect(box.width).toBeGreaterThan(mosaicBox.width * 0.95);
  }
  for (let i = 1; i < boxes.length; i++) {
    expect(boxes[i].y).toBeGreaterThanOrEqual(boxes[i - 1].y + boxes[i - 1].height - 1);
  }
});
