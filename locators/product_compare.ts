import {Page} from "@playwright/test";

export const productCompareLocators = (page:Page)=>({
    addToCompareButton: page.locator('button[data-original-title="Compare this Product"]'),
    productCompareLink: page.locator('#compare-total'),
    productCompareHeading: page.locator('#content h1'),
    productCompareTable: page.locator('.table.table-bordered'),
    productCompareTableRows: page.locator('.table.table-bordered tr'),
    productCompareTableColumns: page.locator('.table.table-bordered tr td'),
    productCompareTableColumnHeaders: page.locator('.table.table-bordered tr th'),
    productCompareTableColumnImages: page.locator('.table.table-bordered tr td img'),
    productCompareTableColumnPrices: page.locator('.table.table-bordered tr td .price'),
    productCompareTableColumnDescriptions: page.locator('.table.table-bordered tr td .description'),
    productCompareTableColumnRatings: page.locator('.table.table-bordered tr td .rating'),
    productCompareTableColumnReviews: page.locator('.table.table-bordered tr td .reviews'),
    productCompareTableColumnAvailability: page.locator('.table.table-bordered tr td .availability'),
    productCompareTableColumnWeight: page.locator('.table.table-bordered tr td .weight'),
    productCompareTableColumnDimensions: page.locator('.table.table-bordered tr td .dimensions'),
    productCompareTableColumnManufacturer: page.locator('.table.table-bordered tr td .manufacturer'),

});
