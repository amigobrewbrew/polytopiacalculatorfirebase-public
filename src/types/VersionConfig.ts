import { UnitConfig } from "./SoldierUnit";

export type VersionConfig = {
    version: string;
    buildVersion: string;
    title: string;
    poisonScheme: PoisonScheme;
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
export type PoisonScheme = typeof PoisonScheme[keyof typeof PoisonScheme];
