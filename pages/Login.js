import { expect } from "@playwright/test";

export class Login {
  constructor(page) {
    this.page = page;
    this.LoginHead='[class="oxd-text oxd-text--h5 orangehrm-login-title"]'
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = '.oxd-alert-content-text';
    this.dashboardHeader = 'h6.oxd-topbar-header-breadcrumb-module';
    this.UserpassworderrorMsg='//*[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]';
    this.lastnamedropdown='[class="oxd-dropdown-menu"]'
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
  async Logout(){
    await this.page.lastnamedropdown.select_option("label=4");
    await expect(page.LoginHead).tobeVisible();
  }
  async ErrorMessageRequired()
  {
    await this.page.click(this.loginButton);
    for(i=0;i<2;i++)
      {
        await expect(page.UserpassworderrorMsg.nth(i)).tobeVisible();
        await expect(page.UserpassworderrorMsg.nth(i)).toContainText('Required');
      }
  }
}
