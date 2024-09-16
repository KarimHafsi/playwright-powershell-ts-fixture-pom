import { spawn, ChildProcess } from "child_process";

export class CommandLine {

    private powershellProcess: ChildProcess | null = null;

    async launchPowerShell(filePath: string): Promise<void> {
        this.powershellProcess = spawn('powershell.exe', ['-File', filePath], {detached: true, shell: true});
        this.powershellProcess.unref(); // Detach the process
        console.log(filePath+' PowerShell script launched.');
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}