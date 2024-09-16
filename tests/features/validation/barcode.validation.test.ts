import test from '../../../base/baseTest'
import { credentials } from '../../testData/users';
import { BarcodeInfoMap, Barcodes } from '../../testData/achat/barcodes';
import { MenuButtons, menuButtonsInfoMap } from '../../../pagesObjects/CommonPage/menuButtonsConfig';

test("Validation - Scan - CAB - Valid", { annotation: { type: 'definition', description: 'EQ-55492'}},
async ({ page, commonPage, loginPage, homePage, dppSimu }) => {

    //Scenario à completer

    const pageOperator = page;
    const drawGameTestData = BarcodeInfoMap[Barcodes.LOTTO649];
    const { xml, price: expectedStakeAmount } = drawGameTestData;
    
    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);
    await commonPage.clickMenuButton(MenuButtons.MANUALVALIDATION);
    
    await dppSimu.sendBarcode(xml, expectedStakeAmount);
    await homePage.verifyBasket(0.00, expectedStakeAmount);
    await commonPage.confirmBasketAndVerifyResponse();

})