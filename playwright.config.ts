import { defineConfig } from "@playwright/test";

export default defineConfig({
    reporter: "list",
    testDir: "./tests/e2e",
    timeout: 30000,
    retries: 0,
    use: {
        baseURL: "http://localhost:3000",
        headless: true,
        viewport: { width: 1920, height: 1080 },
        screenshot: "only-on-failure",
    },
    webServer: {
        command: "npm run preview -- --port 3000",
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
});
