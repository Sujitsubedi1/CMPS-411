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
        this.setState({ userInfo: resData });
      });
  }

  render() {
    // this.componentDidMount();
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="cl w-100">
            <img src={this.props.location.state.imgSrc} alt="prop"></img>
            <div key={this.state.userInfo.id}>
              Welcome {this.state.userInfo.name}
              <p></p>
              email: {this.state.userInfo.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
