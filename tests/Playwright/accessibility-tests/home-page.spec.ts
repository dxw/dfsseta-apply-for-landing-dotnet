import { test } from "./accessibility-test-fixture";

test.describe('Home page', () => {
    test('has no accessibility violations', async ({ homePage, expectNoAccessibilityViolations }) => {
        await homePage.goTo();

        await expectNoAccessibilityViolations();
    });
});
