import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./NavBar/NavBar";
import Footer from "./footer/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes />
        <Footer />
      </React.Fragment>


    );
  }
}

export default App;
