# Define the base directory and pattern to search for
$baseDir = "simulators\sws"
$pattern = "loto-quebec-sws-server*"

# Find the directory that matches the pattern
$lotoQuebecDir = Get-ChildItem -Path $baseDir -Filter $pattern -Directory | Select-Object -First 1

# Check if the directory was found
if ($null -eq $lotoQuebecDir) {
    Write-Host "Directory matching the pattern '$pattern' not found in '$baseDir'."
    exit 1
}

# Define the command to execute
$command = "/k nvm use 18 && cd $($lotoQuebecDir.FullName) && node dist\main.js"

# Start the process with the command
Start-Process -FilePath "cmd.exe" -ArgumentList "start $command" -Verb RunAs