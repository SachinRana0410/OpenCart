import { test, expect } from '../Fixtures/PageFixture';
import { ProductCatalog } from '../pages/ProductCatalog';
import { Search } from '../pages/Search';
import { CartPage } from '../pages/Cart';
import testData from '../testData/searchData.json';
import { SiteMap } from '../pages/SiteMap';

test.describe('Shopping Cart Functionality', () => {
  test.describe.configure({ mode: 'serial' });
  let productPage: ProductCatalog;
  let search: Search;
  let cart: CartPage;
  let siteMap: SiteMap;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductCatalog(page);
    search = new Search(page);
    cart = new CartPage(page);
    siteMap = new SiteMap(page);
  });

  test('@functional TC_SC_001 Validate navigating to Shopping Cart page from the Success message', async () => {
    const searchProduct = testData.searchProducts.existingProduct;
    await search.searchProduct(searchProduct);
    await expect(search.locators.searchResult(searchProduct)).toBeVisible();

    await productPage.addProductToCart(searchProduct);
    await productPage.locators.addedToCartSuccessMessage.nth(1).click();

    expect(await cart.cartLocators.cartHeading.innerText()).toContain('Shopping Cart');
  });

  test(`@functional TC_SC_002 Validate navigating to "Shopping Cart" page from the "Shopping Cart" header option`, async () => {
    const searchProduct = testData.searchProducts.existingProduct;
    await search.searchProduct(searchProduct);
    await expect(search.locators.searchResult(searchProduct)).toBeVisible();

    await productPage.addProductToCart(searchProduct);
    await cart.clickCartHeader();

    expect(await cart.cartLocators.cartHeading.innerText()).toContain('Shopping Cart');
  });

  test.skip(`@functional TC_SC_003 Validate navigating to 'Shopping Cart' page from the 'Site Map' footer page`, async () => {
    const searchProduct = testData.searchProducts.existingProduct;
    await search.searchProduct(searchProduct);
    await expect(search.locators.searchResult(searchProduct)).toBeVisible();

    await productPage.addProductToCart(searchProduct);
    await siteMap.goToSiteMap();
    await siteMap.goToCart();

    expect(await cart.cartLocators.cartHeading.innerText()).toContain('Shopping Cart');
  });

  test('@functional TC_SC_004 Validate the Cart button when there are no products added to the Shopping Cart', async () => {
    await cart.clickCartBlackButton();
    if (await cart.isRemoveButtonVisible()) {
      await cart.removeCartItems();
      await cart.clickCartBlackButton();
    }

    const emptyMessage = await cart.getEmptyCartMessage();
    expect(emptyMessage).toBe('Your shopping cart is empty!');
  });
});
