import { test, expect } from "@playwright/test";
import { ProductCatalog } from "../pages/ProductCatalog";
import { Search } from "../pages/Search";
import { CartPage } from "../pages/Cart";
import testData from "../testData/searchData.json"; 
import { TestConfig } from "../test.config";

test.use({ storageState: "TestData/authentication.json" });
test.describe("Add to Cart Functionality", () => {
    let productPage: ProductCatalog;
    let search: Search;
    let cart : CartPage;

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        await page.goto(config.appUrl);
        productPage = new ProductCatalog(page);
        search = new Search(page);
        cart = new CartPage(page)
    });

    test('@functional TC_SC_001 Validate navigating to Shopping Cart page from the Success message', async ()=>{
        
        const searchProduct = testData.searchProducts.existingProduct;
        await search.searchProduct(searchProduct);
        await expect(search.locators.searchResult(searchProduct)).toBeVisible();

        await productPage.addProductToCart(searchProduct);
        await productPage.locators.addedToCartSuccessMessage.nth(1).click();
    
        expect(await cart.cartLocators.cartHeading.innerText()).toContain('Shopping Cart')

    })

    test(`@functional TC_SC_001 Validate navigating to "Shopping Cart" page from the "Shopping Cart" header option`, async ()=>{
        const searchProduct = testData.searchProducts.existingProduct;
        await search.searchProduct(searchProduct);
        await expect(search.locators.searchResult(searchProduct)).toBeVisible();

        await productPage.addProductToCart(searchProduct);
        await cart.goToCartPage();

        expect(await cart.cartLocators.cartHeading.innerText()).toContain('Shopping Cart')
    })

})