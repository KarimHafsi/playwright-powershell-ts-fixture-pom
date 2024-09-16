import { expect, Page } from "@playwright/test";
import { CommonPage } from "../CommonPage/CommonPage";
import { locators } from "./LoginPageLocators";
import { MenuButtons, menuButtonsInfoMap } from "../CommonPage/menuButtonsConfig";

export class LoginPage extends CommonPage{
    constructor(public page: Page) {
        super(page);
    }

    async open(baseURL) {
        await this.page.goto(`${baseURL}route=login`);
    }

    async selectOperator(operator: string) {
        await this.page.click(locators.dropDownArrow);
        await this.page.getByText(operator).click();
    }

    async enterPassword(password: string) {
        await this.page.click(locators.passwordField);

        for (let char of password) {
            await this.page.click(`//*[@id='keyboard-root']/div/div/div/div[2]//button[contains(text(), '${char}')]`);
        }

        await this.page.click(locators.enterKeyboardButton);
    }

    async clickConnexion() {
        await this.page.click(locators.confirmButton);
    }

    async loginAs(operator: string, password: string) {
        await this.selectOperator(operator);
        await this.enterPassword(password);
        await this.clickConnexion();
        await this.page.waitForLoadState('domcontentloaded', {timeout:2000});
        expect(this.page).toHaveURL(new RegExp(`${menuButtonsInfoMap[MenuButtons.HOME].endpoint}$`));
        await this.logCurrentPage();
    }
    
}