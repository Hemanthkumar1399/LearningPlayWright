import { Page,expect } from "@playwright/test";
 export default class HomePage{
    private readonly serviceTileLocator = "#Service";
    constructor(private page: Page){

    }

    async expectServiceTitleToBeVisible() {
        await expect(this.page.getByTitle(this.serviceTileLocator)).toBeVisible({ timeout: 15000 });
    }
    
 }
