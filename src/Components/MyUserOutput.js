import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>Username: {props.userName}</p>
      <p>Password: {props.password}</p>
    </div>
  );
};

export default userOutput;
