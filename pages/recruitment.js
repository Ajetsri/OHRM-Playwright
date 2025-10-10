import { expect } from "@playwright/test";

export class Recruitment {
  constructor(page) {
    this.page = page;
    this.recruitmentMenu = page.locator('//span[text()="Recruitment"]');
    this.addButton = page.locator('button:has-text("Add")');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.emailInput = page.locator('input[name="email"]');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async goto() {
    await this.recruitmentMenu.click();
  }

  async addCandidate(data) {
    await this.addButton.click();
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.saveButton.click();
  }
}
