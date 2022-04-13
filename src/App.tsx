import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import HelpPage from "./components/helpPage";
import SecretGame from "./components/secretGame";
import BattleGroundDetails from "./components/battleGroundDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className="containers">
          <Route path="/help" component={HelpPage} />
          <Route path="/" exact component={BattleGroundDetails} />
          <Route path="/secretgame" component={SecretGame} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
