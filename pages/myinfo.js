import { expect } from "@playwright/test";

export class MyInfo {
  constructor(page) {
    this.page = page;
    this.myInfoMenu = page.locator('//span[text()="My Info"]');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async goto() {
    await this.myInfoMenu.click();
  }

  async updateDetails(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.saveButton.click();
  }
}
