import { Page,expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import ContactPage from "./ContactPage";

 export default class HomePage{
    private readonly serviceTitleLocator = 'Service';
    private readonly contactsLinkLocator = "Contacts";

    constructor(private page: Page){

    }

    async expectServiceTitleToBeVisible() {
        // await this.page.pause();
        await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({ timeout: 15000,});
    }
    async navigateToContactTab(){

        await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
        logger.info("Contacts Tab is visible")
        await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
        logger.info("Contacts Tab is clicked")
        return new ContactPage(this.page);
        
      }
    
 }
