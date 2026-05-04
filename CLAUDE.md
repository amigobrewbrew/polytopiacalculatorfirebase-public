# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` / `npm run start` — Vite dev server on http://localhost:3000.
- `npm run build` — production build to `dist/` (sourcemaps on).
- `npm run preview` — serves the built `dist/` (Playwright's `webServer` invokes this on port 3000).
- `npm run test` — runs unit tests then E2E. CI parity.
- `npm run test:unit` — Vitest only. Single test: `npx vitest run src/components/cardWithShadow.test.tsx` (or `npx vitest -t "test name"`).
- `npm run test:e2e` — Playwright. First-time setup: `npx playwright install --with-deps chromium`. Single spec: `npx playwright test tests/e2e/battle-calculation.spec.ts`. Playwright auto-builds via `npm run preview`, so run `npm run build` first if you've changed source.
- `npm run prettier` / `npm run prettier:check` — format / verify formatting.

Node ≥ 22.12 is required (`engines` in package.json).

## Architecture

This is a React 19 + TypeScript + Vite SPA that calculates Polytopia battle outcomes. There is no backend — Firebase is analytics-only and disabled locally.

### Damage calculation pipeline

The core domain logic lives in [src/utils/damageFormulae.ts](src/utils/damageFormulae.ts) (pure functions: `calculateAttackForce`, `calculateDefenceForce`, `calculateTotalDamage`, `calculateAttackResult`, `calculateAttackSplash`, `calculateDefenseResult`). These are orchestrated inside `healthAfterCalculation` in [src/components/battleGroundDetails.tsx](src/components/battleGroundDetails.tsx), which iterates attackers against the current defender, accumulating `totalAttackResult` and advancing `idxDefPos` once a defender's `healthAfter` drops to zero. Splash/explode/poison branches are selected based on unit `skills` and per-unit toggles (`splashDamage`, `explodeDamage`, `safeBonus`, etc.) — adjust the branch order carefully, the unit type `"Segment"` is special-cased alongside `explodeDamage`.

### Versioned game configs

Each Polytopia game version lives as JSON in [src/config/](src/config/) (e.g. `v115.json`). [src/utils/configLoader.ts](src/utils/configLoader.ts) eagerly imports them via `import.meta.glob('../config/*.json')` and keys them by the number in the filename. The `LATEST_VERSION` constant in [src/config/version.global.ts](src/config/version.global.ts) is the default when no `?version=` query param is set — bump it when adding a new config file. Each `VersionConfig` carries three version-gated enums in [src/types/VersionConfig.ts](src/types/VersionConfig.ts): `poisonScheme` (`OLD` = pre-v115 fixed 0.7 multiplier; `NEW` = halve existing defense bonus), `shamanBuffScheme`, and `splashScheme` (`HALF` = pre-v116 `attackResult / 2`; `FLOOR` = v116+ `Math.floor(attackResult / 2)`). All are read at calc time in `battleGroundDetails.tsx`, so adding a new scheme means adding an enum value AND a branch at the call site.

### State model

`BattleGroundDetails` owns two arrays of `SoldierUnit` ([src/types/SoldierUnit.ts](src/types/SoldierUnit.ts)) — `soldierUnitsAttackersAsRender` and `soldierUnitsDefendersAsRender`. The `id` field is the array index and is renumbered on delete. The "change order" checkbox repurposes the +/- hp buttons to swap adjacent array slots instead — this is why `handleIncreaseHitpoints`/`handleDecreaseHitpoints` branch on `checkedPosition`. URL `?version=` is the only persisted state (via `react-router-dom` `useSearchParams`); routes are `/`, `/help`, `/secretgame`, with a catch-all redirect to `/`.

### Firebase / env

[src/firebase.ts](src/firebase.ts) reads `VITE_IS_LOCAL` (defaults to `true` when undefined) and stubs `analytics.logEvent` to a console.log when local — so calls like `analyticsLogEvent(analytics, "pc_xxx")` are safe everywhere. Production reads the `VITE_FIREBASE_*` vars from `.env` (see `.env.example`). Firebase Hosting config is in [firebase.json](firebase.json) — SPA rewrites all routes to `index.html`, deploys from `dist/`.

### Tests

Unit tests are colocated (`*.test.tsx`) and run under jsdom with `@testing-library/react`; setup in [vitest.setup.ts](vitest.setup.ts). E2E specs live in [tests/e2e/](tests/e2e/) and rely on `data-testid` attributes (e.g. `attacker-Warrior`, `defenders-0-health-after`, `change-order-checkbox`). When changing UI, prefer adding/preserving `data-testid` over CSS-class selectors — the legacy MUI `css-*` selectors in the spec file are fragile and have caused breakage (see commit e79e506).
