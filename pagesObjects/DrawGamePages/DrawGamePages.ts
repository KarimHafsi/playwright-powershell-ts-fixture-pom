import { expect, Page } from "@playwright/test";
import { CommonPage } from "../CommonPage/CommonPage";
import { locators as drawGamePagesLocators } from "./DrawGamePagesLocators";
import { drawGameInfoMap, DrawGames, participationGames, selectionGames  } from "../CommonPage/drawGamesConfig";

export class DrawGamePage extends CommonPage{
    constructor(public page: Page) {
        super(page);
    }

    async makeDrawSelection(drawGame: DrawGames, selection: number, draw: number, doubleGame: number, extra: number) {
        const { page } = this;
        const { selectionButtons, drawButtons, radioButtons, extraButtonNon, extraButtons, participationButtons } = drawGamePagesLocators;

        // Click participation or selection button based on the draw game
        if (participationGames.includes(drawGame)) {
            await page.click(`${participationButtons}[${selection}]`);
        }   else if (selectionGames.includes(drawGame)) {
            await page.click(`${selectionButtons}[${selection}]`);
        }

        await page.click(`${drawButtons}[${draw}]`);

        await page.click(`${radioButtons}[${doubleGame}]`);

        const extraButtonSelector = extra === 0 ? extraButtonNon : `${extraButtons}[${extra}]`;
        await page.click(extraButtonSelector);
    }

    async verifyStakeAmount(expectedStakeAmount) {        
        const actualStakeAmountDrawGamePage = await this.getAmount(drawGamePagesLocators.stakeAmount);

        expect.soft(actualStakeAmountDrawGamePage, `On current page "${this.page.url()}", Total Amount of the Bet on DrawGame Page (${actualStakeAmountDrawGamePage}) should be equal to expected amount (${expectedStakeAmount}).`).toEqual(expectedStakeAmount);
        console.log(`Expected stake amount: ${expectedStakeAmount}, Actual stake amount: ${actualStakeAmountDrawGamePage}`);

        return actualStakeAmountDrawGamePage;
    }

    async validateDrawSelection() {
        await this.page.click(drawGamePagesLocators.validationButton);       
    }

}