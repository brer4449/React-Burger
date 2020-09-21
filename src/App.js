import React, { Component } from "react";
import UserInput from "./Components/HisUserInput";
import UserOutput from "./Components/HisUserOutput";
import "./App.css";

class App extends Component {
  state = {
    username: "supermax",
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        ></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
