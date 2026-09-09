import { Page } from "@playwright/test";
import { loginLocators } from "../locators/login";
import { HomePage } from "./HomePage";
// @ts-expect-error Node.js type definitions are not included in the project configuration.
import { readFileSync } from "node:fs";

export class LoginPage{
    private readonly page : Page;
    private readonly homePage : HomePage;
    private readonly locators;

    constructor(page : Page){

        this.page = page;
        this.locators = loginLocators(page);
        this.homePage = new HomePage(page);

    }

    async goToLoginPage(){
        await this.homePage.goToLoginPage();
    }

    async doLogin(email?: string, password?: string): Promise<void> {
        const jsonPath = 'TestData/validLoginData.json';
        const loginData = JSON.parse(readFileSync(jsonPath, "utf-8"));

        await this.locators.email.fill(email ?? loginData.email);
        await this.locators.password.fill(password ?? loginData.password);
        await this.locators.loginButton.click();
    }

}