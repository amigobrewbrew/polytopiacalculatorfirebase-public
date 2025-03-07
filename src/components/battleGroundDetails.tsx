/**
 * This component holds the main page with:
 * Reference to attackers and defender selection components
 * Attackers and defender arrays
 * Attackers and defender outcome simulation
 */

import * as React from "react";
import { useState, useEffect, useCallback } from "react";
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

type Props = {
    OnChangeCheckbox?: any;
};

/**
 * This component:
 * Uses React hooks for state management
 * Renders the arrays
 * Handles the add attacker and add defender actions of the Attacker and Defenders selection component
 * Calculates the Attackers and defender outcome simulation
 */
const BattleGroundDetails: React.FC<Props> = (props) => {
    // State management with hooks
    const [soldierUnitsAttackersAsRender, setSoldierUnitsAttackersAsRender] =
        useState<any[]>([]);
    const [soldierUnitsDefenders, setSoldierUnitsDefenders] = useState<any[]>(
        []
    );
    const [soldierUnitsDefendersAsRender, setSoldierUnitsDefendersAsRender] =
        useState<any[]>([]);
    const [soldierUnitsAttackers, setSoldierUnitsAttackers] = useState<any[]>(
        []
    );
    const [defIdxArray, setDefIdxArray] = useState<number[]>([]);
    const [attIdxArray, setAttIdxArray] = useState<number[]>([]);
    const [checkedPosition, setCheckedPosition] = useState(false);
    // const [randomNumber, setRandomNumber] = useState(0);
    // const [userUnderstands, setUserUnderstands] = useState(false);

    // Helper functions
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
            case "MindBender":
                return Stats.MindBenderStats.healthMax;
            case "NatureBunny":
                return Stats.NatureBunnyStats.healthMax;
            case "Boat":
                return Stats.BoatStats.healthMax;
            case "Ship":
                return Stats.ShipStats.healthMax;
            case "Battleship":
                return Stats.BattleshipStats.healthMax;
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
            case "MindBender":
                return Stats.MindBenderStats.healthMaxVeteran;
            case "NatureBunny":
                return Stats.NatureBunnyStats.healthMaxVeteran;
            case "Boat":
                return Stats.BoatStats.healthMaxVeteran;
            case "Ship":
                return Stats.ShipStats.healthMaxVeteran;
            case "Battleship":
                return Stats.BattleshipStats.healthMaxVeteran;
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
            case "MindBender":
                return Stats.MindBenderStats.attack;
            case "NatureBunny":
                return Stats.NatureBunnyStats.attack;
            case "Boat":
                return Stats.BoatStats.attack;
            case "Ship":
                return Stats.ShipStats.attack;
            case "Battleship":
                return Stats.BattleshipStats.attack;
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
            case "MindBender":
                return Stats.MindBenderStats.defence;
            case "NatureBunny":
                return Stats.NatureBunnyStats.defence;
            case "Boat":
                return Stats.BoatStats.defence;
            case "Ship":
                return Stats.ShipStats.defence;
            case "Battleship":
                return Stats.BattleshipStats.defence;
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
            default:
                return 0;
        }
    }, []);

    // Checkbox handler
    const handleChangeCheckbox = useCallback(() => {
        setCheckedPosition((prev) => !prev);
        analyticsLogEvent(analytics, "pc_checkbox_toggled");
    }, []);

    // Defense bonus handler
    const handleDefenceBonus = useCallback(
        (id: number, team: string, typeUnit: string, defenceBonus: boolean) => {
            if (team === "Defenders") {
                setSoldierUnitsDefendersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        if (!defenceBonus) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                defenceBonus: true,
                                wallBonus: false,
                                poisonedBonus: false,
                            };
                        } else {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                defenceBonus: false,
                            };
                        }
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and wall bonus selection");
            }

            analyticsLogEvent(analytics, "pc_defence_bonus_" + typeUnit);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Wall bonus handler
    const handleWallBonus = useCallback(
        (id: number, team: string, typeUnit: string, wallBonus: boolean) => {
            if (team === "Defenders") {
                setSoldierUnitsDefendersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        if (!wallBonus) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                wallBonus: true,
                                defenceBonus: false,
                                poisonedBonus: false,
                            };
                        } else {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                wallBonus: false,
                            };
                        }
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and wall bonus selection");
            }

            analyticsLogEvent(analytics, "pc_wall_bonus_" + typeUnit);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Poisoned bonus handler
    const handlePoisonedBonus = useCallback(
        (
            id: number,
            team: string,
            typeUnit: string,
            poisonedBonus: boolean
        ) => {
            if (team === "Defenders") {
                setSoldierUnitsDefendersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        if (!poisonedBonus) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                poisonedBonus: true,
                                wallBonus: false,
                                defenceBonus: false,
                            };
                        } else {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                poisonedBonus: false,
                            };
                        }
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and poisoned bonus selection");
            }

            analyticsLogEvent(analytics, "pc_poisoned_bonus_" + typeUnit);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Safe bonus handler
    const handleSafeBonus = useCallback(
        (id: number, team: string, typeUnit: string, safeBonus: boolean) => {
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            safeBonus: !safeBonus,
                        };
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and safe bonus selection");
            }

            analyticsLogEvent(analytics, "pc_safe_bonus_" + typeUnit);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Boosted bonus handler
    const handleBoostedBonus = useCallback(
        (id: number, team: string, typeUnit: string, boostedBonus: boolean) => {
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            boostedBonus: !boostedBonus,
                        };
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and boosted bonus selection");
            }

            analyticsLogEvent(analytics, "pc_boosted_bonus_" + typeUnit);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Splash damage handler
    const handleSplashDamage = useCallback(
        (id: number, team: string, typeUnit: string, splashDamage: boolean) => {
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            splashDamage: !splashDamage,
                        };
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and splash damage selection");
            }

            analyticsLogEvent(analytics, "pc_splash_damage_toggled");
            // setRandomNumber(Math.random());
        },
        []
    );

    // Explode damage handler
    const handleExplodeDamage = useCallback(
        (
            id: number,
            team: string,
            typeUnit: string,
            explodeDamage: boolean
        ) => {
            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            explodeDamage: !explodeDamage,
                        };
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and explode damage selection");
            }

            analyticsLogEvent(analytics, "pc_explode_damage_toggled");
            // setRandomNumber(Math.random());
        },
        []
    );

    // Veteran bonus handler
    const handleVeteranBonus = useCallback(
        (id: number, team: string, typeUnit: string, veteran: boolean) => {
            console.log(
                "Changing veteran status soldier unit with id: " +
                    id +
                    " of team: " +
                    team +
                    " with current veterancy status " +
                    veteran
            );

            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        const healthMaxValue = veteran
                            ? healthMax(typeUnit)
                            : healthMaxVeteran(typeUnit);

                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            veteran: !veteran,
                            healthBefore: healthMaxValue,
                            healthMax: healthMaxValue,
                        };
                    }

                    return updatedUnits;
                });
            } else if (team === "Defenders") {
                setSoldierUnitsDefendersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        const healthMaxValue = veteran
                            ? healthMax(typeUnit)
                            : healthMaxVeteran(typeUnit);

                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            veteran: !veteran,
                            healthBefore: healthMaxValue,
                            healthMax: healthMaxValue,
                        };
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and veterancy selection");
            }

            analyticsLogEvent(
                analytics,
                "pc_veterancy_bonus_" + team + "_" + typeUnit
            );
            // setRandomNumber(Math.random());
        },
        [healthMax, healthMaxVeteran]
    );

    // Ship unit handler
    const handleShipUnit = useCallback(
        (id: number, team: string, typeUnit: string, shipUnit: boolean) => {
            if (team === "Attackers" && shipUnit === true) {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        let newHealthMax = updatedUnits[index].healthMax + 5;
                        if (newHealthMax === 35) newHealthMax = 10;

                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            healthMax: newHealthMax,
                            healthBefore: newHealthMax,
                        };
                    }

                    return updatedUnits;
                });
            } else if (team === "Defenders" && shipUnit === true) {
                setSoldierUnitsDefendersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        let newHealthMax = updatedUnits[index].healthMax + 5;
                        if (newHealthMax === 35) newHealthMax = 10;

                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            healthMax: newHealthMax,
                            healthBefore: newHealthMax,
                        };
                    }

                    return updatedUnits;
                });
            } else {
                console.log("Error with team and shipunit selection");
            }

            analyticsLogEvent(analytics, "pc_ship_mx_" + team + "_" + typeUnit);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Delete handler
    const handleDelete = useCallback((idn: number, team: string) => {
        console.log(
            "Deleting soldier unit with id: " + idn + " of team: " + team
        );

        if (team === "Attackers") {
            setSoldierUnitsAttackersAsRender((prevUnits) => {
                const updatedUnits = prevUnits
                    .filter((unit) => unit.id !== idn)
                    .map((unit, index) => ({ ...unit, id: index }));
                return updatedUnits;
            });

            setAttIdxArray((prevArray) => {
                const filteredArray = prevArray
                    .filter((_, index) => index !== idn)
                    .map((_, index) => index);
                return filteredArray;
            });
        } else if (team === "Defenders") {
            setSoldierUnitsDefendersAsRender((prevUnits) => {
                const updatedUnits = prevUnits
                    .filter((unit) => unit.id !== idn)
                    .map((unit, index) => ({ ...unit, id: index }));
                return updatedUnits;
            });

            setDefIdxArray((prevArray) => {
                const filteredArray = prevArray
                    .filter((_, index) => index !== idn)
                    .map((_, index) => index);
                return filteredArray;
            });
        }

        analyticsLogEvent(analytics, "pc_unit_deleted_" + team);
        // setRandomNumber(Math.random());
    }, []);

    // Update hitpoints handler
    const handleUpdateHitpoints = useCallback(
        (id: number, team: string, healthBeforeManualInput: number) => {
            console.log(
                "Changing hitpoints of soldier unit with id: " +
                    id +
                    " of team: " +
                    team
            );

            if (team === "Attackers") {
                setSoldierUnitsAttackersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            healthBefore: healthBeforeManualInput,
                        };
                    }

                    return updatedUnits;
                });
            } else if (team === "Defenders") {
                setSoldierUnitsDefendersAsRender((prevUnits) => {
                    const updatedUnits = [...prevUnits];
                    const index = updatedUnits.findIndex(
                        (unit) => unit.id === id
                    );

                    if (index !== -1) {
                        updatedUnits[index] = {
                            ...updatedUnits[index],
                            healthBefore: healthBeforeManualInput,
                        };
                    }

                    return updatedUnits;
                });
            }

            analyticsLogEvent(analytics, "pc_hitpoints_direct_" + team);
            // setRandomNumber(Math.random());
        },
        []
    );

    // Increase hitpoints handler
    const handleIncreaseHitpoints = useCallback(
        (id: number, team: string) => {
            if (!checkedPosition) {
                console.log(
                    "Increasing hitpoints soldier unit with id: " +
                        id +
                        " of team: " +
                        team
                );

                if (team === "Attackers") {
                    setSoldierUnitsAttackersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (index !== -1) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                healthBefore:
                                    updatedUnits[index].healthBefore + 1,
                            };
                        }

                        return updatedUnits;
                    });
                } else if (team === "Defenders") {
                    setSoldierUnitsDefendersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (index !== -1) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                healthBefore:
                                    updatedUnits[index].healthBefore + 1,
                            };
                        }

                        return updatedUnits;
                    });
                }

                analyticsLogEvent(analytics, "pc_hitpoints_plus_" + team);
            } else {
                // Position changing logic
                if (team === "Attackers") {
                    setSoldierUnitsAttackersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (index > 0 && updatedUnits.length > 1) {
                            // Swap with previous unit
                            const temp = { ...updatedUnits[index - 1] };
                            updatedUnits[index - 1] = {
                                ...updatedUnits[index],
                                id: index - 1,
                            };
                            updatedUnits[index] = { ...temp, id: index };
                        }

                        return updatedUnits;
                    });
                } else if (team === "Defenders") {
                    setSoldierUnitsDefendersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (index > 0 && updatedUnits.length > 1) {
                            // Swap with previous unit
                            const temp = { ...updatedUnits[index - 1] };
                            updatedUnits[index - 1] = {
                                ...updatedUnits[index],
                                id: index - 1,
                            };
                            updatedUnits[index] = { ...temp, id: index };
                        }

                        return updatedUnits;
                    });
                }

                analyticsLogEvent(analytics, "pc_changed_position_up_" + team);
            }

            // setRandomNumber(Math.random());
        },
        [checkedPosition]
    );

    // Decrease hitpoints handler
    const handleDecreaseHitpoints = useCallback(
        (id: number, team: string) => {
            console.log(
                "Decreasing hitpoints soldier unit with id: " +
                    id +
                    " of team: " +
                    team
            );

            if (!checkedPosition) {
                if (team === "Attackers") {
                    setSoldierUnitsAttackersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (index !== -1) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                healthBefore:
                                    updatedUnits[index].healthBefore - 1,
                            };
                        }

                        return updatedUnits;
                    });
                } else if (team === "Defenders") {
                    setSoldierUnitsDefendersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (index !== -1) {
                            updatedUnits[index] = {
                                ...updatedUnits[index],
                                healthBefore:
                                    updatedUnits[index].healthBefore - 1,
                            };
                        }

                        return updatedUnits;
                    });
                }

                analyticsLogEvent(analytics, "pc_hitpoints_min_" + team);
            } else {
                // Position changing logic
                if (team === "Attackers") {
                    setSoldierUnitsAttackersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (
                            index < updatedUnits.length - 1 &&
                            updatedUnits.length > 1
                        ) {
                            // Swap with next unit
                            const temp = { ...updatedUnits[index + 1] };
                            updatedUnits[index + 1] = {
                                ...updatedUnits[index],
                                id: index + 1,
                            };
                            updatedUnits[index] = { ...temp, id: index };
                        }

                        return updatedUnits;
                    });
                } else if (team === "Defenders") {
                    setSoldierUnitsDefendersAsRender((prevUnits) => {
                        const updatedUnits = [...prevUnits];
                        const index = updatedUnits.findIndex(
                            (unit) => unit.id === id
                        );

                        if (
                            index < updatedUnits.length - 1 &&
                            updatedUnits.length > 1
                        ) {
                            // Swap with next unit
                            const temp = { ...updatedUnits[index + 1] };
                            updatedUnits[index + 1] = {
                                ...updatedUnits[index],
                                id: index + 1,
                            };
                            updatedUnits[index] = { ...temp, id: index };
                        }

                        return updatedUnits;
                    });
                }

                analyticsLogEvent(
                    analytics,
                    "pc_changed_position_down_" + team
                );
            }

            // setRandomNumber(Math.random());
        },
        [checkedPosition]
    );

    // Add attacker handler
    const handleAddAttacker = useCallback(
        (typeUnit: string) => {
            let initialSafeBonus = false;

            if (
                typeUnit === "Dagger" ||
                typeUnit === "Pirate" ||
                typeUnit === "Shark" ||
                typeUnit === "Phychi"
            ) {
                initialSafeBonus = true;
            }

            setSoldierUnitsAttackersAsRender((prevUnits) => {
                const newUnit = {
                    id: prevUnits.length,
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
                    splashDamage: false,
                    explodeDamage: false,
                    shipUnit: istypeUnitaShipUnit(typeUnit),
                };

                return [...prevUnits, newUnit];
            });

            setAttIdxArray((prevArray) => [
                ...prevArray,
                soldierUnitsAttackersAsRender.length,
            ]);

            analyticsLogEvent(analytics, "pc_attacker_added_" + typeUnit);
            analyticsLogEvent(
                analytics,
                "pc_attacker_id_" + soldierUnitsAttackersAsRender.length
            );

            // setRandomNumber(Math.random());
        },
        [
            healthMax,
            attack,
            defence,
            istypeUnitaShipUnit,
            soldierUnitsAttackersAsRender.length,
        ]
    );

    // Add defender handler
    const handleAddDefender = useCallback(
        (typeUnit: string) => {
            setSoldierUnitsDefendersAsRender((prevUnits) => {
                const newUnit = {
                    id: prevUnits.length,
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
                    splashDamage: false,
                    explodeDamage: false,
                    shipUnit: istypeUnitaShipUnit(typeUnit),
                };

                return [...prevUnits, newUnit];
            });

            setDefIdxArray((prevArray) => [
                ...prevArray,
                soldierUnitsDefendersAsRender.length,
            ]);

            analyticsLogEvent(analytics, "pc_defender_added_" + typeUnit);
            analyticsLogEvent(
                analytics,
                "pc_defender_id_" + soldierUnitsDefendersAsRender.length
            );

            // setRandomNumber(Math.random());
        },
        [
            healthMax,
            attack,
            defence,
            istypeUnitaShipUnit,
            soldierUnitsDefendersAsRender.length,
        ]
    );

    // Health calculation function
    const healthAfterCalculation = useCallback(() => {
        console.log("This is where the magic happens. Charge!");
        analyticsLogEvent(analytics, "pc_magic_happens");

        let indexDefenderCounter = 0;
        let indexDefender = defIdxArray[indexDefenderCounter];
        let totalAttackResult = 0;

        // Create immutable copies to work with
        const attackers = [...soldierUnitsAttackersAsRender];
        const defenders = [...soldierUnitsDefendersAsRender];

        console.log("These arrays are on the battlefield");
        console.log(attackers);
        console.log(defenders);

        console.log(
            "These are the attacker ids in use (attIdxArray): " + attIdxArray
        );

        console.log(
            "These are the defender ids in use (defIdxArray): " + defIdxArray
        );

        // Reset all hitpoints
        attackers.forEach((element) => {
            element.healthAfter = element.healthBefore;
        });

        defenders.forEach((element) => {
            element.healthAfter = element.healthBefore;
        });

        // If there are no attackers, return early with defenders' healthAfter = healthBefore
        if (attackers.length === 0) {
            return [attackers, defenders];
        }

        let poisoningAttacker = 9999;
        let defenderRepeatedAttack = 0;

        // Process each attacker
        attackers.forEach((attacker) => {
            if (
                indexDefender === undefined ||
                indexDefender >= defenders.length
            ) {
                return;
            }

            const defender = defenders[indexDefender];

            if (attacker !== undefined && defender !== undefined) {
                if (defenderRepeatedAttack === 0) {
                    defender.becamePoisonedBonus = false;
                }

                defenderRepeatedAttack++;

                // Calculate multipliers based on bonuses
                const defenceBonusMultiplier = defender.defenceBonus ? 1.5 : 1;
                const wallBonusMultiplier = defender.wallBonus ? 4 : 1;
                const safeBonusMultiplier = attacker.safeBonus ? 0 : 1;

                let poisonedBonusMultiplier = 1;
                if (defender.poisonedBonus) {
                    poisonedBonusMultiplier = 0.7;
                }

                // Apply poison effect from previous attacker
                if (attacker.id > poisoningAttacker) {
                    poisonedBonusMultiplier = 0.7;
                }

                const boostedBonusMultiplier = attacker.boostedBonus ? 1 : 0;

                // Calculate attack and defense forces
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

                // Initialize local attack result
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
                    attacker.splashDamage === true &&
                    attacker.typeUnit === "Juggernaut"
                ) {
                    attackResult = Math.round(attackResult * (2 / 4));
                }

                if (
                    attacker.splashDamage === true &&
                    (attacker.typeUnit === "FireDragon" ||
                        attacker.typeUnit === "Bomber")
                ) {
                    attackResult = Math.round(attackResult * (2 / 4));
                }

                if (
                    attacker.explodeDamage === true ||
                    attacker.typeUnit === "Segment"
                ) {
                    attackResult = Math.round(attackResult * 0.5);
                }

                console.log("this is attackForce: " + attackForce);
                console.log("this is defenceForce: " + defenceForce);
                console.log("this is totalDamage: " + totalDamage);
                console.log("this is attackResult: " + attackResult);

                totalAttackResult += attackResult;

                // Update defender's health after attack
                if (defenders[indexDefender]) {
                    defenders[indexDefender].healthAfter =
                        defenders[indexDefender].healthBefore -
                        totalAttackResult;
                }

                // Calculate defense result and handle poisoning
                let defenceResult = 0;
                if (defender.healthAfter > 0) {
                    defenceResult = Math.round(
                        parseFloat(
                            (
                                (defenceForce / totalDamage) *
                                defender.defence *
                                4.5
                            ).toFixed(10)
                        )
                    );
                    console.log("this is defenceResult: " + defenceResult);

                    // Poison effect
                    if (
                        attacker.typeUnit === "Exida" ||
                        attacker.typeUnit === "Phychi" ||
                        attacker.typeUnit === "Kiton" ||
                        attacker.typeUnit === "Segment" ||
                        attacker.explodeDamage === true
                    ) {
                        defender.becamePoisonedBonus = true;
                        poisoningAttacker = attacker.id;
                        console.log(
                            "Defender " +
                                defender.id +
                                " became poisoned, because of attacker " +
                                attacker.id
                        );
                    }
                } else {
                    // Move to next defender if current one is defeated
                    indexDefenderCounter++;
                    indexDefender = defIdxArray[indexDefenderCounter];
                    totalAttackResult = 0;
                    poisoningAttacker = 9999;
                    defenderRepeatedAttack = 0;
                }

                // Update attacker's health after defense counterattack
                if (
                    !(
                        defender.typeUnit === "MindBender" ||
                        defender.typeUnit === "DragonEggs" ||
                        defender.typeUnit === "Mooni" ||
                        defender.typeUnit === "Segment"
                    )
                ) {
                    attacker.healthAfter =
                        attacker.healthBefore -
                        defenceResult * safeBonusMultiplier;
                }

                // Handle exploding units
                if (
                    attacker.typeUnit === "Segment" ||
                    attacker.explodeDamage === true
                ) {
                    attacker.healthAfter = 0;
                }
            } else {
                // Handle undefined cases
                if (attacker) {
                    attacker.healthAfter = attacker.healthBefore;
                }
                console.log(
                    "Reset hitpoint on inactive attackers or defender undefined"
                );
            }
        });

        // Ensure that defenders that weren't attacked have healthAfter = healthBefore
        defenders.forEach((defender, idx) => {
            // If this defender wasn't processed at all (no attackers reached it)
            if (idx > indexDefender || attackers.length === 0) {
                defender.healthAfter = defender.healthBefore;
            }
        });

        console.log(
            "Final defender attacked is on position: " +
                indexDefender +
                ". Reset hitpoint on inactive defenders"
        );

        return [attackers, defenders];
    }, [
        soldierUnitsAttackersAsRender,
        soldierUnitsDefendersAsRender,
        attIdxArray,
        defIdxArray,
    ]);

    // Use a separate state to track changes requiring recalculation
    const [needsRecalculation, setNeedsRecalculation] = useState(true);

    // Make sure to use the calculated results
    useEffect(() => {
        if (
            needsRecalculation &&
            (soldierUnitsAttackersAsRender.length > 0 ||
                soldierUnitsDefendersAsRender.length > 0)
        ) {
            const [calculatedAttackers, calculatedDefenders] =
                healthAfterCalculation();

            // Update with the calculated results - ensures immutability
            setSoldierUnitsAttackersAsRender(calculatedAttackers);
            setSoldierUnitsDefendersAsRender(calculatedDefenders);

            // Prevent recalculation until something changes
            setNeedsRecalculation(false);
        }
    }, [needsRecalculation, healthAfterCalculation]);

    // Trigger recalculation when inputs change
    useEffect(() => {
        setNeedsRecalculation(true);
    }, [attIdxArray, defIdxArray]);

    // Render the component
    console.log("Battleground details page is rendered");
    analyticsLogEvent(analytics, "pc_battleground_page_rendered");

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
                {/* Attackers column */}
                <Box
                    sx={{
                        display: "block",
                        maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                        width: `${SINGLE_COLUMN_WIDTH_PERCENTAGE}%`,
                        gap: 1,
                    }}
                >
                    {soldierUnitsAttackersAsRender.map(
                        (soldierUnitAtt: any, i: number) => (
                            <CardWithShadow key={i}>
                                <SoldierUnitAsRender
                                    team={soldierUnitAtt.team}
                                    typeUnit={soldierUnitAtt.typeUnit}
                                    healthMax={soldierUnitAtt.healthMax}
                                    healthBefore={soldierUnitAtt.healthBefore}
                                    healthAfter={soldierUnitAtt.healthAfter}
                                    veteran={soldierUnitAtt.veteran}
                                    wallBonus={soldierUnitAtt.wallBonus}
                                    defenceBonus={soldierUnitAtt.defenceBonus}
                                    poisonedBonus={soldierUnitAtt.poisonedBonus}
                                    safeBonus={soldierUnitAtt.safeBonus}
                                    boostedBonus={soldierUnitAtt.boostedBonus}
                                    becamePoisonedBonus={
                                        soldierUnitAtt.becamePoisonedBonus
                                    }
                                    // key={i + randomNumber}
                                    id={soldierUnitAtt.id}
                                    OnDelete={handleDelete}
                                    OnUpdateHitpoints={handleUpdateHitpoints}
                                    OnIncreaseHitpoints={
                                        handleIncreaseHitpoints
                                    }
                                    OnDecreaseHitpoints={
                                        handleDecreaseHitpoints
                                    }
                                    OnVeteranBonus={handleVeteranBonus}
                                    OnDefenceBonus={handleDefenceBonus}
                                    OnWallBonus={handleWallBonus}
                                    OnSafeBonus={handleSafeBonus}
                                    OnPoisonedBonus={handlePoisonedBonus}
                                    OnBoostedBonus={handleBoostedBonus}
                                    OnShipUnit={handleShipUnit}
                                    OnSplashDamage={handleSplashDamage}
                                    OnExplodeDamage={handleExplodeDamage}
                                    shipUnit={soldierUnitAtt.shipUnit}
                                    splashDamage={soldierUnitAtt.splashDamage}
                                    explodeDamage={soldierUnitAtt.explodeDamage}
                                />
                            </CardWithShadow>
                        )
                    )}
                </Box>

                {/* Defenders column */}
                <Box
                    sx={{
                        display: "block",
                        maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                        width: `${SINGLE_COLUMN_WIDTH_PERCENTAGE}%`,
                        gap: 1,
                    }}
                >
                    {soldierUnitsDefendersAsRender.map(
                        (soldierUnitDef: any, i: number) => (
                            <CardWithShadow key={i}>
                                <SoldierUnitAsRender
                                    team={soldierUnitDef.team}
                                    typeUnit={soldierUnitDef.typeUnit}
                                    healthMax={soldierUnitDef.healthMax}
                                    healthBefore={soldierUnitDef.healthBefore}
                                    healthAfter={soldierUnitDef.healthAfter}
                                    veteran={soldierUnitDef.veteran}
                                    wallBonus={soldierUnitDef.wallBonus}
                                    defenceBonus={soldierUnitDef.defenceBonus}
                                    poisonedBonus={soldierUnitDef.poisonedBonus}
                                    safeBonus={soldierUnitDef.safeBonus}
                                    boostedBonus={soldierUnitDef.boostedBonus}
                                    becamePoisonedBonus={
                                        soldierUnitDef.becamePoisonedBonus
                                    }
                                    // key={i + randomNumber}
                                    id={soldierUnitDef.id}
                                    OnDelete={handleDelete}
                                    OnUpdateHitpoints={handleUpdateHitpoints}
                                    OnIncreaseHitpoints={
                                        handleIncreaseHitpoints
                                    }
                                    OnDecreaseHitpoints={
                                        handleDecreaseHitpoints
                                    }
                                    OnVeteranBonus={handleVeteranBonus}
                                    OnDefenceBonus={handleDefenceBonus}
                                    OnWallBonus={handleWallBonus}
                                    OnSafeBonus={handleSafeBonus}
                                    OnPoisonedBonus={handlePoisonedBonus}
                                    OnBoostedBonus={handleBoostedBonus}
                                    OnShipUnit={handleShipUnit}
                                    OnSplashDamage={handleSplashDamage}
                                    OnExplodeDamage={handleExplodeDamage}
                                    shipUnit={soldierUnitDef.shipUnit}
                                    splashDamage={soldierUnitDef.splashDamage}
                                    explodeDamage={soldierUnitDef.explodeDamage}
                                />
                            </CardWithShadow>
                        )
                    )}
                </Box>
            </Box>

            <CardWithShadow
                sx={{
                    p: "0 2%",
                    width: "100%",
                    mt: "2px",
                }}
            >
                <FormControlLabel
                    sx={{ mb: 0 }}
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

            <CardWithShadow
                sx={{
                    p: "3px 2%",
                    width: "100%",
                }}
            >
                <Box component="span" sx={{ typography: "body2" }}>
                    This page is based on Build version 2.11.1.13205 and Game
                    version: 108
                </Box>
            </CardWithShadow>
        </Box>
    );
};

export default BattleGroundDetails;
