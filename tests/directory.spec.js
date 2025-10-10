import { test } from '@playwright/test';
import { Directory } from '../pages/directory.js';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(loginData.valid.username, loginData.valid.password);
});

test('Search Employee by Name', async ({ page }) => {
  const dir = new Directory(page);
  await dir.goto();
  await dir.searchByName('John');
});
