import React, { Component } from "react";
import "./App.css";
import Login from "./login/Login";
import Profile from "./login/Profile";
// import LogOut from "./login/LogOut";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
        <Profile />
      </React.Fragment>
    );
  }
}

export default App;
