/** This component is used to add a defender or attacker unit to the battle ground array and giving the unit the initial stats */

import React, { useState, useEffect } from "react";
import { getSecondaryButtonStyles } from "../customStyles";
import SmallSwords from "../img/Other/SmallSwords.png";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { SoldierUnit } from "../types/SoldierUnit";

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

// Same Props as before
type SoldierUnitAsRenderProps = {
    soldierUnit: SoldierUnit;
    onDelete?: any;
    onUpdateHitpoints?: any;
    onIncreaseHitpoints?: any;
    onDecreaseHitpoints?: any;
    onVeteranBonus?: any;
    onDefenceBonus?: any;
    onWallBonus?: any;
    onSafeBonus?: any;
    onPoisonedBonus?: any;
    onBoostedBonus?: any;
    onShipUnit?: any;
    onSplashDamage: any;
    onExplodeDamage: any;
};

const SoldierUnitAsRender = ({
    soldierUnit,
    onDelete,
    onUpdateHitpoints,
    onIncreaseHitpoints,
    onDecreaseHitpoints,
    onVeteranBonus,
    onDefenceBonus,
    onWallBonus,
    onSafeBonus,
    onPoisonedBonus,
    onBoostedBonus,
    onShipUnit,
    onSplashDamage,
    onExplodeDamage,
}: SoldierUnitAsRenderProps) => {
    const [isToggleOnVeteran, setIsToggleOnVeteran] = useState(
        soldierUnit.veteran
    );
    const [isToggleOnSafe, setIsToggleOnSafe] = useState(soldierUnit.safeBonus);
    const [isToggleOnDefence, setIsToggleOnDefence] = useState(
        soldierUnit.defenceBonus
    );
    const [isToggleOnWall, setIsToggleOnWall] = useState(soldierUnit.wallBonus);
    const [isToggleOnPoisoned, setIsToggleOnPoisoned] = useState(
        soldierUnit.poisonedBonus
    );
    const [isBecamePoisoned, setIsBecamePoisoned] = useState(
        soldierUnit.becamePoisonedBonus
    );
    const [isToggleOnBoosted, setIsToggleOnBoosted] = useState(
        soldierUnit.boostedBonus
    );
    const [isToggleOnShipUnit, setIsToggleOnShipUnit] = useState(
        soldierUnit.shipUnit
    );
    const [isToggleOnSplashDamage, setIsToggleOnSplashDamage] = useState(
        soldierUnit.splashDamage
    );
    const [isToggleOnExplodeDamage, setIsToggleOnExplodeDamage] = useState(
        soldierUnit.explodeDamage
    );
    const [isToggleVisibleTypeUnit, setIsToggleVisibleTypeUnit] = useState(
        soldierUnit.typeUnit
    );
    const [isToggleVisibleTeam, setIsToggleVisibleTeam] = useState(
        soldierUnit.team
    );
    const [isToggleVisibleShipUnit, setIsToggleVisibleShipUnit] = useState(
        soldierUnit.shipUnit
    );
    const [healthMaxShipUnit, setHealthMaxShipUnit] = useState(
        soldierUnit.healthMax
    );
    const [healthInputField, setHealthInputField] = useState<string | number>(
        soldierUnit.healthBefore
    );
    const [healthBeforeAsState, setHealthBeforeAsState] = useState(
        soldierUnit.healthBefore
    );
    const [healthAfterAsState, setHealthAfterAsState] = useState(
        soldierUnit.healthAfter ?? soldierUnit.healthBefore
    );

    useEffect(
        () => setIsToggleOnVeteran(soldierUnit.veteran),
        [soldierUnit.veteran]
    );
    useEffect(
        () => setIsToggleOnSafe(soldierUnit.safeBonus),
        [soldierUnit.safeBonus]
    );
    useEffect(
        () => setIsToggleOnDefence(soldierUnit.defenceBonus),
        [soldierUnit.defenceBonus]
    );
    useEffect(
        () => setIsToggleOnWall(soldierUnit.wallBonus),
        [soldierUnit.wallBonus]
    );
    useEffect(
        () => setIsToggleOnPoisoned(soldierUnit.poisonedBonus),
        [soldierUnit.poisonedBonus]
    );
    useEffect(
        () => setIsToggleOnBoosted(soldierUnit.boostedBonus),
        [soldierUnit.boostedBonus]
    );
    useEffect(
        () => setIsToggleOnSplashDamage(soldierUnit.splashDamage),
        [soldierUnit.splashDamage]
    );
    useEffect(
        () => setIsToggleOnExplodeDamage(soldierUnit.explodeDamage),
        [soldierUnit.explodeDamage]
    );
    useEffect(
        () => setIsToggleOnShipUnit(soldierUnit.shipUnit),
        [soldierUnit.shipUnit]
    );
    useEffect(
        () => setIsBecamePoisoned(soldierUnit.becamePoisonedBonus),
        [soldierUnit.becamePoisonedBonus]
    );
    useEffect(
        () => setIsToggleVisibleTeam(soldierUnit.team),
        [soldierUnit.team]
    );
    useEffect(
        () => setIsToggleVisibleTypeUnit(soldierUnit.typeUnit),
        [soldierUnit.typeUnit]
    );
    useEffect(
        () => setIsToggleVisibleShipUnit(soldierUnit.shipUnit),
        [soldierUnit.shipUnit]
    );
    useEffect(
        () => setHealthMaxShipUnit(soldierUnit.healthMax),
        [soldierUnit.healthMax]
    );
    useEffect(
        () => setHealthInputField(soldierUnit.healthBefore),
        [soldierUnit.healthBefore]
    );
    useEffect(
        () => setHealthBeforeAsState(soldierUnit.healthBefore),
        [soldierUnit.healthBefore]
    );
    useEffect(
        () =>
            setHealthAfterAsState(
                soldierUnit.healthAfter ?? soldierUnit.healthBefore
            ),
        [soldierUnit.healthAfter, soldierUnit.healthBefore]
    );

    const handleClickSplashDamage = () => {
        setIsToggleOnSplashDamage(!isToggleOnSplashDamage);
        console.log("Unit does splash damage");
    };
    const handleClickExplodeDamage = () => {
        setIsToggleOnExplodeDamage(!isToggleOnExplodeDamage);
        console.log("Unit does explode damage");
    };
    const handleClickVeteranBonus = () => {
        setIsToggleOnVeteran(!isToggleOnVeteran);
        console.log("Unit is veteran");
    };
    const handleClickShipUnit = () => {
        setHealthMaxShipUnit(soldierUnit.healthMax);
    };
    const handleClickSafeBonus = () => {
        setIsToggleOnSafe(!isToggleOnSafe);
        console.log("Unit is safe");
    };
    const handleClickBoostedBonus = () => {
        setIsToggleOnBoosted(!isToggleOnBoosted);
        console.log("Unit is boosted");
    };
    const handleClickDefenceBonus = () => {
        let defVal = !isToggleOnDefence;
        setIsToggleOnDefence(defVal);
        if (defVal) {
            setIsToggleOnPoisoned(false);
            setIsToggleOnWall(false);
        }
        console.log("Unit has defence bonus");
    };
    const handleClickWallBonus = () => {
        let wallVal = !isToggleOnWall;
        setIsToggleOnWall(wallVal);
        if (wallVal) {
            setIsToggleOnPoisoned(false);
            setIsToggleOnDefence(false);
        }
        console.log("Unit has wall bonus");
    };
    const handleClickPoisonedBonus = () => {
        let poisVal = !isToggleOnPoisoned;
        setIsToggleOnPoisoned(poisVal);
        if (poisVal) {
            setIsToggleOnWall(false);
            setIsToggleOnDefence(false);
        }
        console.log("Unit is poisoned");
    };
    const handleHitpointsChange = (healthBeforeManualInput: any) => {
        // This is to fix some input glitch where +/-1 HP is done while direct input is active
        const healthBeforeManualInputNumericValue =
            parseFloat(healthBeforeManualInput) || 0;
        setHealthInputField(healthBeforeManualInputNumericValue);
        console.log(
            "Hitpoints are now: " + healthBeforeManualInputNumericValue
        );
        onUpdateHitpoints(
            soldierUnit.id,
            soldierUnit.team,
            healthBeforeManualInputNumericValue
        );
    };
    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") handleHitpointsChange(e.target.value);
    };
    const handleFocus = (event: any) => {
        event.target.select();
    };
    const displayHealthAfter = () => {
        return (
            <span
                data-testid={`${soldierUnit.team.toLowerCase()}-${soldierUnit.id}-health-after`}
            >
                {healthAfterAsState}
            </span>
        );
    };
    const unitImages: { [key: string]: { [key: string]: string } } = {
        Attackers: {
            Warrior: WarriorAtt,
            Archer: ArcherAtt,
            Rider: RiderAtt,
            Defender: DefenderAtt,
            Swordsman: SwordsmanAtt,
            Catapult: CatapultAtt,
            Knight: KnightAtt,
            Giant: GiantAtt,
            Battleship: BattleshipAtt,
            MindBender: MindBenderAtt,
            NatureBunny: NatureBunnyAtt,
            Boat: BoatAtt,
            Ship: ShipAtt,
            Amphibian: AmphibianAtt,
            Tridention: TridentionAtt,
            Shark: SharkAtt,
            Puffer: PufferAtt,
            Jelly: JellyAtt,
            Crab: CrabAtt,
            Polytaur: PolytaurAtt,
            Navalon: NavalonAtt,
            DragonEgg: DragonEggAtt,
            BabyDragon: BabyDragonAtt,
            FireDragon: FireDragonAtt,
            Mooni: MooniAtt,
            IceArcher: IceArcherAtt,
            BattleSled: BattleSledAtt,
            IceFortress: IceFortressAtt,
            Gaami: GaamiAtt,
            Hexapod: HexapodAtt,
            Kiton: KitonAtt,
            Phychi: PhychiAtt,
            Raychi: RaychiAtt,
            Shaman: ShamanAtt,
            Exida: ExidaAtt,
            Doomux: DoomuxAtt,
            Centipede: CentipedeAtt,
            Segment: SegmentAtt,
            Dagger: DaggerAtt,
            Cloak: CloakAtt,
            Dinghy: DinghyAtt,
            Pirate: PirateAtt,
            Raft: RaftAtt,
            Scout: ScoutAtt,
            Rammer: RammerAtt,
            Bomber: BomberAtt,
            Juggernaut: JuggernautAtt,
        },
        Defenders: {
            Warrior: WarriorDef,
            Archer: ArcherDef,
            Rider: RiderDef,
            Defender: DefenderDef,
            Swordsman: SwordsmanDef,
            Catapult: CatapultDef,
            Knight: KnightDef,
            Giant: GiantDef,
            Battleship: BattleshipDef,
            MindBender: MindBenderDef,
            NatureBunny: NatureBunnyDef,
            Boat: BoatDef,
            Ship: ShipDef,
            Amphibian: AmphibianDef,
            Tridention: TridentionDef,
            Shark: SharkDef,
            Puffer: PufferDef,
            Jelly: JellyDef,
            Crab: CrabDef,
            Polytaur: PolytaurDef,
            Navalon: NavalonDef,
            DragonEgg: DragonEggDef,
            BabyDragon: BabyDragonDef,
            FireDragon: FireDragonDef,
            Mooni: MooniDef,
            IceArcher: IceArcherDef,
            BattleSled: BattleSledDef,
            IceFortress: IceFortressDef,
            Gaami: GaamiDef,
            Hexapod: HexapodDef,
            Kiton: KitonDef,
            Phychi: PhychiDef,
            Raychi: RaychiDef,
            Shaman: ShamanDef,
            Exida: ExidaDef,
            Doomux: DoomuxDef,
            Centipede: CentipedeDef,
            Segment: SegmentDef,
            Dagger: DaggerDef,
            Cloak: CloakDef,
            Dinghy: DinghyDef,
            Pirate: PirateDef,
            Raft: RaftDef,
            Scout: ScoutDef,
            Rammer: RammerDef,
            Bomber: BomberDef,
            Juggernaut: JuggernautDef,
        },
    };

    const displayIcon = (typeUnit: string, team: string) => {
        return unitImages[team][typeUnit] || SmallSwords;
    };

    const soldierUnitImageStyle = (team: string) => {
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
        if (team === "Defenders") style.transform = "scaleX(-1)";
        return style;
    };

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
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={displayIcon(
                            soldierUnit.typeUnit,
                            soldierUnit.team
                        )}
                        alt="Soldier"
                        style={soldierUnitImageStyle(soldierUnit.team)}
                    />
                    <span>
                        <label
                            htmlFor={
                                soldierUnit.team +
                                soldierUnit.id +
                                "HitpointField"
                            }
                        >
                            <input
                                id={
                                    soldierUnit.team +
                                    soldierUnit.id +
                                    "HitpointField"
                                }
                                name={
                                    soldierUnit.team +
                                    soldierUnit.id +
                                    "HitpointField"
                                }
                                type="text"
                                inputMode="decimal"
                                value={healthInputField || ""}
                                onChange={(e) =>
                                    setHealthInputField(e.target.value)
                                }
                                onBlur={(e) =>
                                    handleHitpointsChange(e.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                style={{ width: 38 }}
                                maxLength={3}
                                onFocus={handleFocus}
                            />
                        </label>
                    </span>
                    <span style={{ fontWeight: "bold" }}>
                        <ArrowForwardIcon /> {displayHealthAfter()}
                    </span>
                </div>
                <IconButton
                    onClick={() => onDelete(soldierUnit.id, soldierUnit.team)}
                    style={{
                        marginRight: "5%",
                        padding: "0",
                        justifyContent: "flex-end",
                    }}
                    disableRipple
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                    <CancelPresentationIcon
                        fontSize="large"
                        sx={{ color: pink[500], m: -0.5 }}
                    />
                </IconButton>
            </div>
            <IconButton
                onClick={() =>
                    onIncreaseHitpoints(soldierUnit.id, soldierUnit.team)
                }
            >
                <AddBoxIcon color="success" />
            </IconButton>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onVeteranBonus(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.veteran
                    );
                    handleClickVeteranBonus();
                }}
                style={{
                    display: soldierUnit.config.skills.includes("static")
                        ? "none"
                        : "visible",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnVeteran && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnVeteran ? <b>vet</b> : "vet"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onShipUnit(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.shipUnit
                    );
                    handleClickShipUnit();
                }}
                style={{
                    display: soldierUnit.shipUnit ? "visible" : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{ marginRight: 0.1 }}
            >
                mx{soldierUnit.healthMax}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    onSplashDamage(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.splashDamage
                    );
                    handleClickSplashDamage();
                }}
                style={{
                    display:
                        soldierUnit.team === "Attackers" &&
                        (soldierUnit.config.skills.includes("splash") ||
                            soldierUnit.config.skills.includes("stomp"))
                            ? "visible"
                            : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnSplashDamage && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnSplashDamage ? <b>splsh</b> : "splsh"}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                    onExplodeDamage(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.explodeDamage
                    );
                    handleClickExplodeDamage();
                }}
                style={{
                    display:
                        soldierUnit.team === "Attackers" &&
                        soldierUnit.config.skills.includes("explode")
                            ? "visible"
                            : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnExplodeDamage && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnExplodeDamage ? <b>xpld</b> : "xpld"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onDefenceBonus(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.defenceBonus
                    );
                    handleClickDefenceBonus();
                }}
                style={{
                    display:
                        soldierUnit.team === "Defenders" ? "visible" : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: "#A9A9A9",
                    ...(isToggleOnDefence && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnDefence ? <b>def</b> : "def"}
            </Button>
            <br />
            <IconButton
                onClick={() =>
                    onDecreaseHitpoints(soldierUnit.id, soldierUnit.team)
                }
            >
                <IndeterminateCheckBoxIcon sx={{ color: pink[500] }} />
            </IconButton>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onWallBonus(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.wallBonus
                    );
                    handleClickWallBonus();
                }}
                style={{
                    display:
                        soldierUnit.team === "Defenders" &&
                        soldierUnit.config.skills.includes("fortify")
                            ? "visible"
                            : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnWall && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnWall ? <b>wall</b> : "wall"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onPoisonedBonus(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.poisonedBonus
                    );
                    handleClickPoisonedBonus();
                }}
                style={{
                    display:
                        soldierUnit.team === "Defenders" ? "visible" : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: isToggleOnPoisoned
                        ? "##CE93D8"
                        : isBecamePoisoned
                          ? "#008000"
                          : "#A9A9A9",
                }}
            >
                {isToggleOnPoisoned ? <b>pois</b> : "pois"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onSafeBonus(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.safeBonus
                    );
                    handleClickSafeBonus();
                }}
                style={{
                    display:
                        soldierUnit.team === "Attackers" &&
                        !soldierUnit.config.skills.includes("surprise")
                            ? "visible"
                            : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.1,
                    color: "#A9A9A9",
                    ...(isToggleOnSafe && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnSafe ? <b>safe</b> : "safe"}
            </Button>
            <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                    onBoostedBonus(
                        soldierUnit.id,
                        soldierUnit.team,
                        soldierUnit.typeUnit,
                        soldierUnit.boostedBonus
                    );
                    handleClickBoostedBonus();
                }}
                style={{
                    display:
                        soldierUnit.team === "Attackers" ? "visible" : "none",
                    ...getSecondaryButtonStyles(),
                }}
                sx={{
                    marginRight: 0.25,
                    color: "#A9A9A9",
                    ...(isToggleOnBoosted && { color: "##ce93d8" }),
                }}
            >
                {isToggleOnBoosted ? <b>bst</b> : "bst"}
            </Button>
        </div>
    );
};
export default SoldierUnitAsRender;
