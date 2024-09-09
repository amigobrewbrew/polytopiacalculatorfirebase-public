/**
 * This component holds the main page with:
 * Reference to attackers and defender selection components
 * Attackers and defender arrays
 * Attackers and defender outcome simulation
 */

import * as React from "react";
import AttackersSelection from "./attackersSelection";
import DefendersSelection from "./defendersSelection";
import SoldierUnitAsRender from "./soldierUnitAsRender";
import * as Stats from "./unitStats";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import { analytics } from "./../firebase";
import { logEvent } from "firebase/analytics";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as immer from "immer";

// import { withAITracking } from "@microsoft/applicationinsights-react-js";
//import { reactPlugin, appInsights } from "../AppInsights";

/**
 * State holds the array of selected soldiers of the attackers and defenders
 */

type Props = {
  OnChangeCheckbox?: any;
};

type State = {
  soldierUnitsDefenders: {
    id: number;
    typeUnit: string;
    healthMax: number;
    healthRemaining: number;
    attack: number;
    defence: number;
  }[];
  soldierUnitsDefendersAsRender: {
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
  }[];
  nextIdDefender: number;
  soldierUnitsAttackers: {
    id: number;
    typeUnit: string;
    healthMax: number;
    healthRemaining: number;
    attack: number;
    defence: number;
  }[];
  soldierUnitsAttackersAsRender: {
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
  }[];
  //nextIdAttacker: number;
  defIdxArray: number[];
  attIdxArray: number[];
  checkedPosition: boolean;
  randomNumber: number;
  userUnderstands: boolean;
};

//const a = "test";

/**
 * This class:
 * Uses the component state
 * Renders the arrays
 * Handles the add attacker and add defender actions of the Attacker and Defenders selection component
 * Calculates the Attackers and defender outcome simulation
 */
class battleGroundDetails extends React.Component<Props, State> {
  state: State = {
    soldierUnitsAttackersAsRender: [],
    soldierUnitsDefenders: [],
    nextIdDefender: 0,
    soldierUnitsDefendersAsRender: [],
    soldierUnitsAttackers: [],
    //nextIdAttacker: 0,
    defIdxArray: [],
    attIdxArray: [],
    checkedPosition: false,
    randomNumber: 0,
    userUnderstands: false,
  };

  handleChangeCheckbox = () => {
    this.setState((prevState) => ({
      checkedPosition: !prevState.checkedPosition,
    }));
    logEvent(analytics, "pc_checkbox_toggled");
  };

  componentDidUpdate() {
    // const [soldierUnitsAttackersAsRender, soldierUnitsDefendersAsRender] =
    //   this.healthAfterCalculation();
    // if (
    //   this.state.soldierUnitsAttackersAsRender !== soldierUnitsAttackersAsRender
    // ) {
    //   this.setState({ soldierUnitsAttackersAsRender }, () => {
    //     console.log("setState callback for battleGroundDetails");
    //   });
    // }
    // if (
    //   this.state.soldierUnitsDefendersAsRender !== soldierUnitsDefendersAsRender
    // ) {
    //   this.setState({ soldierUnitsDefendersAsRender }, () => {
    //     console.log("setState callback for battleGroundDetails");
    //   });
    // }

    if (this.state.userUnderstands === false) {
      if (
        this.state.soldierUnitsAttackersAsRender.length > 0 &&
        this.state.soldierUnitsDefendersAsRender.length > 0
      ) {
        console.log(
          "User understands that at least an attacker and a defender are needed for the calculator to work"
        );
        logEvent(analytics, "pc_user_understands");

        this.setState({ userUnderstands: true });
      }
    }

    console.log("componentDidUpdate for battleGroundDetails");
  }

  render() {
    console.log("Battleground details page is rendered");
    console.log("state", this.state);
    console.log("props", this.props);
    this.healthAfterCalculation(); // might be redundant > seems to be the only one needed
    // this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component

    // logEvent(analytics, "pc_battleground_page_rendered");
    // const styleWrapper = {
    //   //display: "flex",
    //   //flexDirection: "column",
    //   // alignItems: "center",
    //   // justifyContent: "center",
    //   width: "100%",
    //   // padding: "50px",
    //   // color: "#444",
    //   // border: "1px solid #1890ff",
    // };

    return (
      <Box>
        <Box sx={{ maxWidth: "26em" }}>
          {/* <div style={styleWrapper}> */}
          <Grid container justifyContent="space-between">
            {/* <div style={{ float: "left", width: "50%" }}> */}
            <Grid item>
              {this.state.soldierUnitsAttackersAsRender.map(
                (soldierUnitAtt, i) => (
                  <Box
                    key={i}
                    sx={{
                      margin: 0.25,

                      //display: "flex",
                      //flexDirection: "column",
                      // alignItems: "center",

                      // backgroundColor: "#FFDF00",
                      border: 1,
                      // color: "#002776",
                      borderRadius: "4px",
                      borderColor: "primary.main",
                      width: "fit-content(45%)",
                    }}
                  >
                    <Box key={i} sx={{ margin: 0 }}>
                      <SoldierUnitAsRender
                        key={i + this.state.randomNumber}
                        id={soldierUnitAtt.id}
                        OnDelete={this.handleDelete}
                        OnUpdateHitpoints={this.handleUpdateHitpoints}
                        OnIncreaseHitpoints={this.handleIncreaseHitpoints}
                        OnDecreaseHitpoints={this.handleDecreaseHitpoints}
                        typeUnit={soldierUnitAtt.typeUnit}
                        team={soldierUnitAtt.team}
                        healthMax={soldierUnitAtt.healthMax}
                        healthBefore={soldierUnitAtt.healthBefore}
                        healthAfter={soldierUnitAtt.healthAfter}
                        OnVeteranBonus={this.handleVeteranBonus}
                        OnDefenceBonus={this.handleDefenceBonus}
                        OnWallBonus={this.handleWallBonus}
                        OnSafeBonus={this.handleSafeBonus}
                        OnPoisonedBonus={this.handlePoisonedBonus}
                        OnBoostedBonus={this.handleBoostedBonus}
                        OnShipUnit={this.handleShipUnit}
                        OnSplashDamage={this.handleSplashDamage}
                        OnExplodeDamage={this.handleExplodeDamage}
                        veteran={soldierUnitAtt.veteran}
                        defenceBonus={soldierUnitAtt.defenceBonus}
                        wallBonus={soldierUnitAtt.wallBonus}
                        safeBonus={soldierUnitAtt.safeBonus}
                        poisonedBonus={soldierUnitAtt.poisonedBonus}
                        becamePoisonedBonus={soldierUnitAtt.becamePoisonedBonus}
                        boostedBonus={soldierUnitAtt.boostedBonus}
                        shipUnit={soldierUnitAtt.shipUnit}
                        splashDamage={soldierUnitAtt.splashDamage}
                        explodeDamage={soldierUnitAtt.explodeDamage}
                      ></SoldierUnitAsRender>
                    </Box>
                  </Box>
                )
              )}
            </Grid>

            {/* <div style={{ float: "right", width: "50%" }}> */}
            <Grid item>
              {this.state.soldierUnitsDefendersAsRender.map(
                (soldierUnitDef, i) => (
                  <Box
                    key={i}
                    sx={{
                      margin: 0.25,

                      // display: "flex",
                      //flexDirection: "column",
                      // alignItems: "right",

                      // backgroundColor: "#FFDF00",
                      border: 1,
                      // color: "#002776",
                      borderRadius: "4px",
                      borderColor: "error.main",
                      width: "fit-content(45%)",
                    }}
                  >
                    <Box key={i} sx={{ margin: 0 }}>
                      <SoldierUnitAsRender
                        key={i + this.state.randomNumber}
                        id={soldierUnitDef.id}
                        OnDelete={this.handleDelete}
                        OnUpdateHitpoints={this.handleUpdateHitpoints}
                        OnIncreaseHitpoints={this.handleIncreaseHitpoints}
                        OnDecreaseHitpoints={this.handleDecreaseHitpoints}
                        typeUnit={soldierUnitDef.typeUnit}
                        team={soldierUnitDef.team}
                        healthMax={soldierUnitDef.healthMax}
                        healthBefore={soldierUnitDef.healthBefore}
                        healthAfter={soldierUnitDef.healthAfter}
                        OnVeteranBonus={this.handleVeteranBonus}
                        OnDefenceBonus={this.handleDefenceBonus}
                        OnWallBonus={this.handleWallBonus}
                        OnSafeBonus={this.handleSafeBonus}
                        OnPoisonedBonus={this.handlePoisonedBonus}
                        OnBoostedBonus={this.handleBoostedBonus}
                        OnShipUnit={this.handleShipUnit}
                        OnSplashDamage={this.handleSplashDamage}
                        OnExplodeDamage={this.handleExplodeDamage}
                        veteran={soldierUnitDef.veteran}
                        defenceBonus={soldierUnitDef.defenceBonus}
                        wallBonus={soldierUnitDef.wallBonus}
                        safeBonus={soldierUnitDef.safeBonus}
                        poisonedBonus={soldierUnitDef.poisonedBonus}
                        becamePoisonedBonus={soldierUnitDef.becamePoisonedBonus}
                        boostedBonus={soldierUnitDef.boostedBonus}
                        shipUnit={soldierUnitDef.shipUnit}
                        splashDamage={soldierUnitDef.splashDamage}
                        explodeDamage={soldierUnitDef.explodeDamage}
                      ></SoldierUnitAsRender>
                    </Box>
                  </Box>
                )
              )}
            </Grid>
          </Grid>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: 1,
            borderColor: "#F467A9",
            borderRadius: 1,
            m: 0.25,
            alignItems: "center",
          }}
          style={{ maxWidth: "25.75em" }}
        >
          <div style={{ marginLeft: 5, display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedPosition}
                  onChange={this.handleChangeCheckbox}
                />
              }
              label={"Use  + and - to set order instead of health"}
            />{" "}
          </div>
        </Box>
        <div style={{ width: "100%", verticalAlign: "bottom", float: "left" }}>
          <AttackersSelection onAddAttacker={this.handleAddAttacker} />
          <DefendersSelection OnAddDefender={this.handleAddDefender} />
          {/* These two lines above conflict with the set state of the health after calcultion. There will be a set state loop */}
        </div>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: 1,
            borderColor: "#F467A9",
            borderRadius: 1,
            m: 0.25,
            alignItems: "center",
          }}
          style={{ maxWidth: "25.75em" }}
        >
          <div>
            This page is based on Build 2.8.5.11917; Game version: 104. For
            Shark, Puffer and Jelly click <a href="/beta">here</a>.{" "}
          </div>
        </Box>
      </Box>
    );
  }

  // // Recursive function to make a deep copy of an object
  // deepCopy(obj: any): any {
  //   if (typeof obj !== "object" || obj === null) {
  //     return obj;
  //   }

  //   if (Array.isArray(obj)) {
  //     return obj.map((item) => this.deepCopy(item));
  //   }

  //   const copiedObject: any = {};
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       copiedObject[key] = this.deepCopy(obj[key]);
  //     }
  //   }
  //   console.log("Deep copy: ", copiedObject);
  //   return copiedObject;
  // }

  handleDefenceBonus = (
    id: number,
    team: string,
    typeUnit: string,
    defenceBonus: boolean
  ) => {
    let index;

    let soldierUnitsDefendersAsRender =
      this.state.soldierUnitsDefendersAsRender;

    if (team === "Defenders" && defenceBonus === false) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].defenceBonus = true;
      soldierUnitsDefendersAsRender[index].wallBonus = false;
      soldierUnitsDefendersAsRender[index].poisonedBonus = false;

      this.setState({ soldierUnitsDefendersAsRender });
    } else if (team === "Defenders" && defenceBonus === true) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].defenceBonus = false;

      this.setState({ soldierUnitsDefendersAsRender });
    } else console.log("Error with team and wall bonus selection");

    logEvent(analytics, "pc_defence_bonus_" + typeUnit);

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleWallBonus = (
    id: number,
    team: string,
    typeUnit: string,
    wallBonus: boolean
  ) => {
    let index;
    let soldierUnitsDefendersAsRender =
      this.state.soldierUnitsDefendersAsRender;
    if (team === "Defenders" && wallBonus === false) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].wallBonus = true;
      soldierUnitsDefendersAsRender[index].defenceBonus = false;
      soldierUnitsDefendersAsRender[index].poisonedBonus = false;

      this.setState({ soldierUnitsDefendersAsRender });
    } else if (team === "Defenders" && wallBonus === true) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].wallBonus = false;

      this.setState({ soldierUnitsDefendersAsRender });
    } else console.log("Error with team and wall bonus selection");

    logEvent(analytics, "pc_wall_bonus_" + typeUnit);

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handlePoisonedBonus = (
    id: number,
    team: string,
    typeUnit: string,
    poisonedBonus: boolean
  ) => {
    let index;

    let soldierUnitsDefendersAsRender =
      this.state.soldierUnitsDefendersAsRender;
    if (team === "Defenders" && poisonedBonus === false) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].poisonedBonus = true;
      soldierUnitsDefendersAsRender[index].wallBonus = false;
      soldierUnitsDefendersAsRender[index].defenceBonus = false;

      this.setState({ soldierUnitsDefendersAsRender });
    } else if (team === "Defenders" && poisonedBonus === true) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].poisonedBonus = false;

      this.setState({ soldierUnitsDefendersAsRender });
    } else console.log("Error with team and poisoned bonus selection");

    logEvent(analytics, "pc_poisoned_bonus_" + typeUnit);

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleSafeBonus = (
    id: number,
    team: string,
    typeUnit: string,
    safeBonus: boolean
  ) => {
    let index;
    let soldierUnitsAttackersAsRender =
      this.state.soldierUnitsAttackersAsRender;
    if (team === "Attackers" && safeBonus === false) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].safeBonus = true;

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Attackers" && safeBonus === true) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].safeBonus = false;

      this.setState({ soldierUnitsAttackersAsRender });
    } else console.log("Error with team and safe bonus selection");

    logEvent(analytics, "pc_safe_bonus_" + typeUnit);

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleBoostedBonus = (
    id: number,
    team: string,
    typeUnit: string,
    boostedBonus: boolean
  ) => {
    let index;
    let soldierUnitsAttackersAsRender =
      this.state.soldierUnitsAttackersAsRender;
    if (team === "Attackers" && boostedBonus === false) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].boostedBonus = true;

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Attackers" && boostedBonus === true) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].boostedBonus = false;

      this.setState({ soldierUnitsAttackersAsRender });
    } else console.log("Error with team and boosted bonus selection");

    logEvent(analytics, "pc_boosted_bonus_" + typeUnit);

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleSplashDamage = (
    id: number,
    team: string,
    typeUnit: string,
    splashDamage: boolean
  ) => {
    let index;
    let soldierUnitsAttackersAsRender =
      this.state.soldierUnitsAttackersAsRender;
    if (team === "Attackers" && splashDamage === false) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].splashDamage = true;

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Attackers" && splashDamage === true) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].splashDamage = false;

      this.setState({ soldierUnitsAttackersAsRender });
    } else console.log("Error with team and splash damage selection");

    logEvent(analytics, "pc_splash_damage_toggled");

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleExplodeDamage = (
    id: number,
    team: string,
    typeUnit: string,
    explodeDamage: boolean
  ) => {
    let index;
    let soldierUnitsAttackersAsRender =
      this.state.soldierUnitsAttackersAsRender;
    if (team === "Attackers" && explodeDamage === false) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].explodeDamage = true;

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Attackers" && explodeDamage === true) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].explodeDamage = false;

      this.setState({ soldierUnitsAttackersAsRender });
    } else console.log("Error with team and explode damage selection");

    logEvent(analytics, "pc_explode_damage_toggled");

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleVeteranBonus = (
    id: number,
    team: string,
    typeUnit: string,
    veteran: boolean
  ) => {
    console.log(
      "Changing veteran status soldier unit with id: " +
        id +
        " of team: " +
        team +
        " with current veterancy status " +
        veteran
    );

    let index;

    let soldierUnitsDefendersAsRender =
      this.state.soldierUnitsDefendersAsRender;
    let soldierUnitsAttackersAsRender =
      this.state.soldierUnitsAttackersAsRender;
    if (team === "Attackers" && veteran === false) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].veteran = true;

      soldierUnitsAttackersAsRender[index].healthBefore =
        this.healthMaxVeteran(typeUnit);

      soldierUnitsAttackersAsRender[index].healthMax =
        this.healthMaxVeteran(typeUnit);

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Attackers" && veteran === true) {
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].veteran = false;

      soldierUnitsAttackersAsRender[index].healthBefore =
        this.healthMax(typeUnit);

      soldierUnitsAttackersAsRender[index].healthMax = this.healthMax(typeUnit);

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Defenders" && veteran === false) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].veteran = true;

      soldierUnitsDefendersAsRender[index].healthBefore =
        this.healthMaxVeteran(typeUnit);

      soldierUnitsDefendersAsRender[index].healthMax =
        this.healthMaxVeteran(typeUnit);

      this.setState({ soldierUnitsDefendersAsRender });
    } else if (team === "Defenders" && veteran === true) {
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);

      soldierUnitsDefendersAsRender[index].veteran = false;

      soldierUnitsDefendersAsRender[index].healthBefore =
        this.healthMax(typeUnit);

      soldierUnitsDefendersAsRender[index].healthMax = this.healthMax(typeUnit);

      this.setState({ soldierUnitsDefendersAsRender });
    } else console.log("Error with team and veterancy selection");

    logEvent(analytics, "pc_veterancy_bonus_" + team + "_" + typeUnit);

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleShipUnit = (
    id: number,
    team: string,
    typeUnit: string,
    shipUnit: boolean
  ) => {
    let index;

    if (team === "Attackers" && shipUnit === true) {
      let soldierUnitsAttackersAsRender =
        this.state.soldierUnitsAttackersAsRender;
      index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsAttackersAsRender[index].healthMax =
        soldierUnitsAttackersAsRender[index].healthMax + 5;

      if (soldierUnitsAttackersAsRender[index].healthMax === 35) {
        soldierUnitsAttackersAsRender[index].healthMax = 10;
      }

      soldierUnitsAttackersAsRender[index].healthBefore =
        soldierUnitsAttackersAsRender[index].healthMax;

      this.setState({ soldierUnitsAttackersAsRender });
    } else if (team === "Defenders" && shipUnit === true) {
      let soldierUnitsDefendersAsRender =
        this.state.soldierUnitsDefendersAsRender;
      index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);
      soldierUnitsDefendersAsRender[index].healthMax =
        soldierUnitsDefendersAsRender[index].healthMax + 5;

      if (soldierUnitsDefendersAsRender[index].healthMax === 35) {
        soldierUnitsDefendersAsRender[index].healthMax = 10;
      }

      soldierUnitsDefendersAsRender[index].healthBefore =
        soldierUnitsDefendersAsRender[index].healthMax;

      this.setState({ soldierUnitsDefendersAsRender });
    } else console.log("Error with team and shipunit selection");

    logEvent(analytics, "pc_ship_mx_" + team + "_" + typeUnit);

    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleDelete = (idn: number, team: string) => {
    console.log("Deleting soldier unit with id: " + idn + " of team: " + team);
    // console.log(props);
    // console.log("einde props");

    switch (team) {
      case "Attackers":
        let soldierUnitsAttackersAsRender =
          this.state.soldierUnitsAttackersAsRender;

        let attIdxArray = this.state.attIdxArray;

        delete soldierUnitsAttackersAsRender[idn];

        delete attIdxArray[idn];

        soldierUnitsAttackersAsRender = soldierUnitsAttackersAsRender.filter(
          (item) => item !== null && item !== undefined
        );

        soldierUnitsAttackersAsRender = soldierUnitsAttackersAsRender.map(
          (unit, i) => {
            unit.id = i;
            return unit;
          }
        );

        attIdxArray = attIdxArray.filter(
          (item) => item !== null && item !== undefined
        );

        attIdxArray = attIdxArray.map((_, i) => i);

        this.setState({ attIdxArray });

        this.setState({ soldierUnitsAttackersAsRender });

        // this.healthAfterCalculation();

        // let updatedSoldierUnitsAttackersAsRender = immer.produce(
        //   this.state.soldierUnitsAttackersAsRender,
        //   (draft) => {
        //     // Use filter to create a new array without the item that matches the idn
        //     draft = draft.filter((item) => item.id !== idn);

        //     // Reassign new id values to the remaining items
        //     draft.forEach((unit, i) => {
        //       unit.id = i;
        //     });
        //   }
        // );

        // let updatedAttIdxArray = immer.produce(
        //   this.state.attIdxArray,
        //   (draft) => {
        //     draft = draft.filter((item) => item !== idn);
        //   }
        // );

        // this.setState(
        //   {
        //     soldierUnitsAttackersAsRender: updatedSoldierUnitsAttackersAsRender,
        //     attIdxArray: updatedAttIdxArray,
        //   },
        //   () => {
        //     this.healthAfterCalculation();
        //   }
        // );

        break;
      case "Defenders":
        let soldierUnitsDefendersAsRender =
          this.state.soldierUnitsDefendersAsRender;

        let defIdxArray = this.state.defIdxArray;

        // let soldierUnitsDefendersAsRenderExclUndefined =
        //   soldierUnitsDefendersAsRender;

        //  soldierUnitsDefendersAsRenderExclUndefined.filter((a) => a.id !== idn);

        // let soldierUnitsDefendersAsRenderExclUndefined =
        //   soldierUnitsDefendersAsRender.filter(function (element) {
        //     return element !== undefined;
        //   });

        // this.setState({
        //   soldierUnitsDefendersAsRender: soldierUnitsDefendersAsRender,
        // });

        // console.log(
        //   soldierUnitsDefendersAsRender.findIndex((a) => a.id === idn)
        // );

        delete (
          // soldierUnitsDefendersAsRender.findIndex((a) => a.id === idn)
          soldierUnitsDefendersAsRender[idn]
        );

        delete (
          // soldierUnitsAttackersAsRender.findIndex((a) => a.id === idn)
          defIdxArray[idn]
        );

        // soldierUnitsDefendersAsRender = soldierUnitsDefendersAsRender.filter(
        //   function (element) {
        //     return element !== undefined;
        //   }
        // );

        soldierUnitsDefendersAsRender = soldierUnitsDefendersAsRender.filter(
          (item) => item !== null && item !== undefined
        );

        // for (let i = 0; i < soldierUnitsDefendersAsRender.length; i++) {
        //   soldierUnitsDefendersAsRender[i].id = i;
        // }

        soldierUnitsDefendersAsRender = soldierUnitsDefendersAsRender.map(
          (unit, i) => {
            unit.id = i;
            return unit;
          }
        );

        defIdxArray = defIdxArray.filter(
          (item) => item !== null && item !== undefined
        );

        defIdxArray = defIdxArray.map((_, i) => i);

        // const defIdxArray = this.state.defIdxArray.filter(function (value) {
        //   return value !== idn;
        // });
        this.setState({ defIdxArray });

        this.setState({ soldierUnitsDefendersAsRender });

        // let soldierUnitsDefendersAsRender =
        //   this.state.soldierUnitsDefendersAsRender;
        // soldierUnitsDefendersAsRender.forEach((value, index) => {
        //   if (value.id === id) soldierUnitsDefendersAsRender.splice(index, 1);
        // });
        // this.setState({ soldierUnitsDefendersAsRender });

        // let soldierUnitsDefendersAsRender =
        //   this.state.soldierUnitsDefendersAsRender;
        // soldierUnitsDefendersAsRender.filter((d) => d.id !== id);
        // this.setState({ soldierUnitsDefendersAsRender });
        // delete soldierUnitsDefendersAsRender[id];
        // this.setState({ soldierUnitsDefendersAsRender });

        // let soldierUnitsDefendersAsRender =
        //   this.state.soldierUnitsDefendersAsRender;
        // soldierUnitsDefendersAsRender.filter((d) => d.id !== id);
        // this.setState({ soldierUnitsDefendersAsRender });

        // const soldierUnitsDefendersAsRender =
        //   this.state.soldierUnitsDefendersAsRender.filter((d) => d.id !== id);
        // this.setState({ soldierUnitsDefendersAsRender });

        break;
      default:
        console.log("Issue with team selection switch for deleting soldier");
    }

    logEvent(analytics, "pc_unit_deleted_" + team);

    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component

    // this.healthAfterCalculation();
    // this.forceUpdate();
  };

  // rerender = () => {
  //   this.forceUpdate();
  // };

  handleUpdateHitpoints = (
    id: number,
    team: string,
    healthBeforeManualInput: number
  ) => {
    console.log(
      "Changing hitpoints of soldier unit with id: " + id + " of team: " + team
    );

    let index;
    switch (team) {
      case "Attackers":
        let soldierUnitsAttackersAsRender =
          this.state.soldierUnitsAttackersAsRender;
        index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);

        soldierUnitsAttackersAsRender[index].healthBefore =
          healthBeforeManualInput;

        this.setState({ soldierUnitsAttackersAsRender });
        break;
      case "Defenders":
        let soldierUnitsDefendersAsRender =
          this.state.soldierUnitsDefendersAsRender;
        index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);

        soldierUnitsDefendersAsRender[index].healthBefore =
          healthBeforeManualInput;

        this.setState({ soldierUnitsDefendersAsRender });
        break;
      default:
        console.log(
          "Issue with team selection switch for increasing hitpoints"
        );
    }

    logEvent(analytics, "pc_hitpoints_direct_" + team);

    // setTimeout(() => {
    //   this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
    // }, 1000);
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
    // this.healthAfterCalculation(); // random number will loose focus on unit hp field
  };

  handleIncreaseHitpoints = (id: number, team: string) => {
    let index;
    if (this.state.checkedPosition === false) {
      console.log(
        "Increasing hitpoints soldier unit with id: " + id + " of team: " + team
      );

      switch (team) {
        case "Attackers":
          let soldierUnitsAttackersAsRender =
            this.state.soldierUnitsAttackersAsRender;
          index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);

          soldierUnitsAttackersAsRender[index].healthBefore++;

          this.setState({ soldierUnitsAttackersAsRender });
          break;
        case "Defenders":
          let soldierUnitsDefendersAsRender =
            this.state.soldierUnitsDefendersAsRender;
          index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);

          soldierUnitsDefendersAsRender[index].healthBefore++;

          this.setState({ soldierUnitsDefendersAsRender });
          break;
        default:
          console.log(
            "Issue with team selection switch for increasing hitpoints"
          );
      }

      logEvent(analytics, "pc_hitpoints_plus_" + team);
    } else {
      switch (team) {
        case "Attackers":
          let soldierUnitsAttackersAsRender =
            this.state.soldierUnitsAttackersAsRender;
          // let attIdxArray = this.state.attIdxArray;

          index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);

          if (1 >= soldierUnitsAttackersAsRender.length || index === 0) {
            // If the index is out of bounds or at the beginning of the array, no need to move.
            break;
          }

          // Swap the element at the specified index with the element to its left.

          const tempAttPlus = soldierUnitsAttackersAsRender[index - 1];
          soldierUnitsAttackersAsRender[index - 1] =
            soldierUnitsAttackersAsRender[index];
          soldierUnitsAttackersAsRender[index] = tempAttPlus;

          soldierUnitsAttackersAsRender[index - 1].id = index - 1;
          soldierUnitsAttackersAsRender[index].id = index;

          // const tempAttPlusIdx = attIdxArray[index - 1];
          // attIdxArray[index - 1] = attIdxArray[index];
          // attIdxArray[index] = tempAttPlusIdx;

          //soldierUnitsAttackersAsRender[index].healthBefore++;
          // this.state.soldierUnitsAttackersAsRender = [];

          this.setState({ soldierUnitsAttackersAsRender });
          // this.setState({ attIdxArray });

          break;
        case "Defenders":
          let soldierUnitsDefendersAsRender =
            this.state.soldierUnitsDefendersAsRender;
          // let defIdxArray = this.state.defIdxArray;
          index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);

          if (1 >= soldierUnitsDefendersAsRender.length || index === 0) {
            // If the index is out of bounds or at the beginning of the array, no need to move.
            break;
          }

          // Swap the element at the specified index with the element to its left.
          const tempDefPlus = soldierUnitsDefendersAsRender[index - 1];
          soldierUnitsDefendersAsRender[index - 1] =
            soldierUnitsDefendersAsRender[index];
          soldierUnitsDefendersAsRender[index] = tempDefPlus;

          soldierUnitsDefendersAsRender[index - 1].id = index - 1;
          soldierUnitsDefendersAsRender[index].id = index;

          // const tempDefPlusIdx = defIdxArray[index - 1];
          // defIdxArray[index - 1] = defIdxArray[index];
          // defIdxArray[index] = tempDefPlusIdx;

          //soldierUnitsDefendersAsRender[index].healthBefore++;

          // this.state.soldierUnitsDefendersAsRender = [];
          this.setState({ soldierUnitsDefendersAsRender });
          // this.setState({ defIdxArray });

          break;
        default:
          console.log(
            "Issue with team selection switch for increasing hitpoints"
          );
      }

      logEvent(analytics, "pc_changed_position_up_" + team);
    }

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleDecreaseHitpoints = (id: number, team: string) => {
    console.log(
      "Decreasing hitpoints soldier unit with id: " + id + " of team: " + team
    );

    let index;

    if (this.state.checkedPosition === false) {
      console.log(
        "Decreasing hitpoints soldier unit with id: " + id + " of team: " + team
      );

      switch (team) {
        case "Attackers":
          let soldierUnitsAttackersAsRender =
            this.state.soldierUnitsAttackersAsRender;
          index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);
          soldierUnitsAttackersAsRender[index].healthBefore--;

          // this.state.soldierUnitsAttackersAsRender = [];
          this.setState({ soldierUnitsAttackersAsRender });
          break;
        case "Defenders":
          let soldierUnitsDefendersAsRender =
            this.state.soldierUnitsDefendersAsRender;
          index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);

          soldierUnitsDefendersAsRender[index].healthBefore--;

          // this.state.soldierUnitsDefendersAsRender = [];
          this.setState({ soldierUnitsDefendersAsRender });
          break;
        default:
          console.log(
            "Issue with team selection switch for increasing hitpoints"
          );
      }

      logEvent(analytics, "pc_hitpoints_min_" + team);
    } else {
      switch (team) {
        case "Attackers":
          let soldierUnitsAttackersAsRender =
            this.state.soldierUnitsAttackersAsRender;
          // let attIdxArray = this.state.attIdxArray;
          index = soldierUnitsAttackersAsRender.map((e) => e.id).indexOf(id);

          if (
            1 >= soldierUnitsAttackersAsRender.length ||
            index === soldierUnitsAttackersAsRender.length - 1
          ) {
            // If the index is out of bounds or at the end of the array, no need to move.
            break;
          }

          // Swap the element at the specified index with the element to its left.

          const tempAttMin = soldierUnitsAttackersAsRender[index + 1];
          soldierUnitsAttackersAsRender[index + 1] =
            soldierUnitsAttackersAsRender[index];
          soldierUnitsAttackersAsRender[index] = tempAttMin;

          soldierUnitsAttackersAsRender[index + 1].id = index + 1;
          soldierUnitsAttackersAsRender[index].id = index;

          // const tempAttMinIdx = attIdxArray[index + 1];
          // attIdxArray[index + 1] = attIdxArray[index];
          // attIdxArray[index] = tempAttMinIdx;

          //soldierUnitsAttackersAsRender[index].healthBefore++;

          this.setState({ soldierUnitsAttackersAsRender });
          // this.setState({ attIdxArray });
          break;
        case "Defenders":
          let soldierUnitsDefendersAsRender =
            this.state.soldierUnitsDefendersAsRender;
          // let defIdxArray = this.state.defIdxArray;
          index = soldierUnitsDefendersAsRender.map((e) => e.id).indexOf(id);

          if (
            1 >= soldierUnitsDefendersAsRender.length ||
            index === soldierUnitsDefendersAsRender.length - 1
          ) {
            // If the index is out of bounds or at the end of the array, no need to move.
            break;
          }

          // Swap the element at the specified index with the element to its right.
          const tempDefMin = soldierUnitsDefendersAsRender[index + 1];
          soldierUnitsDefendersAsRender[index + 1] =
            soldierUnitsDefendersAsRender[index];
          soldierUnitsDefendersAsRender[index] = tempDefMin;

          soldierUnitsDefendersAsRender[index + 1].id = index + 1;
          soldierUnitsDefendersAsRender[index].id = index;

          // const tempDefMinIdx = defIdxArray[index + 1];
          // defIdxArray[index + 1] = defIdxArray[index];
          // defIdxArray[index] = tempDefMinIdx;

          //soldierUnitsDefendersAsRender[index].healthBefore++;

          this.setState({ soldierUnitsDefendersAsRender });
          // this.setState({ defIdxArray });
          break;
        default:
          console.log(
            "Issue with team selection switch for increasing hitpoints"
          );
      }

      logEvent(analytics, "pc_changed_position_down_" + team);
    }

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleAddAttacker = (typeUnit: string) => {
    // this.setState({
    //   soldierUnitsAttackersAsRender:
    //     this.state.soldierUnitsAttackersAsRender.concat([
    //       {
    //         id: this.state.nextIdAttacker,
    //         typeUnit,
    //         team: "Attackers",
    //         healthMax: this.healthMax(typeUnit),
    //         healthBefore: this.healthMax(typeUnit),
    //         healthAfter: this.healthMax(typeUnit), //this.healthAfterCalculation(),
    //         attack: this.attack(typeUnit),
    //         defence: this.defence(typeUnit),
    //         veteran: false,
    //         defenceBonus: false,
    //         wallBonus: false,
    //         safeBonus: false,
    //         poisonedBonus: false,
    //         boostedBonus: false,
    //         splashDamage: false,
    //         shipUnit: this.istypeUnitaShipUnit(typeUnit),
    //       },
    //     ]),
    // });

    this.setState((prevState) => ({
      soldierUnitsAttackersAsRender: [
        ...prevState.soldierUnitsAttackersAsRender,
        {
          id: prevState.soldierUnitsAttackersAsRender.length,
          typeUnit,
          team: "Attackers",
          healthMax: this.healthMax(typeUnit),
          healthBefore: this.healthMax(typeUnit),
          healthAfter: this.healthMax(typeUnit), //this.healthAfterCalculation(),
          attack: this.attack(typeUnit),
          defence: this.defence(typeUnit),
          veteran: false,
          defenceBonus: false,
          wallBonus: false,
          safeBonus: false,
          poisonedBonus: false,
          becamePoisonedBonus: false,
          boostedBonus: false,
          splashDamage: false,
          explodeDamage: false,
          shipUnit: this.istypeUnitaShipUnit(typeUnit),
        },
      ],
    }));

    console.log(
      "New attacker added the battleground array with id: " +
        this.state.soldierUnitsAttackersAsRender.length +
        " Type: " +
        typeUnit
    );

    // this.setState({
    //   attIdxArray: this.state.attIdxArray.push(this.state.nextIdAttacker),
    // });

    this.setState({
      attIdxArray: [
        ...this.state.attIdxArray,
        this.state.soldierUnitsAttackersAsRender.length,
      ],
    });

    // console.log(
    //   "These are the attackers ids in use: " + this.state.attIdxArray
    // );

    // this.setState(() => {
    //   return { nextIdAttacker: this.state.nextIdAttacker + 1 };
    // });

    logEvent(analytics, "pc_attacker_added_" + typeUnit);
    logEvent(
      analytics,
      "pc_attacker_id_" + this.state.soldierUnitsAttackersAsRender.length
    );

    // this.componentDidUpdate();
    //this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  handleAddDefender = (typeUnit: string) => {
    this.setState((prevState) => ({
      soldierUnitsDefendersAsRender: [
        ...prevState.soldierUnitsDefendersAsRender,
        {
          id: prevState.soldierUnitsDefendersAsRender.length,
          typeUnit,
          team: "Defenders",
          healthMax: this.healthMax(typeUnit),
          healthBefore: this.healthMax(typeUnit),
          healthAfter: this.healthMax(typeUnit), //this.healthAfterCalculation(),
          attack: this.attack(typeUnit),
          defence: this.defence(typeUnit),
          veteran: false,
          defenceBonus: false,
          wallBonus: false,
          safeBonus: false,
          poisonedBonus: false,
          becamePoisonedBonus: false,
          boostedBonus: false,
          splashDamage: false,
          explodeDamage: false,
          shipUnit: this.istypeUnitaShipUnit(typeUnit),
        },
      ],
    }));

    console.log(
      "New defender added the battleground array with id: " +
        this.state.soldierUnitsDefendersAsRender.length +
        " Type: " +
        typeUnit
    );

    // this.setState({
    //   defIdxArray: this.state.defIdxArray.push(this.state.nextIdDefender),
    // });

    this.setState({
      defIdxArray: [
        ...this.state.defIdxArray,
        this.state.soldierUnitsDefendersAsRender.length,
      ],
    });

    // console.log("These are the defender ids in use: " + this.state.defIdxArray);

    // this.setState(() => {
    //   return { nextIdDefender: this.state.nextIdDefender + 1 };
    // });

    logEvent(analytics, "pc_defender_added_" + typeUnit);
    logEvent(
      analytics,
      "pc_defender_id_" + this.state.soldierUnitsDefendersAsRender.length
    );

    // this.healthAfterCalculation();
    this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
  };

  istypeUnitaShipUnit = (typeUnit: string) => {
    switch (typeUnit) {
      case "Raft":
        return true;
      case "Scout":
        return true;
      case "Rammer":
        return true;
      case "Bomber":
        return true;
      case "Juggernaut":
        return false;
      default:
        return false;
    }
  };

  healthMax = (typeUnit: string) => {
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
  };

  healthMaxVeteran = (typeUnit: string) => {
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
  };

  attack = (typeUnit: string) => {
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
  };

  defence = (typeUnit: string) => {
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
  };

  healthAfterCalculation = () => {
    console.log("This is where the magic happens. Charge!");
    logEvent(analytics, "pc_magic_happens");

    let indexDefenderCounter = 0;
    let indexDefender = this.state.defIdxArray[indexDefenderCounter];
    let totalAttackResult = 0;

    // let soldierUnitsAttackersAsRender = [
    //   ...this.state.soldierUnitsAttackersAsRender,
    // ];
    // let soldierUnitsDefendersAsRender = [
    //   ...this.state.soldierUnitsDefendersAsRender,
    // ];

    let soldierUnitsAttackersAsRender =
      this.state.soldierUnitsAttackersAsRender;

    let soldierUnitsDefendersAsRender =
      this.state.soldierUnitsDefendersAsRender;

    console.log("These arrays are on the battlefield");
    console.log(soldierUnitsAttackersAsRender);
    console.log(soldierUnitsDefendersAsRender);

    console.log(
      "These are the attacker ids in use (attIdxArray): " +
        this.state.attIdxArray
    );

    console.log(
      "These are the defender ids in use (defIdxArray): " +
        this.state.defIdxArray
    );

    //remove undefined values from array

    // soldierUnitsAttackersAsRender = soldierUnitsAttackersAsRender.filter(
    //   function (element) {
    //     return element !== undefined;
    //   }
    // );

    // soldierUnitsDefendersAsRender = soldierUnitsDefendersAsRender.filter(
    //   function (element) {
    //     return element !== undefined;
    //   }
    // );

    // find undefined values

    // first reset all hitpoints
    soldierUnitsAttackersAsRender.forEach((element) => {
      element.healthAfter = element.healthBefore;
    });
    soldierUnitsDefendersAsRender.forEach((element) => {
      element.healthAfter = element.healthBefore;
    });

    var poisoningAttacker = 9999;
    var defenderRepeatedAttack = 0;

    soldierUnitsAttackersAsRender.forEach((attacker) => {
      let defender = soldierUnitsDefendersAsRender[indexDefender];

      //let attacker = element;

      let defenceResult = 0;
      let attackResult = 0;
      let safeBonusMultiplier: number;
      let defenceBonusMultiplier: number;
      let wallBonusMultiplier: number;
      let poisonedBonusMultiplier: number;
      let boostedBonusMultiplier: number;

      if (attacker !== undefined && defender !== undefined) {
        if (defenderRepeatedAttack === 0) {
          defender.becamePoisonedBonus = false;
        }
        // soldierUnitsDefendersAsRender[indexDefender].becamePoisonedBonus =
        //   false;

        defenderRepeatedAttack++;

        defender.defenceBonus === true
          ? (defenceBonusMultiplier = 1.5)
          : (defenceBonusMultiplier = 1);

        defender.wallBonus === true
          ? (wallBonusMultiplier = 4)
          : (wallBonusMultiplier = 1);

        attacker.safeBonus === true
          ? (safeBonusMultiplier = 0)
          : (safeBonusMultiplier = 1);

        if (defender.poisonedBonus === true) {
          poisonedBonusMultiplier = 0.7;
          wallBonusMultiplier = 1;
          defenceBonusMultiplier = 1;
        } else {
          poisonedBonusMultiplier = 1;
        }

        if (attacker.id > poisoningAttacker) {
          poisonedBonusMultiplier = 0.7;
          wallBonusMultiplier = 1;
          defenceBonusMultiplier = 1;
        }

        attacker.boostedBonus === true
          ? (boostedBonusMultiplier = 1)
          : (boostedBonusMultiplier = 0);

        // if (
        //   attacker.splashDamage === true &&
        //   attacker.typeUnit === "FireDragon"
        // ) {
        //   attacker.attack = 2.33;
        // }

        // if (
        //   attacker.splashDamage === false &&
        //   attacker.typeUnit === "FireDragon"
        // ) {
        //   attacker.attack = 4;
        // }

        // if (attacker.splashDamage === true && attacker.typeUnit === "Bomber") {
        //   attacker.attack = 2.33;
        // }

        // if (attacker.splashDamage === false && attacker.typeUnit === "Bomber") {
        //   attacker.attack = 4;
        // }

        let attackForce = parseFloat(
          (
            ((attacker.attack + 0.5 * boostedBonusMultiplier) *
              attacker.healthBefore) /
            attacker.healthMax
          ).toFixed(10)
        );

        let defenceForce = parseFloat(
          (
            ((defender.defence * (defender.healthBefore - totalAttackResult)) /
              defender.healthMax) *
            wallBonusMultiplier *
            defenceBonusMultiplier *
            poisonedBonusMultiplier
          ).toFixed(10)
        );

        let totalDamage = attackForce + defenceForce;

        attackResult = Math.round(
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
          (attacker.typeUnit === "FireDragon" ||
            attacker.typeUnit === "Juggernaut")
        ) {
          attackResult = Math.floor(attackResult * (2.5 / 4));
        }

        if (attacker.splashDamage === true && attacker.typeUnit === "Bomber") {
          attackResult = Math.floor(attackResult * (2 / 4));
        }

        if (
          attacker.explodeDamage === true ||
          attacker.typeUnit === "Segment"
        ) {
          attackResult = Math.floor(attackResult * 0.5);
        }

        console.log("this is attackForce: " + attackForce);
        console.log("this is defenceForce: " + defenceForce);
        console.log("this is totalDamage: " + totalDamage);
        console.log("this is attackResult: " + attackResult);

        totalAttackResult += attackResult;

        soldierUnitsDefendersAsRender[indexDefender].healthAfter =
          soldierUnitsDefendersAsRender[indexDefender].healthBefore -
          totalAttackResult;

        //this.setState({ soldierUnitsDefendersAsRender });

        if (defender.healthAfter > 0) {
          defenceResult = Math.round(
            parseFloat(
              ((defenceForce / totalDamage) * defender.defence * 4.5).toFixed(
                10
              )
            )
          );
          console.log("this is defenceResult: " + defenceResult);
          //poison
          if (
            attacker.typeUnit === "Exida" ||
            attacker.typeUnit === "Phychi" ||
            attacker.typeUnit === "Kiton" ||
            attacker.typeUnit === "Segment" ||
            attacker.explodeDamage === true
          ) {
            //defender.poisonedBonus = true; // this one is wrong
            // soldierUnitsDefendersAsRender[indexDefender].becamePoisonedBonus =
            //   true;
            defender.becamePoisonedBonus = true;
            poisoningAttacker = attacker.id;
            console.log(
              "Defender " +
                defender.id +
                " became poisoned, because of attacker " +
                attacker.id
            );
            // this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
          }
          // if (poisoningAttacker === 9999) {
          //   soldierUnitsDefendersAsRender[indexDefender].becamePoisonedBonus =
          //     false;
          //   // this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component
          // }
          // poison
        } else {
          defenceResult = 0;
          //indexDefender++;
          indexDefenderCounter++;
          indexDefender = this.state.defIdxArray[indexDefenderCounter];
          totalAttackResult = 0;
          poisoningAttacker = 9999;
          defenderRepeatedAttack = 0;
        }

        if (
          !(
            defender.typeUnit === "MindBender" ||
            defender.typeUnit === "DragonEggs" ||
            defender.typeUnit === "Mooni" ||
            defender.typeUnit === "Segment"
          )
        ) {
          attacker.healthAfter =
            attacker.healthBefore - defenceResult * safeBonusMultiplier;
        }
        if (
          attacker.typeUnit === "Segment" ||
          attacker.explodeDamage === true
        ) {
          attacker.healthAfter = 0;
        }
      } else {
        attacker.healthAfter = attacker.healthBefore;
        console.log("Reset hitpoint on inactive attackers");
      }
    });

    console.log(
      "Final defender attacked is on position: " +
        indexDefender +
        ". Reset hitpoint on inactive defenders"
    );

    // No clue how to fix this else way
    // this.state.soldierUnitsAttackersAsRender = soldierUnitsAttackersAsRender;
    // this.state.soldierUnitsDefendersAsRender = soldierUnitsDefendersAsRender;

    // this.forceUpdate();
    // this.setState({ randomNumber: Math.random() }); // this rerenders the soldier child component

    return [soldierUnitsAttackersAsRender, soldierUnitsDefendersAsRender];

    // this.setState({
    //   soldierUnitsDefendersAsRender: soldierUnitsDefendersAsRender,
    // });
    // this.setState({
    //   soldierUnitsAttackersAsRender: soldierUnitsAttackersAsRender,
    // });
    // this.forceUpdate();
  };
}

export default battleGroundDetails;
