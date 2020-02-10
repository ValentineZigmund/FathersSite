import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
