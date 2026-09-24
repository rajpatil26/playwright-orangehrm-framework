const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');

const { testData } = require('../test-data/testData');


test('User should be able to access Leave Management', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const leavePage = new LeavePage(page);

    await loginPage.navigate();

    await loginPage.login(
        testData.users.admin.username,
        testData.users.admin.password
    );

    await page.getByText('Leave', { exact: true }).click();

    await expect(page).toHaveURL(/leave/);

});