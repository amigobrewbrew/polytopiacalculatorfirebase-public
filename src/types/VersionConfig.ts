import { UnitConfig } from "./SoldierUnit";

export type VersionConfig = {
    version: string;
    buildVersion: string;
    title: string;
    poisonScheme: PoisonScheme;
    shamanBuffScheme: ShamanBuffScheme;
    unitStats: UnitConfig[];
};

/**
 * Enum for poison schemes, depending on version.
 *
 * @remark If new poison schemes are released, we should refactor this enum.
 */
export const PoisonScheme = {
    /**
     * v115+ poison scheme: applies 50% defense, but other defense effects (e.g. mountains) unaffected.
     */
    NEW: "NEW",
    /**
     * Pre-v115 poison scheme: sets defense to 70%, regardless of other defense effects.
     */
    OLD: "OLD",
} as const;
export type PoisonScheme = (typeof PoisonScheme)[keyof typeof PoisonScheme];

/**
 * Enum for the "buff" that shamans give to neighbouring units, depending on version.
 */
export const ShamanBuffScheme = {
    /**
     * v115+ scheme: buffs movement but not damage, so has no impact on the calculator.
     */
    SWARM: "SWARM",

    /**
     * Pre-v115 scheme: buffs movement and damage, so should enable the BST button on units.
     */
    BOOST: "BOOST",
} as const;
export type ShamanBuffScheme =
    (typeof ShamanBuffScheme)[keyof typeof ShamanBuffScheme];
