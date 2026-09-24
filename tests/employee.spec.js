const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { EmployeePage } = require('../pages/EmployeePage');

const { testData } = require('../test-data/testData');


test.describe('Employee Management Tests', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            testData.users.admin.username,
            testData.users.admin.password
        );

        await page.getByText('PIM', { exact: true }).click();
    });


    test('Admin should be able to add an employee', async ({ page }) => {

        const employeePage = new EmployeePage(page);

        await employeePage.clickAddEmployee();

        await employeePage.enterEmployeeDetails(
            testData.employee.firstName,
            testData.employee.lastName
        );

        await employeePage.saveEmployee();

        await expect(page).toHaveURL(/pim/);
    });

});