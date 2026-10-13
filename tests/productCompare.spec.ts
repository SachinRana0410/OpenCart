import { test, expect } from "../Fixtures/loginFixture";
import { ProductCompare } from "../pages/ProductCompare";
import testData from "../testData/searchData.json";


test.describe("Product Compare Functionality", () => {

    let productCompare: ProductCompare;

    test.beforeEach(async ({ page }) => {
        productCompare = new ProductCompare(page);
    });

    test("TC-PC-01 - Validate adding the product for comparison from Product Display Page", async () => {

        const productName = testData.searchProducts.multipleProducts;
        
        await productCompare.addProductToCompare(productName);
        await expect(productCompare.productCompareLocators.productCompareLink).toBeVisible();

        await productCompare.navigateToProductComparePage();
        await expect(productCompare.productCompareLocators.productCompareHeading).toBeVisible();
        await expect(productCompare.productCompareLocators.productCompareHeading).toHaveText("Product Comparison");

    });

});

