import {Page, expect, test} from "@playwright/test";
import { HomePage } from "../pages/Homepage"; 
import { TestConfig } from "../test.config";     

test("Go to HomePage and verify the title of the page", async ({page})=>{

    let config = new TestConfig();
    const homePage = new HomePage(page);
    await page.goto(config.appUrl);
    const isHomePageExist = await homePage.isHomePageExist();
    expect(isHomePageExist).toBeTruthy();
});