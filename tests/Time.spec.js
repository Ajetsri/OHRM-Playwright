import { test, expect } from '@playwright/test';
import { Time } from '../pages/Time.js';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async({page})=>{
    const loginPage=new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);

});
test('Punch In/Out', async ({ page }) => {
  const time = new Time(page);
  await time.goto();
  await time.punchIn();
  await expect(page.locator('text=Punch Out')).toBeVisible();
});
