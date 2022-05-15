import React from "react";
import logo from "../logo.svg";
import "../App.css";

class EX2_1 extends React.Component {
  render() {
    return (
      <div>
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>AppleSeeds React App</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Click Me
          </a>
        </header>
      </div>
    );
  }
}

export default EX2_1;
