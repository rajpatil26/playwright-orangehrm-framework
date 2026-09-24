class LeavePage {

    constructor(page) {

        this.page = page;

        this.applyLeaveLink = page.getByText(
            'Apply',
            { exact: true }
        );

        this.fromDateInput = page.locator(
            'input[placeholder="yyyy-dd-mm"]'
        );

        this.commentInput = page.locator(
            'textarea'
        );

        this.applyButton = page.getByRole(
            'button',
            { name: 'Apply' }
        );
    }

    async openApplyLeave() {

        await this.applyLeaveLink.click();
    }

    async enterComment(comment) {

        await this.commentInput.fill(comment);
    }

    async applyLeave() {

        await this.applyButton.click();
    }
}

module.exports = { LeavePage };