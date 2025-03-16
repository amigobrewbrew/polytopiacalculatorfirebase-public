import { UnitConfig } from "./VersionConfig";

export type SoldierUnit = {
    id: number;
    config: UnitConfig;
    typeUnit: string; // TODO replace with unitConfig
    team: string;
    healthMax: number;
    healthBefore: number;
    healthAfter: number;
    // attack: number; // TODO replace with unitConfig
    // defence: number; // TODO replace with unitConfig
    veteran: boolean;
    defenceBonus: boolean;
    wallBonus: boolean;
    safeBonus: boolean;
    poisonedBonus: boolean;
    becamePoisonedBonus: boolean;
    boostedBonus: boolean;
    shipUnit: boolean;
    splashDamage: boolean;
    explodeDamage: boolean;
};
