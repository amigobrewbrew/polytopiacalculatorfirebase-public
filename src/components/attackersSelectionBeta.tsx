/** This component holds all the buttons and functions for the attackers selection. */

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
//import Switch from "../img/Other/Switch1.png";
import Boat from "../img/Attackers/Boat.png";
import Ship from "../img/Attackers/Ship.png";
import Amphibian from "../img/Attackers/Amphibian.png";
import Tridention from "../img/Attackers/Tridention.png";
import Shark from "../img/Attackers/Shark.png";
import Puffer from "../img/Attackers/Puffer.png";
import Jelly from "../img/Attackers/Jelly.png";
import Crab from "../img/Attackers/Crab.png";
import Polytaur from "../img/Attackers/Polytaur.png";
import Navalon from "../img/Attackers/Navalon.png";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

// const theme = createTheme({
//   status: {
//     danger: "#e53e3e",
//   },
//   palette: {
//     primary: {
//       main: "#002776",
//       darker: "#fff",
//     },
//     secondary: {
//       main: "#009C3B",
//       contrastText: "#fff",
//     },
//   },
// });

/** This property is to indicate to the parent component that a soldier needs to be added to the battleground */
type Props = {
  onAddAttacker: any;
  // pageDirection: string;
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
 */
class attackersSelectionBeta extends React.Component<Props, State> {
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
    console.log("Render attackers selection component");

    return (
      <Box
        sx={{
          border: 1,
          borderColor: "primary.main",
          borderRadius: 1,
          m: 0.25,
        }}
        style={{ maxWidth: "25.75em" }}
      >
        <Typography component={"span"} variant="h6">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                this.changeVisible(this.state.visibleNow, "pageDown")
              }
              sx={{ m: 1 }}
              style={{ maxWidth: "4em", minWidth: "4em" }}
            >
              {/* <img src={Switch} alt="Switch" style={attackersImageStyle} /> */}
              <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
            </Button>
            <span>Attackers selection</span>
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                this.changeVisible(this.state.visibleNow, "pageUp")
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
            {this.state.visiblePage2 && <Page2 {...this.props}> </Page2>}
            {this.state.visiblePage3 && <Page3 {...this.props}> </Page3>}
            {this.state.visiblePage4 && <Page4 {...this.props}> </Page4>}
            {this.state.visiblePage5 && <Page5 {...this.props}> </Page5>}

            {/* <button onClick={() => this.changeVisible(this.state.visibleNow)}>
            <img src={Switch} alt="Switch" style={attackersImageStyle} />
          </button> */}
          </Box>
        </Typography>
      </Box>
    );
  }
}

class LandUnits extends React.Component<Props> {
  render() {
    const attackersImageStyle = {
      height: "40px",
      width: "30px",
      objectFit: "contain",
      WebkitAppearance: "none",
    } as React.CSSProperties;

    // const attackersButtonStyleOld = {
    //   marginRight: 5,
    //   marginLeft: 5,
    //   borderRadius: 5,
    //   marginBottom: 5,
    //   marginTop: 5,
    // } as React.CSSProperties;

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
            onClick={() => this.props.onAddAttacker("Warrior")}
          >
            <img src={Warrior} alt="Warrior" style={attackersImageStyle} />
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
            onClick={() => this.props.onAddAttacker("Archer")}
          >
            <img src={Archer} alt="Archer" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Rider")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Rider} alt="Rider" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Defender")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Defender} alt="Defender" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Swordsman")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Swordsman} alt="Swordsman" style={attackersImageStyle} />
          </Button>
        </Box>

        <Box sx={attackersBoxStyle}>
          <Button
            onClick={() => this.props.onAddAttacker("Catapult")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Catapult} alt="Catapult" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Knight")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Knight} alt="Knight" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("MindBender")}
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
            onClick={() => this.props.onAddAttacker("Giant")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Giant} alt="Giant" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Dagger")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Dagger} alt="Dagger" style={attackersImageStyle} />
          </Button>
        </Box>
      </Box>
    );
  }
}

class Page2 extends React.Component<Props> {
  render() {
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
            onClick={() => this.props.onAddAttacker("NatureBunny")}
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
            onClick={() => this.props.onAddAttacker("Cloak")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Cloak} alt="Cloak" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Dinghy")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Dinghy} alt="Dinghy" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Pirate")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Pirate} alt="Pirate" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Raft")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Raft} alt="Raft" style={attackersImageStyle} />
          </Button>
        </Box>
        <Box sx={attackersBoxStyle}>
          <Button
            onClick={() => this.props.onAddAttacker("Scout")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Scout} alt="Scout" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Rammer")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Rammer} alt="Rammer" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Bomber")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Bomber} alt="Bomber" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Juggernaut")}
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
            onClick={() => this.props.onAddAttacker("Polytaur")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Polytaur} alt="Polytaur" style={attackersImageStyle} />
          </Button>
        </Box>{" "}
      </Box>
    );
  }
}

class Page3 extends React.Component<Props> {
  render() {
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
            onClick={() => this.props.onAddAttacker("Amphibian")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Amphibian} alt="Amphibian" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Tridention")}
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
            onClick={() => this.props.onAddAttacker("Shark")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Shark} alt="Shark" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Puffer")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Puffer} alt="Puffer" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Jelly")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Jelly} alt="Jelly" style={attackersImageStyle} />
          </Button>
        </Box>
        <Box sx={attackersBoxStyle}>
          <Button
            onClick={() => this.props.onAddAttacker("Crab")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Crab} alt="Crab" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("DragonEgg")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={DragonEgg} alt="DragonEgg" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("BabyDragon")}
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
            onClick={() => this.props.onAddAttacker("FireDragon")}
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
            onClick={() => this.props.onAddAttacker("Mooni")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Mooni} alt="Mooni" style={attackersImageStyle} />
          </Button>
        </Box>
      </Box>
    );
  }
}

class Page4 extends React.Component<Props> {
  render() {
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
            onClick={() => this.props.onAddAttacker("IceArcher")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={IceArcher} alt="IceArcher" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("BattleSled")}
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
            onClick={() => this.props.onAddAttacker("Gaami")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Gaami} alt="Gaami" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("IceFortress")}
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
            onClick={() => this.props.onAddAttacker("Hexapod")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Hexapod} alt="Hexapod" style={attackersImageStyle} />
          </Button>
        </Box>
        <Box sx={attackersBoxStyle}>
          <Button
            onClick={() => this.props.onAddAttacker("Kiton")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Kiton} alt="Kiton" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Phychi")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Phychi} alt="Phychi" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Raychi")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Raychi} alt="Raychi" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Shaman")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Shaman} alt="Shaman" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Exida")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Exida} alt="Exida" style={attackersImageStyle} />
          </Button>
        </Box>{" "}
      </Box>
    );
  }
}

class Page5 extends React.Component<Props> {
  render() {
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
            onClick={() => this.props.onAddAttacker("Doomux")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Doomux} alt="Doomux" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Doomux")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Doomux} alt="Doomux" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Doomux")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Doomux} alt="Doomux" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Doomux")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Doomux} alt="Doomux" style={attackersImageStyle} />
          </Button>

          <Button
            onClick={() => this.props.onAddAttacker("Doomux")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Doomux} alt="Doomux" style={attackersImageStyle} />
          </Button>
        </Box>
        <Box sx={attackersBoxStyle}>
          <Button
            onClick={() => this.props.onAddAttacker("Segment")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Segment} alt="Segment" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Segment")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Segment} alt="Segment" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Segment")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Segment} alt="Segment" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Segment")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Segment} alt="Segment" style={attackersImageStyle} />
          </Button>
          <Button
            onClick={() => this.props.onAddAttacker("Centipede")}
            size="small"
            variant="outlined"
            sx={attackersButtonStyle}
          >
            <img src={Centipede} alt="Centipede" style={attackersImageStyle} />
          </Button>
        </Box>{" "}
      </Box>
    );
  }
}

export default attackersSelectionBeta;
