import React from "react";

class Ex11_1_events_child_parent extends React.Component {
  state = {
    colorSelected: "",
    // color1:
    // color2:
    // color3:
  };

  // componentDidMount() {
  //   const colors = ["blue", "red", "yellow"];
  //   for (let color of colors) {
  //     this.setState({ color1: color });
  //   }
  // }
  onButtonClick = (color) => {
    this.setState({ colorSelected: color });
    return color;
  };

  render() {
    const colors = ["skyblue", "magenta", "yellowgreen"];
    return (
      <div>
        {colors.map((color, key) => {
          return <ChildButton key={key} colorButton={color} onButton={this.onButtonClick} />;
        })}
        <div>the color selected is {this.state.colorSelected}</div>
        {/*   <ChildButton colorButton="blue" onButton={this.onButtonClick} />
        <ChildButton colorButton="red" onButton={this.onButtonClick} />
        <ChildButton colorButton="yellow" onButton={this.onButtonClick} /> */}
        {/* <div>the color selectes is {this.state.colorSelected}</div> */}
      </div>
    );
  }
}

class ChildButton extends React.Component {
  state = {
    color: this.props.colorButton,
  };

  onButtonClickChild = () => {
    // e.preventDefault();
    this.props.onButton(this.state.color);
  };

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.color, margin: "3px", width: "100px" }} onClick={this.onButtonClickChild}>
          {this.state.color}
        </button>
      </div>
    );
  }
}

export default Ex11_1_events_child_parent;
