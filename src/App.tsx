import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import HelpPage from "./components/helpPage";
import SecretGame from "./components/secretGame";
import BattleGroundDetails from "./components/battleGroundDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import envConfig from "./envConfig";

// Create theme once outside of component to avoid recreation on every render
const theme = createTheme({
    typography: {
        fontFamily: "Josefin Sans, Arial, sans-serif",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <meta
                name="google-site-verification"
                content={envConfig.siteVerification}
            />
            <React.Fragment key="adsense-script">
                <script async src={envConfig.adsenseClient}></script>
            </React.Fragment>{" "}
            <NavBar />
            <div className="containers">
                <Routes>
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/" element={<BattleGroundDetails />} />
                    <Route path="/secretgame" element={<SecretGame />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
};

export default App;
