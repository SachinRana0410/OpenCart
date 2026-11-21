import { test, expect } from "../Fixtures/PageFixture";
import { Register } from "../pages/register";



test.describe("Register Functionality", async () => {
    
     test.use({storageState:{cookies:[], origins:[]}})
    test("@smoke @functional TC_RG_001 - Register with all the mandatory fields", async ({ page }) => {
    
        let register = new Register(page);
        await register.goToRegisterPage();
        await register.fillPersonalDetails();
        await register.fillPasswords();
        await register.clickSubmit();

        // expect(await page.title()).toContain('Your Account Has Been Created');
        // expect(page.url()).toContain('account/success');
    })
})