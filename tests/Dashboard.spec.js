import { test, expect } from '@playwright/test';
import { Dashboard } from '../pages/Dashboard.js';
import { Login } from '../pages/Login.js';
import loginData from '../testdata/loginData.json' assert { type: "json" };

test.beforeEach(async({page})=>{
    const dashboard = new Dashboard(page);
    const loginPage=new Login(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);
    await dashboard.DashboardClick();

});
test('Dashboard Widgets Check', async ({ page }) => {
  const dashboard = new Dashboard(page);
  await dashboard.Dashboardvalidation();
});