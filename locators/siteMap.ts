import { Page } from "@playwright/test";

export const siteMapLocators = (page:Page)=>({
    cart : page.getByRole('link',{name:'Shopping Cart'})
});