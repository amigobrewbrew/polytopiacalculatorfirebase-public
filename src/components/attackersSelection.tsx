/** This component holds all the buttons and functions for the attackers selection. */

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
import CardWithShadow from "./cardWithShadow";
import { SINGLE_COL_MAX_WIDTH_PX, ONE_HUNDRED_PERCENT } from "../customStyles";
import Box from "@mui/material/Box";

/** This property is to indicate to the parent component that a soldier needs to be added to the battleground */
type Props = {
    onAddAttacker: any;
};

/**
 * Function for the rendering of attackers selection component
 */
const AttackersSelection: React.FC<Props> = ({ onAddAttacker }) => {
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

    console.log("Render attackers selection component");

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
                        variant="contained"
                        size="small"
                        onClick={() => changeVisible(visibleNow, "pageDown")}
                        sx={{ m: 1 }}
                        style={{ maxWidth: "4em", minWidth: "4em" }}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
                    </Button>
                    <span className="alignSelfCenter">Attackers selection</span>
                    <Button
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
                        <LandUnits onAddAttacker={onAddAttacker} />
                    )}
                    {visiblePage2 && <Page2 onAddAttacker={onAddAttacker} />}
                    {visiblePage3 && <Page3 onAddAttacker={onAddAttacker} />}
                    {visiblePage4 && <Page4 onAddAttacker={onAddAttacker} />}
                    {visiblePage5 && <Page5 onAddAttacker={onAddAttacker} />}
                </Box>
            </Typography>
        </CardWithShadow>
    );
};

const LandUnits: React.FC<Props> = ({ onAddAttacker }) => {
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

    return (
        <Box>
            <Box sx={attackersBoxStyle}>
                {" "}
                <Button
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                    onClick={() => onAddAttacker("Warrior")}
                >
                    <img
                        src={Warrior}
                        alt="Warrior"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                    onClick={() => onAddAttacker("Archer")}
                >
                    <img
                        src={Archer}
                        alt="Archer"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Rider")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Rider} alt="Rider" style={attackersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Defender")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Defender}
                        alt="Defender"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Swordsman")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Swordsman}
                        alt="Swordsman"
                        style={attackersImageStyle}
                    />
                </Button>
            </Box>

            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Catapult")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Catapult}
                        alt="Catapult"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Knight")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Knight}
                        alt="Knight"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("MindBender")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={MindBender}
                        alt="MindBender"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Giant")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Giant} alt="Giant" style={attackersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Dagger")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Dagger}
                        alt="Dagger"
                        style={attackersImageStyle}
                    />
                </Button>
            </Box>
        </Box>
    );
};

const Page2: React.FC<Props> = ({ onAddAttacker }) => {
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

    return (
        <Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("NatureBunny")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={NatureBunny}
                        alt="NatureBunny"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Cloak")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Cloak} alt="Cloak" style={attackersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Dinghy")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Dinghy}
                        alt="Dinghy"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Pirate")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Pirate}
                        alt="Pirate"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Raft")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Raft} alt="Raft" style={attackersImageStyle} />
                </Button>
            </Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Scout")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Scout} alt="Scout" style={attackersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Rammer")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Rammer}
                        alt="Rammer"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Bomber")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Bomber}
                        alt="Bomber"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Juggernaut")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Juggernaut}
                        alt="Juggernaut"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Polytaur")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Polytaur}
                        alt="Polytaur"
                        style={attackersImageStyle}
                    />
                </Button>
            </Box>
        </Box>
    );
};

const Page3: React.FC<Props> = ({ onAddAttacker }) => {
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

    return (
        <Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Amphibian")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Amphibian}
                        alt="Amphibian"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Tridention")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Tridention}
                        alt="Tridention"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Shark")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Shark} alt="Shark" style={attackersImageStyle} />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Puffer")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Puffer}
                        alt="Puffer"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Jelly")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Jelly} alt="Jelly" style={attackersImageStyle} />
                </Button>
            </Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Crab")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Crab} alt="Crab" style={attackersImageStyle} />
                </Button>

                <Button
                    onClick={() => onAddAttacker("DragonEgg")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={DragonEgg}
                        alt="DragonEgg"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("BabyDragon")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={BabyDragon}
                        alt="BabyDragon"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("FireDragon")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={FireDragon}
                        alt="FireDragon"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Mooni")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Mooni} alt="Mooni" style={attackersImageStyle} />
                </Button>
            </Box>
        </Box>
    );
};

const Page4: React.FC<Props> = ({ onAddAttacker }) => {
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

    return (
        <Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("IceArcher")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={IceArcher}
                        alt="IceArcher"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("BattleSled")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={BattleSled}
                        alt="BattleSled"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Gaami")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Gaami} alt="Gaami" style={attackersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddAttacker("IceFortress")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={IceFortress}
                        alt="IceFortress"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Hexapod")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Hexapod}
                        alt="Hexapod"
                        style={attackersImageStyle}
                    />
                </Button>
            </Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Kiton")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Kiton} alt="Kiton" style={attackersImageStyle} />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Phychi")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Phychi}
                        alt="Phychi"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Raychi")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Raychi}
                        alt="Raychi"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Shaman")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Shaman}
                        alt="Shaman"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Exida")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img src={Exida} alt="Exida" style={attackersImageStyle} />
                </Button>
            </Box>
        </Box>
    );
};

const Page5: React.FC<Props> = ({ onAddAttacker }) => {
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

    return (
        <Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={attackersImageStyle}
                    />
                </Button>

                <Button
                    onClick={() => onAddAttacker("Doomux")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Doomux}
                        alt="Doomux"
                        style={attackersImageStyle}
                    />
                </Button>
            </Box>
            <Box sx={attackersBoxStyle}>
                <Button
                    onClick={() => onAddAttacker("Segment")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Segment")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Segment")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Segment")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Segment}
                        alt="Segment"
                        style={attackersImageStyle}
                    />
                </Button>
                <Button
                    onClick={() => onAddAttacker("Centipede")}
                    size="small"
                    variant="outlined"
                    sx={attackersButtonStyle}
                >
                    <img
                        src={Centipede}
                        alt="Centipede"
                        style={attackersImageStyle}
                    />
                </Button>
            </Box>
        </Box>
    );
};

export default AttackersSelection;
