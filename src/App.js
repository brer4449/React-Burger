import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person />
      </div>
    );
    // This code is the exact same as the code above and in fact how React compiles what is above. It is NOT HTML it is JSX
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now??!!")
    // );
  }
}

export default App;
