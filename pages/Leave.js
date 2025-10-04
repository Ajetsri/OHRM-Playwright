import { expect } from "@playwright/test";

export class Leave{
  constructor(page) {
    this.page = page;
    this.DashboardHead = page.locator('//h6[contains(@class,"oxd-topbar-header-breadcrumb-module")]');
  }

  async DashboardClick() {
    await this.dbclick.click();
    await expect(this.DashboardHead).toHaveText('Dashboard');
  }

  async Dashboardvalidation() {
    await expect(this.timehead).toBeVisible();
    await expect(this.timehead).toHaveText('Time at Work');
    await expect(this.actionsHead).toBeVisible();
    await expect(this.actionsHead).toHaveText('My Actions');
    await expect(this.QuicklHead).toBeVisible();
    await expect(this.QuicklHead).toHaveText('Quick Launch');
    await expect(this.BuzzHd).toBeVisible();
    await expect(this.BuzzHd).toHaveText('Buzz Latest Posts ');
  }
}
