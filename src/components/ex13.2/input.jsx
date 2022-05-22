import React from "react";
import "../ex13.2/style.css";

class Input extends React.Component {
  state = {
    inputValue: "",
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
    this.props.onChangeEvent(this.state.inputValue);
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;
