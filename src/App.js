import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Brendan", age: 28 },
      { name: "Lina", age: 24 },
      { name: "Megan", age: 59 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // function MUST be arrow function in order for this to reference class and thus reach state
    // DO NOT DO THIS: this.state.persons[0] = "Brendidnt"; // can't manipulate state directly
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Lina", age: 24 },
        { name: "Megan", age: 60 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Brendan", age: 28 },
        { name: event.target.value, age: 24 },
        { name: "Megan", age: 59 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Brendidnt")}
        >
          Switch Name
        </button>
        {/* the this keyword refers to the class */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Bren")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Yoga
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        {/* <Person name="Brendan" age="28" />
        <Person name="Lina" age="24">
          My Hobbies: Yoga
        </Person>
        <Person name="Megan" age="59" /> */}
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
