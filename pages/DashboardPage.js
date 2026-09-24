class DashboardPage {

    constructor(page) {

        this.page = page;

        this.dashboardHeader = page.locator(
            '.oxd-topbar-header-breadcrumb'
        );

        this.menuItems = page.locator(
            '.oxd-main-menu-item'
        );
    }

    async verifyDashboard() {

        return await this.dashboardHeader.isVisible();
    }

    async openMenu(menuName) {

        await this.page
            .getByText(menuName, { exact: true })
            .click();
    }
}

module.exports = { DashboardPage };