import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import CardWithShadow from "./cardWithShadow";

class helpPage extends React.Component {
    render() {
        const email = import.meta.env.VITE_EMAIL || "someone@example.com";
        return (
            <Box>
                <CssBaseline />
                <Typography component={"span"} variant="body1">
                    <CardWithShadow sx={{ margin: 2 }}>
                        <p>
                            Use the Attacker and Defender selection buttons to
                            add soldiers to the battlefield. The attackers
                            target defenders top to bottom, while skipping
                            defenders that are already killed by other
                            attackers.
                        </p>
                        <span>
                            Battlefield legend for each soldier:
                            <ul>
                                <li>Soldier icon: Unit on battefield</li>
                                <li>
                                    First number: Hitpoints of soldier before
                                    the battle. You can adjust this number with
                                    direct input by clicking on the number field
                                </li>
                                <li>
                                    Second number: Hitpoints of the soldier
                                    after the battle{" "}
                                </li>
                                <li>[x]: Delete unit from battlefield</li>
                                <li>
                                    [+]: Increase soldier hitpoints or fighting
                                    order by one
                                </li>
                                <li>
                                    [-]: Decrease soldier hitpoints or fighting
                                    order by one
                                </li>
                                <li>
                                    VET: When toggled, unit is veteran (plus 5
                                    maximum hitpoints)
                                </li>
                                <li>
                                    SPLSH: When toggled, unit is doing splash
                                    damage (Fire Dragon and Bomber)
                                </li>
                                <li>
                                    XPLD: When toggled, unit explodes (Raychi
                                    and Doomux; Attacking Segment always
                                    explodes)
                                </li>
                                <li>
                                    SAFE: When toggled, unit is safe from
                                    retaliation{" "}
                                </li>
                                <li>
                                    BST: When toggled, unit is boosted by
                                    Cymanti shaman
                                </li>
                                <li>
                                    MX##: Set the maximum health for ships to
                                    10, 15, 20, 25, or 30 hitpoints. Maximum
                                    hitpoints affects attacking and defensive
                                    power
                                </li>
                                <li>
                                    DEF: When toggled, unit gets defensive
                                    bonus{" "}
                                </li>
                                <li>
                                    WALL: When toggled, unit gets walled
                                    bonus{" "}
                                </li>
                                <li>
                                    POIS: When toggled, unit is poisoned before
                                    battle
                                </li>
                                <li>
                                    POIS: When green, unit is poisoned after
                                    attack by Raychi, Exida, Phychi, or
                                    exploding unit.
                                </li>
                            </ul>
                        </span>
                        <p>
                            Contact me for questions, tips, bugs etc. via{" "}
                            <a href={`mailto:${email}`}>Email</a>,{" "}
                            <a href="https://www.reddit.com/r/Polytopia/comments/17m0hn7/updated_polytopia_calculator_now_with_beta_units/">
                                {" "}
                                Reddit{" "}
                            </a>{" "}
                            or on{" "}
                            <a href="https://discord.gg/dmyMSQ7QfB">
                                {" "}
                                Discord{" "}
                            </a>
                            <br></br>A big thanks to Programming with Mosh,
                            Midjiwan and the Polytopia community!
                            <br></br>
                            Press F12 to find the worst source code you have
                            ever seen. Also available on{" "}
                            <a href="https://github.com/amigobrewbrew/polytopiacalculatorfirebase-public">
                                {" "}
                                GitHub
                            </a>{" "}
                            <br></br>
                            Costs to maintain this website are very minimal;
                            however, if you like, you can support the website
                            via{" "}
                            <a href="https://www.paypal.com/donate/?business=HEVFJL6C3XXRC&no_recurring=0&item_name=Support+Polytopia+Damage+Calculator+&currency_code=EUR">
                                {" "}
                                Paypal{" "}
                            </a>
                            <br></br>
                            Follow these instructions to install this web app as
                            a local app:{" "}
                            <a href="https://support.google.com/chrome/answer/9658361">
                                {" "}
                                Progressive web apps{" "}
                            </a>
                            <br></br>
                        </p>
                        <span>
                            Useful links:
                            <ul>
                                <li>
                                    <a href="https://polytopia.io/">
                                        https://polytopia.io/
                                    </a>
                                </li>
                                <li>
                                    <a href="https://polytopia.fandom.com/wiki/The_Battle_of_Polytopia_Wiki">
                                        https://polytopia.fandom.com/wiki/
                                    </a>
                                </li>
                            </ul>
                            Let me know what you would like to see for this
                            calculator app!
                            <br></br>
                        </span>
                    </CardWithShadow>
                </Typography>{" "}
            </Box>
        );
    }
}

export default helpPage;
