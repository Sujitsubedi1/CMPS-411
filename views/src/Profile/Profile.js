import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      isloggedIn: false,
      userInfo: []
    };
  }
  componentDidMount() {
    const data = localStorage.getItem("saveEmail");
    fetch("https://localhost:44332/api/User/" + data)
      .then(response => response.json())
      .then(resData => {
        JSON.stringify(resData);
        console.log(resData);
        this.setState({ userInfo: resData });
        console.log(this.state.userInfo);
      });
  }

  render() {
    // this.componentDidMount();
    return (
      <div>
        {this.state.userInfo.map(data => (
          <div key={data.id}>email: {data.email}</div>
        ))}
      </div>
    );
  }
}

export default Profile;
