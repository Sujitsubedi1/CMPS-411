import React from "react";
import { Router, Route } from "react-router-dom";
import Profile from "./login/Profile";
import Login from "./login/Login";
import history from "./history";
export default () => (
  <Router history={history}>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/profile" exact component={Profile} />
    </div>
  </Router>
);
