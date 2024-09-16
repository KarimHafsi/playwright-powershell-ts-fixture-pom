# Get all processes with the name 'cmd'
$cmdProcesses = Get-Process -Name cmd -ErrorAction SilentlyContinue

# Check if there are any cmd processes running
if ($cmdProcesses) {
    # Iterate through each process and terminate it
    foreach ($process in $cmdProcesses) {
        try {
            # Attempt to close the process gracefully
            $process.CloseMainWindow() | Out-Null
            Start-Sleep -Milliseconds 500 # Wait briefly to allow the process to close gracefully

            # If the process is still running, force kill it
            if (!$process.HasExited) {
                $process.Kill()
                Write-Host "Force closed cmd process with ID $($process.Id)"
            } else {
                Write-Host "Gracefully closed cmd process with ID $($process.Id)"
            }
        } catch {
            Write-Host "Failed to close cmd process with ID $($process.Id): $_"
        }
    }
} else {
    Write-Host "No cmd processes found."
}