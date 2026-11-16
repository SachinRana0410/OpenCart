import { Page } from "@playwright/test";

export const cartLocators = (page : Page)=>({
    cartHeading : page.getByRole('heading', {name:'Shopping Cart'})
});