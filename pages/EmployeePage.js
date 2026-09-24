class EmployeePage {

    constructor(page) {

        this.page = page;

        this.addButton = page.getByRole('button', {
            name: 'Add'
        });

        this.firstNameInput = page.locator(
            'input[name="firstName"]'
        );

        this.lastNameInput = page.locator(
            'input[name="lastName"]'
        );

        this.employeeIdInput = page.locator(
            '.oxd-input'
        );

        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

        this.employeeList = page.locator(
            '.oxd-table-body'
        );
    }

    async clickAddEmployee() {

        await this.addButton.click();
    }

    async enterEmployeeDetails(firstName, lastName) {

        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);
    }

    async saveEmployee() {

        await this.saveButton.click();
    }

    async searchEmployee(employeeName) {

        await this.page
            .getByPlaceholder('Type for hints...')
            .fill(employeeName);
    }
}

module.exports = { EmployeePage };