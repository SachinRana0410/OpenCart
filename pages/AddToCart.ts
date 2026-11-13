import { Page } from "@playwright/test";
import { addToCartLocators } from "../locators/addToCart";


export class AddToCart{
    readonly locators;

    constructor(page: Page) {
        this.locators = addToCartLocators(page);
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.locators.addToCartButton(productName).click();
    }

    async getSuccessMessage(): Promise<void> {
        const sucessMessage= await this.locators.sucessAlert.allTextContents()
    
    }
}
