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

const BattleGroundDetails = () => {
    const [soldierUnitsAttackersAsRender, setSoldierUnitsAttackersAsRender] =
        useState<SoldierUnit[]>([]);
    const [soldierUnitsDefendersAsRender, setSoldierUnitsDefendersAsRender] =
        useState<SoldierUnit[]>([]);
    // const [defIdxArray, setDefIdxArray] = useState<number[]>([]);
    // const [attIdxArray, setAttIdxArray] = useState<number[]>([]);
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
            case "Rider":
                return Stats.RiderStats.healthMax;
            case "Defender":
                return Stats.DefenderStats.healthMax;
            case "Swordsman":
                return Stats.SwordsmanStats.healthMax;
            case "Catapult":
                return Stats.CatapultStats.healthMax;
            case "Knight":
                return Stats.KnightStats.healthMax;
            case "Giant":
                return Stats.GiantStats.healthMax;
            case "Battleship":
                return Stats.BattleshipStats.healthMax;
            case "MindBender":
                return Stats.MindBenderStats.healthMax;
            case "NatureBunny":
                return Stats.NatureBunnyStats.healthMax;
            case "Boat":
                return Stats.BoatStats.healthMax;
            case "Ship":
                return Stats.ShipStats.healthMax;
            case "Amphibian":
                return Stats.AmphibianStats.healthMax;
            case "Tridention":
                return Stats.TridentionStats.healthMax;
            case "Shark":
                return Stats.SharkStats.healthMax;
            case "Puffer":
                return Stats.PufferStats.healthMax;
            case "Jelly":
                return Stats.JellyStats.healthMax;
            case "Crab":
                return Stats.CrabStats.healthMax;
            case "Polytaur":
                return Stats.PolytaurStats.healthMax;
            case "Navalon":
                return Stats.NavalonStats.healthMax;
            case "DragonEgg":
                return Stats.DragonEggStats.healthMax;
            case "BabyDragon":
                return Stats.BabyDragonStats.healthMax;
            case "FireDragon":
                return Stats.FireDragonStats.healthMax;
            case "Mooni":
                return Stats.MooniStats.healthMax;
            case "IceArcher":
                return Stats.IceArcherStats.healthMax;
            case "BattleSled":
                return Stats.BattleSledStats.healthMax;
            case "IceFortress":
                return Stats.IceFortressStats.healthMax;
            case "Gaami":
                return Stats.GaamiStats.healthMax;
            case "Hexapod":
                return Stats.HexapodStats.healthMax;
            case "Kiton":
                return Stats.KitonStats.healthMax;
            case "Phychi":
                return Stats.PhychiStats.healthMax;
            case "Raychi":
                return Stats.RaychiStats.healthMax;
            case "Shaman":
                return Stats.ShamanStats.healthMax;
            case "Exida":
                return Stats.ExidaStats.healthMax;
            case "Doomux":
                return Stats.DoomuxStats.healthMax;
            case "Centipede":
                return Stats.CentipedeStats.healthMax;
            case "Segment":
                return Stats.SegmentStats.healthMax;
            case "Dagger":
                return Stats.DaggerStats.healthMax;
            case "Cloak":
                return Stats.CloakStats.healthMax;
            case "Dinghy":
                return Stats.DinghyStats.healthMax;
            case "Pirate":
                return Stats.PirateStats.healthMax;
            case "Raft":
                return Stats.RaftStats.healthMax;
            case "Scout":
                return Stats.ScoutStats.healthMax;
            case "Rammer":
                return Stats.RammerStats.healthMax;
            case "Bomber":
                return Stats.BomberStats.healthMax;
            case "Juggernaut":
                return Stats.JuggernautStats.healthMax;
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
            case "Rider":
                return Stats.RiderStats.healthMaxVeteran;
            case "Defender":
                return Stats.DefenderStats.healthMaxVeteran;
            case "Swordsman":
                return Stats.SwordsmanStats.healthMaxVeteran;
            case "Catapult":
                return Stats.CatapultStats.healthMaxVeteran;
            case "Knight":
                return Stats.KnightStats.healthMaxVeteran;
            case "Giant":
                return Stats.GiantStats.healthMaxVeteran;
            case "Battleship":
                return Stats.BattleshipStats.healthMaxVeteran;
            case "MindBender":
                return Stats.MindBenderStats.healthMaxVeteran;
            case "NatureBunny":
                return Stats.NatureBunnyStats.healthMaxVeteran;
            case "Boat":
                return Stats.BoatStats.healthMaxVeteran;
            case "Ship":
                return Stats.ShipStats.healthMaxVeteran;
            case "Amphibian":
                return Stats.AmphibianStats.healthMaxVeteran;
            case "Tridention":
                return Stats.TridentionStats.healthMaxVeteran;
            case "Shark":
                return Stats.SharkStats.healthMaxVeteran;
            case "Puffer":
                return Stats.PufferStats.healthMaxVeteran;
            case "Jelly":
                return Stats.JellyStats.healthMaxVeteran;
            case "Crab":
                return Stats.CrabStats.healthMaxVeteran;
            case "Polytaur":
                return Stats.PolytaurStats.healthMaxVeteran;
            case "Navalon":
                return Stats.NavalonStats.healthMaxVeteran;
            case "DragonEgg":
                return Stats.DragonEggStats.healthMaxVeteran;
            case "BabyDragon":
                return Stats.BabyDragonStats.healthMaxVeteran;
            case "FireDragon":
                return Stats.FireDragonStats.healthMaxVeteran;
            case "Mooni":
                return Stats.MooniStats.healthMaxVeteran;
            case "IceArcher":
                return Stats.IceArcherStats.healthMaxVeteran;
            case "BattleSled":
                return Stats.BattleSledStats.healthMaxVeteran;
            case "IceFortress":
                return Stats.IceFortressStats.healthMaxVeteran;
            case "Gaami":
                return Stats.GaamiStats.healthMaxVeteran;
            case "Hexapod":
                return Stats.HexapodStats.healthMaxVeteran;
            case "Kiton":
                return Stats.KitonStats.healthMaxVeteran;
            case "Phychi":
                return Stats.PhychiStats.healthMaxVeteran;
            case "Raychi":
                return Stats.RaychiStats.healthMaxVeteran;
            case "Shaman":
                return Stats.ShamanStats.healthMaxVeteran;
            case "Exida":
                return Stats.ExidaStats.healthMaxVeteran;
            case "Doomux":
                return Stats.DoomuxStats.healthMaxVeteran;
            case "Centipede":
                return Stats.CentipedeStats.healthMaxVeteran;
            case "Segment":
                return Stats.SegmentStats.healthMaxVeteran;
            case "Dagger":
                return Stats.DaggerStats.healthMaxVeteran;
            case "Cloak":
                return Stats.CloakStats.healthMaxVeteran;
            case "Dinghy":
                return Stats.DinghyStats.healthMaxVeteran;
            case "Pirate":
                return Stats.PirateStats.healthMaxVeteran;
            case "Raft":
                return Stats.RaftStats.healthMaxVeteran;
            case "Scout":
                return Stats.ScoutStats.healthMaxVeteran;
            case "Rammer":
                return Stats.RammerStats.healthMaxVeteran;
            case "Bomber":
                return Stats.BomberStats.healthMaxVeteran;
            case "Juggernaut":
                return Stats.JuggernautStats.healthMaxVeteran;
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
            case "Rider":
                return Stats.RiderStats.attack;
            case "Defender":
                return Stats.DefenderStats.attack;
            case "Swordsman":
                return Stats.SwordsmanStats.attack;
            case "Catapult":
                return Stats.CatapultStats.attack;
            case "Knight":
                return Stats.KnightStats.attack;
            case "Giant":
                return Stats.GiantStats.attack;
            case "Battleship":
                return Stats.BattleshipStats.attack;
            case "MindBender":
                return Stats.MindBenderStats.attack;
            case "NatureBunny":
                return Stats.NatureBunnyStats.attack;
            case "Boat":
                return Stats.BoatStats.attack;
            case "Ship":
                return Stats.ShipStats.attack;
            case "Amphibian":
                return Stats.AmphibianStats.attack;
            case "Tridention":
                return Stats.TridentionStats.attack;
            case "Shark":
                return Stats.SharkStats.attack;
            case "Puffer":
                return Stats.PufferStats.attack;
            case "Jelly":
                return Stats.JellyStats.attack;
            case "Crab":
                return Stats.CrabStats.attack;
            case "Polytaur":
                return Stats.PolytaurStats.attack;
            case "Navalon":
                return Stats.NavalonStats.attack;
            case "DragonEgg":
                return Stats.DragonEggStats.attack;
            case "BabyDragon":
                return Stats.BabyDragonStats.attack;
            case "FireDragon":
                return Stats.FireDragonStats.attack;
            case "Mooni":
                return Stats.MooniStats.attack;
            case "IceArcher":
                return Stats.IceArcherStats.attack;
            case "BattleSled":
                return Stats.BattleSledStats.attack;
            case "IceFortress":
                return Stats.IceFortressStats.attack;
            case "Gaami":
                return Stats.GaamiStats.attack;
            case "Hexapod":
                return Stats.HexapodStats.attack;
            case "Kiton":
                return Stats.KitonStats.attack;
            case "Phychi":
                return Stats.PhychiStats.attack;
            case "Raychi":
                return Stats.RaychiStats.attack;
            case "Shaman":
                return Stats.ShamanStats.attack;
            case "Exida":
                return Stats.ExidaStats.attack;
            case "Doomux":
                return Stats.DoomuxStats.attack;
            case "Centipede":
                return Stats.CentipedeStats.attack;
            case "Segment":
                return Stats.SegmentStats.attack;
            case "Dagger":
                return Stats.DaggerStats.attack;
            case "Cloak":
                return Stats.CloakStats.attack;
            case "Dinghy":
                return Stats.DinghyStats.attack;
            case "Pirate":
                return Stats.PirateStats.attack;
            case "Raft":
                return Stats.RaftStats.attack;
            case "Scout":
                return Stats.ScoutStats.attack;
            case "Rammer":
                return Stats.RammerStats.attack;
            case "Bomber":
                return Stats.BomberStats.attack;
            case "Juggernaut":
                return Stats.JuggernautStats.attack;
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
            case "Rider":
                return Stats.RiderStats.defence;
            case "Defender":
                return Stats.DefenderStats.defence;
            case "Swordsman":
                return Stats.SwordsmanStats.defence;
            case "Catapult":
                return Stats.CatapultStats.defence;
            case "Knight":
                return Stats.KnightStats.defence;
            case "Giant":
                return Stats.GiantStats.defence;
            case "Battleship":
                return Stats.BattleshipStats.defence;
            case "MindBender":
                return Stats.MindBenderStats.defence;
            case "NatureBunny":
                return Stats.NatureBunnyStats.defence;
            case "Boat":
                return Stats.BoatStats.defence;
            case "Ship":
                return Stats.ShipStats.defence;
            case "Amphibian":
                return Stats.AmphibianStats.defence;
            case "Tridention":
                return Stats.TridentionStats.defence;
            case "Shark":
                return Stats.SharkStats.defence;
            case "Puffer":
                return Stats.PufferStats.defence;
            case "Jelly":
                return Stats.JellyStats.defence;
            case "Crab":
                return Stats.CrabStats.defence;
            case "Polytaur":
                return Stats.PolytaurStats.defence;
            case "Navalon":
                return Stats.NavalonStats.defence;
            case "DragonEgg":
                return Stats.DragonEggStats.defence;
            case "BabyDragon":
                return Stats.BabyDragonStats.defence;
            case "FireDragon":
                return Stats.FireDragonStats.defence;
            case "Mooni":
                return Stats.MooniStats.defence;
            case "IceArcher":
                return Stats.IceArcherStats.defence;
            case "BattleSled":
                return Stats.BattleSledStats.defence;
            case "IceFortress":
                return Stats.IceFortressStats.defence;
            case "Gaami":
                return Stats.GaamiStats.defence;
            case "Hexapod":
                return Stats.HexapodStats.defence;
            case "Kiton":
                return Stats.KitonStats.defence;
            case "Phychi":
                return Stats.PhychiStats.defence;
            case "Raychi":
                return Stats.RaychiStats.defence;
            case "Shaman":
                return Stats.ShamanStats.defence;
            case "Exida":
                return Stats.ExidaStats.defence;
            case "Doomux":
                return Stats.DoomuxStats.defence;
            case "Centipede":
                return Stats.CentipedeStats.defence;
            case "Segment":
                return Stats.SegmentStats.defence;
            case "Dagger":
                return Stats.DaggerStats.defence;
            case "Cloak":
                return Stats.CloakStats.defence;
            case "Dinghy":
                return Stats.DinghyStats.defence;
            case "Pirate":
                return Stats.PirateStats.defence;
            case "Raft":
                return Stats.RaftStats.defence;
            case "Scout":
                return Stats.ScoutStats.defence;
            case "Rammer":
                return Stats.RammerStats.defence;
            case "Bomber":
                return Stats.BomberStats.defence;
            case "Juggernaut":
                return Stats.JuggernautStats.defence;
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
        const initialSafeBonus = ["Dagger", "Pirate", "Shark"].includes(
            typeUnit
        );
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
        // setAttIdxArray((prev) => [...prev, newId]);
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
        // setDefIdxArray((prev) => [...prev, newId]);
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
                    ((attacker.attack + 0.5 * boostedBonusMultiplier) *
                        attacker.healthBefore) /
                    attacker.healthMax
                ).toFixed(10)
            );

            const defenceForce = parseFloat(
                (
                    ((defender.defence *
                        (defender.healthBefore - totalAttackResult)) /
                        defender.healthMax) *
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
                        (attacker.attack + 0.5 * boostedBonusMultiplier) *
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
                            defender.defence *
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
                <Box component="span" sx={{ typography: "body2" }}>
                    This page is based on Build version 2.11.1.13205 and Game
                    version: 108.
                </Box>
            </CardWithShadow>
        </Box>
    );
};

export default BattleGroundDetails;
