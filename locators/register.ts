import { Page } from "@playwright/test";

export const register = (page : Page)=>({
    firstName : page.locator('#input-firstname'),
    lastName : page.locator('#input-lastname'),
    email : page.locator('#input-email'),
    phone : page.locator('#input-telephone'),
    password : page.locator('#input-password'),
    confirmPassword : page.locator('#input-confirm'),
    agreeCheckBox : page.locator('[name="agree"]'),
    continue :  page.getByRole('button', {name: 'Continue'})

});