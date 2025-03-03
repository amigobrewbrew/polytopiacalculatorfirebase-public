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
  typeUnit: string; // This must be managed by state because needs to change for set the buttongs when units take another position in the array
  team: string; // This mustbe managed by state because needs to change for set the buttongs when units take another position in the array
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
  shipUnit: boolean; // This must be managed bystate because needs to change for set the buttongs when units take another position in the array
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

type State = {
  isToggleOnVeteran: boolean;
  isToggleOnSafe: boolean;
  isToggleOnDefence: boolean;
  isToggleOnWall: boolean;
  isToggleOnPoisoned: boolean;
  isBecamePoisoned: boolean;
  isToggleOnBoosted: boolean;
  isToggleOnShipUnit: boolean;
  isToggleOnSplashDamage: boolean;
  isToggleOnExplodeDamage: boolean;
  isToggleVisibleTypeUnit: string;
  isToggleVisibleTeam: string;
  isToggleVisibleShipUnit: boolean;
  healthMaxShipUnit: number;
  healthInputField: number;
  healthBeforeAsState: number;
  healthAfterAsState: number;
};

class soldierUnitAsRender extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isToggleOnVeteran: this.props.veteran,
      isToggleOnSafe: this.props.safeBonus,
      isToggleOnDefence: this.props.defenceBonus,
      isToggleOnWall: this.props.wallBonus,
      isToggleOnPoisoned: this.props.poisonedBonus,
      isBecamePoisoned: this.props.becamePoisonedBonus,
      isToggleOnBoosted: this.props.boostedBonus,
      isToggleOnSplashDamage: this.props.splashDamage,
      isToggleOnExplodeDamage: this.props.explodeDamage,
      isToggleOnShipUnit: this.props.shipUnit,
      isToggleVisibleTypeUnit: this.props.typeUnit,
      isToggleVisibleTeam: this.props.team,
      isToggleVisibleShipUnit: this.props.shipUnit,
      healthMaxShipUnit: this.props.healthMax,
      healthInputField: this.props.healthBefore,
      healthBeforeAsState: this.props.healthBefore,
      healthAfterAsState: this.props.healthAfter ?? this.props.healthBefore,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClickVeteranBonus = this.handleClickVeteranBonus.bind(this);
    this.handleClickDefenceBonus = this.handleClickDefenceBonus.bind(this);
    this.handleClickWallBonus = this.handleClickWallBonus.bind(this);
    this.handleClickSafeBonus = this.handleClickSafeBonus.bind(this);
    this.handleClickPoisonedBonus = this.handleClickPoisonedBonus.bind(this);
    this.handleClickBoostedBonus = this.handleClickBoostedBonus.bind(this);
    this.handleClickSplashDamage = this.handleClickSplashDamage.bind(this);
    this.handleClickExplodeDamage = this.handleClickExplodeDamage.bind(this);
    this.handleClickShipUnit = this.handleClickShipUnit.bind(this);
    this.handleHitpointsChange = this.handleHitpointsChange.bind(this);
    //this.handleHitpointsSubmit = this.handleHitpointsSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps: Props) {
  //   this.setState({ isToggleOnShipUnit: nextProps.shipUnit });
  //   this.setState({ isToggleVisibleTypeUnit: nextProps.typeUnit });
  //   this.setState({ isToggleVisibleTeam: nextProps.team });
  //   this.setState({ isToggleVisibleShipUnit: nextProps.shipUnit });
  //   this.setState({ healthMaxShipUnit: nextProps.healthMax });
  //   this.setState({ healthInputField: nextProps.healthBefore });
  //   this.setState({ healthBeforeAsState: nextProps.healthBefore });
  //   this.setState({ healthAfterAsState: nextProps.healthAfter });
  // }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.isToggleOnVeteran !== nextProps.veteran) {
      return {
        isToggleOnVeteran: nextProps.veteran,
      };
    }
    if (prevState.isToggleOnSafe !== nextProps.safeBonus) {
      return {
        isToggleOnSafe: nextProps.safeBonus,
      };
    }
    if (prevState.isToggleOnDefence !== nextProps.defenceBonus) {
      return {
        isToggleOnDefence: nextProps.defenceBonus,
      };
    }
    if (prevState.isToggleOnWall !== nextProps.wallBonus) {
      return {
        isToggleOnWall: nextProps.wallBonus,
      };
    }
    if (prevState.isToggleOnPoisoned !== nextProps.poisonedBonus) {
      return {
        isToggleOnPoisoned: nextProps.poisonedBonus,
      };
    }
    if (prevState.isToggleOnBoosted !== nextProps.boostedBonus) {
      return {
        isToggleOnBoosted: nextProps.boostedBonus,
      };
    }
    if (prevState.isToggleOnShipUnit !== nextProps.shipUnit) {
      return {
        isToggleOnShipUnit: nextProps.shipUnit,
      };
    }
    if (prevState.isToggleOnSplashDamage !== nextProps.splashDamage) {
      return {
        isToggleOnSplashDamage: nextProps.splashDamage,
      };
    }
    if (prevState.isToggleOnExplodeDamage !== nextProps.explodeDamage) {
      return {
        isToggleOnExplodeDamage: nextProps.explodeDamage,
      };
    }
    if (prevState.isToggleVisibleShipUnit !== nextProps.shipUnit) {
      return {
        isToggleVisibleShipUnit: nextProps.shipUnit,
      };
    }
    if (prevState.isToggleVisibleTypeUnit !== nextProps.typeUnit) {
      return {
        isToggleVisibleTypeUnit: nextProps.typeUnit,
      };
    }
    if (prevState.isToggleVisibleTeam !== nextProps.team) {
      return {
        isToggleVisibleTeam: nextProps.team,
      };
    }
    if (prevState.healthMaxShipUnit !== nextProps.healthMax) {
      return {
        healthMaxShipUnit: nextProps.healthMax,
      };
    }
    if (prevState.healthInputField !== nextProps.healthBefore) {
      return {
        healthInputField: nextProps.healthBefore,
      };
    }
    if (prevState.healthBeforeAsState !== nextProps.healthBefore) {
      return {
        healthBeforeAsState: nextProps.healthBefore,
      };
    }
    if (prevState.healthAfterAsState !== nextProps.healthAfter) {
      return {
        healthAfterAsState: nextProps.healthAfter,
      };
    }
    if (prevState.isBecamePoisoned !== nextProps.becamePoisonedBonus) {
      return {
        isBecamePoisoned: nextProps.becamePoisonedBonus,
      };
    }

    // Return null to indicate no change to state.
    return null;
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

  handleClickExplodeDamage() {
    let isToggleOnExplodeDamage = this.props.explodeDamage;

    if (isToggleOnExplodeDamage === false) {
      isToggleOnExplodeDamage = true;
    } else {
      isToggleOnExplodeDamage = false;
    }

    this.setState({ isToggleOnExplodeDamage });

    console.log("Unit does explode damage");
  }

  handleClickVeteranBonus() {
    let isToggleOnVeteran = this.props.veteran;

    console.log("isToggleOnVeteran: ", isToggleOnVeteran);

    if (isToggleOnVeteran === false) {
      isToggleOnVeteran = true;
    } else {
      isToggleOnVeteran = false;
    }

    this.setState({ isToggleOnVeteran });

    console.log("Unit is veteran");
  }

  handleClickShipUnit() {
    const healthMaxShipUnit = this.props.healthMax;

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

  componentDidUpdate() {
    // const [soldierUnitsAttackersAsRender, soldierUnitsDefendersAsRender] =
    //   this.healthAfterCalculation();

    // if (
    //   this.state.soldierUnitsAttackersAsRender !== soldierUnitsAttackersAsRender
    // ) {
    //   this.setState({ soldierUnitsAttackersAsRender });
    // }

    // if (
    //   this.state.soldierUnitsDefendersAsRender !== soldierUnitsDefendersAsRenderss
    // ) {
    //   this.setState({ soldierUnitsDefendersAsRender });
    // }

    // nessecarry for updating buttons with location of units!!

    // if (this.state.isToggleOnVeteran !== this.props.veteran) {
    //   this.setState({ isToggleOnVeteran: this.props.veteran });
    // }
    // if (this.state.isToggleOnSafe !== this.props.safeBonus) {
    //   this.setState({ isToggleOnSafe: this.props.safeBonus });
    // }
    // if (this.state.isToggleOnDefence !== this.props.defenceBonus) {
    //   this.setState({ isToggleOnDefence: this.props.defenceBonus });
    // }
    // if (this.state.isToggleOnWall !== this.props.wallBonus) {
    //   this.setState({ isToggleOnWall: this.props.wallBonus });
    // }
    // if (this.state.isToggleOnPoisoned !== this.props.poisonedBonus) {
    //   this.setState({ isToggleOnPoisoned: this.props.poisonedBonus });
    // }
    // if (this.state.isToggleOnBoosted !== this.props.boostedBonus) {
    //   this.setState({ isToggleOnBoosted: this.props.boostedBonus });
    // }
    // if (this.state.isToggleOnShipUnit !== this.props.shipUnit) {
    //   this.setState({ isToggleOnShipUnit: this.props.shipUnit });
    // }
    // if (this.state.isToggleOnSplashDamage !== this.props.splashDamage) {
    //   this.setState({ isToggleOnSplashDamage: this.props.splashDamage });
    // }
    // if (this.state.isToggleVisibleShipUnit !== this.props.shipUnit) {
    //   this.setState({ isToggleVisibleShipUnit: this.props.shipUnit });
    // }
    // if (this.state.isToggleVisibleTeam !== this.props.team) {
    //   this.setState({ isToggleVisibleTeam: this.props.team });
    // }
    // // if (this.state.isToggleVisibleTypeUnit !== this.props.typeUnit) {
    // //   this.setState({ isToggleVisibleTypeUnit: this.props.typeUnit });
    // // }

    // if (this.state.healthMaxShipUnit !== this.props.healthMax) {
    //   this.setState({ healthMaxShipUnit: this.props.healthMax });
    // }

    // if (this.state.healthInputField !== this.props.healthBefore) {
    //   this.setState({ healthInputField: this.props.healthBefore });
    // }

    // if (this.state.healthBeforeAsState !== this.props.healthBefore) {
    //   this.setState({ healthBeforeAsState: this.props.healthBefore });
    // }

    // if (this.state.healthAfterAsState !== this.props.healthAfter) {
    //   this.setState({ healthAfterAsState: this.props.healthAfter });
    // }

    // this.makeInvisibleBoostedBonus(this.props.team);
    // this.makeInvisibleVeteranBonus(this.props.typeUnit);sdf
    // this.makeInvisibleShipUnit(this.props.shipUnit);
    // this.makeInvisibleSplashDamage(this.props.typeUnit, this.props.team);sds
    // this.makeInvisibleDefenceBonus(this.props.team);
    // this.makeInvisibleWallBonus(this.props.team);ddsdf g
    // this.makeInvisiblePoisonedBonus(this.props.team);
    // this.makeInvisibleSafeBonus(this.props.team);dsfds

    // this.render();

    console.log("componentDidUpdate for soldierUnitAsRender");
    // this.render();
  }

  // _handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     console.log('do validate');
  //   }
  // }

  handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      this.handleHitpointsChange(e.target.value);
    }
  };

  render() {
    console.log("render soldierUnitAsRender");
    console.log("state", this.state);
    console.log("props", this.props);

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
          {/* <span>{this.displayId() + "."}</span> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
                  // value={this.props.healthBefore}
                  // onChange={(e) => this.handleHitpointsChange(e.target.value)}
                  defaultValue={this.props.healthBefore}
                  onBlur={(e) => this.handleHitpointsChange(e.target.value)}
                  onKeyDown={this.handleKeyDown}
                  style={{ width: 38 }}
                  maxLength={2}
                  onFocus={this.handleFocus}
                ></input>
              </label>
            </span>
            <span style={{ fontWeight: "bold" }}>
              <ArrowForwardIcon /> {this.displayhealthAfter()}
            </span>
          </div>

          <IconButton
            onClick={() => this.props.OnDelete(this.props.id, this.props.team)}
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
          style={{
            ...this.makeInvisibleVeteranBonus(
              this.state.isToggleVisibleTypeUnit
            ),
            ...getSecondaryButtonStyles(),
          }}
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
          style={{
            ...this.makeInvisibleShipUnit(this.state.isToggleVisibleShipUnit),
            ...getSecondaryButtonStyles(),
          }}
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
          style={{
            ...this.makeInvisibleSplashDamage(
              this.state.isToggleVisibleTypeUnit,
              this.state.isToggleVisibleTeam
            ),
            ...getSecondaryButtonStyles(),
          }}
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
          color="secondary"
          size="small"
          onClick={() => {
            this.props.OnExplodeDamage(
              this.props.id,
              this.props.team,
              this.props.typeUnit,
              this.props.explodeDamage
            );
            this.handleClickExplodeDamage();
          }}
          style={{
            ...this.makeInvisibleExplodeDamage(
              this.state.isToggleVisibleTypeUnit,
              this.state.isToggleVisibleTeam
            ),
            ...getSecondaryButtonStyles(),
          }}
          sx={{
            marginRight: 0.1,
            color: "#A9A9A9",
            ...(this.state.isToggleOnExplodeDamage === true && {
              color: "##ce93d8",
            }),
          }}
        >
          {this.state.isToggleOnExplodeDamage ? <b>xpld</b> : "xpld"}
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
          style={{
            ...this.makeInvisibleDefenceBonus(this.state.isToggleVisibleTeam),
            ...getSecondaryButtonStyles(),
          }}
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
          style={{
            ...this.makeInvisibleWallBonus(this.state.isToggleVisibleTeam),
            ...getSecondaryButtonStyles(),
          }}
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
          style={{
            ...this.makeInvisiblePoisonedBonus(this.state.isToggleVisibleTeam),
            ...getSecondaryButtonStyles(),
          }}
          // sx={{ marginRight: -0.5 }}
          sx={{
            marginRight: 0.25,
            color: this.state.isToggleOnPoisoned
              ? "##CE93D8" // Set to #ce93d8 when isToggleOnPoisoned is true
              : this.state.isBecamePoisoned
              ? "#008000" // Set to green when becamePoisoned is true
              : "#A9A9A9", // Default color
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
          style={{
            ...this.makeInvisibleSafeBonus(this.state.isToggleVisibleTeam),
            ...getSecondaryButtonStyles(),
          }}
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
          style={{
            ...this.makeInvisibleBoostedBonus(this.state.isToggleVisibleTeam),
            ...getSecondaryButtonStyles(),
          }}
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
      unitType === "Battleship" ||
      unitType === "Raft" ||
      unitType === "Scout" ||
      unitType === "Rammer" ||
      unitType === "Bomber" ||
      unitType === "Pirate" ||
      unitType === "Juggernaut"
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
    } else if (unitType === "Bomber" && team === "Attackers") {
      return { display: "visible" };
    } else if (unitType === "Juggernaut" && team === "Attackers") {
      return { display: "visible" };
    } else {
      return { display: "none" };
    }
  }

  makeInvisibleExplodeDamage(unitType: string, team: string) {
    if (unitType === "Doomux" && team === "Attackers") {
      return { display: "visible" };
    } else if (unitType === "Raychi" && team === "Attackers") {
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

  handleFocus = (event: any) => event.target.select(); // To select all text when the input gets focus

  displayhealthBefore() {
    return this.state.healthBeforeAsState;
  }

  displayhealthAfter() {
    return this.state.healthAfterAsState;
  }

  displayisBecamePoisoned() {
    return this.state.isBecamePoisoned;
  }

  // displayId() {
  //   return this.props.id;
  // }

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
  }

  soldierUnitImageStyle(team: string) {
    const soldierUnitImageStyle = {
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
      soldierUnitImageStyle.transform = "scaleX(-1)";
    }

    return soldierUnitImageStyle;
  }
}
export default soldierUnitAsRender;
