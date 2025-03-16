import { useState, useEffect, useCallback } from "react";
import AttackersSelection from "./attackersSelection";
import DefendersSelection from "./defendersSelection";
import SoldierUnitAsRender from "./soldierUnitAsRender";
import v108Config from "../config/v108.json";
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
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { SoldierUnit } from "../types/SoldierUnit";
import { UnitConfig, VersionConfig } from "../types/VersionConfig";

const analyticsLogEvent = isLocal ? analytics.logEvent : logEvent;

const BattleGroundDetails = () => {
    const [versionConfig, setVersionConfig] =
        useState<VersionConfig>(v108Config);

    const [soldierUnitsAttackersAsRender, setSoldierUnitsAttackersAsRender] =
        useState<SoldierUnit[]>([]);
    const [soldierUnitsDefendersAsRender, setSoldierUnitsDefendersAsRender] =
        useState<SoldierUnit[]>([]);
    // const [defIdxArray, setDefIdxArray] = useState<number[]>([]);
    // const [attIdxArray, setAttIdxArray] = useState<number[]>([]);
    const [checkedPosition, setCheckedPosition] = useState(false);

    const handleGameVersionChange = (event: SelectChangeEvent) => {
        const version = event.target.value;

        // TODO improve method of switching between versions.
        switch (version) {
            case "108":
                setVersionConfig(v108Config);
        }
    };

    const handleChangeCheckbox = (): void => {
        setCheckedPosition((prev) => !prev);
        analyticsLogEvent(analytics, "pc_checkbox_toggled");
    };

    const getUnitConfig = useCallback((typeUnit: string): UnitConfig => {
        const unit = versionConfig.unitStats.find(
            (unit) => unit.name === typeUnit
        );

        if (!unit) {
            throw new Error("Unit type not found.");
        }

        return unit;
    }, []);

    const handleAddAttacker = (typeUnit: string): void => {
        const newId = soldierUnitsAttackersAsRender.length;

        try {
            const unitConfig = getUnitConfig(typeUnit);

            const newUnit: SoldierUnit = {
                id: newId,
                config: unitConfig,
                typeUnit,
                team: "Attackers",
                healthBefore: unitConfig.maxHealth,
                healthAfter: unitConfig.maxHealth,
                veteran: false,
                defenceBonus: false,
                wallBonus: false,
                safeBonus: unitConfig.skills.includes("surprise"),
                poisonedBonus: false,
                becamePoisonedBonus: false,
                boostedBonus: false,
                shipUnit: unitConfig.skills.includes("variableHp"),
                splashDamage: false,
                explodeDamage: false,
            };
            setSoldierUnitsAttackersAsRender((prev) => [...prev, newUnit]);
            // setAttIdxArray((prev) => [...prev, newId]);
            analyticsLogEvent(analytics, "pc_attacker_added_" + typeUnit);
        } catch (e: any) {
            alert("Error: failed to add attacker.");
        }
    };

    const handleAddDefender = (typeUnit: string): void => {
        const newId = soldierUnitsDefendersAsRender.length;

        try {
            const unitConfig = getUnitConfig(typeUnit);

            const newUnit: SoldierUnit = {
                id: newId,
                config: unitConfig,
                typeUnit,
                team: "Defenders",
                healthBefore: unitConfig.maxHealth,
                healthAfter: unitConfig.maxHealth,
                veteran: false,
                defenceBonus: false,
                wallBonus: false,
                safeBonus: false,
                poisonedBonus: false,
                becamePoisonedBonus: false,
                boostedBonus: false,
                shipUnit: unitConfig.skills.includes("variableHp"),
                splashDamage: false,
                explodeDamage: false,
            };
            setSoldierUnitsDefendersAsRender((prev) => [...prev, newUnit]);
            // setDefIdxArray((prev) => [...prev, newId]);
            analyticsLogEvent(analytics, "pc_defender_added_" + typeUnit);
        } catch (e) {
            alert("Error: failed to add defender.");
        }
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
                    return arr;
                });
            } else {
                setSoldierUnitsDefendersAsRender((prev) => {
                    const idx = prev.findIndex((u) => u.id === id);
                    if (idx <= 0) return prev;
                    const arr = [...prev];
                    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
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
                    return arr;
                });
            } else {
                setSoldierUnitsDefendersAsRender((prev) => {
                    const idx = prev.findIndex((u) => u.id === id);
                    if (idx === prev.length - 1 || idx < 0) return prev;
                    const arr = [...prev];
                    [arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]];
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
            // setAttIdxArray((prev) =>
            //     prev.filter((x) => x !== id).map((_, i) => i)
            // );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.filter((u) => u.id !== id).map((u, i) => ({ ...u, id: i }))
            );
            // setDefIdxArray((prev) =>
            //     prev.filter((x) => x !== id).map((_, i) => i)
            // );
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
                            ? u.config.maxHealth
                            : u.config.maxHealth + 5;
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
                            ? u.config.maxHealth
                            : u.config.maxHealth + 5;
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
                        const maxHealth =
                            u.config.maxHealth + 5 > 35
                                ? 10
                                : u.config.maxHealth + 5;
                        return {
                            ...u,
                            healthMax: maxHealth,
                            healthBefore: maxHealth,
                        };
                    }
                    return u;
                })
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        const maxHealth =
                            u.config.maxHealth + 5 > 35
                                ? 10
                                : u.config.maxHealth + 5;
                        return {
                            ...u,
                            healthMax: maxHealth,
                            healthBefore: maxHealth,
                        };
                    }
                    return u;
                })
            );
        }
        analyticsLogEvent(analytics, "pc_ship_mx_" + team + "_" + typeUnit);
    };

    const healthAfterCalculation = useCallback(() => {
        console.log("Charge!");
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

            const attackForce = parseFloat(
                (
                    ((attacker.config.attack + 0.5 * boostedBonusMultiplier) *
                        attacker.healthBefore) /
                    attacker.config.maxHealth
                ).toFixed(10)
            );

            const defenceForce = parseFloat(
                (
                    ((defender.config.defence *
                        (defender.healthBefore - totalAttackResult)) /
                        defender.config.maxHealth) *
                    wallBonusMultiplier *
                    defenceBonusMultiplier *
                    poisonedBonusMultiplier
                ).toFixed(10)
            );

            const totalDamage = attackForce + defenceForce;

            let attackResult = Math.round(
                parseFloat(
                    (
                        (attackForce / totalDamage) *
                        (attacker.config.attack +
                            0.5 * boostedBonusMultiplier) *
                        4.5
                    ).toFixed(10)
                )
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

            console.log("This is attackForce:" + attackForce);
            console.log("This is defenceForce:" + defenceForce);
            console.log("This is totalDamage:" + totalDamage);
            console.log("This is attackResult:" + attackResult);

            totalAttackResult += attackResult;
            defender.healthAfter = defender.healthBefore - totalAttackResult;

            if (defender.healthAfter > 0) {
                const defenceResult = Math.round(
                    parseFloat(
                        (
                            (defenceForce / totalDamage) *
                            defender.config.defence *
                            4.5
                        ).toFixed(10)
                    )
                );
                console.log("This is defenceResult:" + defenceResult);
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

        console.log("attList:");
        console.log(attList);
        console.log("defList:");
        console.log(defList);

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
                    {soldierUnitsAttackersAsRender.map((soldierUnitAtt) => (
                        <CardWithShadow
                            key={`attacker-${soldierUnitAtt.id}-${soldierUnitAtt.typeUnit}`}
                        >
                            <SoldierUnitAsRender
                                key={`attacker-unit-${soldierUnitAtt.id}-${soldierUnitAtt.typeUnit}`}
                                id={soldierUnitAtt.id}
                                OnDelete={handleDelete}
                                OnUpdateHitpoints={handleUpdateHitpoints}
                                OnIncreaseHitpoints={handleIncreaseHitpoints}
                                OnDecreaseHitpoints={handleDecreaseHitpoints}
                                typeUnit={soldierUnitAtt.typeUnit}
                                team={soldierUnitAtt.team}
                                healthMax={soldierUnitAtt.config.maxHealth}
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
                    {soldierUnitsDefendersAsRender.map((soldierUnitDef) => (
                        <CardWithShadow
                            key={`defender-${soldierUnitDef.id}-${soldierUnitDef.typeUnit}`}
                        >
                            <SoldierUnitAsRender
                                key={`defender-unit-${soldierUnitDef.id}-${soldierUnitDef.typeUnit}`}
                                id={soldierUnitDef.id}
                                OnDelete={handleDelete}
                                OnUpdateHitpoints={handleUpdateHitpoints}
                                OnIncreaseHitpoints={handleIncreaseHitpoints}
                                OnDecreaseHitpoints={handleDecreaseHitpoints}
                                typeUnit={soldierUnitDef.typeUnit}
                                team={soldierUnitDef.team}
                                healthMax={soldierUnitDef.config.maxHealth}
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
                <AttackersSelection
                    onAddAttacker={handleAddAttacker}
                    pageIndex={0}
                />
                <DefendersSelection
                    onAddDefender={handleAddDefender}
                    pageIndex={0}
                />
            </Box>

            <CardWithShadow sx={{ p: "3px 2%", width: "100%" }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        typography: "body2",
                    }}
                >
                    <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
                        <InputLabel id="version-select-label">
                            Game version
                        </InputLabel>
                        <Select
                            labelId="version-select-label"
                            id="version-select"
                            value={versionConfig.version}
                            label="Game version"
                            onChange={handleGameVersionChange}
                        >
                            <MenuItem value={108}>
                                108 - The Forgotten + Aquarion Rework Patch
                            </MenuItem>
                            <MenuItem value={105}>
                                105 - Aquarion Rework
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <span>Build version: 2.11.1.13205</span>
                </Box>
            </CardWithShadow>
        </Box>
    );
};

export default BattleGroundDetails;
