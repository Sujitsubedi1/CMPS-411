import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isloggin: false
    };
    this.redirect = this.redirect.bind(this);
    this.view = this.view.bind(this);
  }
  view() {
    const email = localStorage.getItem("saveEmail");
    this.setState({ email: email });
  }

  redirect() {
    this.setState({ isloggin: true });
    localStorage.clear();
  }
  render() {
    if (this.state.isloggin) {
      // return <Redirect to={"/profile"}></Redirect>;
      return <Redirect to={"/login"}></Redirect>;
    }
    const view = () => {
      const email = localStorage.getItem("saveEmail");
      this.setState({ email: email });
    };

    return (
      <div>
        {this.view}
        You are logged in {this.state.email}
        <p></p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.redirect}
        >
          Log out
        </button>
      </div>
    );
  }
}

export default LogOut;
