import React from "react";
import Input from "./Input.jsx";

class Ex14_1_refs extends React.Component {
  onChangeInput = (term) => {
    this.setState({ value: term });
  };
  render() {
    return (
      <div>
        <Input onChangeEvent={this.onChangeInput} />
      </div>
    );
  }
}

export default Ex14_1_refs;
