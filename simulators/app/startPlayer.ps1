# Define the commands to execute in each terminal
$commands = @(
    @{
        Arguments = "/k http-server simulators\app\player -p 8091"
    }
)

# Loop through the commands and open a new terminal for each
foreach ($command in $commands) {
    Start-Process -FilePath "cmd.exe" -ArgumentList "start $($command.Arguments)" -Verb RunAs
}