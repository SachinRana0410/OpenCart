import { test, expect } from "@playwright/test";
import { AddToCart } from "../pages/AddToCart";
import { Search } from "../pages/Search";
import testData from "../testData/searchData.json"; 
import { TestConfig } from "../test.config";

    test.use({ storageState: "TestData/authentication.json" });
    test.describe("Add to Cart Functionality", () => {
    let addtocart: AddToCart;
    let search: Search

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        await page.goto(config.appUrl);
        addtocart = new AddToCart(page);
        search = new Search(page);
    });


    test("TC001 - Validate adding the product to Cart from 'Product Display' Page", async () => {

        const productName = testData.searchProducts.existingProduct;
        await search.searchProduct(productName);
        await addtocart.addProductToCart()
        await expect(addtocart.locators.sucessAlert).toHaveText('  Success: You have added iMac to your shopping cart! ×')
    
    })
    }); 