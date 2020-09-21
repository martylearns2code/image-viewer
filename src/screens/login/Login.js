import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import Header from "../../common/Header.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import Home from "../home/Home";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameRequired: "dispNone",
      username: "",
      loginPasswordRequired: "dispNone",
      loginPassword: "",
      incorrectCredentials: "dispNone",
    };
  }

  //function to handle the event when the login button is clicked on the login component
  //validates the user input and displays the appropriate error or helper-text message
  //takes the user to Home page on successful login
  //the username and password are hard coded as per the reaquirements of the assignment
  //the username is "username"and the password is "password"

  loginClickHandler = (event) => {
    let userName = "username";
    let password = "password";

    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });
    this.state.loginPassword === ""
      ? this.setState({ loginPasswordRequired: "dispBlock" })
      : this.setState({ loginPasswordRequired: "dispNone" });
    if (this.state.username !== "" && this.state.username !== userName) {
      this.setState({ incorrectCredentials: "dispBlock" });
    }
    if (
      this.state.loginPassword !== "" &&
      this.state.loginPassword !== password
    ) {
      this.setState({ incorrectCredentials: "dispBlock" });
    }
    if (
      this.state.username === userName &&
      this.state.loginPassword === password
    ) {
      ReactDOM.render(
        <span>
          <Home />
        </span>,
        document.getElementById("root")
      );
    }
  };

  //function to toggle the helper-text from visible to hidden

  usernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
    this.setState({ usernameRequired: "dispNone" });
  };

  //function to toggle the helper-text from visible to hidden

  loginPasswordChangeHandler = (e) => {
    this.setState({ loginPassword: e.target.value });
    this.setState({ loginPasswordRequired: "dispNone" });
  };

  //renders the component
  //jsx to do the rendering
  //css flex box used to display  card component that conatins the formcontrols

  render() {
    return (
      <div className="app-login">
        <Header heading="Image Viewer" />
        <div className="login-card">
          <Card>
            <CardContent>
              <FormControl>
                <Typography color="textSecondary">
                  <h1> LOGIN</h1>
                </Typography>
              </FormControl>
              <br />
              <br />

              <FormControl required>
                <InputLabel htmlFor="username" style={{ fontSize: 20 }}>
                  {" "}
                  UserName
                </InputLabel>
                <Input
                  id="username"
                  type="text"
                  style={{ width: 350 }}
                  username={this.state.username}
                  onChange={this.usernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="loginPassword" style={{ fontSize: 20 }}>
                  {" "}
                  Password
                </InputLabel>
                <Input
                  id="loginPassword"
                  type="password"
                  style={{ width: 350 }}
                  loginPassword={this.state.loginPassword}
                  onChange={this.loginPasswordChangeHandler}
                />
                <FormHelperText className={this.state.loginPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
                <FormHelperText className={this.state.incorrectCredentials}>
                  <span className="red">
                    Incorrect username and/or password
                  </span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={this.loginClickHandler}
                >
                  LOGIN
                </Button>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
export default Login;
