import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
    test("attacker archer selection should exist", async ({ page }) => {
        await page.goto("/");
        await expect(
            page.locator('[data-testid="attacker-archer"]')
        ).toBeVisible();
    });

    test("defender rider selection should exist", async ({ page }) => {
        await page.goto("/");
        await expect(
            page.locator('[data-testid="defender-rider"]')
        ).toBeVisible();
    });
});
