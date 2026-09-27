import { Locator, Page } from "@playwright/test";
import { logoutLocators } from "../locators/logout";

export class LogoutPage {
    private readonly page: Page;
    readonly locators;
   
    constructor(page: Page) {
        this.page = page;
        this.locators = logoutLocators(page);
    }

    async logout(): Promise<void> {
        await this.openAccountMenu();
        await this.locators.logoutLink.click();
    }

    async openAccountMenu(): Promise<void> {
        await this.locators.myAccountLink.click();
    }
}
