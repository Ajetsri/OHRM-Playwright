import { test } from '@playwright/test';
import { Performance } from '../pages/performance.js';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(loginData.valid.username, loginData.valid.password);
});

test('Set KPI', async ({ page }) => {
  const perf = new Performance(page);
  await perf.goto();
  await perf.setKPI({ name: 'Automation', target: '100%' });
});
