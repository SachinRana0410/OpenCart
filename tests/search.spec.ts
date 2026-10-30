import { test, expect } from "@playwright/test";
import { Search } from "../pages/Search";
import testData from "../testData/searchData.json"; 
import { TestConfig } from "../test.config";

    test.use({ storageState: "TestData/authentication.json" });
    test.describe("Search Functionality", () => {
    let search: Search;

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        await page.goto(config.appUrl);
        search = new Search(page);
    });


    test("TC001 - Validate searching with an existing Product Name", async () => {

        const productName = testData.searchProducts.existingProduct;
        await search.searchProduct(productName);
        await expect(search.locators.searchResult(productName)
        ).toBeVisible();
    });


    test("TC002 - Validate searching with a non existing Product Name", async () => {

        await search.searchProduct(testData.searchProducts.nonExistingProduct);
        await expect(search.locators.noMatchingResult).toBeVisible();

    });

    test("TC003 - Validate searching without providing any Product Name", async () => {

        await search.searchProduct("");
        await expect(search.locators.noMatchingResult).toBeVisible();

    });

    test("TC005 - Validate searching by providing a search criteria which results in mulitple products", async () => {

        await search.searchProduct(testData.searchProducts.multipleProducts);
        expect(await search.locators.multipleProductSearchResult.count()).toBeGreaterThan(1);
    });


});

