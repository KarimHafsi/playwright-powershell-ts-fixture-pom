import { test as base } from "@playwright/test";
import { DPPSimu } from "../pagesObjects/dpp/DPPSimu";
import { CommonPage } from "../pagesObjects/CommonPage/CommonPage";
import { HomePage } from "../pagesObjects/HomePage/HomePage";
import { LoginPage } from "../pagesObjects/LoginPage/LoginPage";
import { DrawGamePage } from "../pagesObjects/DrawGamePages/DrawGamePages";
import { ValidationPage } from "../pagesObjects/ValidationPage/ValidationPage";

type pageObjects ={
    dppSimu: DPPSimu;
    commonPage: CommonPage;
    loginPage: LoginPage;
    homePage: HomePage;
    drawGamePage: DrawGamePage;
    validationPage: ValidationPage;
}

// intializing all the page objects you have in your app
// and import them as fixture in spec file
const test = base.extend<pageObjects>({

    dppSimu: async ({ page }, use) => {
        const dppSimu = new DPPSimu(page);
        await use(new DPPSimu(page));
    },

    commonPage: async ({ page }, use) => {
        const commonPage = new CommonPage(page);
        await use(new CommonPage(page));
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(new HomePage(page));
    },

    drawGamePage: async ({ page }, use) => {
        const drawGamePage = new DrawGamePage(page);
        await use(new DrawGamePage(page));
    },

    validationPage: async ({ page }, use) => {
        const validationPage = new ValidationPage(page);
        await use(new ValidationPage(page));
    },

});

export default test;
export const expect = test.expect;