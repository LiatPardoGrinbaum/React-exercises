import React from "react";

class Ex7_2_hideNseek_state extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCount()}>Increment</button>
        <label style={{ margin: "5px" }}>{this.state.count}</label>
      </div>
    );
  }
}

export default Ex7_2_hideNseek_state;
