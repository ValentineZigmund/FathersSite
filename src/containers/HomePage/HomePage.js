import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
// import Drawer from "./components/navigation/Drawer/Drawer";
import "bootstrap/dist/css/bootstrap.min.css";


// import { Route, Switch } from "react-router-dom";

// import HomePage from "./containers/HomePage/";
// import page1 from "./containers/page1/page1";
// import page2 from "./containers/page2/page2";


function HomePage() {
  return (
    <div>
      {/* <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/page1" component={page1} />
        <Route path="/page2" component={page2} />
      </Switch> */}
      {/* <Drawer /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default HomePage;
