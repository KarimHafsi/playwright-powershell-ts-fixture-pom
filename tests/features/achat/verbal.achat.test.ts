import test from '../../../base/baseTest'
import { DrawGames } from "../../../pagesObjects/CommonPage/drawGamesConfig";
import { MenuButtons } from "../../../pagesObjects/CommonPage/menuButtonsConfig";
import { credentials } from '../../testData/users';
import { VerbalPlays, VerbalPlayInfoMap } from '../../testData/achat/verbalPlays';

test("Prise de jeu Manuelle", { annotation: { type: 'definition', description: 'EQ-56393'}},
async ({ page, commonPage, loginPage, homePage, drawGamePage }) => {
    
    const pageOperator = page;
    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);
    await commonPage.clickMenuButton(MenuButtons.DRAWGAMES);


    for (const verbalPlayKey of Object.keys(VerbalPlays)) {
         if (isNaN(Number(verbalPlayKey))) {
            const betslip = VerbalPlays[verbalPlayKey as keyof typeof VerbalPlays];
            const drawGameTestData = VerbalPlayInfoMap[betslip];
            const currentStakeAmount = await commonPage.getCurrentStakeAmount();
            const { drawGame, selection, draw, doubleGame, extra, price } = drawGameTestData;
            const expectedStakeAmount = currentStakeAmount + price;

            console.log(`===============================  VERBAL PLAY TEST OF ${verbalPlayKey}  ===============================`)
            await homePage.selectLotteryGame(drawGame);
            await drawGamePage.makeDrawSelection(drawGame, selection, draw, doubleGame, extra);
            const actualStakeAmount = await drawGamePage.verifyStakeAmount(expectedStakeAmount);
                
            await drawGamePage.validateDrawSelection();
            await commonPage.verifyToast("Item ajouté au panier.");
            await homePage.verifyHomePageDisplayed();

            await homePage.verifyBasket(0.00, expectedStakeAmount);
            await commonPage.confirmBasketAndVerifyResponse();
        }
    }

}),

test("Lotto 6/49 - Mise Eclaire - Achat - Loterie", { annotation: { type: 'definition', description: 'EQ-55448'}},
async ({ page, loginPage, homePage, drawGamePage, commonPage }) => {    

    const pageOperator = page;
    const drawGame = DrawGames.LOTTO_649;
    const drawGameTestData = VerbalPlayInfoMap[VerbalPlays.LOTTO649_DOUBLEGAME];
    const { selection, draw, doubleGame, extra, price: expectedStakeAmount } = drawGameTestData;

    await commonPage.navigateToHTTPSERVEROperator();
    await loginPage.loginAs(credentials.employee.username, credentials.employee.password);
    
    await commonPage.clickMenuButton(MenuButtons.DRAWGAMES);
    await homePage.selectLotteryGame(drawGame);
    await drawGamePage.makeDrawSelection(drawGame, selection, draw, doubleGame, extra);
    
    const actualStakeAmount = await drawGamePage.verifyStakeAmount(expectedStakeAmount);
    console.log(`Expected stake amount: ${expectedStakeAmount}, Actual stake amount: ${actualStakeAmount}`);
        
    await drawGamePage.validateDrawSelection();
    await commonPage.verifyToast("Item ajouté au panier.");

    await homePage.verifyBasket(0.00, expectedStakeAmount);
    await commonPage.confirmBasketAndVerifyResponse();

})