import { expect, test, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { TestConfig } from "../test.config";

const config = new TestConfig();

async function loginWithValidUser(page: Page): Promise<void> {
    const loginPage = new LoginPage(page);

    await page.goto(config.appUrl);
    await loginPage.goToLoginPage();
    await loginPage.doLogin();
}

test.describe("Logout", () => {
    test("TC_LG_001 Logout with a valid logged-in user", async ({ page }) => {
        // 1. Open the OpenCart home page and log in with valid credentials.
        await loginWithValidUser(page);

        const logoutPage = new LogoutPage(page);

        // 2. Open My Account and choose Logout.
        await logoutPage.logout();

        // 3. Verify the logout confirmation page is displayed.
        await expect(page).toHaveURL(/route=account\/logout/);
        await expect(logoutPage.logoutLocators.logoutHeading).toBeVisible();
        await expect(logoutPage.logoutLocators.continueLink).toBeVisible();
    });

    test("TC_LG002 Verify account access is unavailable after logout", async ({ page }) => {
        // 1. Open the OpenCart home page and log in with valid credentials.
        await loginWithValidUser(page);

        const logoutPage = new LogoutPage(page);

        // 2. Open My Account and choose Logout.
        await logoutPage.logout();

        // 3. Open My Account after logout.
        await logoutPage.openAccountMenu();

        // 4. Verify the unauthenticated account options are displayed.
        await expect(logoutPage.logoutLocators.loginLink).toBeVisible();
        await expect(logoutPage.logoutLocators.registerLink).toBeVisible();
    });
});
