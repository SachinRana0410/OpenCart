import { Locator, Page } from "@playwright/test";
import { logoutLocators } from "../locators/logout";

export class LogoutPage {
    private readonly page: Page;
    readonly logoutLocators;
   
    constructor(page: Page) {
        this.page = page;
        this.logoutLocators = logoutLocators(page);
    }

    async logout(): Promise<void> {
        await this.openAccountMenu();
        await this.logoutLocators.logoutLink.click();
    }

    async openAccountMenu(): Promise<void> {
        await this.logoutLocators.myAccountLink.click();
    }
}
