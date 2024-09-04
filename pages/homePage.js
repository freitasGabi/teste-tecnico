const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.tableRows = page.locator('table tbody tr:has(td)');
    this.logoutButton = page.locator('input[type="submit"][value="Logout"]');
    this.backLink = page.locator('a[href="/"]');
    this.copyrightText = page.locator('small:has-text("Imitation page. Copyright © 2024, k6.io")');
    this.welcomeHeader = page.locator('h2:has-text("Welcome,")');
    this.pageTitle = page.locator('h1.title:has-text("test.k6.io")');
  }

  async validateHomePage(expectedTitle) {
    await expect(this.logoutButton).toBeVisible();
    await expect(this.backLink).toBeVisible();
    await expect(this.copyrightText).toBeVisible();
    
    const welcomeText = await this.welcomeHeader.textContent();
    expect(welcomeText.includes(expectedTitle)).toBe(true);
  }

  async logout() {
    await this.logoutButton.click();
  }

  async validatePageWithBackBtn() {
    await this.backLink.click();
    await expect(this.pageTitle).toBeVisible();
  }

  async validateTable(expectedData) {    
    const rows = await this.tableRows.count();
    
    expect(rows).toBe(expectedData.length);

    for (let i = 0; i < rows; i++) {
      const expected = expectedData[i];
      const row = this.tableRows.nth(i);

      const number = await row.locator('td:nth-child(1)').textContent();
      const from = await row.locator('td:nth-child(2)').textContent();
      const subject = await row.locator('td:nth-child(3)').textContent();
      
      expect(number.trim()).toBe(expected.number);
      expect(from.trim()).toBe(expected.from);
      expect(subject.trim()).toBe(expected.subject);
    }
  }
}

module.exports = HomePage;