import test from '../../base/baseTest'
import { CommandLine } from "../../pagesObjects/cmd/CommandLine";

test("Setup - init of the simulators and http-server environnement", async ({page, baseURL}) => { 

        const cmd = new CommandLine();
        await cmd.launchPowerShell('./simulators/dpp/startDPP.ps1');
        await cmd.launchPowerShell('./simulators/sws/startSWS.ps1');
        await cmd.launchPowerShell('./simulators/app/startOperator.ps1');
        await cmd.launchPowerShell('./simulators/app/startPlayer.ps1');
        await page.goto(baseURL+':8090');

})