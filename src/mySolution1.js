import React, { Component } from "react";
// import Person from "./Person/Person";
import UserInput from "./Components/MyUserInput";
import UserOutput from "./Components/MyUserOutput";
import "./App.css";

class App extends Component {
  state = {
    usernames: [
      { username: "username1", password: "password123" },
      { username: "username2", password: "1234password" },
      { username: "username3", password: "PASSWORD!" },
    ],
  };

  passwordChangedHandler = (event) => {
    this.setState({
      usernames: [
        { username: "brer4449", password: event.target.value },
        { username: "lilballoffur", password: event.target.value },
        { username: "schniegy", password: event.target.value },
      ],
    });
  };

  render() {
    const styles = {
      border: "1px solid #ccc",
      padding: "10px",
      font: "inherit",
      backgroundColor: "#fff",
      marginLeft: "30%",
      marginRight: "30%",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React Login page</h1>
        <div style={styles}>
          <UserInput changed={this.passwordChangedHandler}></UserInput>
          <UserOutput
            userName={this.state.usernames[0].username}
            password={this.state.usernames[0].password}
          ></UserOutput>
        </div>
        <div style={styles}>
          <UserInput changed={this.passwordChangedHandler}></UserInput>
          <UserOutput
            userName={this.state.usernames[1].username}
            password={this.state.usernames[1].password}
          ></UserOutput>
        </div>
        <div style={styles}>
          <UserInput changed={this.passwordChangedHandler}></UserInput>
          <UserOutput
            userName={this.state.usernames[2].username}
            password={this.state.usernames[2].password}
          ></UserOutput>
        </div>
      </div>
    );
  }
}

export default App;

/*
USING FUNCTIONAL COMPONENT USING HOOKS!!!
const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Brendan", age: 28 },
      { name: "Lina", age: 24 },
      { name: "Megan", age: 59 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Brendidnt", age: 28 },
        { name: "Lina", age: 24 },
        { name: "Megan", age: 60 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Yoga
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  */
