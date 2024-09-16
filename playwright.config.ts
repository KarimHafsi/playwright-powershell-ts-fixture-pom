import { defineConfig } from '@playwright/test';

export default defineConfig ({
  testDir: './tests/',

  use: {
    baseURL: "http://127.0.0.1",
    headless: false,
    screenshot: "on",
    video: "on",
    trace: "on",
    viewport: {width:1024, height:768},
    launchOptions: {
      executablePath: 'browsers/chrome-win/chrome.exe', 
      headless: false,
      slowMo: 1500
    }
  },

  timeout: 120000,
  expect: { timeout: 10000 },
  reportSlowTests: null,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['junit', { outputFile: 'report/results.xml' }]],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'report/test-results/',

  projects: [
    {
      name: 'setup',
      testMatch: ["global.setup.spec.ts"]
    },
    {
      name: 'e2e tests',
      testMatch: [/.*\.test\.ts/],
      dependencies: ['setup'],
    },
    {
      name: 'teardown',
      testMatch: ["global.teardown.spec.ts"],
      dependencies: ['setup'],
    }
  ]

});