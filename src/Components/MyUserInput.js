import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input type="text" placeholder="Username here"></input>
      <input
        type="text"
        placeholder="Password here"
        onChange={props.changed}
        value={props.name}
      ></input>
    </div>
  );
};

export default userInput;
