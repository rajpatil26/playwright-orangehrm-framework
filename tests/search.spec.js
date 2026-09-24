const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { SearchPage } = require('../pages/SearchPage');

const { testData } = require('../test-data/testData');


test('User should be able to search for PIM module', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const searchPage = new SearchPage(page);

    await loginPage.navigate();

    await loginPage.login(
        testData.users.admin.username,
        testData.users.admin.password
    );

    await searchPage.search('PIM');

    await expect(
        page.getByText('PIM', { exact: true })
    ).toBeVisible();
});