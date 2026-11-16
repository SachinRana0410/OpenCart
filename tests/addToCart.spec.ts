import { test, expect } from "@playwright/test";
import { ProductCatalog } from "../pages/ProductCatalog";
import { Search } from "../pages/Search";
import testData from "../testData/searchData.json"; 
import { TestConfig } from "../test.config";

    test.use({ storageState: "TestData/authentication.json" });
    test.describe("Add to Cart Functionality", () => {
    let productPage: ProductCatalog;
    let search: Search

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        await page.goto(config.appUrl);
        productPage = new ProductCatalog(page);
        search = new Search(page);
    });


    test("TC001 - Validate adding a product to Cart from search results", async () => {
        const productName = testData.searchProducts.existingProduct;
        await search.searchProduct(productName);
        await productPage.addProductToCart(productName);
        await expect(productPage.locators.sucessAlert).toContainText(
            `Success: You have added ${productName} to your shopping cart!`
        );
    
    })
    }); 