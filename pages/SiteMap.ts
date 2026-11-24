import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { siteMapLocators } from '../locators/siteMap';

export class SiteMap extends HomePage {
  readonly siteMapLocators;

  constructor(page: Page) {
    super(page);
    this.siteMapLocators = siteMapLocators(page);
  }

  async goToCart() {
    await this.siteMapLocators.cart.nth(1).click();
  }
}
