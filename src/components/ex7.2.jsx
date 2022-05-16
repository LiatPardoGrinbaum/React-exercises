import React from "react";

class Ex7_2_hideNseek_state extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: true,
    };
  }
  changeShown() {
    this.setState({
      shown: !this.state.shown,
    });
  }

  render() {
    const { shown } = this.state;
    console.log(shown);
    return (
      <div>
        <div className="outerDiv">
          <button className="button2" onClick={() => this.changeShown()}>
            show/hide
          </button>
          {shown ? <div className="innerDiv"></div> : null}
        </div>
      </div>
    );
  }
}

// class shownOrHide extends React.Component {
//   render() {
//     if (this.state.shown) {
//       return <div className="innerDiv"></div>;
//     } else {
//       return <div>ff</div>;
//     }
//   }
// }

export default Ex7_2_hideNseek_state;
