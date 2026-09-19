import { test, expect } from "../Fixtures/userDataFixture";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";

test("@smoke Valid Login", async({page})=>{
    let config = new TestConfig();
    let login = new LoginPage(page);

    await page.goto(config.appUrl);
    await login.goToLoginPage();
    await login.doLogin();

    expect(await page.title()).toContain('My Account');
    expect(page.url()).toContain('account/account');
    
    
})

test("@smoke @negative Invalid Login with Fixture", async({page, userData})=>{
    let config = new TestConfig();
    let login = new LoginPage(page);

    await page.goto(config.appUrl);
    await login.goToLoginPage();
    await login.doLogin(userData.email, userData.password);
    const failedLoginMsg = await login.getFailedLoginMsg();

    expect(await page.title()).toContain('Account Login');
    expect(page.url()).toContain('account/login');
    expect(failedLoginMsg).toBe('Warning: No match for E-Mail Address and/or Password.');
    await page.screenshot({path: 'tests/screenshots/InvalidLogin.png', fullPage: true});
    
})