import test from '../../base/baseTest'
import { CommandLine } from "../../pagesObjects/cmd/CommandLine";

test("Teardown - Exit simulators and close Caddy environnement", async ({}) => { 
        
        const cmd = new CommandLine();
        await cmd.launchPowerShell('./simulators/stopSimulators.ps1');

})