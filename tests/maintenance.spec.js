import { test, expect } from '@playwright/test';
import { Maintenance } from '../pages/Maintenance.js';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async({page})=>{
    const loginPage=new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);

});
test('Purge Records', async ({ page }) => {
  const maint = new Maintenance(page);
  await maint.goto();
  await maint.purgeRecords();
  await expect(page.locator('text=Records Purged Successfully')).toBeVisible();
});
