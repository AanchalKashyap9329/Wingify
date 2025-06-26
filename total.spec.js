import { test } from '@playwright/test';
import { SummaryPage } from '../Pages/SummaryPage.js';

test('Test Dream Summary Page', async ({ page }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');

  const summary = new SummaryPage(page);
  await summary.validateStats();
});
