import { expect, test } from "../Fixtures/loginFixture";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { TestConfig } from "../test.config";

test.describe("Logout", () => {
    let logoutPage: LogoutPage;

    test.beforeEach(async ({ page }) => {

        logoutPage = new LogoutPage(page);
    });

    test("@functional TC_LG_001 Logout with a valid logged-in user", async ({page}) => {
        // 1. Open the OpenCart home page and log in with valid credentials.

        // 2. Open My Account and choose Logout.
        await logoutPage.logout();

        // 3. Verify the logout confirmation page is displayed.
        await expect(page).toHaveURL(/route=account\/logout/);
        await expect(logoutPage.logoutLocators.logoutHeading).toBeVisible();
        await expect(logoutPage.logoutLocators.continueLink).toBeVisible();
    });

    test("@functional TC_LG_002 Verify account access is unavailable after logout", async () => {
        // 1. Open the OpenCart home page and log in with valid credentials.


        // 2. Open My Account and choose Logout.
        await logoutPage.logout();

        // 3. Open My Account after logout.
        await logoutPage.openAccountMenu();

        // 4. Verify the unauthenticated account options are displayed.
        await expect(logoutPage.logoutLocators.loginLink).toBeVisible();
        await expect(logoutPage.logoutLocators.registerLink).toBeVisible();
    });
});