import React from "react";

const data = ["hello ", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React";
class EX2_2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{data}</h1>
        <h2>5 + 6 = {number1 + number2}</h2>
        <h2>The string’s length is {string.length}!</h2>
      </div>
    );
  }
}

export default EX2_2;
