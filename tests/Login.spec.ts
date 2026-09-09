import { test, expect } from "../Fixtures/userDataFixture";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";

test("Valid Login", async({page})=>{
    let config = new TestConfig();
    let login = new LoginPage(page);

    await page.goto(config.appUrl);
    await login.goToLoginPage();
    await login.doLogin();

    expect(await page.title()).toContain('My Account');
    expect(page.url()).toContain('account/account');
    
    
})

test("Valid Login with Fixture", async({page, userData})=>{
    let config = new TestConfig();
    let login = new LoginPage(page);

    await page.goto(config.appUrl);
    await login.goToLoginPage();
    await login.doLogin(userData.email, userData.password);

    expect(await page.title()).toContain('My Account');
    expect(page.url()).toContain('account/account');
    
    
})