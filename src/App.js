/**
 * @Author: harsha
 * @Date:   2020-07-20T09:26:47+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T13:28:42+02:00
 */

import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import LoginViewComponent from "./components/LoginViewComponent/LoginViewComponent";
import ListViewComponent from "./components/ListViewComponent/ListViewComponent";
import ListDetailsComponent from "./components/ListDetailsComponent/ListDetailsComponent";

function App() {
  return (
    <Fragment>
      <Router>
        <HeaderComponent></HeaderComponent>
        <Route exact path="/" component={LoginViewComponent} />
        <Route exact path="/list" component={ListViewComponent} />
        <Route exact path="/list/details" component={ListDetailsComponent} />
      </Router>
    </Fragment>
  );
}

export default App;
