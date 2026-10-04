import { Page } from "@playwright/test";

export const search = (page:Page)=>({
    searchBox: page.getByPlaceholder("Search"),
    searchIcon: page.locator(".input-group-btn"),

    searchResult: (productName: string) =>
        page.getByText(productName, { exact: true }),    
    
    noMatchingResult: page.getByText('There is no product that matches the search criteria.', { exact: true }),
    multipleProductSearchResult: page.locator("//div[@class='product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12']")
})