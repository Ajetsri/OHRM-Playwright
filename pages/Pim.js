import { expect } from "@playwright/test";

export class PIM {
  constructor(page) {
    this.page = page;
    this.pimMenu = page.locator('//span[text()="PIM"]');
    this.addButton = page.locator('button:has-text("Add")');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async goto() {
    await this.pimMenu.click();
  }

  async addEmployee(data) {
    await this.addButton.click();
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.saveButton.click();
  }
}
