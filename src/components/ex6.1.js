import React from "react";

class Ex6_1_buttons_props extends React.Component {
  render() {
    return (
      <div>
        <ButtonComp text="important" styling={{ fontWeight: "bold", marginRight: "5px" }} />
        <ButtonComp text="not important" />
      </div>
    );
  }
}

class ButtonComp extends React.Component {
  render() {
    return (
      <button className="button1" style={this.props.styling}>
        {this.props.text}
      </button>
    );
  }
}

export default Ex6_1_buttons_props;
