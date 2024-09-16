import { expect, Page } from "@playwright/test";
import { CommonPage } from "../CommonPage/CommonPage";
import { locators, ValidationButtons, validationButtonsInfoMap } from "./ValidationPageLocators";

export class ValidationPage extends CommonPage{
    constructor(public page: Page) {
        super(page);
    }

    async selectGameType(validationGameType: ValidationButtons) {
        await this.page.click(validationButtonsInfoMap[validationGameType].locator);
    }

    async fillRandomCorrectControlNumber(regex: string) {
        const input = this.generateRandomSequenceFromRegex(regex);
        this.page.locator(locators.controlNumberField).fill(input);
    }

    async confirmControlNumber() {
        this.page.locator(locators.controlNumberConfirmationButton).click();
    }

    async clickReturn() {
        this.page.click(locators.returnButton);
    }

    async verifyControlNumberDisplayed() {
        this.page.locator(`//div[@class="game-action-number-control"]/span`).isVisible 
    }

    async confirmControlNumberAndVerifyResponse(): Promise<{ priceDivided: number; freeTicketTotalCount: number; winningStatus: string; gameId: string } > {

        const responsePromise = this.page.waitForResponse(response =>
            response.url() === "http://localhost:8081/authentication/executeAs/PDV_TERMINAL" &&
            response.status() === 200 &&
            response.request().method() === 'POST',
            { timeout: 5000 } 
        );

        await this.confirmControlNumber();

        const response = await responsePromise;
        const responseText = await response.text();

        let responseJson: { body: { price: number; gameId: string; freeTicketTotalCount: number; winningStatus: string; }; };
            responseJson = JSON.parse(responseText);
            console.log(`Response body JSON: ${JSON.stringify(responseJson)}`);

        const { price, gameId, freeTicketTotalCount, winningStatus} = responseJson.body;
        const priceDivided = price / 100;
        
        console.log('price:', priceDivided);
        console.log('gameId:', gameId);
        console.log('freeTicketTotalCount:', freeTicketTotalCount);
        console.log('winningStatus:', winningStatus);

        return { priceDivided, freeTicketTotalCount, winningStatus, gameId };
    }
}