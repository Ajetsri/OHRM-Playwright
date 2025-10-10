import { expect } from "@playwright/test";

export class Time {
  constructor(page) {
    this.page = page;
    this.timeMenu = page.locator('//span[text()="Time"]');
    this.attendance=page.locator('//*[@role="navigation"][@aria-label="Topbar Menu"]//ul//li[2]');
    this.PunchInOMenu = page.locator("//a[normalize-space(.)='Punch In/Out']");
    this.punchInBtn = page.locator('//button[@type="submit"]');
    this.punchOutBtn = page.locator('//button[@type="submit"]');
  }

  async goto() {
    await this.timeMenu.click();
  }
  async punchInout() {
    await this.attendance.click();
    await this.PunchInOMenu.click();
  }
  

  async punchIn() {
    await this.punchInBtn.click();
  }

  async punchOut() {
    await this.punchOutBtn.click();
  }
}
