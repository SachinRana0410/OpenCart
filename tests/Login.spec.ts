import { test, expect } from '../Fixtures/userDataFixture';
import { LoginPage } from '../pages/LoginPage';
// import { TestConfig } from '../test.config';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Login Functionality', async () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goToLoginPage();
  });

  test('@smoke TC001 - Valid Login', async ({ page }) => {
    await login.doLogin();

    expect(await page.title()).toContain('My Account');
    expect(page.url()).toContain('account/account');
    await page.context().storageState({ path: 'TestData/auth.json' });
  });

  test('@smoke @negative TC002 - Invalid Login with Fixture', async ({ page, userData }) => {
    await login.doLogin(userData.email, userData.password + '4');
    const failedLoginMsg = await login.getFailedLoginMsg();

    expect(await page.title()).toContain('Account Login');
    expect(page.url()).toContain('account/login');
    expect(failedLoginMsg).toBe('Warning: No match for E-Mail Address and/or Password.');
  });
});
