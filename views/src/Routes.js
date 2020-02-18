import React from "react";
import { Router, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./login/Login";
import history from "./history";
import LogOut from "./login/LogOut";
import AdminHome from "./Admin/AdminHome";
import Viewclass from "./Admin/AdminHome";
import ViewStudent from "./Admin/ViewStudents";
import AddFile from "./Add_StudentInfo/AddFile";

export default () => (
  <Router history={history}>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/logOut" exact component={LogOut} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/AddFile" component={AddFile} />
      <Route path="/ViewStudent" component={ViewStudent} />
      <Route path="/ViewClass" component={Viewclass} />
      <Route path="/AdminHome" component={AdminHome} />
    </div>
  </Router>
);
