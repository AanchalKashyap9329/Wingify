import { test } from '@playwright/test';
import { DiaryPage } from '../Pages/DiaryPage.js';

test('Test Dream Diary Page', async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  const diary = new DiaryPage(page);
  await diary.validateRows();
});