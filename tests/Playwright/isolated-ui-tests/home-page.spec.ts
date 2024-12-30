import { test } from "../page-object-model/apply-for-landing-test-fixture";

test.describe('Home page', () => {
    test('loads', async ({ homePage }) => {
        await homePage.goTo();
        await homePage.expect.toBeOnTheRightPage();
    });
});
