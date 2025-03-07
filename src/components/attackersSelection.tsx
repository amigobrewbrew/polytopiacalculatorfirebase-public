/** This component holds all the buttons and functions for the attackers selection */

import * as React from "react";
import { useState } from "react";
import Warrior from "../img/Attackers/Warrior.png";
import Archer from "../img/Attackers/Archer.png";
import Rider from "../img/Attackers/Rider.png";
import Defender from "../img/Attackers/Defender.png";
import Swordsman from "../img/Attackers/Swordsman.png";
import Catapult from "../img/Attackers/Catapult.png";
import Knight from "../img/Attackers/Knight.png";
import Giant from "../img/Attackers/Giant.png";
// import Battleship from "../img/Attackers/Battleship.png";
// import Switch from "../img/Other/Switch1.png";
// import Boat from "../img/Attackers/Boat.png";
// import Ship from "../img/Attackers/Ship.png";
import Amphibian from "../img/Attackers/Amphibian.png";
import Tridention from "../img/Attackers/Tridention.png";
import Shark from "../img/Attackers/Shark.png";
import Puffer from "../img/Attackers/Puffer.png";
import Jelly from "../img/Attackers/Jelly.png";
import Crab from "../img/Attackers/Crab.png";
import Polytaur from "../img/Attackers/Polytaur.png";
// import Navalon from "../img/Attackers/Navalon.png";
import DragonEgg from "../img/Attackers/Dragon Egg.png";
import BabyDragon from "../img/Attackers/Baby Dragon.png";
import FireDragon from "../img/Attackers/Fire Dragon.png";
import Mooni from "../img/Attackers/Mooni.png";
import IceArcher from "../img/Attackers/Ice Archer.png";
import BattleSled from "../img/Attackers/Battle Sled.png";
import IceFortress from "../img/Attackers/Ice Fortress.png";
import Gaami from "../img/Attackers/Gaami.png";
import Hexapod from "../img/Attackers/Hexapod.png";
import Kiton from "../img/Attackers/Kiton.png";
import Phychi from "../img/Attackers/Phychi.png";
import Raychi from "../img/Attackers/Raychi.png";
import Shaman from "../img/Attackers/Shaman.png";
import Exida from "../img/Attackers/Exida.png";
import Doomux from "../img/Attackers/Doomux.png";
import Centipede from "../img/Attackers/Centipede.png";
import Segment from "../img/Attackers/Segment.png";
import MindBender from "../img/Attackers/Mind Bender.png";
import NatureBunny from "../img/Attackers/Nature Bunny.png";
import Dagger from "../img/Attackers/Dagger.png";
import Dinghy from "../img/Attackers/Dinghy.png";
import Cloak from "../img/Attackers/Cloak.png";
import Pirate from "../img/Attackers/Pirate.png";
import Raft from "../img/Attackers/Raft.png";
import Scout from "../img/Attackers/Scout.png";
import Rammer from "../img/Attackers/Rammer.png";
import Bomber from "../img/Attackers/Bomber.png";
import Juggernaut from "../img/Attackers/Juggernaut.png";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardWithShadow from "./cardWithShadow";
import { SINGLE_COL_MAX_WIDTH_PX, ONE_HUNDRED_PERCENT } from "../customStyles";

/** This property is to indicate to the parent component that a soldier needs to be added to the battleground */
type Props = {
    onAddAttacker: any;
};

// Centralized styles
const attackersImageStyle = {
    height: "40px",
    width: "30px",
    objectFit: "contain",
    WebkitAppearance: "none",
} as React.CSSProperties;

const attackersBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
};

const attackersButtonStyle = {
    m: 1,
    maxWidth: "4em",
    minWidth: "4em",
};

// Attacker structure organized by pages
const attackerPages = [
    // Page 1 - LandUnits
    [
        { name: "Warrior", img: Warrior, flipped: true },
        { name: "Archer", img: Archer, flipped: true },
        { name: "Rider", img: Rider, flipped: true },
        { name: "Defender", img: Defender, flipped: true },
        { name: "Swordsman", img: Swordsman, flipped: true },
        { name: "Catapult", img: Catapult, flipped: true },
        { name: "Knight", img: Knight, flipped: true },
        { name: "MindBender", img: MindBender, flipped: true },
        { name: "Giant", img: Giant, flipped: true },
        { name: "Dagger", img: Dagger, flipped: true },
    ],
    // Page 2
    [
        { name: "NatureBunny", img: NatureBunny },
        { name: "Cloak", img: Cloak },
        { name: "Dinghy", img: Dinghy },
        { name: "Pirate", img: Pirate },
        { name: "Raft", img: Raft },
        { name: "Scout", img: Scout },
        { name: "Rammer", img: Rammer },
        { name: "Bomber", img: Bomber },
        { name: "Juggernaut", img: Juggernaut },
        { name: "Polytaur", img: Polytaur },
    ],
    // Page 3
    [
        { name: "Amphibian", img: Amphibian },
        { name: "Tridention", img: Tridention },
        { name: "Shark", img: Shark },
        { name: "Puffer", img: Puffer },
        { name: "Jelly", img: Jelly },
        { name: "Crab", img: Crab },
        { name: "DragonEgg", img: DragonEgg },
        { name: "BabyDragon", img: BabyDragon },
        { name: "FireDragon", img: FireDragon },
        { name: "Mooni", img: Mooni },
    ],
    // Page 4
    [
        { name: "IceArcher", img: IceArcher },
        { name: "BattleSled", img: BattleSled },
        { name: "Gaami", img: Gaami },
        { name: "IceFortress", img: IceFortress },
        { name: "Hexapod", img: Hexapod },
        { name: "Kiton", img: Kiton },
        { name: "Phychi", img: Phychi },
        { name: "Raychi", img: Raychi },
        { name: "Shaman", img: Shaman },
        { name: "Exida", img: Exida },
    ],
    // Page 5
    [
        { name: "Doomux", img: Doomux },
        { name: "Doomux", img: Doomux },
        { name: "Doomux", img: Doomux },
        { name: "Doomux", img: Doomux },
        { name: "Doomux", img: Doomux },
        { name: "Segment", img: Segment },
        { name: "Segment", img: Segment },
        { name: "Segment", img: Segment },
        { name: "Segment", img: Segment },
        { name: "Centipede", img: Centipede },
    ],
];

/**
 * Generic attacker page component
 */
const AttackerPage: React.FC<Props & { pageIndex: number }> = ({
    onAddAttacker,
    pageIndex,
}) => {
    const attackers = attackerPages[pageIndex];

    return (
        <Box>
            <Box sx={attackersBoxStyle}>
                {attackers.slice(0, 5).map((def, index) => (
                    <Button
                        key={`${def.name}-${index}`}
                        onClick={() => onAddAttacker(def.name)}
                        size="small"
                        variant="outlined"
                        sx={attackersButtonStyle}
                    >
                        <img
                            src={def.img}
                            alt={def.name}
                            style={{
                                ...attackersImageStyle,
                            }}
                        />
                    </Button>
                ))}
            </Box>
            <Box sx={attackersBoxStyle}>
                {attackers.slice(5, 10).map((def, index) => (
                    <Button
                        key={`${def.name}-${index + 5}`}
                        onClick={() => onAddAttacker(def.name)}
                        size="small"
                        variant="outlined"
                        sx={attackersButtonStyle}
                    >
                        <img
                            src={def.img}
                            alt={def.name}
                            style={{
                                ...attackersImageStyle,
                            }}
                        />
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

/**
 * Function for the rendering of attackers selection component
 */
const AttackersSelection: React.FC<Props> = ({ onAddAttacker }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "prev") {
            setCurrentPage((prevPage) =>
                prevPage === 0 ? attackerPages.length - 1 : prevPage - 1
            );
        } else {
            setCurrentPage((prevPage) =>
                prevPage === attackerPages.length - 1 ? 0 : prevPage + 1
            );
        }
    };

    return (
        <CardWithShadow
            sx={{ p: "1%" }}
            style={{
                maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                width: ONE_HUNDRED_PERCENT,
            }}
        >
            <Typography component={"span"} variant="h6">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                        color="error"
                        variant="contained"
                        size="small"
                        onClick={() => handlePageChange("prev")}
                        sx={{ m: 1 }}
                        style={{ maxWidth: "4em", minWidth: "4em" }}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
                    </Button>
                    <span className="alignSelfCenter">Attackers selection</span>
                    <Button
                        color="error"
                        variant="contained"
                        size="small"
                        onClick={() => handlePageChange("next")}
                        sx={{ m: 1 }}
                        style={{ maxWidth: "4em", minWidth: "4em" }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                    </Button>
                </Box>
                <Box>
                    <AttackerPage
                        pageIndex={currentPage}
                        onAddAttacker={onAddAttacker}
                    />
                </Box>
            </Typography>
        </CardWithShadow>
    );
};

export default AttackersSelection;
