/** Navigation bar components to navigate to different pages of the website */

import * as React from "react";
import { useState, useCallback } from "react";
import BigSwords from "../img/Other/BigSwords.png";
import HamburgerMenu from "../img/Other/HamburgerMenu.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { BOX_SHADOW_DEFAULT } from "../customStyles";

/**
 * Navigation component for different URLs: calculator, secret game and help page
 */
const NavBar = () => {
    // Use ref to avoid re-querying DOM element
    const myTopnavRef = React.useRef<HTMLDivElement>(null);

    // Toggle responsive navigation
    const toggleNavMenu = useCallback(() => {
        if (!myTopnavRef.current) return;

        const navElement = myTopnavRef.current;
        navElement.className =
            navElement.className === "topnav" ? "topnav responsive" : "topnav";
    }, []);

    return (
        <Box boxShadow={BOX_SHADOW_DEFAULT}>
            <CssBaseline />
            <Typography component={"span"} variant="body1">
                {" "}
                <div className="topnav" id="myTopnav" ref={myTopnavRef}>
                    <div className="logo-and-hamburger">
                        <a href="/">
                            <img
                                src={BigSwords}
                                alt="Polytopia big swords"
                                width="30"
                                style={{ marginLeft: 2, marginRight: 8 }}
                            />{" "}
                            Polytopia Damage Calculator
                        </a>
                        <a
                            href="#"
                            className="icon"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent page jump on click
                                toggleNavMenu();
                            }}
                        >
                            <img
                                src={HamburgerMenu}
                                alt="Hamburger menu"
                                width="30"
                            />
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
                    </div>
                </div>
            </Typography>
        </Box>
    );
};

export default NavBar;
