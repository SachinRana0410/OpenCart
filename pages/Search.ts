import { Page} from "@playwright/test";
import { search } from "../locators/search";


export class Search {
    readonly locators;

    constructor(page: Page) {
        this.locators = search(page);
    }

    async searchProduct(productName: string = ""): Promise<void> {
        if (productName) {
            await this.locators.searchBox.fill(productName);
        }

        await this.locators.searchIcon.click();
    }
}

