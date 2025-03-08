/** Secret game  */

import * as React from "react";
import { useState, useCallback } from "react";
import Warrior from "../img/Attackers/Warrior.png";
import Archer from "../img/Attackers/Archer.png";
import Rider from "../img/Attackers/Rider.png";
import Defender from "../img/Attackers/Defender.png";
import Swordsman from "../img/Attackers/Swordsman.png";
import Catapult from "../img/Attackers/Catapult.png";
import Knight from "../img/Attackers/Knight.png";
import Giant from "../img/Attackers/Giant.png";
import Battleship from "../img/Attackers/Battleship.png";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { analytics, isLocal } from "./../firebase";
import { logEvent } from "firebase/analytics";
import CardWithShadow from "./cardWithShadow";
import { SINGLE_COL_MAX_WIDTH_PX } from "../customStyles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const analyticsLogEvent = isLocal ? analytics.logEvent : logEvent;

/**
 * Custom popup component to replace alerts
 */
interface PopupProps {
    open: boolean;
    message: string;
    title: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ open, message, title, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="game-alert-dialog"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

/**
 * Refactored Secret Game component using modern React hooks
 * This game asks the player to guess the correct unit in 3 attempts
 */
const SecretGame: React.FC = () => {
    // State management with hooks
    const [gameState, setGameState] = useState({
        numeroSecreto: Math.floor(Math.random() * 9) + 1,
        tentativas: 3,
        totalGames: 0,
        totalGamesWon: 0,
    });

    // Popup state
    const [popup, setPopup] = useState({
        open: false,
        message: "",
        title: "Game Message",
    });

    // Show popup message
    const showPopup = (message: string, title: string = "Game Message") => {
        setPopup({
            open: true,
            message,
            title,
        });
    };

    // Close popup
    const closePopup = () => {
        setPopup((prev) => ({ ...prev, open: false }));
    };

    // Helper function to get unit name from number
    const getUnitName = (unitNumber: number): string => {
        const unitNames = [
            "Warrior",
            "Archer",
            "Rider",
            "Defender",
            "Swordsman",
            "Catapult",
            "Knight",
            "Giant",
            "Battleship",
        ];
        return unitNames[unitNumber - 1];
    };

    // Start a new game
    const newGame = useCallback(() => {
        console.log("New game started");
        analyticsLogEvent(analytics, "sg_game_started");

        setGameState((prevState) => ({
            ...prevState,
            numeroSecreto: Math.floor(Math.random() * 9) + 1,
            tentativas: 3,
            totalGames: prevState.totalGames + 1, // During debugging is calculated twice.. but only during debugging?
        }));

        // showPopup(
        //     "Numero secreto is reset and tentativas set to three",
        //     "New Game"
        // );
    }, []);

    // Handle unit selection and game logic
    const handleUnitSelection = useCallback(
        (unitNumber: number) => {
            console.log(`${getUnitName(unitNumber)} clicked`);

            setGameState((prevState) => {
                // Game logic
                if (unitNumber === prevState.numeroSecreto) {
                    // Correct guess
                    analyticsLogEvent(analytics, "sg_game_won");

                    // Show success popup
                    showPopup(
                        `The ${getUnitName(unitNumber)} is correct! Parabéns pra você!`,
                        "Correct!"
                    );

                    setTimeout(() => {
                        newGame();
                    }, 500);

                    return {
                        ...prevState,
                        totalGamesWon: prevState.totalGamesWon + 1,
                    };
                } else {
                    // Wrong guess
                    const newTentativas = prevState.tentativas - 1;

                    // Give hint
                    if (unitNumber > prevState.numeroSecreto) {
                        analyticsLogEvent(
                            analytics,
                            "sg_secret_unit_is_weaker"
                        );
                        showPopup(
                            "You made the incorrect choice. The secret unit is weaker",
                            "Wrong Choice"
                        );
                    } else {
                        analyticsLogEvent(
                            analytics,
                            "sg_secret_unit_is_stronger"
                        );
                        showPopup(
                            "You made the incorrect choice. The secret unit is stronger",
                            "Wrong Choice"
                        );
                    }

                    // Game over check
                    if (newTentativas === 0) {
                        analyticsLogEvent(analytics, "sg_game_lost");
                        showPopup(
                            `You made the incorrect choice three times. Você perdeu! The correct answer was ${getUnitName(prevState.numeroSecreto)}`,
                            "Game Over"
                        );

                        setTimeout(() => {
                            newGame();
                        }, 500);
                    }

                    return {
                        ...prevState,
                        tentativas: newTentativas,
                    };
                }
            });
        },
        [newGame]
    );

    // Unit button click handlers
    const unitHandlers = Array.from(
        { length: 9 },
        (_, i) => () => handleUnitSelection(i + 1)
    );

    // Styles
    const attackersImageStyle = {
        height: "80px",
        width: "60px",
        objectFit: "contain",
        WebkitAppearance: "none",
    } as React.CSSProperties;

    const attackersButtonStyle = {
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
    } as React.CSSProperties;

    return (
        <CardWithShadow
            style={{
                margin: "2rem 0",
                maxWidth: `${SINGLE_COL_MAX_WIDTH_PX}px`,
                justifySelf: "center",
            }}
        >
            <CssBaseline />
            <Box sx={{ alignItems: "center" }}>
                <Typography component={"span"} variant="body1">
                    <Box sx={{ margin: 1 }}>
                        <h3 style={{ marginLeft: 10 }}>
                            {" "}
                            Nath&apos;s favorite game{" "}
                        </h3>
                        <Box style={{ marginLeft: 10 }}>
                            Guess the correct unit in 3 turns{" "}
                        </Box>

                        {/* First row of units */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <button
                                onClick={unitHandlers[0]}
                                className="Warrior"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Warrior}
                                    alt="Warrior"
                                    style={attackersImageStyle}
                                />
                            </button>
                            <button
                                onClick={unitHandlers[1]}
                                className="Archer"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Archer}
                                    alt="Archer"
                                    style={attackersImageStyle}
                                />
                            </button>
                            <button
                                onClick={unitHandlers[2]}
                                className="Rider"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Rider}
                                    alt="Rider"
                                    style={attackersImageStyle}
                                />
                            </button>
                        </Box>

                        {/* Second row of units */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <button
                                onClick={unitHandlers[3]}
                                className="Defender"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Defender}
                                    alt="Defender"
                                    style={attackersImageStyle}
                                />
                            </button>
                            <button
                                onClick={unitHandlers[4]}
                                className="Swordsman"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Swordsman}
                                    alt="Swordsman"
                                    style={attackersImageStyle}
                                />
                            </button>
                            <button
                                onClick={unitHandlers[5]}
                                className="Catapult"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Catapult}
                                    alt="Catapult"
                                    style={attackersImageStyle}
                                />
                            </button>
                        </Box>

                        {/* Third row of units */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <button
                                onClick={unitHandlers[6]}
                                className="Knight"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Knight}
                                    alt="Knight"
                                    style={attackersImageStyle}
                                />
                            </button>
                            <button
                                onClick={unitHandlers[7]}
                                className="Giant"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Giant}
                                    alt="Giant"
                                    style={attackersImageStyle}
                                />
                            </button>
                            <button
                                onClick={unitHandlers[8]}
                                className="Battleship"
                                style={attackersButtonStyle}
                            >
                                <img
                                    src={Battleship}
                                    alt="Battleship"
                                    style={attackersImageStyle}
                                />
                            </button>
                        </Box>

                        {/* New Game button */}
                        <Box style={{ margin: 0 }}>
                            <button
                                className="btn btn-success btn-lg m-2"
                                onClick={newGame}
                                style={{ alignContent: "center" }}
                            >
                                New game
                            </button>
                        </Box>

                        {/* Game stats */}
                        <Box>
                            <Box style={{ margin: 10 }}>
                                <b>
                                    Total games played: {gameState.totalGames}
                                </b>
                            </Box>
                            <Box style={{ margin: 10 }}>
                                <b>Games won: {gameState.totalGamesWon} </b>
                            </Box>
                        </Box>
                    </Box>
                </Typography>
            </Box>

            {/* Custom popup dialog */}
            <Popup
                open={popup.open}
                message={popup.message}
                title={popup.title}
                onClose={closePopup}
            />
        </CardWithShadow>
    );
};

export default SecretGame;
