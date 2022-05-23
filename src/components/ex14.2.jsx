import React from "react";

class Ex14_2_refs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Please type something and click the button to copy." };
    this.textareaRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleClick = () => {
    let valueText = this.textareaRef.current.value.select(); //select will select the copied text when button clicked- need to check if work like in mordis solution!
    navigator.clipboard.writeText(valueText);
  };
  render() {
    return (
      <div>
        <textarea ref={this.textareaRef} rows="4" cols="50" value={this.state.value} onChange={this.handleChange}></textarea>
        <button onClick={this.handleClick}>copy</button>
      </div>
    );
  }
}

export default Ex14_2_refs;
