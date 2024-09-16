export const locators = {
    validationTypeButton: `//div[@class="gameType__container"]/button`,
    controlNumberField: `//input[@id="controlNumber"]`,
    controlNumberConfirmationButton: `//div[contains(@class, "manual-control")]/button[contains(@class, "validate")]`,
    controlNumberVerification: `//div[@class="game-action-number-control"]/span`,
    gameLogoVerification: `//div[@class="game-action-logo"]`,
    gameResultVerification: `//div[@class="game-action-result-title"]`,
    returnButton: `//span[text()="Retour"]`
}

export enum ValidationButtons {
    DRAWGAME,
    SPORT_BETTING,
    GROUP,
    SUPER_GROUP,
    SCRATCH,
    OTHER
}

export interface ValidationButtonsInfo {
    locator: string;
}

export const validationButtonsInfoMap: { [key in ValidationButtons]: ValidationButtonsInfo } = {

    [ValidationButtons.DRAWGAME]: {
        locator: `${locators.validationTypeButton}[1]`
    },

    [ValidationButtons.GROUP]: {
        locator: `${locators.validationTypeButton}[3]`
    },

    [ValidationButtons.OTHER]: {
        locator: `${locators.validationTypeButton}[6]`
    },

    [ValidationButtons.SCRATCH]: {
        locator: `${locators.validationTypeButton}[5]`
    },

    [ValidationButtons.SPORT_BETTING]: {
        locator: `${locators.validationTypeButton}[2]`
    },

    [ValidationButtons.SUPER_GROUP]: {
        locator: `${locators.validationTypeButton}[4]`
    },

};