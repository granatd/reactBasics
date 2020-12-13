import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <input
      type="text"
      className="UserInput"
      onChange={props.change}
      value={props.userName}
    />
  );
};

export default userInput;
