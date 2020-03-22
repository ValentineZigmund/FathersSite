import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";

import BrazilJiuJitsu from "./containers/BrazilJiuJitsu/BrazilJiuJitsu";
import Boxing from "./containers/Boxing/Boxing";
import Mma from "./containers/Mma/Mma";
import Grappling from "./containers/Grappling/Grappling";
import MuayThai from "./containers/MuayThai/MuayThai";
import About from "./containers/About/About";
import HallRental from "./containers/HallRental/HallRental";
import IndividualTrainings from "./containers/IndividualTrainings/IndividualTrainings";
import TimeTable from "./containers/TimeTable/TimeTable";
import Contacts from "./containers/Contacts/Contacts"

function App() {
  return (

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/brazil-jiu-jitsu" component={BrazilJiuJitsu} />
        <Route path="/boxing" component={Boxing} />
        <Route path="/mma" component={Mma} />
        <Route path="/grappling" component={Grappling} />
        <Route path="/muay-thai" component={MuayThai} />
        <Route path="/hall-rental" component={HallRental} />
        <Route path="/individual-trainings" component={IndividualTrainings} />
        <Route path="/time-table" component={TimeTable} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about-us" component={About} />
      </Switch>

  );
}
export default App;
