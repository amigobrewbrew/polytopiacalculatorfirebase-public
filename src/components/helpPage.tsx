/** Help page component*/

import * as React from "react";
//import { withAITracking } from "@microsoft/applicationinsights-react-js";
// import { reactPlugin, appInsights } from "../AppInsights";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

class helpPage extends React.Component {
  render() {
    return (
      <Box>
        <CssBaseline />
        <Typography component={"span"} variant="body1">
          <Box sx={{ margin: 2 }}>
            <p>
              Use the Attacker and Defender selection buttons to add soldiers to
              the battlefield. The attackers target defenders top to bottom,
              while skipping defenders that are already killed by other
              attackers...
            </p>
            <span>
              Battlefield legend for each soldier:
              <ul>
                <li>Soldier icon: Unit on battefield</li>
                <li>
                  First number: Hit points of soldier before the battle. You can
                  adjust this number with direct input by clicking on the number
                  field
                </li>
                <li>
                  Second number: Hit points of the soldier after the battle{" "}
                </li>
                <li>[x]: Delete unit from battlefield</li>
                <li>[+]: Increase soldier hit points by one</li>
                <li>[-]: Decrease soldier hit points by one</li>
                <li>
                  VET: When toggled, unit is veteran (plus 5 maximum hit points)
                </li>
                <li>
                  SPLS: When toggled, unit is doing splash damage (fire dragon)
                </li>
                <li>SAFE: When toggled, unit is safe from retaliation </li>
                <li>BST: When toggled, unit is boosted by cymanti shaman</li>
                <li>
                  MX##: Set the maximum health for ships to 10, 15, 20, 25, 35
                  or 40 hit points. Maximum hit points affects attacking and
                  defensive power.
                </li>
                <li>DEF: When toggled, unit gets defensive bonus </li>
                <li>WALL: When toggled, unit gets walled bonus </li>
                <li>POIS: When toggled, unit is poisoned</li>
              </ul>
            </span>
            <p>
              Contact me for questions, tips, bugs etc. at:{" "}
              <a href="mailto:amigobrewbrew@gmail.com">
                amigobrewbrew@gmail.com
              </a>
              <br></br>A big thanks to Programming with Mosh, Midjiwan and the
              Polytopia community!
              <br></br>
              Press F12 the find the worst source code you have ever seen.
              <br></br>
            </p>
            <span>
              Useful links:
              <ul>
                <li>
                  <a href="https://polytopia.io/">https://polytopia.io/</a>
                </li>
                <li>
                  <a href="https://polytopia.fandom.com/wiki/The_Battle_of_Polytopia_Wiki">
                    https://polytopia.fandom.com/wiki/
                  </a>
                </li>
              </ul>
              Let me know what you would like to see for this calculator app!
              <br></br>
            </span>
          </Box>
        </Typography>{" "}
      </Box>
    );
  }
}

export default helpPage;
