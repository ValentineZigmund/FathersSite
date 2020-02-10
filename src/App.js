import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";

import BrazilJiuJitsu from "./containers/BrazilJiuJitsu/BrazilJiuJitsu";
import Boxing from "./containers/Boxing/Boxing";
import Mma from "./containers/Mma/Mma";
import Grappling from "./containers/Grappling/Grappling";
import MuayThai from "./containers/MuayThai/MuayThai";

import HallRental from "./containers/HallRental/HallRental";
import IndividualTrainings from "./containers/IndividualTrainings/IndividualTrainings";
import TimeTable from "./containers/TimeTable/TimeTable";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/brazil-jiu-jitsu" component={BrazilJiuJitsu} />
        <Route path="/boxing" component={Boxing} />
        <Route path="/mma" component={Mma} />
        <Route path="/grappling" component={Grappling} />
        <Route path="/muay-thai" component={MuayThai} />
        <Route path="/hall-rental" component={HallRental} />
        <Route path="/individual-trainings" component={IndividualTrainings} />
        <Route path="/time-table" component={TimeTable} />
      </Switch>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
