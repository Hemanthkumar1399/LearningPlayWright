import {test} from "@playwright/test"
import LoginPage from "../pages/LoginPage"
import { encrypt } from "../utils/CryptojsUtil";
import { decrypt } from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";
// import dotenv from 'dotenv';
// dotenv.config({ path: `${__dirname}/../config/.env` });
import { encryptEnvFile } from "../utils/EncryptEnvFile";


test("test",async({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("hemanthkumar.b393@agentforce.com");
    await loginPage.fillPassword("Hemanth@1317");
    // const InputuserName = await loginPage.fillUserName(decrypt(process.env.username!));
    // console.log("Username",InputuserName);
    // const Inputpasswordtest = await loginPage.fillPassword(decrypt(process.env.password!));
    // console.log("Password",Inputpasswordtest);
    // await loginPage.fillUsername(decrypt(process.env.username!));
    // await loginPage.fillPassword(decrypt(process.env.password!));
    // await loginPage.clickLoginButton;
    // const homepage = new HomePage(page);
    // await homepage.expectServiceTitleToBeVisible();
    const homePage = await loginPage.clickLoginButton();// chaining methode 
    await homePage.expectServiceTitleToBeVisible();
    logger.info("Test for login is completed");


})

test.skip("Sample test",async({page})=>{
    console.log(process.env.NODE_ENV);
    console.log("USERNAME",process.env.username);
    console.log("PASSWORD",process.env.password);
})

test.skip("Sample env test", async ({page})=>{
    // const plaintext = 'Hello, Mars!';
    // const encryptedText = encrypt(plaintext);
    // console.log('SALT:', process.env.SALT);
    // console.log('Encrypted:', encryptedText);
    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted', decryptedText);
    encryptEnvFile();
    // console.log(decrypt(""))


})

