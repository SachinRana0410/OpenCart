import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

setup('authenticate using Login UI', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const config = new TestConfig();
  await page.goto(config.appUrl);
  await loginPage.goToLoginPage();
  await loginPage.doLogin();

  expect(await page.title()).toContain('My Account');
  expect(page.url()).toContain('account/account');
  await page.context().storageState({ path: 'TestData/auth.json' });
});
