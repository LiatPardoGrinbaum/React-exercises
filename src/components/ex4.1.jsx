import React from "react";

class Ex4_1_buttons_props extends React.Component {
  render() {
    return (
      <div>
        <ButtonComp text="important" />
        <ButtonComp text="not important" />
      </div>
    );
  }
}

const ButtonComp = (props) => {
  return <button className="button1">{props.text}</button>;
};

export default Ex4_1_buttons_props;
