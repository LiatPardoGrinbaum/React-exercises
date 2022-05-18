import React from "react";
import "../ex9.1/style.css";
//life Cycle method

class Ex9_1_spinner extends React.Component {
  state = {
    isHidden: false,
    display: "block",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isHidden: true, display: "none" });
    }, 3000);
  }

  // componentDidUpdate() {
  //   this.setState({ display: "none" });
  // }

  render() {
    return (
      <div>
        <Spinner styling={`${this.state.display}`} hidden={this.state.isHidden} />
      </div>
    );
  }
}

const Spinner = (props) => {
  return (
    <div className="container-spinner">
      <div className="spinner-1" style={{ display: props.styling }}></div>
      <div className="spinner-1" style={{ display: props.styling }}></div>
      <div className="spinner-1" style={{ display: props.styling }}></div>

      {props.hidden && <h1>Welcome!</h1>}
    </div>
  );
};

export default Ex9_1_spinner;
