import React from "react";
import { Router, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import history from "./history";
import AdminHome from "./Admin/AdminHome";
import Viewclass from "./Admin/Viewclass";
import ViewStudent from "./Admin/ViewStudents";
import AddFile from "./Add_StudentInfo/AddFile";
import Studentsdata from "./Admin/Studentsdata";
import Viewcourse from "./Admin/Viewcourse";

import home from "./Home/home";

export default () => (
  <Router history={history}>
    <div>
      <Route path="/" exact component={home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/AddFile" component={AddFile} />
      <Route path="/ViewStudent" component={ViewStudent} />
      <Route path="/Viewclass" component={Viewclass} />
      <Route path="/AdminHome" component={AdminHome} />
      <Route path ="/Studentsdata" component ={Studentsdata}/>
      <Route path ="/Viewcourse" component ={Viewcourse}/>

    </div>
  </Router>
);
