import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"; // Use Routes, not just Route
import "./App.css";
import NavBar from "./components/navbar";
import HelpPage from "./components/helpPage";
import SecretGame from "./components/secretGame";
import BattleGroundDetails from "./components/battleGroundDetails";
import BattleGroundDetailsBeta from "./components/battleGroundDetailsBeta";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Josefin Sans, Arial, sans-serif",
    },
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <NavBar />

                    <div className="containers">
                        <Routes>
                            <Route path="/help" element={<HelpPage />} />
                            <Route path="/" element={<BattleGroundDetails />} />
                            <Route
                                path="/secretgame"
                                element={
                                    <SecretGame
                                        numeroSecreto={0}
                                        tentativas={0}
                                        totalGames={0}
                                        totalGamesWon={0}
                                    />
                                }
                            />
                            <Route
                                path="/beta"
                                element={<BattleGroundDetailsBeta />}
                            />
                        </Routes>
                    </div>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
