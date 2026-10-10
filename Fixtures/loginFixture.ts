import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";

type Login = {
    loginPage: LoginPage;
};

export const test = base.extend<Login>({
    loginPage: [async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        const config = new TestConfig();

        await page.goto(config.appUrl);
        await loginPage.goToLoginPage();
        await loginPage.doLogin();

        await use(loginPage);

    }, { auto: true }]
});

export { expect } from "@playwright/test";