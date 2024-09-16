import { expect, Page,  } from "@playwright/test";
import { DrawGames, drawGameInfoMap, singleChoixDrawGames, multipleChoixDrawGames } from "../CommonPage/drawGamesConfig";
import { CommonPage } from "../CommonPage/CommonPage";

export class DPPSimu extends CommonPage {
    constructor(public page: Page) {
        super(page);
    }

    async sendDocumentInput(documentInput: string) {
        const { request } = require('playwright');
        const requestContext = await request.newContext();

        const payload = {
            deviceId: "simu-opticalReader",
            type: "coupon",
            value: JSON.parse(documentInput)
        };

        const response = await requestContext.post('http://localhost:8081/simulator/imagereader/document', {
            data: payload,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
                'Host': 'localhost:8081',
                'Origin': 'http://localhost:8081',
                'Referer': 'http://localhost:8081',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.0 Mobile Safari/537.36'
            }
        });

        console.log(`Response status: ${response.status()}`);
        await requestContext.dispose();
        await this.page.waitForTimeout(1000);

    }

    async sendBarcode(barcodeValue: string, expectedStakeAmount: number) {
        const { request } = require('playwright');
        const requestContext = await request.newContext();

        const response = await requestContext.post('http://127.0.0.1:8080/lotsys/f3g/barcodereader/input/barcode/PDF417', {
            data: barcodeValue,
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': '127.0.0.1:8080',
            'Origin': 'http://localhost:8081',
            'Referer': 'http://localhost:8081/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.0 Mobile Safari/537.36'
            }
        });

        console.log(`Response status: ${response.status()}`);
        await requestContext.dispose();
        const expectedStakeAmountString = expectedStakeAmount.toFixed(2).replace('.', ',');
        await expect(this.page.locator(`//*[@class="item__price"][contains(text(), "${expectedStakeAmountString}")]`)).toBeVisible();

    }

    async createBarcode(drawGame: DrawGames, nbTir: number, nbSelection: number, extra: number): Promise<string> {
        const { id, productName } = drawGameInfoMap[drawGame];
        const productNameTag = this.createBarcodeProductNameTag(drawGame, nbSelection);
        const barcode = `<cab type="mise" ver="02"><jeu>${id}</jeu><nbTir>${nbTir}</nbTir><${productName} ${productNameTag}</${productName}><extra>${extra}</extra></cab>`.trim();
        console.log("BARCODE= " + barcode)
        return barcode;
    }

    createBarcodeSelection(drawGame: DrawGames): string { 
        const selectionLength = drawGameInfoMap[drawGame].selectionLength
        const selection = this.generateRandomSequence(selectionLength);
        return `${selection}`;
    }

    createBarcodeProductNameTag(drawGame: DrawGames, nbSelection: number): string {
        const selection: string[] = [];
        let productNameTag: string;

        if (singleChoixDrawGames.includes(drawGame)) {
            for (let i = 0; i < nbSelection; i++) {
                selection.push(`<s>${this.createBarcodeSelection(drawGame)}</s>`);
            } 
            productNameTag = `choix="${nbSelection}">${selection}`
        }
        
        else if (multipleChoixDrawGames.includes(drawGame)) {
            for (let i = 0; i < nbSelection; i++) {
                selection.push(`<p choix="3">${this.createBarcodeSelection(drawGame)}</p>`);
            }
            productNameTag = `${selection}`;
        }

        else {
            productNameTag = '';
        }       

        return productNameTag;
    }
    
}