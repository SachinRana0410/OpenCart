import { Page } from '@playwright/test';

export const cartLocators = (page: Page) => ({
  cartHeading: page.getByRole('heading', { name: 'Shopping Cart' }),
  cartRemoveButton: page.getByTitle('Remove'),
  cartBlackButtonEmptyMessage: page.locator('#cart p'),
});
