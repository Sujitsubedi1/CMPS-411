import React, { Component } from "react";
import "./App.css";
import Login from "./login/Login";
import Routes from "./Routes";
//import Profile from "./Profile/Profile";
// import LogOut from "./login/LogOut";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
