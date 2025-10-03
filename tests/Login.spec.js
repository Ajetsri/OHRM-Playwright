import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.describe('Login Tests', () => {

  test('Valid Login Test', async ({ page }) => {
    const loginPage = new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);
    await expect(page.locator(loginPage.dashboardHeader)).toContainText('Dashboard');
  });

  for (const data of loginData.invalid) {
    test(`Invalid Login Test - ${JSON.stringify(data)}`, async ({ page }) => {
      const loginPage = new Login(page);
      await loginPage.goto();
      await loginPage.login(data.username, data.password);
      await expect(page.locator(loginPage.errorMessage)).toBeVisible();
    });
  }

});
