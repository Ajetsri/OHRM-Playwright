import { test, expect } from '@playwright/test';
import { Leave } from '../pages/Leave.js';
import leaveData from '../testdata/leaveData.json';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async({page})=>{
    const loginPage=new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);

});
test('Apply Leave', async ({ page }) => {
  const leave = new Leave(page);
  await leave.goto();
  await leave.applyLeave(leaveData.leaveRequest);
  await expect(page.locator(`text=${leaveData.leaveRequest.type}`)).toBeVisible();
});
