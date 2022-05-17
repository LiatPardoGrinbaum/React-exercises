import React from "react";

//life Cycle method

class Ex8_1_life_cycle extends React.Component {
  state = {
    favoriteColor: "purple",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { favoriteColor: "blue" };
      });
    }, 1000);
  }

  componentDidUpdate() {
    let text = `The updated favorite color is ${this.state.favoriteColor}`;
    const textUpdate = document.querySelector("#textUpdate");
    textUpdate.textContent = text;
  }

  render() {
    return (
      <div>
        <h1>my favorite color is {this.state.favoriteColor}</h1>
        <div id="textUpdate"></div>
      </div>
    );
  }
}

export default Ex8_1_life_cycle;
