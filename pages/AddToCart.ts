import { Page } from "@playwright/test";
import { addToCartLocators } from "../locators/addToCart";


export class AddToCart{
    readonly locators;
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.locators = addToCartLocators(page);
    }

    async addProductToCart(): Promise<void> {
        await this.locators.addToCartButton.click();
        await this.page.waitForTimeout(4000);
    }

    async getSuccessMessage(): Promise<void> {
        const sucessMessage= await this.locators.sucessAlert.allTextContents()
    
    }
}
