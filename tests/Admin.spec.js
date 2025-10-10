import { test, expect } from '@playwright/test';
import { Admin } from '../pages/Admin.js';
import employeeData from '../testdata/employeeData.json';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(loginData.valid.username, loginData.valid.password);
});

test('Add New User', async ({ page }) => {
  const admin = new Admin(page);
  await admin.goto();
  await admin.addUser(employeeData.newUser);
  await admin.isUserVisible(employeeData.newUser.username);
});
