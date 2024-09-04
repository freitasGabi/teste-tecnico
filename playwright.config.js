const { devices } = require('@playwright/test');
const allurePlaywright = require('allure-playwright');

module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  use: {
    headless: true,
    video: 'on',
    screenshot: 'on',
  },
};