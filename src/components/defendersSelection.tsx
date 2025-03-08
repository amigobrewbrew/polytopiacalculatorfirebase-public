/** This component holds all the buttons and functions for the defenders selection */

import * as React from "react";
import { useState } from "react";
import Warrior from "../img/Defenders/Warrior.png";
import Archer from "../img/Defenders/Archer.png";
import Rider from "../img/Defenders/Rider.png";
import Defender from "../img/Defenders/Defender.png";
import Swordsman from "../img/Defenders/Swordsman.png";
import Catapult from "../img/Defenders/Catapult.png";
import Knight from "../img/Defenders/Knight.png";
import Giant from "../img/Defenders/Giant.png";
// import Battleship from "../img/Defenders/Battleship.png";
// import Switch from "../img/Other/Switch1.png";
// import Boat from "../img/Defenders/Boat.png";
// import Ship from "../img/Defenders/Ship.png";
import Amphibian from "../img/Defenders/Amphibian.png";
import Tridention from "../img/Defenders/Tridention.png";
import Shark from "../img/Defenders/Shark.png";
import Puffer from "../img/Defenders/Puffer.png";
import Jelly from "../img/Defenders/Jelly.png";
import Crab from "../img/Defenders/Crab.png";
import Polytaur from "../img/Defenders/Polytaur.png";
// import Navalon from "../img/Defenders/Navalon.png";
import DragonEgg from "../img/Defenders/Dragon Egg.png";
import BabyDragon from "../img/Defenders/Baby Dragon.png";
import FireDragon from "../img/Defenders/Fire Dragon.png";
import Mooni from "../img/Defenders/Mooni.png";
import IceArcher from "../img/Defenders/Ice Archer.png";
import BattleSled from "../img/Defenders/Battle Sled.png";
import IceFortress from "../img/Defenders/Ice Fortress.png";
import Gaami from "../img/Defenders/Gaami.png";
import Hexapod from "../img/Defenders/Hexapod.png";
import Kiton from "../img/Defenders/Kiton.png";
import Phychi from "../img/Defenders/Phychi.png";
import Raychi from "../img/Defenders/Raychi.png";
import Shaman from "../img/Defenders/Shaman.png";
import Exida from "../img/Defenders/Exida.png";
import Doomux from "../img/Defenders/Doomux.png";
import Centipede from "../img/Defenders/Centipede.png";
import Segment from "../img/Defenders/Segment.png";
import MindBender from "../img/Defenders/Mind Bender.png";
import NatureBunny from "../img/Defenders/Nature Bunny.png";
import Dagger from "../img/Defenders/Dagger.png";
import Dinghy from "../img/Defenders/Dinghy.png";
import Cloak from "../img/Defenders/Cloak.png";
import Pirate from "../img/Defenders/Pirate.png";
import Raft from "../img/Defenders/Raft.png";
import Scout from "../img/Defenders/Scout.png";
import Rammer from "../img/Defenders/Rammer.png";
import Bomber from "../img/Defenders/Bomber.png";
import Juggernaut from "../img/Defenders/Juggernaut.png";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardWithShadow from "./cardWithShadow";
import { SINGLE_COL_MAX_WIDTH_PX, ONE_HUNDRED_PERCENT } from "../customStyles";

/** This property is to indicate to the parent component that a soldier needs to be added to the battleground */
type Props = {
    onAddDefender: any;
};

// Centralized styles
const defendersImageStyle = {
    height: "40px",
    width: "30px",
    objectFit: "contain",
    WebkitAppearance: "none",
    transform: "scaleX(-1)",
} as React.CSSProperties;

const defendersBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
};

const defendersButtonStyle = {
    m: 1,
    maxWidth: "4em",
    minWidth: "4em",
};

// Defender structure organized by pages
const defenderPages = [
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
        { name: "Centipede", img: Centipede },
        { name: "Segment", img: Segment },
        { name: "Segment", img: Segment },
        { name: "Segment", img: Segment },
        { name: "Segment", img: Segment },
    ],
];

/**
 * Defenders rows component
 */
const DefenderPage: React.FC<Props & { pageIndex: number }> = ({
    onAddDefender,
    pageIndex,
}) => {
    const defenders = defenderPages[pageIndex];

    return (
        <Box>
            <Box sx={defendersBoxStyle}>
                {defenders.slice(0, 5).map((def, index) => (
                    <Button
                        key={`${def.name}-${index}`}
                        onClick={() => onAddDefender(def.name)}
                        size="small"
                        variant="outlined"
                        sx={defendersButtonStyle}
                        color="error"
                    >
                        <img
                            src={def.img}
                            alt={def.name}
                            style={{
                                ...defendersImageStyle,
                            }}
                        />
                    </Button>
                ))}
            </Box>
            <Box sx={defendersBoxStyle}>
                {defenders.slice(5, 10).map((def, index) => (
                    <Button
                        key={`${def.name}-${index + 5}`}
                        onClick={() => onAddDefender(def.name)}
                        size="small"
                        variant="outlined"
                        sx={defendersButtonStyle}
                        color="error"
                    >
                        <img
                            src={def.img}
                            alt={def.name}
                            style={{
                                ...defendersImageStyle,
                            }}
                        />
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

/**
 * Navigation component for defenders selection
 */
const DefendersSelection: React.FC<Props> = ({ onAddDefender }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "prev") {
            setCurrentPage((prevPage) =>
                prevPage === 0 ? defenderPages.length - 1 : prevPage - 1
            );
        } else {
            setCurrentPage((prevPage) =>
                prevPage === defenderPages.length - 1 ? 0 : prevPage + 1
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
                    <span className="alignSelfCenter">Defenders selection</span>
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
                    <DefenderPage
                        pageIndex={currentPage}
                        onAddDefender={onAddDefender}
                    />
                </Box>
            </Typography>
        </CardWithShadow>
    );
};

export default DefendersSelection;
