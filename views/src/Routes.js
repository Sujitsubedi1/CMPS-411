import React from "react";
import { Router, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./login/Login";
import history from "./history";
import LogOut from "./login/LogOut";

export default () => (
  <Router history={history}>
    <div>
      <Route path="/login" exact component={Login} />
      <Route path="/logOut" exact component={LogOut} />
      <Route path="/profile" exact component={Profile} />
    </div>
  </Router>
);
