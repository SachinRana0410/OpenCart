import { Page, test, expect } from "@playwright/test";
import { Register } from "../pages/register";
import { TestConfig } from "../test.config";


let config: TestConfig
test.describe("Register Functionality", async () => {
    
    test.beforeAll(async () => {

        config = new TestConfig();
    });

    test("@smoke @functional TC_RG_001 - Register with all the mandatory fields", async ({ page }) => {
        await page.goto(config.appUrl);
        let register = new Register(page);
        await register.goToRegisterPage();
        await register.fillPersonalDetails();
        await register.fillPasswords();
        await register.clickSubmit();

    })
})