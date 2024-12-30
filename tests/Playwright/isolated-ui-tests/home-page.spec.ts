import { test } from '@playwright/test';
import { HomePage } from '../page-object-model/home-page';

test.describe('Home page', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    });

    test('loads', async () => {
        await homePage.goTo();
        await homePage.expect.toBeOnTheRightPage();
    });
});
