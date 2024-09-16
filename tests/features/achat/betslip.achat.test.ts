import test from '../../../base/baseTest'
import { credentials } from '../../testData/users';
import { BetslipInfoMap, Betslips } from '../../testData/achat/betslips';

test("Prise de jeu via Fiche", { annotation: { type: 'definition', description: 'EQ-57656'}},
async ({ page, commonPage, loginPage, homePage, dppSimu }) => {
    
    const pageOperator = page;
    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);

    for (const betslipKey of Object.keys(Betslips)) {
         if (isNaN(Number(betslipKey))) {
            const betslip = Betslips[betslipKey as keyof typeof Betslips];
            const drawGameTestData = BetslipInfoMap[betslip];
            const currentStakeAmount = await commonPage.getCurrentStakeAmount();
            const { json, price } = drawGameTestData;
            const expectedStakeAmount = currentStakeAmount + price;

            console.log(`===============================  BETSLIP TEST OF ${betslipKey}  ===============================`)
            await dppSimu.sendDocumentInput(json);
            await homePage.verifyHomePageDisplayed();
            await homePage.verifyBasket(0.00, expectedStakeAmount);
            await commonPage.confirmBasketAndVerifyResponse();
        }
    }


}),

test("Lotto 6/49 Normal - Fiche - Achat - FR", { annotation: { type: 'definition', description: 'EQ-55290'}},
async ({ page, commonPage, loginPage, homePage, dppSimu }) => {    

    const pageOperator = page;
    const drawGameTestData = BetslipInfoMap[Betslips.LOTTO649];
    const { json, price: expectedStakeAmount } = drawGameTestData;

    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);

    await dppSimu.sendDocumentInput(json);
    await homePage.verifyBasket(0.00, expectedStakeAmount);
    await commonPage.confirmBasketAndVerifyResponse();

})