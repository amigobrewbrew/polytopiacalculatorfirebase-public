
export type SoldierUnit = {
    id: number;
    config: UnitConfig;
    typeUnit: string; // TODO replace with unitConfig
    team: string;
    healthMax: number;
    healthBefore: number;
    healthAfter: number;
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

export type UnitConfig = {
    name: string;
    movementAbility: string;
    maxHealth: number;
    attack: number;
    defence: number;
    skills: string[];
};

