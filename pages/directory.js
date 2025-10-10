import { expect } from "@playwright/test";

export class Directory {
  constructor(page) {
    this.page = page;
    this.directoryMenu = page.locator('//span[text()="Directory"]');
    this.searchInput = page.locator('input[placeholder="Type for hints..."]');
    this.searchButton = page.locator('button:has-text("Search")');
  }

  async goto() {
    await this.directoryMenu.click();
  }

  async searchByName(name) {
    await this.searchInput.fill(name);
    await this.searchButton.click();
  }
}
