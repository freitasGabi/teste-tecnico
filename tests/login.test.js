const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');
const expectedData = require('../data/responseHomePageUsers.json');

test.describe('Login and Home Page Tests', () => {
  let loginPage;
  let homePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.navigate();
  });

  test('Validate Login as Admin and Validate Home Page', async () => {
    await loginPage.validateLoginPage();
    await loginPage.login('admin', '123');
    await homePage.validateHomePage('admin')
    await homePage.validateTable(expectedData.admin);
  });

  test('Validate Login as Test user and check page after click on Back Btn', async () => {
    await loginPage.validateLoginPage();
    await loginPage.login('test_user', '1234');
    await homePage.validateHomePage('test_user')
    await homePage.validateTable(expectedData.test_user);
    await homePage.validatePageWithBackBtn();
  });

  test('Validate Login with accessibility using the tab and enter keys and check logout', async () => {
    await loginPage.validateLoginPage();
    await loginPage.loginWithTabAndEnter('admin', '123');
    await homePage.validateHomePage('admin')
    await homePage.validateTable(expectedData.admin);
    await homePage.logout();
    await loginPage.validateLoginPage();
  });
});