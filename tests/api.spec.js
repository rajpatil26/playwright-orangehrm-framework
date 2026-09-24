const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { testData } = require('../test-data/testData');


test('Validate Employee API response', async ({ page }) => {

    // Login through UI first
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        testData.users.admin.username,
        testData.users.admin.password
    );

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);


    // API endpoint identified from browser Network tab
    const apiUrl =
        '/web/index.php/api/v2/pim/employees' +
        '?limit=50' +
        '&offset=0' +
        '&model=detailed' +
        '&includeEmployees=onlyCurrent' +
        '&sortField=employee.firstName' +
        '&sortOrder=ASC';


    // Send API request using the authenticated browser context
    const response = await page.request.get(apiUrl);


    // Validate HTTP status
    expect(response.status()).toBe(200);


    // Validate response content type
    expect(response.headers()['content-type'])
        .toContain('application/json');


    // Read JSON response
    const responseBody = await response.json();


    // Validate response structure
    expect(responseBody).toHaveProperty('data');

    expect(Array.isArray(responseBody.data))
        .toBe(true);


    // Verify employee data is returned
    expect(responseBody.data.length)
        .toBeGreaterThan(0);

});