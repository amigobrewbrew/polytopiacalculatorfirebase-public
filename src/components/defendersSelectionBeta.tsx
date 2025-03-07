/** This component holds all the buttons and functions for the attackers selection */

// SCHEDULED FOR DEMOLITION

import * as React from "react";
import DefendersSelectionButton from "./defendersSelectionButton";
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
import Cloak from "../img/Defenders/Cloak.png";
import Dinghy from "../img/Defenders/Dinghy.png";
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
    OnAddDefender: any;
};

type State = {
    visibleNow: string;
    visibleLandUnits: boolean;
    visiblePage2: boolean;
    visiblePage3: boolean;
    visiblePage4: boolean;
    visiblePage5: boolean;
};

/**
 * Class for the functions and rendering of attackers selection component
 * The rendering makes use of and interface DefendersSelectionButton
 */
class defendersSelection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            visibleNow: "LandUnits",
            visibleLandUnits: true,
            visiblePage2: false,
            visiblePage3: false,
            visiblePage4: false,
            visiblePage5: false,
        };
        // this.changeVisible = this.changeVisible.bind(this);
        // this.makeVisibleLandUnits = this.makeVisibleLandUnits.bind(this);
        // this.makeVisibleShips = this.makeVisibleShips.bind(this);
    }

    changeVisible = (currentSelection: string, pageDirection: string) => {
        console.log("CurrentSelection before is: " + currentSelection);

        if (
            (currentSelection === "LandUnits" && pageDirection === "pageUp") ||
            (currentSelection === "Page3" && pageDirection === "pageDown")
        ) {
            this.setState({ visibleLandUnits: false });
            this.setState({ visiblePage2: true });
            this.setState({ visiblePage3: false });
            this.setState({ visiblePage4: false });
            this.setState({ visiblePage5: false });
            this.setState({ visibleNow: "Page2" });
        } else if (
            (currentSelection === "Page2" && pageDirection === "pageUp") ||
            (currentSelection === "Page4" && pageDirection === "pageDown")
        ) {
            this.setState({ visibleLandUnits: false });
            this.setState({ visiblePage2: false });
            this.setState({ visiblePage3: true });
            this.setState({ visiblePage4: false });
            this.setState({ visiblePage5: false });
            this.setState({ visibleNow: "Page3" });
        } else if (
            (currentSelection === "Page3" && pageDirection === "pageUp") ||
            (currentSelection === "Page5" && pageDirection === "pageDown")
        ) {
            this.setState({ visibleLandUnits: false });
            this.setState({ visiblePage2: false });
            this.setState({ visiblePage3: false });
            this.setState({ visiblePage4: true });
            this.setState({ visiblePage5: false });
            this.setState({ visibleNow: "Page4" });
        } else if (
            (currentSelection === "Page4" && pageDirection === "pageUp") ||
            (currentSelection === "LandUnits" && pageDirection === "pageDown")
        ) {
            this.setState({ visibleLandUnits: false });
            this.setState({ visiblePage2: false });
            this.setState({ visiblePage3: false });
            this.setState({ visiblePage4: false });
            this.setState({ visiblePage5: true });
            this.setState({ visibleNow: "Page5" });
        } else if (
            (currentSelection === "Page5" && pageDirection === "pageUp") ||
            (currentSelection === "Page2" && pageDirection === "pageDown")
        ) {
            this.setState({ visibleLandUnits: true });
            this.setState({ visiblePage2: false });
            this.setState({ visiblePage3: false });
            this.setState({ visiblePage4: false });
            this.setState({ visiblePage5: false });
            this.setState({ visibleNow: "LandUnits" });
        }

        console.log("CurrentSelection after is: " + currentSelection);
    };

    render() {
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
                            onClick={() =>
                                this.changeVisible(
                                    this.state.visibleNow,
                                    "pageDown"
                                )
                            }
                            sx={{ m: 1 }}
                            style={{ maxWidth: "4em", minWidth: "4em" }}
                        >
                            {/* <img src={Switch} alt="Switch" style={attackersImageStyle} /> */}
                            <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
                        </Button>
                        <span className="alignSelfCenter">
                            Defenders selection
                        </span>
                        <Button
                            color="error"
                            variant="contained"
                            size="small"
                            onClick={() =>
                                this.changeVisible(
                                    this.state.visibleNow,
                                    "pageUp"
                                )
                            }
                            sx={{ m: 1 }}
                            style={{ maxWidth: "4em", minWidth: "4em" }}
                        >
                            {/* <img src={Switch} alt="Switch" style={attackersImageStyle} /> */}
                            <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                        </Button>
                    </Box>
                    <Box>
                        {this.state.visibleLandUnits && (
                            <LandUnits {...this.props}> </LandUnits>
                        )}
                        {this.state.visiblePage2 && (
                            <Page2 {...this.props}> </Page2>
                        )}
                        {this.state.visiblePage3 && (
                            <Page3 {...this.props}> </Page3>
                        )}
                        {this.state.visiblePage4 && (
                            <Page4 {...this.props}> </Page4>
                        )}
                        {this.state.visiblePage5 && (
                            <Page5 {...this.props}> </Page5>
                        )}

                        {/* <button onClick={() => this.changeVisible(this.state.visibleNow)}>
            <img src={Switch} alt="Switch" style={attackersImageStyle} />
          </button> */}
                    </Box>
                </Typography>
            </CardWithShadow>
        );
    }
}

class LandUnits extends React.Component<Props> {
    render() {
        const defendersBoxStyle = {
            display: "flex",
            justifyContent: "space-between",
        };

        return (
            <Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Warrior"
                        onClick={() => this.props.OnAddDefender("Warrior")}
                        ButtonImage={Warrior}
                    />
                    <DefendersSelectionButton
                        defenderType="Archer"
                        onClick={() => this.props.OnAddDefender("Archer")}
                        ButtonImage={Archer}
                    />
                    <DefendersSelectionButton
                        defenderType="Rider"
                        onClick={() => this.props.OnAddDefender("Rider")}
                        ButtonImage={Rider}
                    />
                    <DefendersSelectionButton
                        defenderType="Defender"
                        onClick={() => this.props.OnAddDefender("Defender")}
                        ButtonImage={Defender}
                    />
                    <DefendersSelectionButton
                        defenderType="Swordsman"
                        onClick={() => this.props.OnAddDefender("Swordsman")}
                        ButtonImage={Swordsman}
                    />
                </Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Catapult"
                        onClick={() => this.props.OnAddDefender("Catapult")}
                        ButtonImage={Catapult}
                    />
                    <DefendersSelectionButton
                        defenderType="Knight"
                        onClick={() => this.props.OnAddDefender("Knight")}
                        ButtonImage={Knight}
                    />
                    <DefendersSelectionButton
                        defenderType="MindBender"
                        onClick={() => this.props.OnAddDefender("MindBender")}
                        ButtonImage={MindBender}
                    />
                    <DefendersSelectionButton
                        defenderType="Giant"
                        onClick={() => this.props.OnAddDefender("Giant")}
                        ButtonImage={Giant}
                    />
                    <DefendersSelectionButton
                        defenderType="Dagger"
                        onClick={() => this.props.OnAddDefender("Dagger")}
                        ButtonImage={Dagger}
                    />
                </Box>{" "}
            </Box>
        );
    }
}

class Page2 extends React.Component<Props> {
    render() {
        const defendersBoxStyle = {
            display: "flex",
            justifyContent: "space-between",
        };
        return (
            <Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="NatureBunny"
                        onClick={() => this.props.OnAddDefender("NatureBunny")}
                        ButtonImage={NatureBunny}
                    />
                    <DefendersSelectionButton
                        defenderType="Cloak"
                        onClick={() => this.props.OnAddDefender("Cloak")}
                        ButtonImage={Cloak}
                    />
                    <DefendersSelectionButton
                        defenderType="Dinghy"
                        onClick={() => this.props.OnAddDefender("Dinghy")}
                        ButtonImage={Dinghy}
                    />
                    <DefendersSelectionButton
                        defenderType="Pirate"
                        onClick={() => this.props.OnAddDefender("Pirate")}
                        ButtonImage={Pirate}
                    />
                    <DefendersSelectionButton
                        defenderType="Raft"
                        onClick={() => this.props.OnAddDefender("Raft")}
                        ButtonImage={Raft}
                    />
                </Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Scout"
                        onClick={() => this.props.OnAddDefender("Scout")}
                        ButtonImage={Scout}
                    />
                    <DefendersSelectionButton
                        defenderType="Rammer"
                        onClick={() => this.props.OnAddDefender("Rammer")}
                        ButtonImage={Rammer}
                    />
                    <DefendersSelectionButton
                        defenderType="Bomber"
                        onClick={() => this.props.OnAddDefender("Bomber")}
                        ButtonImage={Bomber}
                    />
                    <DefendersSelectionButton
                        defenderType="Juggernaut"
                        onClick={() => this.props.OnAddDefender("Juggernaut")}
                        ButtonImage={Juggernaut}
                    />
                    <DefendersSelectionButton
                        defenderType="Polytaur"
                        onClick={() => this.props.OnAddDefender("Polytaur")}
                        ButtonImage={Polytaur}
                    />
                </Box>{" "}
            </Box>
        );
    }
}

class Page3 extends React.Component<Props> {
    render() {
        const defendersBoxStyle = {
            display: "flex",
            justifyContent: "space-between",
        };
        return (
            <Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Amphibian"
                        onClick={() => this.props.OnAddDefender("Amphibian")}
                        ButtonImage={Amphibian}
                    />
                    <DefendersSelectionButton
                        defenderType="Tridention"
                        onClick={() => this.props.OnAddDefender("Tridention")}
                        ButtonImage={Tridention}
                    />
                    <DefendersSelectionButton
                        defenderType="Shark"
                        onClick={() => this.props.OnAddDefender("Shark")}
                        ButtonImage={Shark}
                    />
                    <DefendersSelectionButton
                        defenderType="Puffer"
                        onClick={() => this.props.OnAddDefender("Puffer")}
                        ButtonImage={Puffer}
                    />
                    <DefendersSelectionButton
                        defenderType="Jelly"
                        onClick={() => this.props.OnAddDefender("Jelly")}
                        ButtonImage={Jelly}
                    />
                </Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Crab"
                        onClick={() => this.props.OnAddDefender("Crab")}
                        ButtonImage={Crab}
                    />
                    <DefendersSelectionButton
                        defenderType="DragonEgg"
                        onClick={() => this.props.OnAddDefender("DragonEgg")}
                        ButtonImage={DragonEgg}
                    />
                    <DefendersSelectionButton
                        defenderType="BabyDragon"
                        onClick={() => this.props.OnAddDefender("BabyDragon")}
                        ButtonImage={BabyDragon}
                    />
                    <DefendersSelectionButton
                        defenderType="FireDragon"
                        onClick={() => this.props.OnAddDefender("FireDragon")}
                        ButtonImage={FireDragon}
                    />
                    <DefendersSelectionButton
                        defenderType="Mooni"
                        onClick={() => this.props.OnAddDefender("Mooni")}
                        ButtonImage={Mooni}
                    />
                </Box>{" "}
            </Box>
        );
    }
}

class Page4 extends React.Component<Props> {
    render() {
        const defendersBoxStyle = {
            display: "flex",
            justifyContent: "space-between",
        };
        return (
            <Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="IceArcher"
                        onClick={() => this.props.OnAddDefender("IceArcher")}
                        ButtonImage={IceArcher}
                    />
                    <DefendersSelectionButton
                        defenderType="BattleSled"
                        onClick={() => this.props.OnAddDefender("BattleSled")}
                        ButtonImage={BattleSled}
                    />

                    <DefendersSelectionButton
                        defenderType="Gaami"
                        onClick={() => this.props.OnAddDefender("Gaami")}
                        ButtonImage={Gaami}
                    />
                    <DefendersSelectionButton
                        defenderType="IceFortress"
                        onClick={() => this.props.OnAddDefender("IceFortress")}
                        ButtonImage={IceFortress}
                    />
                    <DefendersSelectionButton
                        defenderType="Hexapod"
                        onClick={() => this.props.OnAddDefender("Hexapod")}
                        ButtonImage={Hexapod}
                    />
                </Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Kiton"
                        onClick={() => this.props.OnAddDefender("Kiton")}
                        ButtonImage={Kiton}
                    />
                    <DefendersSelectionButton
                        defenderType="Phychi"
                        onClick={() => this.props.OnAddDefender("Phychi")}
                        ButtonImage={Phychi}
                    />
                    <DefendersSelectionButton
                        defenderType="Raychi"
                        onClick={() => this.props.OnAddDefender("Raychi")}
                        ButtonImage={Raychi}
                    />
                    <DefendersSelectionButton
                        defenderType="Shaman"
                        onClick={() => this.props.OnAddDefender("Shaman")}
                        ButtonImage={Shaman}
                    />
                    <DefendersSelectionButton
                        defenderType="Exida"
                        onClick={() => this.props.OnAddDefender("Exida")}
                        ButtonImage={Exida}
                    />
                </Box>{" "}
            </Box>
        );
    }
}

class Page5 extends React.Component<Props> {
    render() {
        const defendersBoxStyle = {
            display: "flex",
            justifyContent: "space-between",
        };
        return (
            <Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Doomux"
                        onClick={() => this.props.OnAddDefender("Doomux")}
                        ButtonImage={Doomux}
                    />
                    <DefendersSelectionButton
                        defenderType="Doomux"
                        onClick={() => this.props.OnAddDefender("Doomux")}
                        ButtonImage={Doomux}
                    />
                    <DefendersSelectionButton
                        defenderType="Doomux"
                        onClick={() => this.props.OnAddDefender("Doomux")}
                        ButtonImage={Doomux}
                    />
                    <DefendersSelectionButton
                        defenderType="Doomux"
                        onClick={() => this.props.OnAddDefender("Doomux")}
                        ButtonImage={Doomux}
                    />
                    <DefendersSelectionButton
                        defenderType="Doomux"
                        onClick={() => this.props.OnAddDefender("Doomux")}
                        ButtonImage={Doomux}
                    />
                </Box>
                <Box sx={defendersBoxStyle}>
                    <DefendersSelectionButton
                        defenderType="Centipede"
                        onClick={() => this.props.OnAddDefender("Centipede")}
                        ButtonImage={Centipede}
                    />

                    <DefendersSelectionButton
                        defenderType="Segment"
                        onClick={() => this.props.OnAddDefender("Segment")}
                        ButtonImage={Segment}
                    />

                    <DefendersSelectionButton
                        defenderType="Segment"
                        onClick={() => this.props.OnAddDefender("Segment")}
                        ButtonImage={Segment}
                    />

                    <DefendersSelectionButton
                        defenderType="Segment"
                        onClick={() => this.props.OnAddDefender("Segment")}
                        ButtonImage={Segment}
                    />

                    <DefendersSelectionButton
                        defenderType="Segment"
                        onClick={() => this.props.OnAddDefender("Segment")}
                        ButtonImage={Segment}
                    />
                </Box>{" "}
            </Box>
        );
    }
}

export default defendersSelection;
