import test from '../../../base/baseTest'
import { credentials } from '../../testData/users';
import { controlNumbersInfoMap, ControlNumbers, validationControlNumbers } from '../../testData/validation/controlNumbers';
import { MenuButtons } from '../../../pagesObjects/CommonPage/menuButtonsConfig';

test("Validation prise de jeu par saisie manuelle", { annotation: { type: 'definition', description: 'EQ-55288'}},
async ({ page, commonPage, loginPage, validationPage }) => {

    const pageOperator = page;    
    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);
    await commonPage.clickMenuButton(MenuButtons.MANUALVALIDATION);
 
    for (const manualValidationKey of Object.keys(ControlNumbers)) {
         if (isNaN(Number(manualValidationKey))) {
            const manualValidation = ControlNumbers[manualValidationKey as keyof typeof ControlNumbers];
            if (validationControlNumbers.includes(manualValidation)) {
                const manualValidationTestData = controlNumbersInfoMap[manualValidation];
                const { regex, button } = manualValidationTestData;
                console.log(`=============================== MANUAL VALIDATION TEST OF ${manualValidationKey} ===============================`);

                await validationPage.selectGameType(button);
                await validationPage.fillRandomCorrectControlNumber(regex);
                const { priceDivided, freeTicketTotalCount, winningStatus, gameId } = await validationPage.confirmControlNumberAndVerifyResponse();
                await commonPage.verifyToast("Validation réalisée avec succès");
                await commonPage.extendedVerifyBasket(priceDivided, 0.00, gameId, freeTicketTotalCount, winningStatus);
                await commonPage.confirmBasket();

                // Ajouter verification de la réponse quand le scenario ne sera plus buggé sur l'app.
                
                await validationPage.clickReturn();
            }
        }
    }

})