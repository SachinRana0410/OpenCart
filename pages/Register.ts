import { Page, Locator } from "@playwright/test";
import { register } from "../locators/register";
import { HomePage } from "./HomePage";


export class Register{

    private readonly page : Page;
    private readonly locators;
    private readonly homePage : HomePage

    constructor(page : Page){
        this.page = page;
        this.locators = register(page);
        this.homePage = new HomePage(page);
    }

    async isRegisterPageExist():Promise<boolean>{
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }

    async goToRegisterPage(){
        
        await this.homePage.goToRegisterPage();
    }

    async fillPersonalDetails(){
        await this.locators.firstName.fill("Test");
        await this.locators.lastName.fill("Test");
        await this.locators.email.fill("Test@test.com");
        await this.locators.phone.fill("Test");
    }
    async fillPasswords(){
        const password = "Test@123"
        await this.locators.password.fill(password);
        await this.locators.confirmPassword.fill(password);
        await this.locators.agreeCheckBox.check();
    }

    async clickSubmit(){
        
        await this.locators.continue.click();
    }
}