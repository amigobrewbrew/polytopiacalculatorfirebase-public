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
import CardWithShadow from "./cardWithShadow";
import { SINGLE_COL_MAX_WIDTH_PX, ONE_HUNDRED_PERCENT } from "../customStyles";
import Box from "@mui/material/Box";

/** This property is to indicate to the parent component that a soldier needs to be added to the battleground */
type Props = {
    onAddDefender: any;
};

/**
 * Function for the rendering of defenders selection component
 */
const DefendersSelection: React.FC<Props> = ({ onAddDefender }) => {
    const [visibleNow, setVisibleNow] = useState("LandUnits");
    const [visibleLandUnits, setVisibleLandUnits] = useState(true);
    const [visiblePage2, setVisiblePage2] = useState(false);
    const [visiblePage3, setVisiblePage3] = useState(false);
    const [visiblePage4, setVisiblePage4] = useState(false);
    const [visiblePage5, setVisiblePage5] = useState(false);

    const changeVisible = (currentSelection: string, pageDirection: string) => {
        console.log("CurrentSelection before is: " + currentSelection);

        if (
            (currentSelection === "LandUnits" && pageDirection === "pageUp") ||
            (currentSelection === "Page3" && pageDirection === "pageDown")
        ) {
            setVisibleLandUnits(false);
            setVisiblePage2(true);
            setVisiblePage3(false);
            setVisiblePage4(false);
            setVisiblePage5(false);
            setVisibleNow("Page2");
        } else if (
            (currentSelection === "Page2" && pageDirection === "pageUp") ||
            (currentSelection === "Page4" && pageDirection === "pageDown")
        ) {
            setVisibleLandUnits(false);
            setVisiblePage2(false);
            setVisiblePage3(true);
            setVisiblePage4(false);
            setVisiblePage5(false);
            setVisibleNow("Page3");
        } else if (
            (currentSelection === "Page3" && pageDirection === "pageUp") ||
            (currentSelection === "Page5" && pageDirection === "pageDown")
        ) {
            setVisibleLandUnits(false);
            setVisiblePage2(false);
            setVisiblePage3(false);
            setVisiblePage4(true);
            setVisiblePage5(false);
            setVisibleNow("Page4");
        } else if (
            (currentSelection === "Page4" && pageDirection === "pageUp") ||
            (currentSelection === "LandUnits" && pageDirection === "pageDown")
        ) {
            setVisibleLandUnits(false);
            setVisiblePage2(false);
            setVisiblePage3(false);
            setVisiblePage4(false);
            setVisiblePage5(true);
            setVisibleNow("Page5");
        } else if (
            (currentSelection === "Page5" && pageDirection === "pageUp") ||
            (currentSelection === "Page2" && pageDirection === "pageDown")
        ) {
            setVisibleLandUnits(true);
            setVisiblePage2(false);
            setVisiblePage3(false);
            setVisiblePage4(false);
            setVisiblePage5(false);
            setVisibleNow("LandUnits");
        }

        console.log("CurrentSelection after is: " + currentSelection);
    };

    console.log("Render defenders selection component");

    return (
        <CardWithShadow
            sx={{ p: "1%" }}
            style={{
                maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                width: ONE_HUNDRED_PERCENT,
            }}
        >
            <Typography component={"span"} variant="h6">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        color="error"
                        variant="contained"
                        size="small"
                        onClick={() => changeVisible(visibleNow, "pageDown")}
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
                        onClick={() => changeVisible(visibleNow, "pageUp")}
                        sx={{ m: 1 }}
                        style={{ maxWidth: "4em", minWidth: "4em" }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                    </Button>
                </Box>
                <Box>
                    {visibleLandUnits && (
                        <LandUnits onAddDefender={onAddDefender} />
                    )}
                    {visiblePage2 && <Page2 onAddDefender={onAddDefender} />}
                    {visiblePage3 && <Page3 onAddDefender={onAddDefender} />}
                    {visiblePage4 && <Page4 onAddDefender={onAddDefender} />}
                    {visiblePage5 && <Page5 onAddDefender={onAddDefender} />}
                </Box>
            </Typography>
        </CardWithShadow>
    );
};

const LandUnits: React.FC<Props> = ({ onAddDefender }) => {
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

    return (
        <Box>
            <Box sx={defendersBoxStyle}>
                {" "}
                <Button
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                    onClick={() => onAddDefender("Warrior")}
                >
                    <img
                        src={Warrior}
                        alt="Warrior"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                    onClick={() => onAddDefender("Archer")}
                >
                    <img
                        src={Archer}
                        alt="Archer"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Rider")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Rider} alt="Rider" style={defendersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddDefender("Defender")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Defender}
                        alt="Defender"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Swordsman")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Swordsman}
                        alt="Swordsman"
                        style={defendersImageStyle}
                    />
                </Button>
            </Box>

            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Catapult")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Catapult}
                        alt="Catapult"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Knight")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Knight}
                        alt="Knight"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("MindBender")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={MindBender}
                        alt="MindBender"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Giant")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Giant} alt="Giant" style={defendersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddDefender("Dagger")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Dagger}
                        alt="Dagger"
                        style={defendersImageStyle}
                    />
                </Button>
            </Box>
        </Box>
    );
};

const Page2: React.FC<Props> = ({ onAddDefender }) => {
    const defendersImageStyle = {
        height: "40px",
        width: "30px",
        objectFit: "contain",
        WebkitAppearance: "none",
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

    return (
        <Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("NatureBunny")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={NatureBunny}
                        alt="NatureBunny"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Cloak")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Cloak} alt="Cloak" style={defendersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddDefender("Dinghy")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Dinghy}
                        alt="Dinghy"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Pirate")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Pirate}
                        alt="Pirate"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Raft")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Raft} alt="Raft" style={defendersImageStyle} />
                </Button>
            </Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Scout")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Scout} alt="Scout" style={defendersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddDefender("Rammer")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Rammer}
                        alt="Rammer"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Bomber")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Bomber}
                        alt="Bomber"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Juggernaut")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Juggernaut}
                        alt="Juggernaut"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Polytaur")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Polytaur}
                        alt="Polytaur"
                        style={defendersImageStyle}
                    />
                </Button>
            </Box>
        </Box>
    );
};

const Page3: React.FC<Props> = ({ onAddDefender }) => {
    const defendersImageStyle = {
        height: "40px",
        width: "30px",
        objectFit: "contain",
        WebkitAppearance: "none",
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

    return (
        <Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Amphibian")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Amphibian}
                        alt="Amphibian"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Tridention")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Tridention}
                        alt="Tridention"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Shark")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Shark} alt="Shark" style={defendersImageStyle} />
                </Button>

                <Button
                    onClick={() => onAddDefender("Puffer")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Puffer}
                        alt="Puffer"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Jelly")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Jelly} alt="Jelly" style={defendersImageStyle} />
                </Button>
            </Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Crab")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Crab} alt="Crab" style={defendersImageStyle} />
                </Button>

                <Button
                    onClick={() => onAddDefender("DragonEgg")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={DragonEgg}
                        alt="DragonEgg"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("BabyDragon")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={BabyDragon}
                        alt="BabyDragon"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("FireDragon")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={FireDragon}
                        alt="FireDragon"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Mooni")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Mooni} alt="Mooni" style={defendersImageStyle} />
                </Button>
            </Box>
        </Box>
    );
};

const Page4: React.FC<Props> = ({ onAddDefender }) => {
    const defendersImageStyle = {
        height: "40px",
        width: "30px",
        objectFit: "contain",
        WebkitAppearance: "none",
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

    return (
        <Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("IceArcher")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={IceArcher}
                        alt="IceArcher"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("BattleSled")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={BattleSled}
                        alt="BattleSled"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Gaami")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Gaami} alt="Gaami" style={defendersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddDefender("IceFortress")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={IceFortress}
                        alt="IceFortress"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Hexapod")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Hexapod}
                        alt="Hexapod"
                        style={defendersImageStyle}
                    />
                </Button>
            </Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Kiton")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Kiton} alt="Kiton" style={defendersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddDefender("Phychi")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Phychi}
                        alt="Phychi"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Raychi")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Raychi}
                        alt="Raychi"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Shaman")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Shaman}
                        alt="Shaman"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Exida")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img src={Exida} alt="Exida" style={defendersImageStyle} />
                </Button>
            </Box>
        </Box>
    );
};

const Page5: React.FC<Props> = ({ onAddDefender }) => {
    const defendersImageStyle = {
        height: "40px",
        width: "30px",
        objectFit: "contain",
        WebkitAppearance: "none",
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

    return (
        <Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={defendersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddDefender("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={defendersImageStyle}
                    />
                </Button>
            </Box>
            <Box sx={defendersBoxStyle}>
                <Button
                    onClick={() => onAddDefender("Segment")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Segment")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Segment")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Segment")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={defendersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddDefender("Centipede")}
                    size="small"
                    variant="outlined"
                    sx={defendersButtonStyle}
                >
                    <img
                        src={Centipede}
                        alt="Centipede"
                        style={defendersImageStyle}
                    />
                </Button>
            </Box>
        </Box>
    );
};

export default DefendersSelection;
