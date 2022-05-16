import React from "react";

class Ex7_3_inc_dec_state extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: "black",
    };
  }

  incrementCounter = () => {
    let counter = this.state.counter;
    let color;
    if (this.state.counter === 10) {
      counter = 10;
      color = "green";
    } else if (this.state.counter >= 0) {
      counter = counter + 1;
      color = "green";
    } else if (this.state.counter === -1) {
      counter = counter + 1;
      color = "black";
    } else {
      counter = counter + 1;
      color = "red";
    }
    this.setState({
      counter: counter,
      color: color,
    });
  };
  decrementCounter = () => {
    let counter = this.state.counter;
    let color;
    if (this.state.counter === -10) {
      counter = -10;
      color = "red";
    } else if (this.state.counter <= 0) {
      counter = counter - 1;
      color = "red";
    } else if (this.state.counter === 0) {
      color = "black";
    } else {
      counter = counter - 1;
      color = "green";
    }
    this.setState({
      counter: counter,
      color: color,
    });
  };

  render() {
    return (
      <div>
        <div className="outerDiv">
          <button className="button3" onClick={this.incrementCounter}>
            Increment
          </button>
          <label style={{ color: this.state.color }}>{this.state.counter}</label>
          <button className="button3" onClick={this.decrementCounter}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Ex7_3_inc_dec_state;
