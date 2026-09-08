import { Page, Locator } from "@playwright/test";
import { register } from "../locators/register";
import { HomePage } from "./HomePage";


export class Register{

    private readonly page : Page;
    private readonly locators;

    constructor(page : Page){
        this.page = page;
        this.locators = register(page);
    }

    async isRegisterPageExist():Promise<boolean>{
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }

    async goToRegisterPage(){
        let homePage = new HomePage(this.page);
        homePage.goToRegisterPage();
    }

    async fillPersonalDetails(){
        this.locators.firstName.fill("Test");
        this.locators.lastName.fill("Test");
        this.locators.email.fill("Test");
        this.locators.phone.fill("Test");
    }
    async fillPasswords(){
        const password = "Test@123"
        this.locators.password.fill(password);
        this.locators.confirmPassword.fill(password);
    }
}