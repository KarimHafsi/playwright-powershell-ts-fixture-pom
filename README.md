# Playwright Automation Project for lq-operator

This project utilizes Playwright for automated testing of lq-operator.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js version 18 installed on your machine
- Git installed on your machine
- Access to a GitLab repository
- Access to a Jira instance with the necessary permissions to obtain a token for integration

### Installation

1. Generate Playwright certificat:
   
   Retrieve the folder `Certificat_Playwright` at `A:\LQ`, create empty file `cacert.pem` at `C:\cacert\cacert.pem` place the content of `Certificat_Playwright` inside and execute the following Powershell command:

   ```powershell
   gc c:\cacert\root.crt | ac c:\cacert\cacert.pem
   gc c:\cacert\child1.crt | ac c:\cacert\cacert.pem
   gc c:\cacert\child2.crt | ac c:\cacert\cacert.pem
   gc c:\cacert\child3.crt | ac c:\cacert\cacert.pem
   $env:NODE_EXTRA_CA_CERTS = 'C:\cacert\cacert.pem'
   ```

2. Clone the repository to your local machine at "C:/dev/projects/playwright":

   ```bash
   git clone https://gitlab-fgs-fr.paas-usine.dev.fdj.fr/retail/qa-automation/functionaltests-terminal-software.git
   ```

3. Navigate to the project directory:

   ```bash
   cd functionaltests-terminal-software
   ```

4. Install dependencies:

   ```bash
   npm install playwright@1.44.1
   npm i pm2
   npm install http-server -g
   ```
   install [nvm](https://github.com/coreybutler/nvm-windows#readme)

### Configuration

1. Set up `secrets.json`:

   Create a file named `secrets.json` in the root of the project with the following structure:

   ```json
   {
     "jiraToken": "YOUR_JIRA_TOKEN_HERE"
   }
   ```

   Replace `YOUR_JIRA_TOKEN_HERE` with the token obtained from your Jira instance for integration.

2. Ensure `.gitignore` includes `secrets.json` to avoid committing sensitive information.

### Simulators Setup

To run the automation tests, you'll need to download the simulators for SWS and DPP and place them in a specific folder within the project directory. Follow these steps to set up the simulators:

1. **Download Simulators**:
   - Navigate to the following locations to download the simulators and application builds:
     - [SWS Simulator](https://dev.azure.com/FDJ-UA/LOTO_QUEBEC/_build?view=folders)
     - [DPP Simulator](G:\sgf\chro\dpp)
     - [Operator build](https://dev.azure.com/FDJ-UA/LOTO_QUEBEC/_build?view=folders)
     - [Player build](https://dev.azure.com/FDJ-UA/LOTO_QUEBEC/_build?view=folders)

2. **Place Simulators and App Builds in Project Folder**:
   - Once downloaded, extract the contents of both the SWS and DPP simulators.
   - Create a folder named `simulators` in the root directory of the project if it doesn't already exist.
   - Move the extracted folders/files of the SWS and DPP simulators into the `simulators` folder.

3. **Place Chromium browser (Chrome 87) in Project Folder**:
   - Once downloaded, move the installation folder/files to `browsers` folder.

4. **Verify Setup**:
   - After placing the simulators in the `simulators` folder, ensure that the folder structure looks like this:
     ```
     project-root/
     ├── browsers/
     │   ├── chrome-win/
     ├── simulators/
     │   ├── app/
     │   │   ├── [operator]
     │   │   ├── [player]
     │   ├── dpp/
     │   │   ├── [backend]
     │   ├── sws/
     │   │   ├── [loto-quebec-sws-server-<version>]

     ```
5. **Update default.json**
   - Navigate to the backend/config directory and locate the default.json file. Uncomment the authentication segment and remove the "role: RTL" segment from the configuration.
   - Modify the path for the sws API from `http://localhost:3000/` to `http://localhost:3000/api/jha/loto/v1` in the authentication section of both `PDV_USER` and `PDV_TERMINAL`

6. **Update plugins folder**
   - In the backend/plugin directory, include pdv-user.js and pdv-terminal.js files. You can obtain these files from a functional terminal setup.

7. **Send initialization request from Postman**
   - Use Postman to send two POST requests. If you encounter a DICTIONARY ISSUE, it indicates missing parameters.

   - **Request 1:**
     - **Method:** POST
     - **URL:** `http://localhost:8081/parameters/applications/PDV_USER/parameters`
     - **Body:**
       ```json
       {
         "LQ_ORIGIN" : "Elite"
       }
       ```

   - **Request 2:**
     - **Method:** POST
     - **URL:** `http://localhost:8081/parameters/applications/PDV_TERMINAL/parameters`
     - **Body:**
       ```json
       {
         "LQ_ORIGIN" : "Elite",
         "NUMERO_TERMINAL": "00465",
         "SECRET_TERMINAL": "0000",
         "IDENTIFIANT_PHYSIQUE_TERMINAL": 100465,
         "TYPE": "EQJ"
       }
       ```

8. **Ready to Run**:
   - With the simulators set up in the project directory, you're now ready to execute the automation tests.

### Usage

1. Run tests:

   ```bash
   npx playwright test --reporter=html
   ```

2. Check test reports:

   [TO-DO Describe how to access test reports]

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

## Contact

Karim Hafsi - ext.karim.hafsi@fdj-gs.com# playwright-ts-fixture-pom