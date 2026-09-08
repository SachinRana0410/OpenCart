import {Page, expect, test} from "@playwright/test";
import { HomePage } from "../pages/Homepage"; 
import { TestConfig } from "../test.config";     

test("Go to HomePage and verify the title of the page", async ({page})=>{

    const homePage = new HomePage(page);
    await page.goto(TestConfig.baseUrl);
    const isHomePageExist = await homePage.isHomePageExist();
    expect(isHomePageExist).toBeTruthy();
}
)