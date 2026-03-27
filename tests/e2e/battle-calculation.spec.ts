import { test, expect, Page } from "@playwright/test";

// Selectors from common_selectors.resource
const selectors = {
    attackersBattleground:
        "div.containers > div > div.MuiBox-root.css-top6dd > div:nth-child(1)",
    defendersBattleground:
        "div.containers > div > div.MuiBox-root.css-top6dd > div:nth-child(2)",
    attackersSelectionGoNext:
        "div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(1) > span > div.MuiBox-root.css-gg4vpm > button:nth-child(3)",
    attackersSelectionGoPrevious:
        "div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(1) > span > div.MuiBox-root.css-gg4vpm > button:nth-child(1)",
    attackersSelection:
        "div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(1)",
    defendersSelection:
        "div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(2)",
    removeFirstAttacker:
        "div.containers > div > div.MuiBox-root.css-top6dd > div:nth-child(1) > div:nth-child(1) > div > div > button",
    changeOrderCheckbox:
        "div.containers > div > div.MuiBox-root.css-hr1yj1 > label",
    firstAttackerMoveDown:
        "div.containers > div > div.MuiBox-root.css-top6dd > div:nth-child(1) > div:nth-child(1) > div > button:nth-child(9)",
    secondAttackerSplsh:
        "xpath=/html/body/div/div[2]/div/div[1]/div[1]/div[2]/div/button[4]",
};

// Helper functions
async function addAttacker(page: Page, unitType: string) {
    await page.click(`[data-testid="attacker-${unitType}"]`);
}

async function addDefender(page: Page, unitType: string) {
    await page.click(`[data-testid="defender-${unitType}"]`);
}

async function expectDefenderHealth(page: Page, expected: number, index = 0) {
    await expect(
        page.locator(`[data-testid="defenders-${index}-health-after"]`)
    ).toHaveText(String(expected));
}

async function expectAttackerHealth(page: Page, expected: number, index = 0) {
    await expect(
        page.locator(`[data-testid="attackers-${index}-health-after"]`)
    ).toHaveText(String(expected));
}

async function goToNextAttackersPage(page: Page) {
    await page.click(selectors.attackersSelectionGoNext);
    await page.locator(selectors.attackersSelection).waitFor({ state: "visible" });
}

async function goToPreviousAttackersPage(page: Page) {
    await page.click(selectors.attackersSelectionGoPrevious);
    await page.locator(selectors.attackersSelection).waitFor({ state: "visible" });
}

async function changeAttackerHealth(page: Page, index: number, health: number) {
    const selector = `[id="Attackers${index}HitpointField"]`;
    await page.fill(selector, String(health));
    await page.press(selector, "Enter");
    await page.locator(selectors.attackersBattleground).waitFor({ state: "visible" });
}

async function changeDefenderHealth(page: Page, index: number, health: number) {
    const selector = `[id="Defenders${index}HitpointField"]`;
    await page.fill(selector, String(health));
    await page.press(selector, "Enter");
    await page.locator(selectors.defendersBattleground).waitFor({ state: "visible" });
}

async function setGameVersion(page: Page, version: string) {
    await page.click('[id="version-select"]');
    await page.click(`[data-value="${version}"]`);
    await page.locator(selectors.defendersSelection).waitFor({ state: "visible" });
}

async function toggleDefenderDefence(page: Page) {
    await page
        .locator(selectors.defendersBattleground)
        .first()
        .locator('text="def"')
        .click();
    await page
        .locator(selectors.defendersBattleground)
        .waitFor({ state: "visible" });
}

async function toggleDefenderPoison(page: Page) {
    await page
        .locator(selectors.defendersBattleground)
        .first()
        .locator('text="pois"')
        .click();
    await page
        .locator(selectors.defendersBattleground)
        .waitFor({ state: "visible" });
}

async function toggleDefenderVeteran(page: Page) {
    await page
        .locator(selectors.defendersBattleground)
        .first()
        .locator('text="vet"')
        .click();
    await page
        .locator(selectors.defendersBattleground)
        .waitFor({ state: "visible" });
}

test.describe("Battle Calculation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.waitForSelector("body", { state: "visible" });
    });

    test("should display attackers selection", async ({ page }) => {
        await addAttacker(page, "warrior");
        await expect(
            page.locator(selectors.attackersBattleground)
        ).toBeVisible();
    });

    test("should display defenders selection", async ({ page }) => {
        await addDefender(page, "warrior");
        await expect(
            page.locator(selectors.defendersBattleground)
        ).toBeVisible();
    });

    test("should calculate damage between units", async ({ page }) => {
        await addAttacker(page, "warrior");
        await addDefender(page, "warrior");
        await expectDefenderHealth(page,5);
    });

    test("should calculate damage between multiple units", async ({ page }) => {
        await addAttacker(page, "warrior");
        await addAttacker(page, "archer");
        await addDefender(page, "warrior");
        await expectDefenderHealth(page,-1);
    });

    test("should calculate damage between multiple units with poison", async ({
        page,
    }) => {
        await goToNextAttackersPage(page);
        await goToNextAttackersPage(page);
        await goToNextAttackersPage(page);
        await addAttacker(page, "phychi");
        await addAttacker(page, "phychi");
        await goToPreviousAttackersPage(page);
        await goToPreviousAttackersPage(page);
        await goToPreviousAttackersPage(page);
        await addAttacker(page, "warrior");
        await addDefender(page, "giant");
        await expectDefenderHealth(page,34);
    });

    test("should calculate damage between units with no full health", async ({
        page,
    }) => {
        await addAttacker(page, "warrior");
        await addDefender(page, "warrior");
        await changeAttackerHealth(page, 0, 7);
        await changeDefenderHealth(page, 0, 6);
        await expectAttackerHealth(page,3);
        await expectDefenderHealth(page,1);
    });

    test("should calculate damage between units when changing order", async ({
        page,
    }) => {
        await addAttacker(page, "warrior");
        await addAttacker(page, "catapult");
        await addDefender(page, "giant");
        await page.click(selectors.changeOrderCheckbox);
        await page
            .locator(selectors.attackersSelection)
            .waitFor({ state: "visible" });
        await page.click(selectors.firstAttackerMoveDown);
        await page
            .locator(selectors.attackersBattleground)
            .waitFor({ state: "visible" });
        await expectDefenderHealth(page,27);
    });

    test("should calculate damage between units when removing units", async ({
        page,
    }) => {
        await addAttacker(page, "warrior");
        await addAttacker(page, "swordsman");
        await addDefender(page, "giant");
        await page.click(selectors.removeFirstAttacker);
        await page
            .locator(selectors.attackersBattleground)
            .waitFor({ state: "visible" });
        await expectDefenderHealth(page,34);
    });

    test("should calculate damage with splash to halves", async ({ page }) => {
        await addAttacker(page, "defender");
        await goToNextAttackersPage(page);
        await addAttacker(page, "bomber");
        await addDefender(page, "knight");
        await page.locator(selectors.secondAttackerSplsh).click();
        await page
            .locator(selectors.attackersBattleground)
            .waitFor({ state: "visible" });
        await expectDefenderHealth(page,2.5);
    });

    test("should calculate damage with correct rounding", async ({ page }) => {
        await addDefender(page, "swordsman");
        await toggleDefenderVeteran(page);
        await changeDefenderHealth(page, 0, 16);
        await goToNextAttackersPage(page);
        await goToNextAttackersPage(page);
        await goToNextAttackersPage(page);
        await addAttacker(page, "hexapod");
        await expectDefenderHealth(page,8);
    });

    test("should calculate damage with DEF and POIS in version 115", async ({
        page,
    }) => {
        await setGameVersion(page, "115");
        await addAttacker(page, "warrior");
        await addDefender(page, "warrior");
        await toggleDefenderDefence(page);
        await expectDefenderHealth(page,6);
        await toggleDefenderPoison(page);
        await expectDefenderHealth(page,5);
        await toggleDefenderDefence(page);
        await expectDefenderHealth(page,4);
    });

    test("should calculate damage with DEF and POIS in version 108", async ({
        page,
    }) => {
        await setGameVersion(page, "108");
        await addAttacker(page, "warrior");
        await addDefender(page, "warrior");
        await toggleDefenderDefence(page);
        await expectDefenderHealth(page,6);
        await toggleDefenderPoison(page);
        await expectDefenderHealth(page,5);
        await toggleDefenderDefence(page);
        await expectDefenderHealth(page,6);
    });
});
