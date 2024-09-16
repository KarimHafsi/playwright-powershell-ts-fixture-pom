import test from '../../../base/baseTest';
import { credentials } from '../../testData/users';

test("EQ-56185 - Authentification d'un profil Responsable", async ({ page, context, baseURL, loginPage, homePage}) => {

    const pageOperator = page;

    const pagePlayer = await context.newPage();
    await pagePlayer.goto(baseURL+':8091');
    await pagePlayer.waitForLoadState('domcontentloaded', {timeout:2000});        
    
    await pageOperator.goto(baseURL+':8090');
    await pageOperator.waitForLoadState('domcontentloaded', {timeout:2000});
    
    await loginPage.selectOperator(credentials.responsable.username);
    await loginPage.enterPassword(credentials.responsable.password);
    await loginPage.clickConnexion();

    await homePage.expectMyProfileButtonToBeVisible();

})