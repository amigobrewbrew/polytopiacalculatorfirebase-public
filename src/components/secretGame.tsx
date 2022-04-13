/** Secret game  */

import * as React from "react";
import Warrior from "../img/Attackers/Warrior.png";
import Archer from "../img/Attackers/Archer.png";
import Rider from "../img/Attackers/Rider.png";
import Defender from "../img/Attackers/Defender.png";
import Swordsman from "../img/Attackers/Swordsman.png";
import Catapult from "../img/Attackers/Catapult.png";
import Knight from "../img/Attackers/Knight.png";
import Giant from "../img/Attackers/Giant.png";
import Battleship from "../img/Attackers/Battleship.png";
// import { withAITracking } from "@microsoft/applicationinsights-react-js";
// import { reactPlugin, appInsights } from "../AppInsights";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { analytics } from "./../firebase";
import { logEvent } from "firebase/analytics";

/**
 * State of secret game holding the secret number, tries and total scores
 */
type State = {
  numeroSecreto: number;
  tentativas: number;
  totalGames: number;
  totalGamesWon: number;
};

/** Class that,
 * uses the component state
 * enables starting a new game
 * calculates game's progress
 * calculates game's score
 * renders the game's UI
 */
class secretGame extends React.Component<State> {
  state: State = {
    numeroSecreto: Math.floor(Math.random() * 9) + 1,
    tentativas: 3,
    totalGames: 0,
    totalGamesWon: 0,
  };

  NewGame = () => {
    console.log("New game started");

    logEvent(analytics, "sg_game_started");

    this.setState({ totalGames: this.state.totalGames + 1 });

    this.setState({ numeroSecreto: Math.floor(Math.random() * 9) + 1 });
    this.setState({ tentativas: 3 });

    console.log("NumeroSecreto is reset to: " + this.state.numeroSecreto);
    console.log("Tentativas set to: " + this.state.tentativas);

    alert("Numero secreto is reset and tentativas set to three");
  };

  SecretGameCalculator = (unitNumber: number) => {
    while (this.state.tentativas > 0) {
      if (unitNumber === this.state.numeroSecreto) {
        this.setState({ totalGamesWon: this.state.totalGamesWon + 1 });
        logEvent(analytics, "sg_game_won");
        if (unitNumber === 1) {
          alert("The warrior is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 2) {
          alert("The archer is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 3) {
          alert("The rider is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 4) {
          alert("The defender is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 5) {
          alert("The swordsman is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 6) {
          alert("The catapult is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 7) {
          alert("The knight is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 8) {
          alert("The giant is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
        if (unitNumber === 9) {
          alert("The battleship is correct! Parabéns pra você!");
          this.NewGame();
          break;
        }
      } else {
        if (unitNumber > this.state.numeroSecreto) {
          logEvent(analytics, "sg_secret_unit_is_weaker");
          alert("You made the incorrect choice. The secret unit is weaker");
        }
        if (unitNumber < this.state.numeroSecreto) {
          logEvent(analytics, "sg_secret_unit_is_stronger");
          alert("You made the incorrect choice. The secret unit is stronger");
        }

        this.setState(
          () => {
            return { tentativas: this.state.tentativas - 1 };
          },
          () => {
            console.log(
              "The tentativas is now set to: " + this.state.tentativas
            );

            if (this.state.tentativas === 0) {
              console.log("tentativas is zero now :(");

              logEvent(analytics, "sg_game_lost");

              if (this.state.tentativas === 0) {
                if (this.state.numeroSecreto === 1) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Warrior"
                  );
                }
                if (this.state.numeroSecreto === 2) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Archer"
                  );
                }
                if (this.state.numeroSecreto === 3) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Rider"
                  );
                }
                if (this.state.numeroSecreto === 4) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Defender"
                  );
                }
                if (this.state.numeroSecreto === 5) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Swordsman"
                  );
                }
                if (this.state.numeroSecreto === 6) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Catapult"
                  );
                }
                if (this.state.numeroSecreto === 7) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Knight"
                  );
                }
                if (this.state.numeroSecreto === 8) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Giant"
                  );
                }
                if (this.state.numeroSecreto === 9) {
                  alert(
                    "You made the incorrect choice three times. Você perdeu! The correct answer was Battleship"
                  );
                }

                this.NewGame();
              }
            }
          }
        );

        break;
      }
    }
  };

  Warrior = () => {
    console.log("Warrior clicked");
    this.SecretGameCalculator(1);
  };

  Archer = () => {
    console.log("Archer clicked");
    this.SecretGameCalculator(2);
  };

  Rider = () => {
    console.log("Rider clicked");
    this.SecretGameCalculator(3);
  };

  Defender = () => {
    console.log("Defender clicked");
    this.SecretGameCalculator(4);
  };

  Swordsman = () => {
    console.log("Swordsman clicked");
    this.SecretGameCalculator(5);
  };

  Catapult = () => {
    console.log("Catapult clicked");
    this.SecretGameCalculator(6);
  };

  Knight = () => {
    console.log("Knight clicked");
    this.SecretGameCalculator(7);
  };

  Giant = () => {
    console.log("Giant clicked");
    this.SecretGameCalculator(8);
  };

  Battleship = () => {
    console.log("Battleship clicked");
    this.SecretGameCalculator(9);
  };

  render() {
    console.log("Secret game page is rendered");

    const attackersImageStyle = {
      height: "80px",
      width: "60px",
      objectFit: "contain",
      WebkitAppearance: "none",
    } as React.CSSProperties;

    const attackersButtonStyle = {
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10,
      marginBottom: 10,
      marginTop: 10,
    } as React.CSSProperties;

    return (
      <Box style={{ margin: 1, maxWidth: "20em" }}>
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 0,

            //display: "flex",
            //flexDirection: "column",
            alignItems: "center",

            // backgroundColor: "#FFDF00",
            // border: 1,
            // color: "#002776",
            // borderRadius: "4px",
            // borderColor: "secondary.main",
            // width: "fit-content",
          }}
        >
          <Typography component={"span"} variant="body1">
            <Box sx={{ margin: 1 }}>
              <h3 style={{ marginLeft: 10 }}> Nath's favorite game </h3>
              <Box style={{ marginLeft: 10 }}>
                Guess the correct unit in 3 turns{" "}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={this.Warrior}
                  className="Warrior"
                  style={attackersButtonStyle}
                >
                  <img
                    src={Warrior}
                    alt="Warrior"
                    style={attackersImageStyle}
                  />
                </button>

                <button
                  onClick={this.Archer}
                  className="Archer"
                  style={attackersButtonStyle}
                >
                  <img src={Archer} alt="Archer" style={attackersImageStyle} />
                </button>

                <button
                  onClick={this.Rider}
                  className="Rider"
                  style={attackersButtonStyle}
                >
                  <img src={Rider} alt="Rider" style={attackersImageStyle} />
                </button>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={this.Defender}
                  className="Defender"
                  style={attackersButtonStyle}
                >
                  <img
                    src={Defender}
                    alt="Defender"
                    style={attackersImageStyle}
                  />
                </button>

                <button
                  onClick={this.Swordsman}
                  className="Swordsman"
                  style={attackersButtonStyle}
                >
                  <img
                    src={Swordsman}
                    alt="Swordsman"
                    style={attackersImageStyle}
                  />
                </button>

                <button
                  onClick={this.Catapult}
                  className="Catapult"
                  style={attackersButtonStyle}
                >
                  <img
                    src={Catapult}
                    alt="Catapult"
                    style={attackersImageStyle}
                  />
                </button>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={this.Knight}
                  className="Knight"
                  style={attackersButtonStyle}
                >
                  <img src={Knight} alt="Knight" style={attackersImageStyle} />
                </button>

                <button
                  onClick={this.Giant}
                  className="Giant"
                  style={attackersButtonStyle}
                >
                  <img src={Giant} alt="Giant" style={attackersImageStyle} />
                </button>

                <button
                  onClick={this.Battleship}
                  className="Battleship"
                  style={attackersButtonStyle}
                >
                  <img
                    src={Battleship}
                    alt="Battleship"
                    style={attackersImageStyle}
                  />
                </button>
              </Box>
              <Box style={{ margin: 0 }}>
                <button
                  className="btn btn-success btn-lg m-2"
                  onClick={this.NewGame}
                  style={{ alignContent: "center" }}
                >
                  New game
                </button>
              </Box>
              <Box>
                <Box style={{ margin: 10 }}>
                  <b>Total games played: {this.state.totalGames}</b>
                </Box>
                <Box style={{ margin: 10 }}>
                  <b>Games won: {this.state.totalGamesWon} </b>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default secretGame;
