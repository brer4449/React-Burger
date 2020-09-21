import React from "react";

const userOutput = (props) => {
  const styles = {
    border: "1px solid #ccc",
    padding: "10px",
    font: "inherit",
    backgroundColor: "#fff",
    marginLeft: "30%",
    marginRight: "30%",
  };

  return (
    <div style={styles}>
      <p>Username: {props.userName}</p>
      <p>Some more random text</p>
    </div>
  );
};

export default userOutput;
