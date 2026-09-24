const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['html', { open: 'never' }],
        ['list']
    ],

    use: {

        baseURL:
            'https://opensource-demo.orangehrmlive.com',

        screenshot: 'only-on-failure',

        trace: 'on-first-retry',

        video: 'retain-on-failure',

        headless: true
    },

    projects: [

        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }
    ]
});