const { BASE_URL } = require('../utils/constants');
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="login"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[type="submit"]');
    this.title = page.locator('h2:has-text("Unauthorized")');
    this.backLink = page.locator('a[href="/"]');
    this.copyrightText = page.locator('small:has-text("Imitation page. Copyright © 2024, k6.io")');
  }

  async navigate() {
    await this.page.goto(BASE_URL);
    await this.page.waitForLoadState('networkidle');
  }

  async validateLoginPage() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.title).toBeVisible();
    await expect(this.backLink).toBeVisible();
    await expect(this.copyrightText).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithTabAndEnter(username, password) {
    await this.usernameInput.fill(username);
    await this.page.keyboard.press('Tab');
    await this.passwordInput.fill(password);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Enter');
  }
}

module.exports = LoginPage;