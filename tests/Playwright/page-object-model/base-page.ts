import { Locator, Page, expect } from '@playwright/test';

export abstract class BasePage {
    readonly abstract expect: BasePageAssertions;

    readonly abstract pageHeading: string;
    readonly abstract browserPageTitle: string;
    readonly abstract pageUrl: string;

    readonly pageHeadingLocator: Locator;

    constructor(readonly page: Page) {
        this.pageHeadingLocator = this.page.locator('h1');
    }

    async goTo(): Promise<void> {
        await this.page.goto(this.pageUrl);
    }

    async reload(): Promise<void> {
        await this.page.reload();
    }
}

export abstract class BasePageAssertions {
    constructor(readonly basePage: BasePage) { }

    async toBeOnTheRightPage(): Promise<void> {
        await expect(this.basePage.page).toHaveTitle(this.basePage.browserPageTitle);
        await expect(this.basePage.pageHeadingLocator).toHaveText(this.basePage.pageHeading);
    }

    async notToBeOnThePage(): Promise<void> {
        await expect(this.basePage.page).not.toHaveTitle(this.basePage.browserPageTitle);
    }
}

