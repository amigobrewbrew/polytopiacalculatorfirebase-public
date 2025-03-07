/** This component is used to add a defender or attacker unit to the battle ground array and giving the unit the initial stats */

import * as React from "react";
import { useState, useEffect, useCallback } from "react";
// Keep all the image imports
import WarriorAtt from "../img/Attackers/Warrior.png";
import ArcherAtt from "../img/Attackers/Archer.png";
import RiderAtt from "../img/Attackers/Rider.png";
import DefenderAtt from "../img/Attackers/Defender.png";
import SwordsmanAtt from "../img/Attackers/Swordsman.png";
import CatapultAtt from "../img/Attackers/Catapult.png";
import KnightAtt from "../img/Attackers/Knight.png";
import GiantAtt from "../img/Attackers/Giant.png";
import BattleshipAtt from "../img/Attackers/Battleship.png";
import BoatAtt from "../img/Attackers/Boat.png";
import ShipAtt from "../img/Attackers/Ship.png";
import AmphibianAtt from "../img/Attackers/Amphibian.png";
import TridentionAtt from "../img/Attackers/Tridention.png";
import SharkAtt from "../img/Attackers/Shark.png";
import PufferAtt from "../img/Attackers/Puffer.png";
import JellyAtt from "../img/Attackers/Jelly.png";
import CrabAtt from "../img/Attackers/Crab.png";
import PolytaurAtt from "../img/Attackers/Polytaur.png";
import NavalonAtt from "../img/Attackers/Navalon.png";
import DragonEggAtt from "../img/Attackers/Dragon Egg.png";
import BabyDragonAtt from "../img/Attackers/Baby Dragon.png";
import FireDragonAtt from "../img/Attackers/Fire Dragon.png";
import MooniAtt from "../img/Attackers/Mooni.png";
import IceArcherAtt from "../img/Attackers/Ice Archer.png";
import BattleSledAtt from "../img/Attackers/Battle Sled.png";
import IceFortressAtt from "../img/Attackers/Ice Fortress.png";
import GaamiAtt from "../img/Attackers/Gaami.png";
import HexapodAtt from "../img/Attackers/Hexapod.png";
import KitonAtt from "../img/Attackers/Kiton.png";
import PhychiAtt from "../img/Attackers/Phychi.png";
import RaychiAtt from "../img/Attackers/Raychi.png";
import ShamanAtt from "../img/Attackers/Shaman.png";
import ExidaAtt from "../img/Attackers/Exida.png";
import DoomuxAtt from "../img/Attackers/Doomux.png";
import CentipedeAtt from "../img/Attackers/Centipede.png";
import SegmentAtt from "../img/Attackers/Segment.png";
import MindBenderAtt from "../img/Attackers/Mind Bender.png";
import NatureBunnyAtt from "../img/Attackers/Nature Bunny.png";
import DaggerAtt from "../img/Attackers/Dagger.png";
import DinghyAtt from "../img/Attackers/Dinghy.png";
import CloakAtt from "../img/Attackers/Cloak.png";
import PirateAtt from "../img/Attackers/Pirate.png";
import RaftAtt from "../img/Attackers/Raft.png";
import ScoutAtt from "../img/Attackers/Scout.png";
import RammerAtt from "../img/Attackers/Rammer.png";
import BomberAtt from "../img/Attackers/Bomber.png";
import JuggernautAtt from "../img/Attackers/Juggernaut.png";

import WarriorDef from "../img/Defenders/Warrior.png";
import ArcherDef from "../img/Defenders/Archer.png";
import RiderDef from "../img/Defenders/Rider.png";
import DefenderDef from "../img/Defenders/Defender.png";
import SwordsmanDef from "../img/Defenders/Swordsman.png";
import CatapultDef from "../img/Defenders/Catapult.png";
import KnightDef from "../img/Defenders/Knight.png";
import GiantDef from "../img/Defenders/Giant.png";
import BattleshipDef from "../img/Defenders/Battleship.png";
import BoatDef from "../img/Defenders/Boat.png";
import ShipDef from "../img/Defenders/Ship.png";
import AmphibianDef from "../img/Defenders/Amphibian.png";
import TridentionDef from "../img/Defenders/Tridention.png";
import SharkDef from "../img/Defenders/Shark.png";
import PufferDef from "../img/Defenders/Puffer.png";
import JellyDef from "../img/Defenders/Jelly.png";
import CrabDef from "../img/Defenders/Crab.png";
import PolytaurDef from "../img/Defenders/Polytaur.png";
import NavalonDef from "../img/Defenders/Navalon.png";
import DragonEggDef from "../img/Defenders/Dragon Egg.png";
import BabyDragonDef from "../img/Defenders/Baby Dragon.png";
import FireDragonDef from "../img/Defenders/Fire Dragon.png";
import MooniDef from "../img/Defenders/Mooni.png";
import IceArcherDef from "../img/Defenders/Ice Archer.png";
import BattleSledDef from "../img/Defenders/Battle Sled.png";
import IceFortressDef from "../img/Defenders/Ice Fortress.png";
import GaamiDef from "../img/Defenders/Gaami.png";
import HexapodDef from "../img/Defenders/Hexapod.png";
import KitonDef from "../img/Defenders/Kiton.png";
import PhychiDef from "../img/Defenders/Phychi.png";
import RaychiDef from "../img/Defenders/Raychi.png";
import ShamanDef from "../img/Defenders/Shaman.png";
import ExidaDef from "../img/Defenders/Exida.png";
import DoomuxDef from "../img/Defenders/Doomux.png";
import CentipedeDef from "../img/Defenders/Centipede.png";
import SegmentDef from "../img/Defenders/Segment.png";
import MindBenderDef from "../img/Defenders/Mind Bender.png";
import NatureBunnyDef from "../img/Defenders/Nature Bunny.png";
import DaggerDef from "../img/Defenders/Dagger.png";
import DinghyDef from "../img/Defenders/Dinghy.png";
import CloakDef from "../img/Defenders/Cloak.png";
import PirateDef from "../img/Defenders/Pirate.png";
import RaftDef from "../img/Defenders/Raft.png";
import ScoutDef from "../img/Defenders/Scout.png";
import RammerDef from "../img/Defenders/Rammer.png";
import BomberDef from "../img/Defenders/Bomber.png";
import JuggernautDef from "../img/Defenders/Juggernaut.png";

import { getSecondaryButtonStyles } from "../customStyles";

import SmallSwords from "../img/Other/SmallSwords.png";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

type Props = {
    id: number;
    typeUnit: string;
    team: string;
    healthMax: number;
    healthBefore: number;
    healthAfter?: number;
    attack?: number;
    defence?: number;
    veteran: boolean;
    wallBonus: boolean;
    defenceBonus: boolean;
    safeBonus: boolean;
    poisonedBonus: boolean;
    becamePoisonedBonus: boolean;
    boostedBonus: boolean;
    splashDamage: boolean;
    explodeDamage: boolean;
    shipUnit: boolean;
    OnDelete?: any;
    OnUpdateHitpoints?: any;
    OnIncreaseHitpoints?: any;
    OnDecreaseHitpoints?: any;
    OnVeteranBonus?: any;
    OnDefenceBonus?: any;
    OnWallBonus?: any;
    OnSafeBonus?: any;
    OnPoisonedBonus?: any;
    OnBoostedBonus?: any;
    OnShipUnit?: any;
    OnSplashDamage: any;
    OnExplodeDamage: any;
};

const SoldierUnitAsRender: React.FC<Props> = (props) => {
    // Convert all state properties to useState hooks
    const [isToggleOnVeteran, setIsToggleOnVeteran] = useState(props.veteran);
    const [isToggleOnSafe, setIsToggleOnSafe] = useState(props.safeBonus);
    const [isToggleOnDefence, setIsToggleOnDefence] = useState(
        props.defenceBonus
    );
    const [isToggleOnWall, setIsToggleOnWall] = useState(props.wallBonus);
    const [isToggleOnPoisoned, setIsToggleOnPoisoned] = useState(
        props.poisonedBonus
    );
    const [isBecamePoisoned, setIsBecamePoisoned] = useState(
        props.becamePoisonedBonus
    );
    const [isToggleOnBoosted, setIsToggleOnBoosted] = useState(
        props.boostedBonus
    );
    const [isToggleOnSplashDamage, setIsToggleOnSplashDamage] = useState(
        props.splashDamage
    );
    const [isToggleOnExplodeDamage, setIsToggleOnExplodeDamage] = useState(
        props.explodeDamage
    );
    const [isToggleOnShipUnit, setIsToggleOnShipUnit] = useState(
        props.shipUnit
    );
    const [isToggleVisibleTypeUnit, setIsToggleVisibleTypeUnit] = useState(
        props.typeUnit
    );
    const [isToggleVisibleTeam, setIsToggleVisibleTeam] = useState(props.team);
    const [isToggleVisibleShipUnit, setIsToggleVisibleShipUnit] = useState(
        props.shipUnit
    );
    const [healthMaxShipUnit, setHealthMaxShipUnit] = useState(props.healthMax);
    const [healthInputField, setHealthInputField] = useState(
        props.healthBefore
    );
    const [healthBeforeAsState, setHealthBeforeAsState] = useState(
        props.healthBefore
    );
    const [healthAfterAsState, setHealthAfterAsState] = useState(
        props.healthAfter ?? props.healthBefore
    );

    // Replace getDerivedStateFromProps with useEffect
    useEffect(() => {
        setIsToggleOnVeteran(props.veteran);
        setIsToggleOnSafe(props.safeBonus);
        setIsToggleOnDefence(props.defenceBonus);
        setIsToggleOnWall(props.wallBonus);
        setIsToggleOnPoisoned(props.poisonedBonus);
        setIsBecamePoisoned(props.becamePoisonedBonus);
        setIsToggleOnBoosted(props.boostedBonus);
        setIsToggleOnSplashDamage(props.splashDamage);
        setIsToggleOnExplodeDamage(props.explodeDamage);
        setIsToggleOnShipUnit(props.shipUnit);
        setIsToggleVisibleTypeUnit(props.typeUnit);
        setIsToggleVisibleTeam(props.team);
        setIsToggleVisibleShipUnit(props.shipUnit);
        setHealthMaxShipUnit(props.healthMax);
        setHealthInputField(props.healthBefore);
        setHealthBeforeAsState(props.healthBefore);
        setHealthAfterAsState(props.healthAfter ?? props.healthBefore);
    }, [
        props.veteran,
        props.safeBonus,
        props.defenceBonus,
        props.wallBonus,
        props.poisonedBonus,
        props.becamePoisonedBonus,
        props.boostedBonus,
        props.splashDamage,
        props.explodeDamage,
        props.shipUnit,
        props.typeUnit,
        props.team,
        props.healthMax,
        props.healthBefore,
        props.healthAfter,
    ]);

    // Convert class methods to hooks with useCallback
    const handleClickSplashDamage = useCallback(() => {
        const newValue = !isToggleOnSplashDamage;
        setIsToggleOnSplashDamage(newValue);
        props.OnSplashDamage(
            props.id,
            props.team,
            props.typeUnit,
            props.splashDamage
        );
        console.log("Unit does splash damage");
    }, [isToggleOnSplashDamage, props]);

    const handleClickExplodeDamage = useCallback(() => {
        const newValue = !isToggleOnExplodeDamage;
        setIsToggleOnExplodeDamage(newValue);
        props.OnExplodeDamage(
            props.id,
            props.team,
            props.typeUnit,
            props.explodeDamage
        );
        console.log("Unit does explode damage");
    }, [isToggleOnExplodeDamage, props]);

    const handleClickVeteranBonus = useCallback(() => {
        const newValue = !isToggleOnVeteran;
        setIsToggleOnVeteran(newValue);
        console.log("isToggleOnVeteran: ", isToggleOnVeteran);
        console.log("Unit is veteran");
    }, [isToggleOnVeteran]);

    const handleClickShipUnit = useCallback(() => {
        setHealthMaxShipUnit(props.healthMax);
    }, [props.healthMax]);

    const handleClickSafeBonus = useCallback(() => {
        const newValue = !isToggleOnSafe;
        setIsToggleOnSafe(newValue);
        console.log("Unit is safe");
    }, [isToggleOnSafe]);

    const handleClickBoostedBonus = useCallback(() => {
        const newValue = !isToggleOnBoosted;
        setIsToggleOnBoosted(newValue);
        console.log("Unit is boosted");
    }, [isToggleOnBoosted]);

    const handleClickDefenceBonus = useCallback(() => {
        if (!isToggleOnDefence) {
            setIsToggleOnDefence(true);
            setIsToggleOnPoisoned(false);
            setIsToggleOnWall(false);
        } else {
            setIsToggleOnDefence(false);
        }
        console.log("Unit has defence bonus");
    }, [isToggleOnDefence]);

    const handleClickWallBonus = useCallback(() => {
        if (!isToggleOnWall) {
            setIsToggleOnWall(true);
            setIsToggleOnPoisoned(false);
            setIsToggleOnDefence(false);
        } else {
            setIsToggleOnWall(false);
        }
        console.log("Unit has wall bonus");
    }, [isToggleOnWall]);

    const handleClickPoisonedBonus = useCallback(() => {
        if (!isToggleOnPoisoned) {
            setIsToggleOnPoisoned(true);
            setIsToggleOnWall(false);
            setIsToggleOnDefence(false);
        } else {
            setIsToggleOnPoisoned(false);
        }
        console.log("Unit is poisoned");
    }, [isToggleOnPoisoned]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                handleHitpointsChange(e.currentTarget.value);
            }
        },
        []
    );

    const handleHitpointsChange = useCallback(
        (healthBeforeManualInput: string) => {
            const parsedValue = parseInt(healthBeforeManualInput);
            setHealthInputField(parsedValue);
            console.log("Hitpoints are now: " + healthBeforeManualInput);
            props.OnUpdateHitpoints(
                props.id,
                props.team,
                healthBeforeManualInput
            );
        },
        [props]
    );

    const generateCheckboxIdHitpointField = useCallback(() => {
        return props.team + props.id + "HitpointField";
    }, [props.team, props.id]);

    const handleFocus = useCallback(
        (event: React.FocusEvent<HTMLInputElement>) => {
            event.target.select();
        },
        []
    );

    const displayhealthAfter = useCallback(() => {
        return healthAfterAsState;
    }, [healthAfterAsState]);

    // Convert helper methods for UI element visibility
    const makeInvisibleVeteranBonus = useCallback((unitType: string) => {
        const nonVeteranUnits = [
            "Ship",
            "Boat",
            "Navalon",
            "Giant",
            "MindBender",
            "NatureBunny",
            "Crab",
            "DragonEgg",
            "BabyDragon",
            "FireDragon",
            "Mooni",
            "Gaami",
            "Shaman",
            "Centipede",
            "Segment",
            "Cloak",
            "Dinghy",
            "Battleship",
            "Raft",
            "Scout",
            "Rammer",
            "Bomber",
            "Pirate",
            "Juggernaut",
        ];
        return nonVeteranUnits.includes(unitType)
            ? { display: "none " }
            : { display: "visible" };
    }, []);

    const makeInvisibleShipUnit = useCallback((shipUnit: boolean) => {
        return shipUnit === false
            ? { display: "none" }
            : { display: "visible" };
    }, []);

    const makeInvisibleSplashDamage = useCallback(
        (unitType: string, team: string) => {
            return (unitType === "FireDragon" && team === "Attackers") ||
                (unitType === "Bomber" && team === "Attackers") ||
                (unitType === "Juggernaut" && team === "Attackers")
                ? { display: "visible" }
                : { display: "none" };
        },
        []
    );

    const makeInvisibleExplodeDamage = useCallback(
        (unitType: string, team: string) => {
            return (unitType === "Doomux" && team === "Attackers") ||
                (unitType === "Raychi" && team === "Attackers")
                ? { display: "visible" }
                : { display: "none" };
        },
        []
    );

    const makeInvisibleDefenceBonus = useCallback((team: string) => {
        return team === "Attackers"
            ? { display: "none" }
            : { display: "visible" };
    }, []);

    const makeInvisibleWallBonus = useCallback(
        (team: string, unitType: string) => {
            const wallEligibleUnits = [
                "Warrior",
                "Archer",
                "Defender",
                "Knight",
                "Rider",
                "Tridention",
                "Polytaur",
                "IceArcher",
                "Amphibian",
            ];

            return team === "Defenders" && wallEligibleUnits.includes(unitType)
                ? { display: "visible" }
                : { display: "none" };
        },
        []
    );

    const makeInvisibleSafeBonus = useCallback((team: string) => {
        return team === "Defenders"
            ? { display: "none" }
            : { display: "visible" };
    }, []);

    const makeInvisibleBoostedBonus = useCallback((team: string) => {
        return team === "Defenders"
            ? { display: "none" }
            : { display: "visible" };
    }, []);

    const makeInvisiblePoisonedBonus = useCallback((team: string) => {
        return team === "Attackers"
            ? { display: "none" }
            : { display: "visible" };
    }, []);

    // Convert the icon display method
    const displayIcon = useCallback((typeUnit: string, team: string) => {
        // Keep the large switch statement as-is
        switch (typeUnit + team) {
            case "WarriorAttackers":
                return WarriorAtt;
            case "ArcherAttackers":
                return ArcherAtt;
            case "RiderAttackers":
                return RiderAtt;
            case "DefenderAttackers":
                return DefenderAtt;
            case "SwordsmanAttackers":
                return SwordsmanAtt;
            case "CatapultAttackers":
                return CatapultAtt;
            case "KnightAttackers":
                return KnightAtt;
            case "GiantAttackers":
                return GiantAtt;
            case "BattleshipAttackers":
                return BattleshipAtt;
            case "MindBenderAttackers":
                return MindBenderAtt;
            case "NatureBunnyAttackers":
                return NatureBunnyAtt;
            case "BoatAttackers":
                return BoatAtt;
            case "ShipAttackers":
                return ShipAtt;
            case "AmphibianAttackers":
                return AmphibianAtt;
            case "TridentionAttackers":
                return TridentionAtt;
            case "SharkAttackers":
                return SharkAtt;
            case "PufferAttackers":
                return PufferAtt;
            case "JellyAttackers":
                return JellyAtt;
            case "CrabAttackers":
                return CrabAtt;
            case "PolytaurAttackers":
                return PolytaurAtt;
            case "NavalonAttackers":
                return NavalonAtt;
            case "DragonEggAttackers":
                return DragonEggAtt;
            case "BabyDragonAttackers":
                return BabyDragonAtt;
            case "FireDragonAttackers":
                return FireDragonAtt;
            case "MooniAttackers":
                return MooniAtt;
            case "IceArcherAttackers":
                return IceArcherAtt;
            case "BattleSledAttackers":
                return BattleSledAtt;
            case "IceFortressAttackers":
                return IceFortressAtt;
            case "GaamiAttackers":
                return GaamiAtt;
            case "HexapodAttackers":
                return HexapodAtt;
            case "KitonAttackers":
                return KitonAtt;
            case "PhychiAttackers":
                return PhychiAtt;
            case "RaychiAttackers":
                return RaychiAtt;
            case "ShamanAttackers":
                return ShamanAtt;
            case "ExidaAttackers":
                return ExidaAtt;
            case "DoomuxAttackers":
                return DoomuxAtt;
            case "CentipedeAttackers":
                return CentipedeAtt;
            case "SegmentAttackers":
                return SegmentAtt;
            case "DaggerAttackers":
                return DaggerAtt;
            case "CloakAttackers":
                return CloakAtt;
            case "DinghyAttackers":
                return DinghyAtt;
            case "PirateAttackers":
                return PirateAtt;
            case "RaftAttackers":
                return RaftAtt;
            case "ScoutAttackers":
                return ScoutAtt;
            case "RammerAttackers":
                return RammerAtt;
            case "BomberAttackers":
                return BomberAtt;
            case "JuggernautAttackers":
                return JuggernautAtt;

            case "WarriorDefenders":
                return WarriorDef;
            case "ArcherDefenders":
                return ArcherDef;
            case "RiderDefenders":
                return RiderDef;
            case "DefenderDefenders":
                return DefenderDef;
            case "SwordsmanDefenders":
                return SwordsmanDef;
            case "CatapultDefenders":
                return CatapultDef;
            case "KnightDefenders":
                return KnightDef;
            case "GiantDefenders":
                return GiantDef;
            case "BattleshipDefenders":
                return BattleshipDef;
            case "MindBenderDefenders":
                return MindBenderDef;
            case "NatureBunnyDefenders":
                return NatureBunnyDef;
            case "BoatDefenders":
                return BoatDef;
            case "ShipDefenders":
                return ShipDef;
            case "AmphibianDefenders":
                return AmphibianDef;
            case "TridentionDefenders":
                return TridentionDef;
            case "SharkDefenders":
                return SharkDef;
            case "PufferDefenders":
                return PufferDef;
            case "JellyDefenders":
                return JellyDef;
            case "CrabDefenders":
                return CrabDef;
            case "PolytaurDefenders":
                return PolytaurDef;
            case "NavalonDefenders":
                return NavalonDef;
            case "DragonEggDefenders":
                return DragonEggDef;
            case "BabyDragonDefenders":
                return BabyDragonDef;
            case "FireDragonDefenders":
                return FireDragonDef;
            case "MooniDefenders":
                return MooniDef;
            case "IceArcherDefenders":
                return IceArcherDef;
            case "BattleSledDefenders":
                return BattleSledDef;
            case "IceFortressDefenders":
                return IceFortressDef;
            case "GaamiDefenders":
                return GaamiDef;
            case "HexapodDefenders":
                return HexapodDef;
            case "KitonDefenders":
                return KitonDef;
            case "PhychiDefenders":
                return PhychiDef;
            case "RaychiDefenders":
                return RaychiDef;
            case "ShamanDefenders":
                return ShamanDef;
            case "ExidaDefenders":
                return ExidaDef;
            case "DoomuxDefenders":
                return DoomuxDef;
            case "CentipedeDefenders":
                return CentipedeDef;
            case "SegmentDefenders":
                return SegmentDef;
            case "DaggerDefenders":
                return DaggerDef;
            case "CloakDefenders":
                return CloakDef;
            case "DinghyDefenders":
                return DinghyDef;
            case "PirateDefenders":
                return PirateDef;
            case "RaftDefenders":
                return RaftDef;
            case "ScoutDefenders":
                return ScoutDef;
            case "RammerDefenders":
                return RammerDef;
            case "BomberDefenders":
                return BomberDef;
            case "JuggernautDefenders":
                return JuggernautDef;
            default:
                return SmallSwords;
        }
    }, []);

    // Convert the styling method
    const soldierUnitImageStyle = useCallback((team: string) => {
        const style = {
            height: "40px",
            width: "30px",
            objectFit: "contain",
            WebkitAppearance: "none",
            marginRight: 5,
            marginLeft: 5,
            borderRadius: 5,
            marginBottom: 5,
            marginTop: 5,
        } as React.CSSProperties;

        if (team === "Defenders") {
            style.transform = "scaleX(-1)";
        }

        return style;
    }, []);

    console.log("render soldierUnitAsRender");
    console.log("state", {
        isToggleOnVeteran,
        isToggleOnSafe,
        isToggleOnDefence,
        // other state variables
    });
    console.log("props", props);

    // The JSX remains mostly the same, just updating class methods to hooks
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginBottom: -4,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={displayIcon(props.typeUnit, props.team)}
                        alt="Soldier"
                        style={soldierUnitImageStyle(props.team)}
                    />
                    <span>
                        <label htmlFor={generateCheckboxIdHitpointField()}>
                            <input
                                id={generateCheckboxIdHitpointField()}
                                name={generateCheckboxIdHitpointField()}
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                defaultValue={props.healthBefore}
                                onBlur={(e) =>
                                    handleHitpointsChange(e.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                style={{ width: 38 }}
                                maxLength={2}
                                onFocus={handleFocus}
                            />
                        </label>
                    </span>
                    <span style={{ fontWeight: "bold" }}>
                        <ArrowForwardIcon /> {displayhealthAfter()}
                    </span>
                </div>

                <IconButton
                    onClick={() => props.OnDelete(props.id, props.team)}
                    style={{
                        marginRight: "5%",
                        padding: "0",
                        justifyContent: "flex-end",
                    }}
                    disableRipple
                    sx={{
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <CancelPresentationIcon
                        fontSize="large"
                        sx={{ color: pink[500], m: -0.5 }}
                    />
                </IconButton>
            </div>

            <IconButton
                onClick={() => props.OnIncreaseHitpoints(props.id, props.team)}
            >
                <AddBoxIcon color="success" />
            </IconButton>

            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnVeteranBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.veteran
                    );
                    handleClickVeteranBonus();
                }}
                style={{
                    ...makeInvisibleVeteranBonus(isToggleVisibleTypeUnit),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnVeteran === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnVeteran ? <b>vet</b> : "vet"}
            </Button>

            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnShipUnit(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.shipUnit
                    );
                    handleClickShipUnit();
                }}
                style={{
                    ...makeInvisibleShipUnit(isToggleVisibleShipUnit),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{ marginRight: 0.1 }}
            >
                mx{props.healthMax}
            </Button>

            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    props.OnSplashDamage(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.splashDamage
                    );
                    handleClickSplashDamage();
                }}
                style={{
                    ...makeInvisibleSplashDamage(
                        isToggleVisibleTypeUnit,
                        isToggleVisibleTeam
                    ),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnSplashDamage === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnSplashDamage ? <b>splsh</b> : "splsh"}
            </Button>

            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    props.OnExplodeDamage(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.explodeDamage
                    );
                    handleClickExplodeDamage();
                }}
                style={{
                    ...makeInvisibleExplodeDamage(
                        isToggleVisibleTypeUnit,
                        isToggleVisibleTeam
                    ),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnExplodeDamage === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnExplodeDamage ? <b>xpld</b> : "xpld"}
            </Button>

            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    props.OnDefenceBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.defenceBonus
                    );
                    handleClickDefenceBonus();
                }}
                style={{
                    ...makeInvisibleDefenceBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: "#A9A9A9",
                    ...(isToggleOnDefence === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnDefence ? <b>def</b> : "def"}
            </Button>

            <br />

            <IconButton
                onClick={() => props.OnDecreaseHitpoints(props.id, props.team)}
            >
                <IndeterminateCheckBoxIcon sx={{ color: pink[500] }} />
            </IconButton>

            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnWallBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.wallBonus
                    );
                    handleClickWallBonus();
                }}
                style={{
                    ...makeInvisibleWallBonus(
                        isToggleVisibleTeam,
                        isToggleVisibleTypeUnit
                    ),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnWall === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnWall ? <b>wall</b> : "wall"}
            </Button>

            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnPoisonedBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.poisonedBonus
                    );
                    handleClickPoisonedBonus();
                }}
                style={{
                    ...makeInvisiblePoisonedBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: isToggleOnPoisoned
                        ? "#CE93D8" // Fixed color for poisoned
                        : isBecamePoisoned
                          ? "#008000" // Green for became poisoned
                          : "#A9A9A9", // Default color
                }}
            >
                {isToggleOnPoisoned ? <b>pois</b> : "pois"}
            </Button>

            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnSafeBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.safeBonus
                    );
                    handleClickSafeBonus();
                }}
                style={{
                    ...makeInvisibleSafeBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnSafe === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnSafe ? <b>safe</b> : "safe"}
            </Button>

            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    props.OnBoostedBonus(
                        props.id,
                        props.team,
                        props.typeUnit,
                        props.boostedBonus
                    );
                    handleClickBoostedBonus();
                }}
                style={{
                    ...makeInvisibleBoostedBonus(isToggleVisibleTeam),
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: "#A9A9A9",
                    ...(isToggleOnBoosted === true && {
                        color: "#ce93d8", // Fixed double #
                    }),
                }}
            >
                {isToggleOnBoosted ? <b>bst</b> : "bst"}
            </Button>
        </div>
    );
};

// Rename export to match PascalCase convention
export default SoldierUnitAsRender;
