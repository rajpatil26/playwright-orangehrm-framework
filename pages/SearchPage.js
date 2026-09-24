class SearchPage {

    constructor(page) {

        this.page = page;

        this.searchInput = page.locator(
            'input[placeholder="Search"]'
        );
    }

    async search(menuName) {

        await this.searchInput.fill(menuName);
    }

    async openSearchResult(menuName) {

        await this.page
            .getByText(menuName, { exact: true })
            .click();
    }
}

module.exports = { SearchPage };