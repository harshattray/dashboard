/**
 * @Author: harsha
 * @Date:   2020-07-20T09:26:47+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T05:27:30+02:00
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import "./index.css";
import App from "./App";
import "babel-polyfill";
import "antd/dist/antd.css";
import "semantic-ui-css/semantic.min.css";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
