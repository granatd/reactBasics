import React from "react";

const userOutput = (props) => {
  const style = {
    border: "2px solid white",
    padding: "20px",
    background: "grey",
    margin: "30px",
    width: "400px",
    height: "100px",
  };

  return (
    <div style={style}>
      <p>{props.msg1}</p>
      <p>{props.msg2}</p>
    </div>
  );
};

export default userOutput;
