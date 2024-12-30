import { test as base } from '@playwright/test';
import { HomePage } from './home-page';

type ApplyForLandingTestFixture = {
    homePage: HomePage;
};

// See https://playwright.dev/docs/test-fixtures for more information on what a Playwright fixture is and how to use/extend it
export const test = base.extend<ApplyForLandingTestFixture>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});

export { expect } from '@playwright/test';
