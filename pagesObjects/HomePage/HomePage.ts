import { expect, Page } from "@playwright/test";
import { CommonPage } from "../CommonPage/CommonPage";
import { locators } from "./HomePageLocators";
import { drawGameInfoMap, DrawGames } from "../CommonPage/drawGamesConfig";
import { MenuButtons, menuButtonsInfoMap } from "../CommonPage/menuButtonsConfig";

export class HomePage extends CommonPage{
    constructor(public page: Page) {
        super(page);
    }

    async expectMyProfileButtonToBeVisible() {
        await expect.soft(this.page.locator(locators.myProfileButton)).toBeVisible();
    }

    async selectLotteryGame(drawGame: DrawGames) {
        await this.page.click(`//*[@id='${drawGameInfoMap[drawGame].id}']`);
        await this.page.waitForURL(`**${drawGameInfoMap[drawGame].endpoint}`);
        expect(this.page).toHaveURL(new RegExp(`${drawGameInfoMap[drawGame].endpoint}$`));
        await this.logCurrentPage();
    }

    async verifyHomePageDisplayed(){
        console.log(`BEFORE --> ${this.page.url()}`);
        await this.page.waitForURL(`**${menuButtonsInfoMap[MenuButtons.HOME].endpoint}`);
        console.log(`AFTER --> ${this.page.url()}`);
    }

}