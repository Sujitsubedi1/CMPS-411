import React, { Component } from "react";
import BackgroundImage from "../Carousel/BackgroundImage";
import AddFile from "../Add_StudentInfo/AddFile";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      isloggedIn: false,
      userInfo: JSON.parse(sessionStorage.getItem("userData"))
    };

    // this.getUser();
  }

  getUser() {
    //   fetch("https://localhost:44332/api/User/" + userData.email)
    //     .then(response => response.json())
    //     .then(resData => {
    //       console.log('HIT');
    //       JSON.stringify(resData);
    //       this.setState({ userInfo: resData });
    //     });
  }

  render() {
    console.log('FROM PROFILE', this.state.userInfo.id);

    return (
      <div>
        <BackgroundImage></BackgroundImage>
        <section className="py-5">
          <div className="container">
            <h1 className="display-4"> <img src={this.state.userInfo.imageUrl} alt="prop"></img> </h1>
            <div key={this.state.userInfo.id}>
              <h1>   Welcome {this.state.userInfo.name} </h1>

              <p></p>
              <h3>email: {this.state.userInfo.email}</h3></div>
            {/* userID: {this.state.userInfo.id} */}
          </div>
        </section>
        <AddFile />
      </div>
    );
  }
}

export default Profile;
