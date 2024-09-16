export const locatorsLateralBar = {
    homeButton: "//a[@href='/home']",
    drawGamesButton: "//a[@href='/draw-games']",
    groupsButton: "//a[@href='/groups']",
    sportButton: "//a[@href='/sport']",
    argentWebButton: "//a[@href='/argent-web']",
    manualValidationButton: "//a[@href='/manual-validation']",
    scratchButton: "//a[@href='/scratch']",
    cancellationButton: "//a[@href='/cancellation']",
    reportingButton: "//a[@href='/reporting']",
    scannerToggleSwitch: "//label[@class='toggle__switch']"
}

export const locatorsHeader = {
    date_time: "//span[@class='date_time'][1]",
    formationButton: "//svg[@data-testid='formation']",
    phoneButton: "",
    settingsButton: "//a[@href='/settings']",
    messageButton: "//a[@href='/message']",
    miniBasketPrice: "//section[@class='price']",
    miniBasketTag: "",
    connectedUser: "//*[@data-testid='user']/ancestor::div[1]",
    lockSessionButton: "//*[@data-testid='user']/ancestor::div[1]/following-sibling::ul/div[1]",
    CloseSessionButton: "//*[@data-testid='user']/ancestor::div[1]/following-sibling::ul/div[2]"
}

export const locatorsBasket = {
    confirmBasketButton: "//button[contains(@class,'validate btn')]",
    balancePurchases: "//div[@class='balance-purchases']//span[@class='currency']",
    balanceGains: "//div[@class='balance-gains']//span[@class='currency']",
    balanceTotal: "//div[@class='balance-total']//span[@class='currency']",
    itemTitle: "//div[@class='item__title']",
    itemSubtitle: "//div[@class='item__subtitle']",
    itemPrice: "//div[@class='item__price']",
    itemTag: "//div[@class='item__tag']//p",
}