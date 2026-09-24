const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');

const { testData } = require('../test-data/testData');


test.describe('OrangeHRM Login Tests', () => {

    test('Valid user should login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            testData.users.admin.username,
            testData.users.admin.password
        );
        console.log('Current URL:', page.url());
        await page.waitForURL('**/dashboard/**', {
            timeout: 15000
        });
        
        await expect(page).toHaveURL(/dashboard/);
    });

    test('Invalid user should display error message', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            'InvalidUser',
            'InvalidPassword'
        );

        await expect(loginPage.errorMessage)
            .toBeVisible();
    });

});