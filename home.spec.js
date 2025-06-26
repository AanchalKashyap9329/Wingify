
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage.js';

// Test 1: Loader timing and visibility
test('Test Dream Home Page (Loader + Visibility)', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.waitForLoading();
});

//  Test 2: Tabs open after clicking "My Dreams"
test('Should open dreams-diary.html and dreams-total.html in new tabs when "My Dreams" is clicked', async ({ page }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/');

  const [tab1, tab2] = await Promise.all([
    page.context().waitForEvent('page'),
    page.context().waitForEvent('page'),
    page.locator('text=My Dreams').click(),
  ]);

  const urls = [await tab1.url(), await tab2.url()];
  expect(urls).toContain('https://arjitnigam.github.io/myDreams/dreams-diary.html');
  expect(urls).toContain('https://arjitnigam.github.io/myDreams/dreams-total.html');
});