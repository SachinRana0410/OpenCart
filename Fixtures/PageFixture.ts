import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";

type PageFixture = {
    page1: Page;
};

export const test = base.extend<PageFixture>({
    page1: [async ({ page }, use) => {
        const config = new TestConfig();
        await page.goto(config.appUrl);

        await use(page);

    }, { auto: true }]
});

export { expect } from "@playwright/test";