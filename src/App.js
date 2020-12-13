import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

function App() {
  const [state, setStateFunction] = useState({
    username: "Daniel",
  });

  function inputChangeHandler(event) {
    setStateFunction({
      username: event.target.value,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserInput change={inputChangeHandler} userName={state.username} />

        <UserOutput msg1={`Hi ${state.username} what's up?`} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
