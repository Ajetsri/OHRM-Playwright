import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login.js';
import { Dashboard } from '../pages/Dashboard.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Extra Tests - Performance, Accessibility, Security', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);
  });

  // ---------------- Performance Test ----------------
  test('Dashboard Page Load Performance', async ({ page }) => {
    const start = Date.now();
    await page.goto('/dashboard');
    const end = Date.now();
    console.log(`Dashboard load time: ${end - start} ms`);
    expect(end - start).toBeLessThan(5000); // Example: Fail if >5s
  });

  // ---------------- Accessibility Test ----------------
  test('Dashboard Accessibility Check', async ({ page }) => {
    await page.goto('/dashboard');
    await injectAxe(page);               // inject axe-core into page
    await checkA11y(page, undefined, { detailedReport: true }); // check accessibility
  });

  // ---------------- Basic Security Test ----------------
  test('Login Security - SQL Injection Check', async ({ page }) => {
    const loginPage = new Login(page);
    await loginPage.goto();
    await loginPage.login("admin' OR '1'='1", "password");
    await loginPage.checkError();       // Error message should appear
  });

  test('HTTPS Check', async ({ page }) => {
    await page.goto('/dashboard');
    console.log('HTTPS Enabled:', page.url().startsWith('https'));
    expect(page.url().startsWith('https')).toBeTruthy();
  });

});
