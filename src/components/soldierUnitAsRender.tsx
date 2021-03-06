/** This component is used to add a defender or attacker unit to the battle ground array and giving the unit the initial stats */

import * as React from "react";
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
import SmallSwords from "../img/Other/SmallSwords.png";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { pink, grey } from "@mui/material/colors";
import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import ClearIcon from "@mui/icons-material/Clear";
import { fontSize } from "@mui/system";

type Props = {
  id: number;
  typeUnit: string;
  team: string;
  healthMax: number;
  healthBefore: number;
  healthAfter?: number;
  attack?: number;
  defence?: number;
  veteran?: boolean;
  wallBonus?: boolean;
  defenceBonus?: boolean;
  safeBonus?: boolean;
  poisonedBonus?: boolean;
  boostedBonus?: boolean;
  splashDamage?: boolean;
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
};

type State = {
  isToggleOnVeteran: boolean;
  isToggleOnSafe: boolean;
  isToggleOnDefence: boolean;
  isToggleOnWall: boolean;
  isToggleOnPoisoned: boolean;
  isToggleOnBoosted: boolean;
  isToggleOnShipUnit: boolean;
  isToggleOnSplashDamage: boolean;
  healthMaxShipUnit: number;
  healthInputField: number;
};

class soldierUnitAsRender extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = {
      isToggleOnVeteran: false,
      isToggleOnSafe: false,
      isToggleOnDefence: false,
      isToggleOnWall: false,
      isToggleOnPoisoned: false,
      isToggleOnBoosted: false,
      isToggleOnSplashDamage: false,
      isToggleOnShipUnit: this.props.shipUnit,
      healthMaxShipUnit: this.props.healthMax,
      healthInputField: this.props.healthBefore,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClickVeteranBonus = this.handleClickVeteranBonus.bind(this);
    this.handleClickDefenceBonus = this.handleClickDefenceBonus.bind(this);
    this.handleClickWallBonus = this.handleClickWallBonus.bind(this);
    this.handleClickSafeBonus = this.handleClickSafeBonus.bind(this);
    this.handleClickPoisonedBonus = this.handleClickPoisonedBonus.bind(this);
    this.handleClickBoostedBonus = this.handleClickBoostedBonus.bind(this);
    this.handleClickSplashDamage = this.handleClickSplashDamage.bind(this);
    this.handleClickShipUnit = this.handleClickShipUnit.bind(this);
    this.handleHitpointsChange = this.handleHitpointsChange.bind(this);
    //this.handleHitpointsSubmit = this.handleHitpointsSubmit.bind(this);
  }

  handleClickSplashDamage() {
    let isToggleOnSplashDamage = this.props.splashDamage;

    if (isToggleOnSplashDamage === false) {
      isToggleOnSplashDamage = true;
    } else {
      isToggleOnSplashDamage = false;
    }

    this.setState({ isToggleOnSplashDamage });

    console.log("Unit does splash damage");
  }

  handleClickVeteranBonus() {
    let isToggleOnVeteran = this.props.veteran;

    if (isToggleOnVeteran === false) {
      isToggleOnVeteran = true;
    } else {
      isToggleOnVeteran = false;
    }

    this.setState({ isToggleOnVeteran });

    console.log("Unit is veteran");
  }

  handleClickShipUnit() {
    let healthMaxShipUnit = this.props.healthMax;

    this.setState({ healthMaxShipUnit });
  }

  handleClickSafeBonus() {
    let isToggleOnSafe = this.props.safeBonus;

    if (isToggleOnSafe === false) {
      isToggleOnSafe = true;
    } else {
      isToggleOnSafe = false;
    }

    this.setState({ isToggleOnSafe });

    console.log("Unit is safe");
  }

  handleClickBoostedBonus() {
    let isToggleOnBoosted = this.props.boostedBonus;

    if (isToggleOnBoosted === false) {
      isToggleOnBoosted = true;
    } else {
      isToggleOnBoosted = false;
    }

    this.setState({ isToggleOnBoosted });

    console.log("Unit is boosted");
  }

  handleClickDefenceBonus() {
    let isToggleOnPoisoned = this.props.poisonedBonus;
    let isToggleOnWall = this.props.wallBonus;
    let isToggleOnDefence = this.props.defenceBonus;

    if (isToggleOnDefence === false) {
      isToggleOnDefence = true;
      isToggleOnPoisoned = false;
      isToggleOnWall = false;
      this.setState({ isToggleOnPoisoned });
      this.setState({ isToggleOnWall });
    } else {
      isToggleOnDefence = false;
    }

    this.setState({ isToggleOnDefence });

    console.log("Unit has defence bonus");
  }

  handleClickWallBonus() {
    let isToggleOnPoisoned = this.props.poisonedBonus;
    let isToggleOnWall = this.props.wallBonus;
    let isToggleOnDefence = this.props.defenceBonus;

    if (isToggleOnWall === false) {
      isToggleOnWall = true;
      isToggleOnPoisoned = false;
      isToggleOnDefence = false;
      this.setState({ isToggleOnPoisoned });
      this.setState({ isToggleOnDefence });
    } else {
      isToggleOnWall = false;
    }

    this.setState({ isToggleOnWall });

    console.log("Unit has wall bonus");
  }

  handleClickPoisonedBonus() {
    let isToggleOnPoisoned = this.props.poisonedBonus;
    let isToggleOnWall = this.props.wallBonus;
    let isToggleOnDefence = this.props.defenceBonus;

    if (isToggleOnPoisoned === false) {
      isToggleOnPoisoned = true;
      isToggleOnWall = false;
      isToggleOnDefence = false;
      this.setState({ isToggleOnWall });
      this.setState({ isToggleOnDefence });
    } else {
      isToggleOnPoisoned = false;
    }

    this.setState({ isToggleOnPoisoned });

    console.log("Unit is poisoned");
  }

  render() {
    console.log("props", this.props);

    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginBottom: -4,
          }}
        >
          {/* <span>{this.displayId() + "."}</span> */}
          <img
            src={this.displayIcon(this.props.typeUnit, this.props.team)}
            alt="Soldier"
            style={this.soldierUnitImageStyle(this.props.team)}
          />
          <span>
            <label htmlFor={this.generateCheckboxIdHitpointField()}>
              <input
                id={this.generateCheckboxIdHitpointField()}
                name={this.generateCheckboxIdHitpointField()}
                type="text" // this type gives the right keyboard
                inputMode="numeric"
                pattern="[0-9]*"
                //type="number"
                //defaultValue={this.state.healthInputField}
                value={this.props.healthBefore}
                //value={this.state.healthInputField}
                //onChange={() => this.props.OnUpdateHitpoints()}
                onChange={(e) => this.handleHitpointsChange(e.target.value)}
                style={{ width: 38 }}
                maxLength={2}
                // size={2}
                //style={{width:2em }}
                //size={1}
                //width={2}
                onFocus={this.handleFocus}
              ></input>
            </label>
          </span>

          <span style={{ fontWeight: "bold" }}>
            <ArrowForwardIcon /> {this.displayhealthAfter()}
          </span>
          <IconButton
            onClick={() => this.props.OnDelete(this.props.id, this.props.team)}
            //className="btn btn-warning btn-sm"
          >
            <CancelPresentationIcon
              fontSize="large"
              sx={{ color: pink[500], m: -0.5 }}
            />
          </IconButton>
        </div>
        <IconButton
          onClick={() =>
            this.props.OnIncreaseHitpoints(this.props.id, this.props.team)
          }
          //  className="btn btn-success btn-sm"
        >
          <AddBoxIcon color="success" />
        </IconButton>

        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            this.props.OnVeteranBonus(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.veteran
            );
            this.handleClickVeteranBonus();
          }}
          style={this.makeInvisibleVeteranBonus(this.props.typeUnit)}
          sx={{
            marginRight: 0.1,
            color: "#A9A9A9",
            ...(this.state.isToggleOnVeteran === true && {
              color: "##ce93d8",
            }),
          }}
        >
          {this.state.isToggleOnVeteran ? <b>vet</b> : "vet"}
        </Button>

        {/* <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
          style={this.makeInvisibleVeteranBonus(this.props.typeUnit)}
          sx={{ marginRight: 0.1 }}
        >
          {this.state.isToggleOnVeteran ? <b>vet</b> : "vet"}
        </ToggleButton> */}

        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            this.props.OnShipUnit(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.shipUnit
            );
            this.handleClickShipUnit();
          }}
          style={this.makeInvisibleShipUnit(this.props.shipUnit)}
          sx={{ marginRight: 0.1 }}
        >
          mx{this.props.healthMax}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => {
            this.props.OnSplashDamage(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.splashDamage
            );
            this.handleClickSplashDamage();
          }}
          style={this.makeInvisibleSplashDamage(
            this.props.typeUnit,
            this.props.team
          )}
          sx={{
            marginRight: 0.1,
            color: "#A9A9A9",
            ...(this.state.isToggleOnSplashDamage === true && {
              color: "##ce93d8",
            }),
          }}
        >
          {this.state.isToggleOnSplashDamage ? <b>splsh</b> : "splsh"}
        </Button>
        <Button
          variant="outlined"
          //variant={this.state.isToggleOnDefence ? "contained" : "outlined"}
          color="secondary"
          //background-color="#4CAF50"
          size="small"
          onClick={() => {
            this.props.OnDefenceBonus(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.defenceBonus
            );
            this.handleClickDefenceBonus();
          }}
          style={this.makeInvisibleDefenceBonus(this.props.team)}
          // sx={{ marginRight: 0.1, color: grey[500] }}

          sx={{
            marginRight: 0.25,
            color: "#A9A9A9",
            ...(this.state.isToggleOnDefence === true && {
              color: "##ce93d8",
            }),
          }}

          // sx={{
          //   backgroundColor: "#4CAF50",
          //   ...(this.state.isToggleOnDefence === true && {
          //     backgroundColor: "#F0E666",
          //   }),
          // }}
          // sx={{ marginLeft: 0.5 }}
        >
          {this.state.isToggleOnDefence ? <b>def</b> : "def"}
        </Button>
        <br></br>
        <IconButton
          onClick={() =>
            this.props.OnDecreaseHitpoints(this.props.id, this.props.team)
          }
          // className="btn btn-danger btn-sm"
        >
          <IndeterminateCheckBoxIcon sx={{ color: pink[500] }} />
        </IconButton>

        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            this.props.OnWallBonus(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.wallBonus
            );
            this.handleClickWallBonus();
          }}
          style={this.makeInvisibleWallBonus(this.props.team)}
          sx={{
            marginRight: 0.1,
            color: "#A9A9A9",
            ...(this.state.isToggleOnWall === true && {
              color: "##ce93d8",
            }),
          }}
        >
          {this.state.isToggleOnWall ? <b>wall</b> : "wall"}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            this.props.OnPoisonedBonus(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.poisonedBonus
            );
            this.handleClickPoisonedBonus();
          }}
          style={this.makeInvisiblePoisonedBonus(this.props.team)}
          // sx={{ marginRight: -0.5 }}
          sx={{
            marginRight: 0.25,
            color: "#A9A9A9",
            ...(this.state.isToggleOnPoisoned === true && {
              color: "##ce93d8",
            }),
          }}
        >
          {this.state.isToggleOnPoisoned ? <b>pois</b> : "pois"}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            this.props.OnSafeBonus(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.safeBonus
            );
            this.handleClickSafeBonus();
          }}
          style={this.makeInvisibleSafeBonus(this.props.team)}
          sx={{
            marginRight: 0.1,
            color: "#A9A9A9",
            ...(this.state.isToggleOnSafe === true && {
              color: "##ce93d8",
            }),
          }}
        >
          {this.state.isToggleOnSafe ? <b>safe</b> : "safe"}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            this.props.OnBoostedBonus(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.boostedBonus
            );
            this.handleClickBoostedBonus();
          }}
          style={this.makeInvisibleBoostedBonus(this.props.team)}
          sx={{
            marginRight: 0.25,
            color: "#A9A9A9",
            ...(this.state.isToggleOnBoosted === true && {
              color: "##ce93d8",
            }),
          }}
          // sx={{ marginRight: 0.1 }}
        >
          {this.state.isToggleOnBoosted ? <b>bst</b> : "bst"}
        </Button>
      </div>
    );
  }

  makeInvisibleVeteranBonus(unitType: string) {
    if (
      unitType === "Ship" ||
      unitType === "Boat" ||
      unitType === "Navalon" ||
      unitType === "Giant" ||
      unitType === "MindBender" ||
      unitType === "NatureBunny" ||
      unitType === "Crab" ||
      unitType === "DragonEgg" ||
      unitType === "BabyDragon" ||
      unitType === "FireDragon" ||
      unitType === "Mooni" ||
      unitType === "Gaami" ||
      unitType === "Shaman" ||
      unitType === "Centipede" ||
      unitType === "Segment" ||
      unitType === "Cloak" ||
      unitType === "Dinghy" ||
      unitType === "Battleship"
    ) {
      return { display: "none " };
    } else {
      return { display: "visible" };
    }
  }

  makeInvisibleShipUnit(shipUnit: boolean) {
    if (shipUnit === false) {
      return { display: "none" };
    } else {
      return { display: "visible" };
    }
  }

  makeInvisibleSplashDamage(unitType: string, team: string) {
    if (unitType === "FireDragon" && team === "Attackers") {
      return { display: "visible" };
    } else {
      return { display: "none" };
    }
  }

  makeInvisibleDefenceBonus(team: string) {
    if (team === "Attackers") {
      return { display: "none" };
    } else {
      return { display: "visible" };
    }
  }

  makeInvisibleWallBonus(team: string) {
    if (team === "Attackers") {
      return { display: "none" };
    } else {
      return { display: "visible" };
    }
  }

  makeInvisibleSafeBonus(team: string) {
    if (team === "Defenders") {
      return { display: "none" };
    } else {
      return { display: "visible" };
    }
  }

  makeInvisibleBoostedBonus(team: string) {
    if (team === "Defenders") {
      return { display: "none" };
    } else {
      return { display: "visible" };
    }
  }

  makeInvisiblePoisonedBonus(team: string) {
    if (team === "Attackers") {
      return { display: "none" };
    } else {
      return { display: "visible" };
    }
  }

  handleHitpointsChange(healthBeforeManualInput: any) {
    this.setState({ healthInputField: parseInt(healthBeforeManualInput) });

    console.log("Hitpoints are now: " + healthBeforeManualInput);

    this.props.OnUpdateHitpoints(
      this.props.id,
      this.props.team,
      healthBeforeManualInput
    );
  }

  generateCheckboxIdHitpointField() {
    const checkboxId = this.props.team + this.props.id + "HitpointField";
    return checkboxId;
  }

  handleFocus = (event: any) => event.target.select();

  displayhealthBefore() {
    return this.props.healthBefore;
  }

  displayhealthAfter() {
    return this.props.healthAfter;
  }

  displayId() {
    return this.props.id;
  }

  displayIcon(typeUnit: string, team: string) {
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
      default:
        return SmallSwords;
    }
  }

  soldierUnitImageStyle(team: string) {
    switch (team) {
      case "Defenders":
        const soldierUnitImageStyleDefenders = {
          height: "40px",
          width: "30px",
          objectFit: "contain",
          WebkitAppearance: "none",
          marginRight: 5,
          marginLeft: 5,
          borderRadius: 5,
          marginBottom: 5,
          marginTop: 5,
          transform: "scaleX(-1)", // make this in an if statement and remove the switch
        } as React.CSSProperties;

        return soldierUnitImageStyleDefenders;

      default:
        const soldierUnitImageStyleAttackers = {
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

        return soldierUnitImageStyleAttackers;
    }
  }
}
export default soldierUnitAsRender;
