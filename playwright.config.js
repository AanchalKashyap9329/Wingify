// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['list'], ['allure-playwright']],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
});
