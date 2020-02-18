import React, { Component } from "react";

import history from "../history";
import { withRouter, Link } from "react-router-dom";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed: false
    };
  }

  render() {
    const mystyle = {
      color: "red",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <div>
          <h1 style={mystyle}>Admin Mode</h1>

          <Link to="/Viewclass">
            <button> View Class</button>
          </Link>

          <br />

          <Link to="/ViewStudent">
            <button> View Students</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminHome);
