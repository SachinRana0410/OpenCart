import { Page } from "@playwright/test";

export const loginLocators = (page:Page)=>({
    email: page.locator('#input-email'),
    password: page.locator('#input-password'),
    loginButton: page.getByRole('button', { name: 'Login' })

})