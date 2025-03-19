export type UnitConfig = {
    name: string;
    movementAbility: string;
    maxHealth: number;
    attack: number;
    defence: number;
    skills: string[];
};

export type VersionConfig = {
    version: string;
    buildVersion: string;
    title: string;
    unitStats: UnitConfig[];
};
