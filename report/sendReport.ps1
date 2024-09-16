# Read the JSON file
$secretContent = Get-Content -Raw -Path "secrets.json" | ConvertFrom-Json

# Retrieve the token from the JSON content
$token = $secretContent.jiraToken

# Construct the url
$jirabaseUrl = "https://support.lotsys.com"
$projectKey = "LQ"
$url = "$jirabaseUrl/jira/rest/raven/1.0/import/execution/junit?projectKey=$projectKey"

# Construct the curl command
$curlCommand = "curl -v -H Content-Type:multipart/form-data -H `"Authorization: Bearer $token`" -F file=@report/results.xml $url --insecure"

# Execute the command and capture the output
Start-Process -FilePath "cmd.exe" -ArgumentList "/k $curlCommand"