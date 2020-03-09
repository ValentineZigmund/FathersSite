import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'typeface-roboto';
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const app = (
  // <BrowserRouter>
  <HashRouter basename="/FathersSite">
    <ScrollToTop />
    <App />
  </HashRouter>
  // {/* </BrowserRouter> */}
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
