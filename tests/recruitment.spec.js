import { test } from '@playwright/test';
import { Recruitment } from '../pages/Recruitment.js';
import employeeData from '../testdata/employeeData.json';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(loginData.valid.username, loginData.valid.password);
});

test('Add Candidate', async ({ page }) => {
  const rec = new Recruitment(page);
  await rec.goto();
  await rec.addCandidate(employeeData.newCandidate);
});
