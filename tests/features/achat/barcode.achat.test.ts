import test from '../../../base/baseTest'
import { credentials } from '../../testData/users';
import { BarcodeInfoMap, Barcodes } from '../../testData/achat/barcodes';

test("Prise de jeu via Code à Barre", { annotation: { type: 'definition', description: 'EQ-55885'}},
async ({ page, commonPage, loginPage, homePage, dppSimu }) => {
    
    const pageOperator = page;
    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);

    for (const barcodeKey of Object.keys(Barcodes)) {
         if (isNaN(Number(barcodeKey))) {
            const barcode = Barcodes[barcodeKey as keyof typeof Barcodes];
            const drawGameTestData = BarcodeInfoMap[barcode];
            const currentStakeAmount = await commonPage.getCurrentStakeAmount();
            console.log(`currentStakeAmount: ${currentStakeAmount}`)
            const { xml, price } = drawGameTestData;
            const expectedStakeAmount = currentStakeAmount + price;
            console.log(`expectedStakeAmount: ${expectedStakeAmount}`)

            console.log(`===============================  BARCODE TEST OF ${barcodeKey}  ===============================`)
            await dppSimu.sendBarcode(xml, price);
            await homePage.verifyBasket(0.00, expectedStakeAmount);
            await commonPage.confirmBasketAndVerifyResponse();
        }
    }

}),

test("Lotto 6/49 - Prise de jeu via Code à Barre", { annotation: { type: 'definition', description: 'EQ-55885'}},
async ({ page, commonPage, loginPage, homePage, dppSimu }) => {

    const pageOperator = page;
    const drawGameTestData = BarcodeInfoMap[Barcodes.LOTTO649];
    const { xml, price: expectedStakeAmount } = drawGameTestData;
    
    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);

    await dppSimu.sendBarcode(xml, expectedStakeAmount);
    await homePage.verifyBasket(0.00, expectedStakeAmount);
    await commonPage.confirmBasketAndVerifyResponse();

})