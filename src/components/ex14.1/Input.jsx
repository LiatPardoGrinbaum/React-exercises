import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input
          ref={this.inputRef}
          type="text"
          onChange={(e) => {
            this.props.onChangeEvent(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
