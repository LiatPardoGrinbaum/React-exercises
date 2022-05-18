import React from "react";

class Ex11_2_checkbox extends React.Component {
  state = {
    0: false,
    1: false,
    2: true,
    3: true,
  };

  handleChange = (id) => {
    this.setState((prev) => {
      return { [id]: !prev[id] };
    });
  };

  render() {
    const options = ["At least two input text tags", "At least one select tag", "At least one text area tag", "All inputs must be controlled"];

    return (
      <div>
        {options.map((text, i) => {
          return <Checkbox onhandleChange={this.handleChange} isChecked={this.state[i]} label={text} id={i} key={i} />;
        })}
      </div>
    );
  }
}

export default Ex11_2_checkbox;

const Checkbox = (props) => {
  return (
    <div>
      <label>{props.label} </label>
      <input
        id={props.id}
        type="checkbox"
        checked={props.isChecked}
        onChange={({ target }) => {
          props.onhandleChange(target.id);
        }}
      />
    </div>
  );
};
