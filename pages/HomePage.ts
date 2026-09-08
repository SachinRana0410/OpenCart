import { Locator, Page } from "@playwright/test";
import { homePageLocators } from "../locators/homepage";


export class HomePage{

    private readonly page: Page;
    private readonly locators;

    constructor(page:Page){

        this.page = page;
        this.locators = homePageLocators(page);
    }

    async isHomePageExist():Promise<boolean>{
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }

    async goToRegisterPage(){

        await this.locators.myAccount.click();  
        await this.locators.register.click();
    }
}