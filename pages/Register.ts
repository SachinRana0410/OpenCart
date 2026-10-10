import { Page, Locator } from "@playwright/test";
import { register } from "../locators/register";
import { HomePage } from "./HomePage";


export class Register extends HomePage{

    private readonly registerLocators;

    constructor(page : Page){
        super(page);
        this.registerLocators = register(page);
    }

    async isRegisterPageExist():Promise<boolean>{
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }


    async fillPersonalDetails(){
        await this.registerLocators.firstName.fill("Test");
        await this.registerLocators.lastName.fill("Test");
        await this.registerLocators.email.fill("Test@test.com");
        await this.registerLocators.phone.fill("Test");
    }
    async fillPasswords(){
        const password = "Test@123"
        await this.registerLocators.password.fill(password);
        await this.registerLocators.confirmPassword.fill(password);
        await this.registerLocators.agreeCheckBox.check();
    }

    async clickSubmit(){
        
        await this.registerLocators.continue.click();
    }
}