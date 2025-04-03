import { Page } from "@playwright/test";
import HomePage from "./HomePage"
import { waitForDebugger } from "inspector";

export default class LoginPage{
    private readonly userNameInputSelector ="#username";
    private readonly passwordInputSelector ="#password";
    private readonly loginButtonSelector ="#Login";

    constructor (private page: Page){

    }

    async navigateToLoginPage(){
        await this.page.goto("/")
    }
   async fillUserName(username:string){
    await this.page.locator(this.userNameInputSelector).fill(username);
   }
   async fillPassword(password:string){
    await this.page.locator(this.passwordInputSelector).fill(password);
   }
   async clickLoginButton(){
    await this.page.locator(this.loginButtonSelector).click()
    .catch((error)=>{
        console.error(`Error clicking the login button: ${error}`);
        throw error;
    });
    const homePage = new HomePage(this.page);
    return homePage;
   }

}