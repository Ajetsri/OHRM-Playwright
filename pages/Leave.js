import { expect } from "@playwright/test";

export class Leave {
  constructor(page) {
    this.page = page;
    this.leaveMenu = page.locator('//span[text()="Leave"]');
    this.assignLeaveButton = page.locator('button:has-text("Assign Leave")');
    this.employeeNameInput = page.locator('input[placeholder="Type for hints..."]');
    this.leaveTypeSelect = page.locator('select[name="leaveType"]');
    this.fromDateInput = page.locator('input[name="fromDate"]');
    this.toDateInput = page.locator('input[name="toDate"]');
    this.assignButton = page.locator('button:has-text("Assign")');
  }

  async goto() {
    await this.leaveMenu.click();
  }

  async applyLeave(data) {
    await this.assignLeaveButton.click();
    await this.employeeNameInput.fill(data.employee);
    await this.leaveTypeSelect.selectOption({ label: data.type });
    await this.fromDateInput.fill(data.fromDate);
    await this.toDateInput.fill(data.toDate);
    await this.assignButton.click();
  }
}
