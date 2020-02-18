import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
// or
// import { GoogleLogin } from "react-google-login";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      meial: "",
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
    const y = FormData.Email;
    localStorage.setItem("saveEmail", y);
    const z = FormData.name;
    localStorage.setItem("saveName", z);
    localStorage.setItem("userdata", FormData);
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
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  render() {
    const responseGoogle = response => {
      console.log(response);
      this.Signup(response);
    };
    if (this.state.redirect) {
      // return <Redirect to={"/profile"}></Redirect>;
      return <Redirect to={"/logOut"}></Redirect>;
    }

    return (
      <div>
        <GoogleLogin
          clientId="1096692170721-uoa7a1mdservf8n76u6pk6jkvqnt3hjh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default login;
