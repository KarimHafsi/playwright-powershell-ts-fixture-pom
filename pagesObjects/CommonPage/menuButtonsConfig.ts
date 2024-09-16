import { locatorsLateralBar, locatorsHeader } from "./CommonPageLocators";

export enum MenuButtons { 
    //lateral menu
        HOME,
        DRAWGAMES,
        GROUPS,
        SPORT,
        ARGENTWEB,

        MANUALVALIDATION,
        SCRATCH,
        CANCELLATION,
        REPORTING,

    //header menu
        FORMATION,
        PHONE,
        SETTINGS,
        MESSAGE,
    }

    export interface MenuButtonsInfo {
        endpoint: string;
        locator: string;
    }

export const menuButtonsInfoMap: { [key in MenuButtons]: MenuButtonsInfo } = {

    [MenuButtons.HOME]: {
        endpoint: "/home",
        locator: locatorsLateralBar.homeButton
    },

    [MenuButtons.DRAWGAMES]: {
        endpoint: "/draw-games",
        locator: locatorsLateralBar.drawGamesButton
    },

    [MenuButtons.GROUPS]: {
        endpoint: "/groups",
        locator: locatorsLateralBar.groupsButton
    },

    [MenuButtons.SPORT]: {
        endpoint: "/sport",
        locator: locatorsLateralBar.sportButton
    },

    [MenuButtons.ARGENTWEB]: {
        endpoint: "/argent-web",
        locator: locatorsLateralBar.argentWebButton
    },

    [MenuButtons.MANUALVALIDATION]: {
        endpoint: "/manual-validation",
        locator: locatorsLateralBar.manualValidationButton
    },

    [MenuButtons.SCRATCH]: {
        endpoint: "/scratch",
        locator: locatorsLateralBar.scratchButton
    },

    [MenuButtons.CANCELLATION]: {
        endpoint: "/cancellation",
        locator: locatorsLateralBar.cancellationButton
    },

    [MenuButtons.REPORTING]: {
        endpoint: "/reporting",
        locator: locatorsLateralBar.reportingButton
    },

    [MenuButtons.FORMATION]: {
        endpoint: "",
        locator: locatorsHeader.formationButton
    },

    [MenuButtons.PHONE]: {
        endpoint: "",
        locator: locatorsHeader.phoneButton
    },

    [MenuButtons.SETTINGS]: {
        endpoint: "/settings",
        locator: locatorsHeader.settingsButton
    },

    [MenuButtons.MESSAGE]: {
        endpoint: "/message",
        locator: locatorsHeader.messageButton
    },
};
