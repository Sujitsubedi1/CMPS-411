import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import history from "../history";
// or
// import { GoogleLogin } from "react-google-login";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      Name: "",
      Email: "",
      Token: ""
    };
  }

  Signup(res) {
    console.log(res.profileObj.email);

    let FormData = {
      Name: res.profileObj.name,
      Email: res.profileObj.email,
      Token: res.accessToken
    };
    fetch("https://localhost:44332/api/User/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FormData)
    })
      .then(response => response.json())
      .then(response => {
        console.log("Success:", response);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    history.push("/profile");
  }

  render() {
    const responseGoogle = response => {
      console.log(response);
      this.Signup(response);
      this.profile(response);
    };

    return (
      <GoogleLogin
        clientId="1096692170721-uoa7a1mdservf8n76u6pk6jkvqnt3hjh.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default login;
