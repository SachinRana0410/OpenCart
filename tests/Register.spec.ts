import { Page, test, expect } from "@playwright/test";
import { Register } from "../pages/register";
import { TestConfig } from "../test.config";


let config : TestConfig

test.beforeAll(async()=>{

    config = new TestConfig();
});

test.only("Register with all the mandatory fields", async({page})=>{
    await page.goto(config.appUrl);
    let register = new Register(page);
    await register.goToRegisterPage();
    await register.fillPersonalDetails();
    await register.fillPasswords();


})