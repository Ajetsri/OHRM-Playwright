import { expect } from "@playwright/test";

export class Time {
  constructor(page) {
    this.page = page;
    this.timeMenu = page.locator('//span[text()="Time"]');
    this.punchInBtn = page.locator('button:has-text("Punch In")');
    this.punchOutBtn = page.locator('button:has-text("Punch Out")');
  }

  async goto() {
    await this.timeMenu.click();
  }

  async punchIn() {
    await this.punchInBtn.click();
  }

  async punchOut() {
    await this.punchOutBtn.click();
  }
}
