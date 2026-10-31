import { Page } from "@playwright/test";
import { loginLocators } from "../locators/login";
import { HomePage } from "./HomePage";
import { readFileSync } from "node:fs";
import dotenv from 'dotenv';
dotenv.config();

export class LoginPage extends HomePage{
    private readonly loginLocators;

    constructor(page : Page){

        super(page);
        this.loginLocators = loginLocators(page);
    }

    async doLogin(email:string, password:string):Promise<void>;
    async doLogin():Promise<void>;

    async doLogin(email?: string|undefined, password?: string|undefined): Promise<void> {

        const loginEmail = email ?? process.env.EMAIL;
        const loginPassword = password ?? process.env.PASSWORD;
        if (loginEmail === undefined || loginPassword === undefined) {
            throw new Error("Email and password must be provided or configured in the environment.");
        }

        await this.loginLocators.email.fill(loginEmail);
        await this.loginLocators.password.fill(loginPassword);
        await this.loginLocators.loginButton.click();
    }

    async getFailedLoginMsg():Promise<string | null>{
        await this.loginLocators.failedLoginAlert.waitFor({state:'visible'});
        return await this.loginLocators.failedLoginAlert.textContent();
    }

}