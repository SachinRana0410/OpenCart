import { expect, Page } from "@playwright/test";
import { homePageLocators } from "../locators/homepage";


export class HomePage{

    protected readonly page: Page;
    protected readonly homeLocators;

    constructor(page:Page){

        this.page = page;
        this.homeLocators = homePageLocators(page);
    }

    async isHomePageExist():Promise<boolean>{
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }

    async goToRegisterPage(){

        await this.homeLocators.myAccount.click(); 
        await this.homeLocators.register.click();
    }

    async goToLoginPage(){

        await this.homeLocators.myAccount.click(); 
        await this.homeLocators.login.click();
    }

    async clickCartHeader(){

        await this.homeLocators.cart.click();
    }

    async clickCartBlackButton(){
        const cartBlackButton = this.homeLocators.cartBlackButton;
        await cartBlackButton.click();
    }

    async goToSiteMap(){

        await this.homeLocators.siteMap.click();
    }
}