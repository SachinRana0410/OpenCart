import { Page } from "@playwright/test";
import { productCatalogLocators } from "../locators/productCatalog";


export class ProductCatalog{
    readonly locators;

    constructor(page: Page) {
        this.locators = productCatalogLocators(page);
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.locators.addToCartButton(productName).click();
    }

    async getSuccessMessage(): Promise<void> {
        const sucessMessage= await this.locators.sucessAlert.allTextContents()
    
    }
}
