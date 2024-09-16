import { Page, expect } from "@playwright/test";
import { DrawGames, drawGameInfoMap, doubleGameDrawGames } from "./drawGamesConfig";
import { MenuButtons, menuButtonsInfoMap} from "./menuButtonsConfig";
import { locatorsBasket, locatorsHeader } from "./CommonPageLocators"
import RandExp from 'randexp';

export class CommonPage {
    constructor(public page: Page) {}

    async navigateTo(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded', {timeout:5000});
        await this.logCurrentPage();
    }

    async navigateToHTTPSERVEROperator() {
        await this.navigateTo('http://127.0.0.1:8090');
    }

    async navigateToHTTPSERVERPlayer() {
        await this.navigateTo('http://127.0.0.1:8091');
    }

    extractNumber(text: string): number {
        const match = text.match(/[\d,.]+/);
        let number = match ? match[0] : '';
        number = number.replace(',', '.');
        const parsedNumber = parseFloat(number);

        return parsedNumber;
    }

    async getAmount(locator: string) {
        const amountInnertText = await this.page.innerText(locator);
        console.log(`Amount retrieved for "${locator}": ${amountInnertText}`);
        const amount = this.extractNumber(amountInnertText);

        return amount;
    }

    async clickMenuButton(button: MenuButtons) {
        const locator = menuButtonsInfoMap[button].locator;

        if (locator) {
            await this.page.click(locator);
        } else {
            console.error(`Unknown button: ${button}`);
        }

        this.page.waitForURL(`**${menuButtonsInfoMap[button].endpoint}**`, {timeout: 5000});
        await this.logCurrentPage();

    }

    async verifyEndpoint(drawGame: DrawGames) {
        await expect(this.page.url).toContain("draw-games/"+drawGameInfoMap[drawGame].endpoint)
    }

    async verifyToast(message: string) {
        const toastSelector = `//div[@data-testid='toast']/div[text()="${message}"]`;
        await expect.soft(this.page.locator(toastSelector)).toBeVisible({timeout: 5000});
    }

    generateRandomSequence(length: number): string {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10).toString();
        }
        return result;
    }

    generateRandomSequenceFromRegex(regex: string) {
        const randexp = new RandExp(regex);
        const randomSequence = randexp.gen()
        console.log(`random sequence: ${randomSequence}`)
        return randomSequence;
    }

    logCurrentPage() {
        console.log(`Now on page: ${this.page.url()}`);
    }

    async verifyGameId(gameId: string) {
        const itemTitle = await this.page.innerText(locatorsBasket.itemTitle); 
        const actualGameId = itemTitle.replace(/\s+/g, '');
        expect.soft(actualGameId.toLowerCase(), `Name of the Game Item (${actualGameId}) should be equal to total of the name retrieved in the server response (${gameId}).`).toEqual(gameId.toLowerCase());
    }

    async verifyFreeTicketCount(expectedFreeTicketTotalCount: number) {
        const actualFreeTicketTotalCount = await this.getAmount(locatorsBasket.itemSubtitle);
        const message = `Nombre de Ticket gratuit attendu (${expectedFreeTicketTotalCount}), mais obtenu (${actualFreeTicketTotalCount}).`;
        expect.soft(actualFreeTicketTotalCount, message).toEqual(expectedFreeTicketTotalCount);
    }

    async verifyWinningStatus(status: string) {
        let label: string;

        switch (status) {
            case "winner":
            case "nonPayable":
                label = "Gain";
                break;
            case "nonWinner":
                label = "Non Gagnant";
                break;
            default:
                console.log("winningStatus ne fait pas partie de la liste des status connus (winner, nonWinner, nonPayable)");
                return; // Exit the function if the status is not recognized
        }

        expect.soft(this.page.locator(locatorsBasket.itemTag)).toHaveText(label, { ignoreCase: true });
    }

    async confirmBasket() {
        await this.page.click(locatorsBasket.confirmBasketButton);
    }

    async verifyBasket(expectedGainAmount: number, expectedStakeAmount: number) {
        const expectedTotalAmount = Math.abs(expectedStakeAmount - expectedGainAmount);
        const [actualPurchaseAmount, actualGainAmount, actualTotalAmount, actualStakeAmountMiniBasket] = await Promise.all([
            this.getAmount(locatorsBasket.balancePurchases),
            this.getAmount(locatorsBasket.balanceGains),
            this.getAmount(locatorsBasket.balanceTotal),
            this.getAmount(locatorsBasket.itemPrice),
            this.getAmount(locatorsHeader.miniBasketPrice),
        ]);
         
        expect.soft(actualGainAmount, `Gain amount in Main Basket (${actualGainAmount}) should be equal to total of the gains (${expectedGainAmount}).`).toEqual(expectedGainAmount);
        expect.soft(actualPurchaseAmount, `Purchase stake in Main Basket (${actualPurchaseAmount}) should be equal to total of the stakes: (${expectedStakeAmount}).`).toEqual(expectedStakeAmount);
        expect.soft(actualTotalAmount, `Total amount in Main Basket (${actualTotalAmount}) should be equal to total of the stake minus the gains (${expectedTotalAmount}).`).toEqual(expectedTotalAmount);
        expect.soft(actualStakeAmountMiniBasket, `Amount of top item in Main Basket (${actualStakeAmountMiniBasket}) should be equal to expected amount (${expectedTotalAmount}).`).toEqual(expectedTotalAmount);
        expect.soft(actualStakeAmountMiniBasket, `Total Amount in Mini Basket (${actualStakeAmountMiniBasket}) should be equal to expected amount (${expectedTotalAmount}).`).toEqual(expectedTotalAmount);
    }

    async extendedVerifyBasket(expectedGainAmount: number, expectedStakeAmount: number, gameId: string, freeTicketTotalCount: number, winningStatus: string) {
        await this.verifyBasket(expectedGainAmount, expectedStakeAmount);

        this.verifyGameId(gameId);
        this.verifyFreeTicketCount(freeTicketTotalCount);
        this.verifyWinningStatus(winningStatus);
    }


    async confirmBasketAndVerifyResponse() {
        const responsePromise = this.page.waitForResponse(response =>
            response.url() === "http://localhost:8081/authentication/executeAs/PDV_TERMINAL" && response.status() === 200
            && response.request().method() === 'POST'
        );

        await this.confirmBasket();
        await responsePromise;
    }

    async logRequest() {
        await this.page.route('**', (route, request) => {
            console.log(`HTTP TRANSACTIONS: ${request.url()}`);
            route.continue();
        });
    }

    async getCurrentStakeAmount() {
        return this.getAmount(locatorsBasket.balancePurchases);
    }

}