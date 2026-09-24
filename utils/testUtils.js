class TestUtils {

    static async waitForPageLoad(page) {

        await page.waitForLoadState('domcontentloaded');
    }

    static async waitForElementVisible(locator) {

        await locator.waitFor({
            state: 'visible'
        });
    }

    static async getText(locator) {

        return await locator.textContent();
    }
}

module.exports = { TestUtils };