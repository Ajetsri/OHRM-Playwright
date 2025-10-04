import { test, expect } from '@playwright/test';
import { PIM } from '../pages/PIM.js';
import employeeData from '../testdata/employeeData.json';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async({page})=>{
    const loginPage=new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);

});
test('Add Employee', async ({ page }) => {
  const pim = new PIM(page);
  await pim.goto();
  await pim.addEmployee(employeeData.newEmployee);
  await expect(page.locator(`text=${employeeData.newEmployee.firstName}`)).toBeVisible();
});
