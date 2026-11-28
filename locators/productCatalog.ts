import { Page } from '@playwright/test';

export const productCatalogLocators = (page: Page) => ({
  addedToCartSuccessMessage: page.getByRole('link', { name: 'Shopping Cart' }),
  addToCartButton: (productName: string) =>
    page
      .locator('.product-layout')
      .filter({ has: page.getByRole('heading', { name: productName, exact: true }) })
      .getByRole('button', { name: 'Add to Cart' }),
  sucessAlert: page.locator('.alert.alert-success'),
});
