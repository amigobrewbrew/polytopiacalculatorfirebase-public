import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
// removed Checkbox and FormControlLabel (order toggle no longer used)
import { logEvent } from "firebase/analytics";
import { useCallback, useEffect, useState } from "react";
import {
    MAX_WIDTH_PX,
    SINGLE_COL_MAX_WIDTH_PX,
    SINGLE_COLUMN_WIDTH_PERCENTAGE,
} from "../customStyles";
import { SoldierUnit } from "../types/SoldierUnit";
import { loadAllConfigs } from "../utils/configLoader";
import { PoisonScheme, VersionConfig } from "../types/VersionConfig";
import { UnitConfig } from "../types/SoldierUnit";
import { useSearchParams } from "react-router-dom";
import { LATEST_VERSION } from "../config/version.global";
import {
    calculateAttackForce,
    calculateAttackResult,
    calculateAttackSplash,
    calculateDefenceForce,
    calculateDefenseResult,
    calculateTotalDamage,
} from "../utils/damageFormulae";
import { analytics, isLocal } from "./../firebase";
import AttackersSelection from "./attackersSelection";
import CardWithShadow from "./cardWithShadow";
import DefendersSelection from "./defendersSelection";
import SoldierUnitAsRender from "./soldierUnitAsRender";

const analyticsLogEvent = isLocal ? analytics.logEvent : logEvent;

const BattleGroundDetails = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [versionConfigs, setVersionConfigs] = useState<
        Record<string, VersionConfig>
    >({});
    const [versionConfig, setVersionConfig] = useState<VersionConfig>();
    const [isLoading, setIsLoading] = useState(true);

    const [soldierUnitsAttackersAsRender, setSoldierUnitsAttackersAsRender] =
        useState<SoldierUnit[]>([]);
    const [soldierUnitsDefendersAsRender, setSoldierUnitsDefendersAsRender] =
        useState<SoldierUnit[]>([]);
    // const [defIdxArray, setDefIdxArray] = useState<number[]>([]);
    // const [attIdxArray, setAttIdxArray] = useState<number[]>([]);
    const [dragContext, setDragContext] = useState<{
        team: "Attackers" | "Defenders";
        index: number;
    } | null>(null);
    const [isSwappingColumns, setIsSwappingColumns] = useState<
        null | "toAttackers" | "toDefenders"
    >(null);
    const [hoverTarget, setHoverTarget] = useState<{
        team: "Attackers" | "Defenders";
        index: number;
    } | null>(null);
    const [dragPreview, setDragPreview] = useState<{
        team: "Attackers" | "Defenders";
        index: number;
        clientX: number;
        clientY: number;
        clickOffsetX: number;
        clickOffsetY: number;
        width: number;
        height: number;
    } | null>(null);

    useEffect(() => {
        loadAllConfigs().then((configs) => {
            setVersionConfigs(configs);
            setVersionConfig(
                configs[searchParams.get("version") ?? LATEST_VERSION]
            );
            setIsLoading(false);
        });
    }, []);

    const getUnitConfig = useCallback(
        (typeUnit: string): UnitConfig => {
            if (!versionConfig) {
                throw new Error("Version config not loaded yet.");
            }

            const unit = versionConfig.unitStats.find(
                (unit) => unit.name === typeUnit
            );

            if (!unit) {
                throw new Error("Unit type not found.");
            }

            return unit;
        },
        [versionConfig]
    );

    const handleGameVersionChange = (event: SelectChangeEvent) => {
        setSoldierUnitsAttackersAsRender([]);
        setSoldierUnitsDefendersAsRender([]);

        const version = event.target.value;
        analyticsLogEvent(analytics, "pc_version_changed_" + version);
        setSearchParams({ version: version });
        setVersionConfig(versionConfigs[version]);
    };

    const handleDragStart = (
        e: React.DragEvent,
        team: "Attackers" | "Defenders",
        index: number
    ) => {
        setDragContext({ team, index });
        e.dataTransfer.effectAllowed = "move";
        const target = e.currentTarget as HTMLElement;
        target.classList.add("dnd-card", "dragging");
        // Create invisible drag image and render our own preview
        const rect = target.getBoundingClientRect();
        const clickOffsetX = e.clientX - rect.left;
        const clickOffsetY = e.clientY - rect.top;
        const ghost = document.createElement("div");
        ghost.style.width = `${rect.width}px`;
        ghost.style.height = `${rect.height}px`;
        ghost.style.opacity = "0";
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, clickOffsetX, clickOffsetY);
        setTimeout(() => document.body.removeChild(ghost), 0);
        setDragPreview({
            team,
            index,
            clientX: e.clientX,
            clientY: e.clientY,
            clickOffsetX,
            clickOffsetY,
            width: rect.width,
            height: rect.height,
        });
    };

    const handleDrag = (e: React.DragEvent) => {
        if (!dragContext || !dragPreview) return;
        setDragPreview((prev) =>
            prev
                ? {
                      ...prev,
                      clientX: e.clientX,
                      clientY: e.clientY,
                  }
                : prev
        );
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (dragContext) {
            setDragPreview((prev) =>
                prev
                    ? { ...prev, clientX: e.clientX, clientY: e.clientY }
                    : prev
            );
        }
    };

    const handleDragEnd = (e: React.DragEvent) => {
        const target = e.currentTarget as HTMLElement;
        target.classList.remove("dragging");
        setIsSwappingColumns(null);
        setHoverTarget(null);
        setDragPreview(null);
        setDragContext(null);
    };

    const moveWithin = (
        list: SoldierUnit[],
        fromIdx: number,
        toIdx: number
    ): SoldierUnit[] => {
        const newList = [...list];
        const [moved] = newList.splice(fromIdx, 1);
        newList.splice(toIdx, 0, moved);
        return newList.map((u, i) => ({ ...u, id: i }));
    };

    const handleDrop = (
        e: React.DragEvent,
        targetTeam: "Attackers" | "Defenders",
        targetIndex: number
    ) => {
        e.preventDefault();
        if (!dragContext) return;

        const { team: sourceTeam, index: sourceIndex } = dragContext;
        setDragContext(null);
        setHoverTarget(null);
        setDragPreview(null);

        if (sourceTeam === targetTeam) {
            if (targetTeam === "Attackers") {
                setSoldierUnitsAttackersAsRender((prev) =>
                    moveWithin(prev, sourceIndex, targetIndex)
                );
            } else {
                setSoldierUnitsDefendersAsRender((prev) =>
                    moveWithin(prev, sourceIndex, targetIndex)
                );
            }
            return;
        }

        // Animate entire column swap regardless of index: swap all attackers <-> defenders
        setIsSwappingColumns(
            targetTeam === "Attackers" ? "toAttackers" : "toDefenders"
        );
        setTimeout(() => {
            setSoldierUnitsAttackersAsRender((prevA) =>
                soldierUnitsDefendersAsRender.map((u, i) => ({
                    ...u,
                    id: i,
                    team: "Attackers",
                }))
            );
            setSoldierUnitsDefendersAsRender((prevD) =>
                soldierUnitsAttackersAsRender.map((u, i) => ({
                    ...u,
                    id: i,
                    team: "Defenders",
                }))
            );
            setTimeout(() => setIsSwappingColumns(null), 180);
        }, 80);
    };

    const handleAddAttacker = (typeUnit: string): void => {
        const newId = soldierUnitsAttackersAsRender.length;

        try {
            const unitConfig = getUnitConfig(typeUnit);

            const newUnit: SoldierUnit = {
                id: newId,
                config: unitConfig,
                typeUnit,
                team: "Attackers",
                healthMax: unitConfig.maxHealth,
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
                healthMax: unitConfig.maxHealth,
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
        // This is to fix some input glitch where +/-1 HP is done while direct input is active
        const healthBeforeManualInputNumeric =
            parseFloat(healthBeforeManualInput.toString()) || 0;
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id
                        ? { ...u, healthBefore: healthBeforeManualInputNumeric }
                        : u
                )
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id
                        ? { ...u, healthBefore: healthBeforeManualInputNumeric }
                        : u
                )
            );
        }
        analyticsLogEvent(analytics, "pc_hitpoints_direct_" + team);
    };

    const handleIncreaseHitpoints = (id: number, team: string) => {
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id ? { ...u, healthBefore: u.healthBefore + 1 } : u
                )
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id ? { ...u, healthBefore: u.healthBefore + 1 } : u
                )
            );
        }
        analyticsLogEvent(analytics, "pc_hitpoints_plus_" + team);
    };

    const handleDecreaseHitpoints = (id: number, team: string) => {
        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id ? { ...u, healthBefore: u.healthBefore - 1 } : u
                )
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) =>
                    u.id === id ? { ...u, healthBefore: u.healthBefore - 1 } : u
                )
            );
        }
        analyticsLogEvent(analytics, "pc_hitpoints_min_" + team);
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
                        if (versionConfig?.poisonScheme === PoisonScheme.OLD) {
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
                        } else {
                            // Poisoned bonus doesn't affect other bonuses
                            if (which === "defenceBonus" && updated[which]) {
                                updated.wallBonus = false;
                                // updated.poisonedBonus = false;
                            }
                            if (which === "wallBonus" && updated[which]) {
                                updated.defenceBonus = false;
                                // updated.poisonedBonus = false;
                            }
                            if (which === "poisonedBonus" && updated[which]) {
                                // updated.wallBonus = false;
                                // updated.defenceBonus = false;
                            }
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
                        return { ...u, [which]: !u[which] } as SoldierUnit;
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
                        } as SoldierUnit;
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
                        } as SoldierUnit;
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
                            u.healthMax + 5 > 35 ? 10 : u.healthMax + 5;
                        return {
                            ...u,
                            healthMax: maxHealth,
                            healthBefore: maxHealth,
                        } as SoldierUnit;
                    }
                    return u;
                })
            );
        } else {
            setSoldierUnitsDefendersAsRender((prev) =>
                prev.map((u) => {
                    if (u.id === id) {
                        const maxHealth =
                            u.healthMax + 5 > 35 ? 10 : u.healthMax + 5;
                        return {
                            ...u,
                            healthMax: maxHealth,
                            healthBefore: maxHealth,
                        } as SoldierUnit;
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

            const attackerAttack =
                attacker.config.attack + (attacker.boostedBonus ? 0.5 : 0);

            const attackForce = calculateAttackForce(
                attackerAttack,
                attacker.healthBefore,
                attacker.healthMax
            );

            let defenderDefenseBonus = defender.wallBonus
                ? 4
                : defender.defenceBonus
                  ? 1.5
                  : 1;
            if (defender.poisonedBonus || defender.becamePoisonedBonus) {
                if (versionConfig?.poisonScheme === PoisonScheme.OLD) {
                    // Force defense bonus to 0.7
                    defenderDefenseBonus = 0.7;
                } else {
                    // Just halve the defense bonus
                    defenderDefenseBonus *= 0.5;
                }
            }

            // const defenderDefenseBonus =
            //     defender.poisonedBonus || defender.becamePoisonedBonus
            //         ? 0.7
            //         : defender.wallBonus
            //           ? 4
            //           : defender.defenceBonus
            //             ? 1.5
            //             : 1;

            const defenseForce = calculateDefenceForce(
                defender.config.defence,
                defender.healthAfter,
                defender.healthMax,
                defenderDefenseBonus
            );

            const totalDamage = calculateTotalDamage(attackForce, defenseForce);

            let attackResult = 0;
            if (attacker.explodeDamage || attacker.typeUnit === "Segment") {
                attackResult = calculateAttackSplash(
                    attackForce,
                    totalDamage,
                    attackerAttack
                );
            } else if (
                attacker.splashDamage &&
                (attacker.config.skills.includes("splash") ||
                    attacker.config.skills.includes("stomp"))
            ) {
                attackResult = calculateAttackSplash(
                    attackForce,
                    totalDamage,
                    attackerAttack
                );
            } else {
                attackResult = calculateAttackResult(
                    attackForce,
                    totalDamage,
                    attackerAttack
                );
            }

            totalAttackResult += attackResult;
            defender.healthAfter = defender.healthBefore - totalAttackResult;

            if (defender.healthAfter > 0) {
                const defenceResult = calculateDefenseResult(
                    defenseForce,
                    totalDamage,
                    defender.config.defence
                );

                if (
                    attacker.config.skills.includes("poison") ||
                    attacker.typeUnit === "Segment" ||
                    attacker.explodeDamage
                ) {
                    defender.becamePoisonedBonus = true;
                    poisoningAttacker = attacker.id;
                }

                if (
                    !attacker.config.skills.includes("surprise") &&
                    !defender.config.skills.includes("stiff") &&
                    !attacker.safeBonus
                ) {
                    attacker.healthAfter =
                        attacker.healthBefore - defenceResult;
                } else if (
                    attacker.explodeDamage ||
                    attacker.typeUnit === "Segment"
                ) {
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
                    flexFlow: "wrap",
                    gap: "1%",
                    mb: 0,
                }}
            >
                <AttackersSelection
                    onAddAttacker={handleAddAttacker}
                    pageIndex={0}
                    disabled={isLoading}
                />
                <DefendersSelection
                    onAddDefender={handleAddDefender}
                    pageIndex={0}
                    disabled={isLoading}
                />
            </Box>

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
                    className={`dnd-column ${
                        isSwappingColumns === "toDefenders"
                            ? "swap-out-left"
                            : ""
                    }`}
                >
                    {soldierUnitsAttackersAsRender.map(
                        (soldierUnitAtt, idx) => (
                            <CardWithShadow
                                key={`attacker-${soldierUnitAtt.id}-${soldierUnitAtt.typeUnit}`}
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, "Attackers", idx)
                                }
                                onDrag={handleDrag}
                                onDragOver={(e) => {
                                    handleDragOver(e);
                                    setHoverTarget({
                                        team: "Attackers",
                                        index: idx,
                                    });
                                }}
                                onDrop={(e) => handleDrop(e, "Attackers", idx)}
                                onDragEnd={handleDragEnd}
                                className={`dnd-card ${
                                    hoverTarget &&
                                    hoverTarget.team === "Attackers" &&
                                    hoverTarget.index === idx
                                        ? "dnd-drop-target"
                                        : ""
                                } ${
                                    dragContext &&
                                    dragContext.team === "Attackers" &&
                                    dragContext.index === idx
                                        ? "being-dragged"
                                        : ""
                                }`}
                            >
                                <SoldierUnitAsRender
                                    key={`attacker-unit-${soldierUnitAtt.id}-${soldierUnitAtt.typeUnit}`}
                                    soldierUnit={soldierUnitAtt}
                                    onDelete={handleDelete}
                                    onUpdateHitpoints={handleUpdateHitpoints}
                                    onIncreaseHitpoints={
                                        handleIncreaseHitpoints
                                    }
                                    onDecreaseHitpoints={
                                        handleDecreaseHitpoints
                                    }
                                    onVeteranBonus={handleVeteranBonus}
                                    onDefenceBonus={handleDefenceBonus}
                                    onWallBonus={handleWallBonus}
                                    onSafeBonus={handleSafeBonus}
                                    onPoisonedBonus={handlePoisonedBonus}
                                    onBoostedBonus={handleBoostedBonus}
                                    onShipUnit={handleShipUnit}
                                    onSplashDamage={handleSplashDamage}
                                    onExplodeDamage={handleExplodeDamage}
                                />
                            </CardWithShadow>
                        )
                    )}
                    {/* Drop zone at end of list */}
                    <CardWithShadow
                        sx={{ p: "4px", minHeight: 8, opacity: 0.2 }}
                        draggable={false}
                        onDragOver={handleDragOver}
                        onDrop={(e) =>
                            handleDrop(
                                e,
                                "Attackers",
                                soldierUnitsAttackersAsRender.length
                            )
                        }
                    >
                        <span></span>
                    </CardWithShadow>
                </Box>

                <Box
                    sx={{
                        display: "block",
                        maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                        width: `${SINGLE_COLUMN_WIDTH_PERCENTAGE}%`,
                        gap: 1,
                    }}
                    className={`dnd-column ${
                        isSwappingColumns === "toAttackers"
                            ? "swap-out-right"
                            : ""
                    }`}
                >
                    {soldierUnitsDefendersAsRender.map(
                        (soldierUnitDef, idx) => (
                            <CardWithShadow
                                key={`defender-${soldierUnitDef.id}-${soldierUnitDef.typeUnit}`}
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, "Defenders", idx)
                                }
                                onDrag={handleDrag}
                                onDragOver={(e) => {
                                    handleDragOver(e);
                                    setHoverTarget({
                                        team: "Defenders",
                                        index: idx,
                                    });
                                }}
                                onDrop={(e) => handleDrop(e, "Defenders", idx)}
                                onDragEnd={handleDragEnd}
                                className={`dnd-card ${
                                    hoverTarget &&
                                    hoverTarget.team === "Defenders" &&
                                    hoverTarget.index === idx
                                        ? "dnd-drop-target"
                                        : ""
                                } ${
                                    dragContext &&
                                    dragContext.team === "Defenders" &&
                                    dragContext.index === idx
                                        ? "being-dragged"
                                        : ""
                                }`}
                            >
                                <SoldierUnitAsRender
                                    key={`defender-unit-${soldierUnitDef.id}-${soldierUnitDef.typeUnit}`}
                                    soldierUnit={soldierUnitDef}
                                    onDelete={handleDelete}
                                    onUpdateHitpoints={handleUpdateHitpoints}
                                    onIncreaseHitpoints={
                                        handleIncreaseHitpoints
                                    }
                                    onDecreaseHitpoints={
                                        handleDecreaseHitpoints
                                    }
                                    onVeteranBonus={handleVeteranBonus}
                                    onDefenceBonus={handleDefenceBonus}
                                    onWallBonus={handleWallBonus}
                                    onSafeBonus={handleSafeBonus}
                                    onPoisonedBonus={handlePoisonedBonus}
                                    onBoostedBonus={handleBoostedBonus}
                                    onShipUnit={handleShipUnit}
                                    onSplashDamage={handleSplashDamage}
                                    onExplodeDamage={handleExplodeDamage}
                                />
                            </CardWithShadow>
                        )
                    )}
                    {/* Drop zone at end of list */}
                    <CardWithShadow
                        sx={{ p: "4px", minHeight: 8, opacity: 0.2 }}
                        draggable={false}
                        onDragOver={handleDragOver}
                        onDrop={(e) =>
                            handleDrop(
                                e,
                                "Defenders",
                                soldierUnitsDefendersAsRender.length
                            )
                        }
                    >
                        <span></span>
                    </CardWithShadow>
                </Box>
            </Box>

            {dragPreview && (
                <div
                    style={{
                        position: "fixed",
                        left: dragPreview.clientX - dragPreview.clickOffsetX,
                        top: dragPreview.clientY - dragPreview.clickOffsetY,
                        pointerEvents: "none",
                        zIndex: 9999,
                        width: dragPreview.width,
                        height: dragPreview.height,
                    }}
                >
                    <CardWithShadow
                        sx={{ mb: 0 }}
                        style={{
                            width: dragPreview.width,
                            height: dragPreview.height,
                        }}
                    >
                        <SoldierUnitAsRender
                            soldierUnit={
                                dragPreview.team === "Attackers"
                                    ? soldierUnitsAttackersAsRender[
                                          dragPreview.index
                                      ]
                                    : soldierUnitsDefendersAsRender[
                                          dragPreview.index
                                      ]
                            }
                            onDelete={() => {}}
                            onUpdateHitpoints={() => {}}
                            onIncreaseHitpoints={() => {}}
                            onDecreaseHitpoints={() => {}}
                            onVeteranBonus={() => {}}
                            onDefenceBonus={() => {}}
                            onWallBonus={() => {}}
                            onSafeBonus={() => {}}
                            onPoisonedBonus={() => {}}
                            onBoostedBonus={() => {}}
                            onShipUnit={() => {}}
                            onSplashDamage={() => {}}
                            onExplodeDamage={() => {}}
                        />
                    </CardWithShadow>
                </div>
            )}

            {versionConfig && (
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
                                {" "}
                                {Object.entries(versionConfigs)
                                    .sort(([a], [b]) => b.localeCompare(a))
                                    .map(([version, config]) => (
                                        <MenuItem key={version} value={version}>
                                            {version} - {config.title}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        <span>
                            Build version: {versionConfig?.buildVersion}
                        </span>
                    </Box>
                </CardWithShadow>
            )}
        </Box>
    );
};

export default BattleGroundDetails;
