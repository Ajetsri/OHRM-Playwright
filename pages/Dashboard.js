import { expect } from "@playwright/test";

export class Dashboard {
  constructor(page) {
    this.page = page;
    this.DashboardHead = page.locator('//h6[contains(@class,"oxd-topbar-header-breadcrumb-module")]');
    this.timehead = page.locator("//p[normalize-space(.)='Time at Work']");
    this.dbclick = page.locator('//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space(.)="Dashboard"]');
    this.actionsHead = page.locator("//p[normalize-space(.)='My Actions']");
    this.QuicklHead = page.locator("//p[normalize-space(.)='Quick Launch']");
    this.BuzzHd = page.locator("//p[normalize-space(.)='Buzz Latest Posts']");
    this.widgets = page.locator('.oxd-dashboard-widget');
    this.quickLinks = page.locator('.quick-launch');
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
  async validateWidgets() {
    await expect(this.widgets).toHaveCountGreaterThan(0);
    await expect(this.quickLinks).toBeVisible();
  }
  
}