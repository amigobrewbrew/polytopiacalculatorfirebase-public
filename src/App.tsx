import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import HelpPage from "./components/helpPage";
import SecretGame from "./components/secretGame";
import BattleGroundDetails from "./components/battleGroundDetails";
import envConfig from "./envConfig";
import { AppProvider } from "./providers/appProvider";

const App = () => {
    return (
        <AppProvider>
            <meta
                name="google-site-verification"
                content={envConfig.siteVerification}
            />
            <React.Fragment key="adsense-script">
                <script async src={envConfig.adsenseClient}></script>
            </React.Fragment>
            <NavBar />
            <div className="containers">
                <Routes>
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/" element={<BattleGroundDetails />} />
                    <Route path="/secretgame" element={<SecretGame />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </AppProvider>
    );
};

export default App;
