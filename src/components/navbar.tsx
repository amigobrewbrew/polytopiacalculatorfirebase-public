/** Navigation bar components to navigate to different pages of the website */

import * as React from "react";
import BigSwords from "../img/Other/BigSwords.png";
import HamburgerMenu from "../img/Other/menu-fill.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { BOX_SHADOW_DEFAULT } from "../customStyles";

export interface NavBarProps {}

export interface NavBarState {}

/**
 * Class for navigation to different urls for secret game, poly calculator and help page
 */
class NavBar extends React.Component<NavBarProps, NavBarState> {
  state = {};
  render() {
    return (
      <Box boxShadow={BOX_SHADOW_DEFAULT}>
        <CssBaseline />
        <Typography component={"span"} variant="body1">
          <div className="topnav" id="myTopnav">
            <div className="logo-and-hamburger">
              <a href="/" className="active">
                <img
                  src={BigSwords}
                  alt="Polytopia big swords"
                  width="30"
                  style={{ marginLeft: 2, marginRight: 8 }}
                />{" "}
                Polytopia Damage Calculator
              </a>
              <a href="#" className="icon" onClick={() => this.myFunction()}>
                <img src={HamburgerMenu} alt="Hamburger menu" width="30" />
                <i className="fa fa-bars"></i>
              </a>
            </div>
            <div className="nav-items" style={{ paddingRight: 5 }}>
              <a href="/secretgame" style={{ marginTop: 1 }}>
                Bonus game
              </a>
              <a href="/help" style={{ marginTop: 1 }}>
                Help
              </a>
              <a href="/beta" style={{ marginTop: 1 }}>
                Beta
              </a>
            </div>
          </div>
        </Typography>
      </Box>
    );
  }

  myFunction() {
    const x = document.getElementById("myTopnav");
    if (x)
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
  }
}

export default NavBar;
