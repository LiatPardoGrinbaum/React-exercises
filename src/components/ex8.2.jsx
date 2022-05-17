import React from "react";

//life Cycle method

// css inside index.css file!

class Ex8_2_box_anim extends React.Component {
  render() {
    return (
      <div>
        <Box className="box1Appear" />
        <Box className="box2Appear" />
        <Box className="box3Appear" />
      </div>
    );
  }
}

class Box extends React.Component {
  state = {
    action: "noneClass",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { action: this.props.className };
      });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState(() => {
        return { action: "noneClass" };
      });
    }, 3000);
  }

  render() {
    return <div className={`${this.state.action}`}></div>;
  }
}

export default Ex8_2_box_anim;
