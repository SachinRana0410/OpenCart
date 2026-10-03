import { Page } from "@playwright/test";
import { loginLocators } from "../locators/login";
import { HomePage } from "./HomePage";
// @ts-expect-error Node.js type definitions are not included in the project configuration.
import { readFileSync } from "node:fs";

export class LoginPage extends HomePage{
    private readonly loginLocators;

    constructor(page : Page){

        super(page);
        this.loginLocators = loginLocators(page);
    }

    async doLogin(email:string, password:string):Promise<void>;
    async doLogin():Promise<void>;

    async doLogin(email?: string, password?: string): Promise<void> {
        const jsonPath = 'TestData/validLoginData.json';
        const loginData = JSON.parse(readFileSync(jsonPath, "utf-8"));

        await this.loginLocators.email.fill(email ?? loginData.email);
        await this.loginLocators.password.fill(password ?? loginData.password);
        await this.loginLocators.loginButton.click();
    }

    async getFailedLoginMsg():Promise<string | null>{
        await this.loginLocators.failedLoginAlert.waitFor({state:'visible'});
        return await this.loginLocators.failedLoginAlert.textContent();
    }

}