import { expect } from "@playwright/test";

export class Admin {
  constructor(page) {
    this.page = page;
    this.AdminMenu = page.locator('//span[text()="Admin"]');
    this.addButton = page.locator('button:has-text("Add")');
    this.usernameInput = page.locator("//*[normalize-space(.)='Username']//input");
    this.passwordInput = page.locator("//*[normalize-space(.)='Password']//input");
    this.confirmPasswordInput = page.locator("//*[normalize-space(.)='Confirm Password']//input");
    this.saveButton = page.locator('//button[@type="submit"]');
    this.userTable = page.locator('div.oxd-table-row-group');
  }

  async goto() {
    await this.AdminMenu.click();
  }

  async addUser(user) {
    await this.addButton.click();
    await this
    await this.page..select_option("label=1");
    await this.page.fill(this.usernameInput, user.username);
    await this.page.fill(this.passwordInput, user.password);
    await this.page.fill(this.confirmPasswordInput, user.password);
    await this.saveButton.click();
  }

  async isUserVisible(username) {
    await expect(this.userTable.locator(`text=${username}`)).toBeVisible();
  }
}
