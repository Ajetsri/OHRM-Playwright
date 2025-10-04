import { test, expect } from '@playwright/test';
import { Directory } from '../pages/Directory.js';

test('Search Employee by Name', async ({ page }) => {
  const dir = new Directory(page);
  await dir.goto();
  await dir.searchByName('John');
  await expect(page.locator('text=John')).toBeVisible();
});
