import React from "react";
import Login from "./Login";
class Profile extends Login {
  state = {};
  Profile(res) {
    console.log(res.accessToken);
    let id = res.accessToken;
    fetch("https://localhost:44332/api/User/" + id)
      .then(response => response.json())
      .then(resData => {
        // console.log(JSON.stringify(resData));
        this.setState({ userRoleInfos: resData, def: 1 }); //this is an asynchronous function
      });
  }
  render() {
    return <div />;
  }
}

export default Profile;
