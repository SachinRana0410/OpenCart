import { Page } from "@playwright/test";
import { productCompareLocators } from "../locators/product_compare";
import { Search } from "./Search";

export class ProductCompare extends Search {
    readonly productCompareLocators;
    page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.productCompareLocators = productCompareLocators(page);
    }

    async addProductToCompare(productName: string): Promise<void> {
        await this.searchProduct(productName);

        await this.productCompareLocators.addToCompareButton.first().hover();
        const tooltipText = await this.productCompareLocators.addToCompareButton.first().getAttribute("data-original-title");
        if (tooltipText !== "Compare this Product") {
            throw new Error(`Expected tooltip text to be "Compare this Product", but got "${tooltipText}"`);
        }
        const searchResult = this.productCompareLocators.addToCompareButton;
        await searchResult.first().click();
        await searchResult.nth(1).click();
        await this.page.waitForTimeout(2000); // Wait for the compare link to be visible
    }

    async navigateToProductComparePage(): Promise<void> {
        await this.productCompareLocators.productCompareLink.click();
        await this.page.waitForTimeout(2000);
    }
}