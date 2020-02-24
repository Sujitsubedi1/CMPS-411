import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./NavBar/NavBar"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
