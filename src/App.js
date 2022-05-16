import React from "react";
import EX2_1 from "./components/ex2_1";
import EX2_2 from "./components/ex2_2";
import Box1 from "./components/ex3.1";
import Quiz from "./components/ex3.2";
import Ex4_1_buttons_props from "./components/ex4.1";
import Ex4_2_card_props from "./components/ex4.2";

class App extends React.Component {
  render() {
    return (
      <div>
        {/*  <EX2_1 /> */}
        {/* <EX2_2 /> */}
        {/*  <Box1 /> */}
        {/* <Quiz /> */}
        {/* <Ex4_1_buttons_props /> */}
        <Ex4_2_card_props />
      </div>
    );
  }
}

export default App;
