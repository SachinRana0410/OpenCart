import { Page } from "@playwright/test";

export const homePageLocators = (page : Page)=>({
    myAccount : page.getByRole("link",{name:"My Account"}).first(),
    register : page.getByRole('link',{name:'Register'}),
    login : page.getByRole('link',{name:'Login'})
    
});