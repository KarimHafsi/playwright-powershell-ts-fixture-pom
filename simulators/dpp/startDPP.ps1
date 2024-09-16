# Define the commands to execute in each terminal
$commands = @(
    @{
        Arguments = "/k nvm use 18 && cd simulators\dpp\backend && node dist/mainServer.js"
    }
)

# Loop through the commands and open a new terminal for each
foreach ($command in $commands) {
    Start-Process -FilePath "cmd.exe" -ArgumentList "start $($command.Arguments)" -Verb RunAs
}