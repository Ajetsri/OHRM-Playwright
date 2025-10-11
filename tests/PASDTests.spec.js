import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login.js';
import { Dashboard } from '../pages/Dashboard.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };
//import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Performance, Security', () => {

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

  // ---------------- Security Test ----------------

  test('HTTPS Check', async ({ page }) => {
    await page.goto('/dashboard');
    console.log('HTTPS Enabled:', page.url().startsWith('https'));
    expect(page.url().startsWith('https')).toBeTruthy();
  });

});
