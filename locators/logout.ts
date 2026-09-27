import { Page } from "@playwright/test";

export const logoutLocators = (page:Page)=>({
    myAccountLink: page.getByRole("link", { name: "My Account" }).first(),
    logoutLink: page.locator("#top-links").getByRole("link", { name: "Logout" }),
    logoutHeading: page.getByRole("heading", { name: "Account Logout" }),
    continueLink: page.getByRole("link", { name: "Continue" }),
    loginLink: page.locator("#top-links").getByRole("link", { name: "Login" }),
    registerLink: page.locator("#top-links").getByRole("link", { name: "Register" })
})