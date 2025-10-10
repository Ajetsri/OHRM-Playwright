import { expect } from "@playwright/test";

export class Performance {
  constructor(page) {
    this.page = page;
    this.performanceMenu = page.locator('//span[text()="Performance"]');
    this.addKPIButton = page.locator('button:has-text("Add")');
    this.kpiNameInput = page.locator('input[name="kpiName"]');
    this.kpiTargetInput = page.locator('input[name="kpiTarget"]');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async goto() {
    await this.performanceMenu.click();
  }

  async setKPI(data) {
    await this.addKPIButton.click();
    await this.kpiNameInput.fill(data.name);
    await this.kpiTargetInput.fill(data.target);
    await this.saveButton.click();
  }
}
