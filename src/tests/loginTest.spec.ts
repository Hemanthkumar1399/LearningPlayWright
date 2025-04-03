import {test} from "@playwright/test"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage";

test("test",async({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName("hemanthkumar.b393@agentforce.com");
    await loginPage.fillPassword("Hemanth@1317");
    // await loginPage.clickLoginButton;
    // const homepage = new HomePage(page);
    // await homepage.expectServiceTitleToBeVisible();
    const homePage = await loginPage.clickLoginButton();// chaining methode 
    homePage.expectServiceTitleToBeVisible();


})