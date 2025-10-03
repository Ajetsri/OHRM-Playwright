// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [
    ['list'],
    ['json', { outputFile: 'reports/results.json' }],
    ['html', { open: 'never' }]
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  use: {
    headless: false,
    video: 'on',// options: 'on', 'retain-on-failure', 'off'
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
  },
  outputDir: 'artifacts/',
});





    

