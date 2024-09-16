export const locators = {
    sectionTitle: "//span[@class='section-title'][1]",
    selectionButtons: "//span[text()= 'Sélection(s)']/ancestor::div/div/section/button",
    participationButtons: "//span[text()= 'Participation(s)']/ancestor::div/div/section/button",
    drawButtons: "//span[text()= 'Tirage(s)']/ancestor::div/div/section/button",
    radioButtons: "//div[@class='option-radio']",
    extraButtons: "//button[@class='button selectable numbers-extra']",
    extraButtonNon: "//svg[@class='logo-extra']/ancestor::div/div/section/button[@class='button selectable btn-large'",
    validationButton: "//button[contains(@class,'validation-button')]",
    stakeAmount: "//div[@class='stake-amount']"
}