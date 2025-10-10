import { test } from '@playwright/test';
import { MyInfo } from '../pages/MyInfo.js';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(loginData.valid.username, loginData.valid.password);
});

test('Update Personal Details', async ({ page }) => {
  const myInfo = new MyInfo(page);
  await myInfo.goto();
  await myInfo.updateDetails({ firstName: 'John', lastName: 'Doe' });
});
