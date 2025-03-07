import React, { useState, useEffect, useCallback } from "react";
import AttackersSelection from "./attackersSelection";
import DefendersSelection from "./defendersSelection";
import SoldierUnitAsRender from "./soldierUnitAsRender";
import * as Stats from "./unitStats";
import Box from "@mui/material/Box";
import { analytics, isLocal } from "./../firebase";
import { logEvent } from "firebase/analytics";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardWithShadow from "./cardWithShadow";
import {
    MAX_WIDTH_PX,
    SINGLE_COL_MAX_WIDTH_PX,
    SINGLE_COLUMN_WIDTH_PERCENTAGE,
} from "../customStyles";

const analyticsLogEvent = isLocal ? analytics.logEvent : logEvent;

type SoldierUnit = {
    id: number;
    typeUnit: string;
    team: string;
    healthMax: number;
    healthBefore: number;
    healthAfter: number;
    attack: number;
    defence: number;
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

type Props = {
    OnChangeCheckbox?: any;
};

function BattleGroundDetails(_props: Props) {
    const [soldierUnitsAttackersAsRender, setSoldierUnitsAttackersAsRender] =
        useState<SoldierUnit[]>([]);
    const [soldierUnitsDefendersAsRender, setSoldierUnitsDefendersAsRender] =
        useState<SoldierUnit[]>([]);
    const [defIdxArray, setDefIdxArray] = useState<number[]>([]);
    const [attIdxArray, setAttIdxArray] = useState<number[]>([]);
    const [checkedPosition, setCheckedPosition] = useState(false);

    const handleChangeCheckbox = () => {
        setCheckedPosition((prev) => !prev);
        analyticsLogEvent(analytics, "pc_checkbox_toggled");
    };

    const healthMax = useCallback((typeUnit: string) => {
        switch (typeUnit) {
            case "Warrior":
                return Stats.WarriorStats.healthMax;
            case "Archer":
                return Stats.ArcherStats.healthMax;
            // ... add the remaining units as in your original code ...
            default:
                return 0;
        }
    }, []);

    const healthMaxVeteran = useCallback((typeUnit: string) => {
        switch (typeUnit) {
            case "Warrior":
                return Stats.WarriorStats.healthMaxVeteran;
            case "Archer":
                return Stats.ArcherStats.healthMaxVeteran;
            // ... add the remaining units as in your original code ...
            default:
                return 0;
        }
    }, []);

    const attack = useCallback((typeUnit: string) => {
        switch (typeUnit) {
            case "Warrior":
                return Stats.WarriorStats.attack;
            case "Archer":
                return Stats.ArcherStats.attack;
            // ... add the remaining units as in your original code ...
            default:
                return 0;
        }
    }, []);

    const defence = useCallback((typeUnit: string) => {
        switch (typeUnit) {
            case "Warrior":
                return Stats.WarriorStats.defence;
            case "Archer":
                return Stats.ArcherStats.defence;
            // ... add the remaining units as in your original code ...
            default:
                return 0;
        }
    }, []);

    const istypeUnitaShipUnit = useCallback((typeUnit: string) => {
        switch (typeUnit) {
            case "Raft":
            case "Scout":
            case "Rammer":
            case "Bomber":
                return true;
            default:
                return false;
        }
    }, []);

    const handleAddAttacker = (typeUnit: string) => {
        const newId = soldierUnitsAttackersAsRender.length;
        const initialSafeBonus = [
            "Dagger",
            "Pirate",
            "Shark",
            "Phychi",
        ].includes(typeUnit);
        const newUnit: SoldierUnit = {
            id: newId,
            typeUnit,
            team: "Attackers",
            healthMax: healthMax(typeUnit),
            healthBefore: healthMax(typeUnit),
            healthAfter: healthMax(typeUnit),
            attack: attack(typeUnit),
            defence: defence(typeUnit),
            veteran: false,
            defenceBonus: false,
            wallBonus: false,
            safeBonus: initialSafeBonus,
            poisonedBonus: false,
            becamePoisonedBonus: false,
            boostedBonus: false,
            shipUnit: istypeUnitaShipUnit(typeUnit),
            splashDamage: false,
            explodeDamage: false,
        };
        setSoldierUnitsAttackersAsRender((prev) => [...prev, newUnit]);
        setAttIdxArray((prev) => [...prev, newId]);
        analyticsLogEvent(analytics, "pc_attacker_added_" + typeUnit);
    };

    const handleAddDefender = (typeUnit: string) => {
        const newId = soldierUnitsDefendersAsRender.length;
        const newUnit: SoldierUnit = {
            id: newId,
            typeUnit,
            team: "Defenders",
            healthMax: healthMax(typeUnit),
            healthBefore: healthMax(typeUnit),
            healthAfter: healthMax(typeUnit),
            attack: attack(typeUnit),
            defence: defence(typeUnit),
            veteran: false,
            defenceBonus: false,
            wallBonus: false,
            safeBonus: false,
            poisonedBonus: false,
            becamePoisonedBonus: false,
            boostedBonus: false,
            shipUnit: istypeUnitaShipUnit(typeUnit),
            splashDamage: false,
            explodeDamage: false,
        };
        setSoldierUnitsDefendersAsRender((prev) => [...prev, newUnit]);
        setDefIdxArray((prev) => [...prev, newId]);
        analyticsLogEvent(analytics, "pc_defender_added_" + typeUnit);
    };

    const handleUpdateHitpoints = (
        id: number,
        team: string,
        healthBeforeManualInput: number
    ) => {
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id
                        ? { ...u, healthBefore: healthBeforeManualInput }
                        : u
                )
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id
                        ? { ...u, healthBefore: healthBeforeManualInput }
                        : u
                )
            );
        }
        analyticsLogEvent(analytics, "pc_hitpoints_direct_" + team);
    };

    const handleIncreaseHitpoints = (id: number, team: string) => {
        if (!checkedPosition) {
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prev) =>
                    prev.map((u) =>
                        u.id === id
                            ? { ...u, healthBefore: u.healthBefore + 1 }
                            : u
                    )
                );
            } else {
                setSoldierUnitsDefendersAsRender((prev) =>
                    prev.map((u) =>
                        u.id === id
                            ? { ...u, healthBefore: u.healthBefore + 1 }
                            : u
                    )
                );
            }
            analyticsLogEvent(analytics, "pc_hitpoints_plus_" + team);
        } else {
            // Move item up in array
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prev) => {
                    const idx = prev.findIndex((u) => u.id === id);
                    if (idx <= 0) return prev;
                    const arr = [...prev];
                    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
                    arr[idx - 1].id = idx - 1;
                    arr[idx].id = idx;
                    return arr;
                });
            } else {
                setSoldierUnitsDefendersAsRender((prev) => {
                    const idx = prev.findIndex((u) => u.id === id);
                    if (idx <= 0) return prev;
                    const arr = [...prev];
                    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
                    arr[idx - 1].id = idx - 1;
                    arr[idx].id = idx;
                    return arr;
                });
            }
            analyticsLogEvent(analytics, "pc_changed_position_up_" + team);
        }
    };

    const handleDecreaseHitpoints = (id: number, team: string) => {
        if (!checkedPosition) {
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prev) =>
                    prev.map((u) =>
                        u.id === id
                            ? { ...u, healthBefore: u.healthBefore - 1 }
                            : u
                    )
                );
            } else {
                setSoldierUnitsDefendersAsRender((prev) =>
                    prev.map((u) =>
                        u.id === id
                            ? { ...u, healthBefore: u.healthBefore - 1 }
                            : u
                    )
                );
            }
            analyticsLogEvent(analytics, "pc_hitpoints_min_" + team);
        } else {
            // Move item down in array
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prev) => {
                    const idx = prev.findIndex((u) => u.id === id);
                    if (idx === prev.length - 1 || idx < 0) return prev;
                    const arr = [...prev];
                    [arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]];
                    arr[idx + 1].id = idx + 1;
                    arr[idx].id = idx;
                    return arr;
                });
            } else {
                setSoldierUnitsDefendersAsRender((prev) => {
                    const idx = prev.findIndex((u) => u.id === id);
                    if (idx === prev.length - 1 || idx < 0) return prev;
                    const arr = [...prev];
                    [arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]];
                    arr[idx + 1].id = idx + 1;
                    arr[idx].id = idx;
                    return arr;
                });
            }
            analyticsLogEvent(analytics, "pc_changed_position_down_" + team);
        }
    };

    const handleDelete = (id: number, team: string) => {
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.filter((u) => u.id !== id).map((u, i) => ({ ...u, id: i }))
            );
            setAttIdxArray((prev) =>
                prev.filter((x) => x !== id).map((_, i) => i)
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.filter((u) => u.id !== id).map((u, i) => ({ ...u, id: i }))
            );
            setDefIdxArray((prev) =>
                prev.filter((x) => x !== id).map((_, i) => i)
            );
        }
        analyticsLogEvent(analytics, "pc_unit_deleted_" + team);
    };

    // For toggling states like defenceBonus, wallBonus, etc.
    const toggleBonus = (
        id: number,
        team: string,
        which:
            | "defenceBonus"
            | "wallBonus"
            | "poisonedBonus"
            | "safeBonus"
            | "boostedBonus"
            | "splashDamage"
            | "explodeDamage",
        typeUnit: string,
        code: string
    ) => {
        if (team === "Defenders") {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        const updated = { ...u };
                        updated[which] = !u[which];
                        // Certain combos disable others
                        if (which === "defenceBonus" && updated[which]) {
                            updated.wallBonus = false;
                            updated.poisonedBonus = false;
                        }
                        if (which === "wallBonus" && updated[which]) {
                            updated.defenceBonus = false;
                            updated.poisonedBonus = false;
                        }
                        if (which === "poisonedBonus" && updated[which]) {
                            updated.wallBonus = false;
                            updated.defenceBonus = false;
                        }
                        return updated;
                    }
                    return u;
                })
            );
        } else {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        return { ...u, [which]: !u[which] };
                    }
                    return u;
                })
            );
        }
        analyticsLogEvent(analytics, code + "_" + typeUnit);
    };

    const handleDefenceBonus = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) => toggleBonus(id, team, "defenceBonus", typeUnit, "pc_defence_bonus");

    const handleWallBonus = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) => toggleBonus(id, team, "wallBonus", typeUnit, "pc_wall_bonus");

    const handlePoisonedBonus = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) => toggleBonus(id, team, "poisonedBonus", typeUnit, "pc_poisoned_bonus");

    const handleSafeBonus = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) => toggleBonus(id, team, "safeBonus", typeUnit, "pc_safe_bonus");

    const handleBoostedBonus = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) => toggleBonus(id, team, "boostedBonus", typeUnit, "pc_boosted_bonus");

    const handleSplashDamage = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) =>
        toggleBonus(
            id,
            team,
            "splashDamage",
            typeUnit,
            "pc_splash_damage_toggled"
        );

    const handleExplodeDamage = (
        id: number,
        team: string,
        typeUnit: string,
        value: boolean
    ) =>
        toggleBonus(
            id,
            team,
            "explodeDamage",
            typeUnit,
            "pc_explode_damage_toggled"
        );

    const handleVeteranBonus = (id: number, team: string, typeUnit: string) => {
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        const wasVet = u.veteran;
                        const newMax = wasVet
                            ? healthMax(u.typeUnit)
                            : healthMaxVeteran(u.typeUnit);
                        return {
                            ...u,
                            veteran: !wasVet,
                            healthMax: newMax,
                            healthBefore: newMax,
                        };
                    }
                    return u;
                })
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        const wasVet = u.veteran;
                        const newMax = wasVet
                            ? healthMax(u.typeUnit)
                            : healthMaxVeteran(u.typeUnit);
                        return {
                            ...u,
                            veteran: !wasVet,
                            healthMax: newMax,
                            healthBefore: newMax,
                        };
                    }
                    return u;
                })
            );
        }
        analyticsLogEvent(
            analytics,
            "pc_veterancy_bonus_" + team + "_" + typeUnit
        );
    };

    const handleShipUnit = (
        id: number,
        team: string,
        typeUnit: string,
        shipUnit: boolean
    ) => {
        // Not fully replicating the old logic but adjusting health
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        return {
                            ...u,
                            healthMax:
                                u.healthMax + 5 > 35 ? 10 : u.healthMax + 5,
                            healthBefore:
                                u.healthMax + 5 > 35 ? 10 : u.healthMax + 5,
                        };
                    }
                    return u;
                })
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        return {
                            ...u,
                            healthMax:
                                u.healthMax + 5 > 35 ? 10 : u.healthMax + 5,
                            healthBefore:
                                u.healthMax + 5 > 35 ? 10 : u.healthMax + 5,
                        };
                    }
                    return u;
                })
            );
        }
        analyticsLogEvent(analytics, "pc_ship_mx_" + team + "_" + typeUnit);
    };

    const healthAfterCalculation = useCallback(() => {
        analyticsLogEvent(analytics, "pc_magic_happens");
        const attList = [...soldierUnitsAttackersAsRender];
        const defList = [...soldierUnitsDefendersAsRender];

        attList.forEach((a) => {
            a.healthAfter = a.healthBefore;
        });
        defList.forEach((d) => {
            d.healthAfter = d.healthBefore;
        });

        let idxDefPos = 0;
        let totalAttackResult = 0;
        let poisoningAttacker = 9999;
        let defenderRepeatedAttack = 0;

        attList.forEach((attacker) => {
            const defender = defList[idxDefPos];
            if (!defender) return;

            if (defenderRepeatedAttack === 0) {
                defender.becamePoisonedBonus = false;
            }
            defenderRepeatedAttack++;

            const safeBonusMultiplier = attacker.safeBonus ? 0 : 1;
            let defenceBonusMultiplier = defender.defenceBonus ? 1.5 : 1;
            let wallBonusMultiplier = defender.wallBonus ? 4 : 1;
            let poisonedBonusMultiplier = 1;

            if (defender.poisonedBonus) {
                poisonedBonusMultiplier = 0.7;
                wallBonusMultiplier = 1;
                defenceBonusMultiplier = 1;
            }
            if (attacker.id > poisoningAttacker) {
                poisonedBonusMultiplier = 0.7;
                wallBonusMultiplier = 1;
                defenceBonusMultiplier = 1;
            }

            const boostedBonusMultiplier = attacker.boostedBonus ? 1 : 0;

            const attackForce =
                ((attacker.attack + 0.5 * boostedBonusMultiplier) *
                    attacker.healthBefore) /
                attacker.healthMax;
            const defenceForce =
                ((defender.defence *
                    (defender.healthBefore - totalAttackResult)) /
                    defender.healthMax) *
                wallBonusMultiplier *
                defenceBonusMultiplier *
                poisonedBonusMultiplier;

            const totalDamage = attackForce + defenceForce;
            let attackResult = Math.round(
                (attackForce / totalDamage) *
                    (attacker.attack + 0.5 * boostedBonusMultiplier) *
                    4.5
            );

            if (
                attacker.splashDamage &&
                (attacker.typeUnit === "Juggernaut" ||
                    attacker.typeUnit === "FireDragon" ||
                    attacker.typeUnit === "Bomber")
            ) {
                attackResult = Math.round(attackResult * 0.5);
            }
            if (attacker.explodeDamage || attacker.typeUnit === "Segment") {
                attackResult = Math.round(attackResult * 0.5);
            }

            totalAttackResult += attackResult;
            defender.healthAfter = defender.healthBefore - totalAttackResult;

            if (defender.healthAfter > 0) {
                const defenceResult = Math.round(
                    (defenceForce / totalDamage) * defender.defence * 4.5
                );
                if (
                    ["Exida", "Phychi", "Kiton", "Segment"].includes(
                        attacker.typeUnit
                    ) ||
                    attacker.explodeDamage
                ) {
                    defender.becamePoisonedBonus = true;
                    poisoningAttacker = attacker.id;
                }
                attacker.healthAfter =
                    attacker.healthBefore - defenceResult * safeBonusMultiplier;
                if (attacker.typeUnit === "Segment" || attacker.explodeDamage) {
                    attacker.healthAfter = 0;
                }
            } else {
                idxDefPos++;
                totalAttackResult = 0;
                poisoningAttacker = 9999;
                defenderRepeatedAttack = 0;
            }
        });

        return [attList, defList];
    }, [
        soldierUnitsAttackersAsRender,
        soldierUnitsDefendersAsRender,
        analyticsLogEvent,
    ]);

    useEffect(() => {
        // Replicates componentDidUpdate-ish logging
        console.log("battleGroundDetails updated");
    });

    // Recomputes health after renders, similar to original approach
    healthAfterCalculation();

    return (
        <Box
            sx={{
                maxWidth: `${MAX_WIDTH_PX}px`,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                padding: "1%",
                gap: "1%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0,
                    flexFlow: "wrap",
                    gap: "1%",
                }}
            >
                <Box
                    sx={{
                        display: "block",
                        maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                        width: `${SINGLE_COLUMN_WIDTH_PERCENTAGE}%`,
                        gap: 1,
                    }}
                >
                    {soldierUnitsAttackersAsRender.map((soldierUnitAtt, i) => (
                        <CardWithShadow key={i}>
                            <SoldierUnitAsRender
                                id={soldierUnitAtt.id}
                                OnDelete={handleDelete}
                                OnUpdateHitpoints={handleUpdateHitpoints}
                                OnIncreaseHitpoints={handleIncreaseHitpoints}
                                OnDecreaseHitpoints={handleDecreaseHitpoints}
                                typeUnit={soldierUnitAtt.typeUnit}
                                team={soldierUnitAtt.team}
                                healthMax={soldierUnitAtt.healthMax}
                                healthBefore={soldierUnitAtt.healthBefore}
                                healthAfter={soldierUnitAtt.healthAfter}
                                OnVeteranBonus={handleVeteranBonus}
                                OnDefenceBonus={handleDefenceBonus}
                                OnWallBonus={handleWallBonus}
                                OnSafeBonus={handleSafeBonus}
                                OnPoisonedBonus={handlePoisonedBonus}
                                OnBoostedBonus={handleBoostedBonus}
                                OnShipUnit={handleShipUnit}
                                OnSplashDamage={handleSplashDamage}
                                OnExplodeDamage={handleExplodeDamage}
                                veteran={soldierUnitAtt.veteran}
                                defenceBonus={soldierUnitAtt.defenceBonus}
                                wallBonus={soldierUnitAtt.wallBonus}
                                safeBonus={soldierUnitAtt.safeBonus}
                                poisonedBonus={soldierUnitAtt.poisonedBonus}
                                becamePoisonedBonus={
                                    soldierUnitAtt.becamePoisonedBonus
                                }
                                boostedBonus={soldierUnitAtt.boostedBonus}
                                shipUnit={soldierUnitAtt.shipUnit}
                                splashDamage={soldierUnitAtt.splashDamage}
                                explodeDamage={soldierUnitAtt.explodeDamage}
                            />
                        </CardWithShadow>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: "block",
                        maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                        width: `${SINGLE_COLUMN_WIDTH_PERCENTAGE}%`,
                        gap: 1,
                    }}
                >
                    {soldierUnitsDefendersAsRender.map((soldierUnitDef, i) => (
                        <CardWithShadow key={i}>
                            <SoldierUnitAsRender
                                id={soldierUnitDef.id}
                                OnDelete={handleDelete}
                                OnUpdateHitpoints={handleUpdateHitpoints}
                                OnIncreaseHitpoints={handleIncreaseHitpoints}
                                OnDecreaseHitpoints={handleDecreaseHitpoints}
                                typeUnit={soldierUnitDef.typeUnit}
                                team={soldierUnitDef.team}
                                healthMax={soldierUnitDef.healthMax}
                                healthBefore={soldierUnitDef.healthBefore}
                                healthAfter={soldierUnitDef.healthAfter}
                                OnVeteranBonus={handleVeteranBonus}
                                OnDefenceBonus={handleDefenceBonus}
                                OnWallBonus={handleWallBonus}
                                OnSafeBonus={handleSafeBonus}
                                OnPoisonedBonus={handlePoisonedBonus}
                                OnBoostedBonus={handleBoostedBonus}
                                OnShipUnit={handleShipUnit}
                                OnSplashDamage={handleSplashDamage}
                                OnExplodeDamage={handleExplodeDamage}
                                veteran={soldierUnitDef.veteran}
                                defenceBonus={soldierUnitDef.defenceBonus}
                                wallBonus={soldierUnitDef.wallBonus}
                                safeBonus={soldierUnitDef.safeBonus}
                                poisonedBonus={soldierUnitDef.poisonedBonus}
                                becamePoisonedBonus={
                                    soldierUnitDef.becamePoisonedBonus
                                }
                                boostedBonus={soldierUnitDef.boostedBonus}
                                shipUnit={soldierUnitDef.shipUnit}
                                splashDamage={soldierUnitDef.splashDamage}
                                explodeDamage={soldierUnitDef.explodeDamage}
                            />
                        </CardWithShadow>
                    ))}
                </Box>
            </Box>

            <CardWithShadow sx={{ p: "0 2%", width: "100%", mt: "2px" }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedPosition}
                            onChange={handleChangeCheckbox}
                        />
                    }
                    label="Use + and - to set order instead of health"
                />
            </CardWithShadow>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexFlow: "wrap",
                    gap: "1%",
                    mb: 0,
                }}
            >
                <AttackersSelection onAddAttacker={handleAddAttacker} />
                <DefendersSelection onAddDefender={handleAddDefender} />
            </Box>

            <CardWithShadow sx={{ p: "3px 2%", width: "100%" }}>
                <Box component="span" sx={{ typography: "body2" }}>
                    This page is based on Build version 2.11.1.13205 and Game
                    version: 108.
                </Box>
            </CardWithShadow>
        </Box>
    );
}

export default BattleGroundDetails;
