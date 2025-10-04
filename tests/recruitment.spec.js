import { test, expect } from '@playwright/test';
import { Recruitment } from '../pages/Recruitment.js';
import employeeData from '../testdata/employeeData.json';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async({page})=>{
    const loginPage=new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);

});
test('Add Candidate', async ({ page }) => {
  const recruitment = new Recruitment(page);
  await recruitment.goto();
  await recruitment.addCandidate(employeeData.newCandidate);
  await expect(page.locator(`text=${employeeData.newCandidate.firstName}`)).toBeVisible();
});
