import React from "react";
import "../ex8.3/style.css";

//life Cycle method

// css inside index.css file!

class Ex8_3_box_change extends React.Component {
  state = {
    colors: ["blue", "pink", "orange", "green", "purple", "skyblue", "teal", "yellow", "brown", "red"],
    currentColor: "blue",
    counter: 0,
    borderRadius: 0,
  };

  componentDidMount() {
    this.setState(() => {
      return { currentColor: "red" };
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState((prevState) => {
        return { currentColor: prevState.colors[this.randomColor()], counter: prevState.counter + 1 };
      });

      if (this.state.counter === 5) {
        this.setState(() => {
          return { borderRadius: "50%" };
        });
      }
    }, 500);
  }

  //here below alomost same solution, but in the end it lasrs with the last color and stop changing it. (it chhanged only when countr<5)
  // componentDidUpdate() {
  //   setTimeout(() => {
  //     if (this.state.counter < 5) {
  //       this.setState((prevState) => {
  //         return { currentColor: prevState.colors[this.randomColor()], counter: prevState.counter + 1 };
  //       });
  //     }
  //     if (this.state.counter === 5) {
  //       this.setState(() => {
  //         return { borderRadius: "50%" };
  //       });
  //     }
  //   }, 500);
  // }

  randomColor = () => {
    let randomIndex = Math.floor(Math.random() * this.state.colors.length);
    while (this.state.currentColor === this.state.colors[randomIndex]) {
      randomIndex = Math.floor(Math.random() * this.state.colors.length);
    }
    return randomIndex;
  };

  render() {
    return <div className="changeBox" style={{ backgroundColor: this.state.currentColor, borderRadius: this.state.borderRadius }}></div>;
    //why does it shoe me error and doesnt show the circle in the end????
  }
}

export default Ex8_3_box_change;
