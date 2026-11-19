import { test, expect } from "../Fixtures/loginFixture";
import { ProductCatalog } from "../pages/ProductCatalog";
import { Search } from "../pages/Search";
import testData from "../testData/searchData.json";
import { TestConfig } from "../test.config";

test.describe("Add to Cart Functionality", () => {
    let productPage: ProductCatalog;
    let search: Search

    test.beforeEach(async ({ page }) => {
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