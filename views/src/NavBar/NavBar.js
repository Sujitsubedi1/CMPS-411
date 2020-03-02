import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import history from '../history';
import GoogleLogin from "react-google-login";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      imgSrc: null,
      isTop: true
    };
    this.handleLogout = this.handleLogout.bind(this);
  }



  handleLogout() {
    this.setState({ loggedIn: false });
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
  }

  handleLogin(res) {
    let FormData = {
      Name: res.profileObj.name,
      Email: res.profileObj.email,
      Token: res.accessToken,
      ImageUrl: res.profileObj.imageUrl
    };
    const userEmail = FormData.Email;


    localStorage.setItem("saveEmail", userEmail);
    sessionStorage.setItem("userdata", FormData);

    fetch("https://localhost:44332/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FormData)
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ loggedIn: true, imgSrc: res.profileObj.imageUrl });
        history.push("/profile", { imgSrc: this.state.imgSrc });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  componentWillMount() {
    if (sessionStorage.getItem('userdata')) {
      this.setState({ loggedIn: true });
    }
    else {
      this.setState({ loggedIn: false });
    }
  }


  listenScrollEvent = () => {
    if (window.scrollY > 100) {
      this.setState({ isTop: false });
    } else {
      this.setState({ isTop: true });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    const { isTop } = this.state;
    const style = {
      backgroundColor: "#262626"
    };
    const styles = {
      backgroundColor: " "
    };

    const responseGoogle = response => {
      this.handleLogin(response);
    };

    return (
      <div>
        <nav
          className="navbar navbar-expand-md fixed-top "
          style={isTop ? styles : style}
          onScroll={this.componentDidMount}
        >
          <div className="container">
            <div className="navbar-translate">
              <button
                className="navbar-toggler navbar-toggler-right navbar-burger"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>

              <NavLink
                to="/"
                className="navbar-brand "
                exact
                activeStyle={{ color: "red" }}
              >
                Home</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {(!this.state.loggedIn) ? <GoogleLogin
                    clientId="1096692170721-uoa7a1mdservf8n76u6pk6jkvqnt3hjh.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                    :
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={this.handleLogout}
                      >
                        Log out
                  </button>
                    </div>}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div >

    );

  }
}

export default NavBar;
