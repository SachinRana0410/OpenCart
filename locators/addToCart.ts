import { Page } from "@playwright/test";

export const addToCartLocators = (page : Page)=>({
    addToCartButton : page.getByRole('button', { name: 'Add to Cart' }),
    sucessAlert: page.locator('.alert.alert-success')

});