import React from "react";
import Sloth from "../images/sloth.jfif";
import Lion from "../images/lion.jpg";
import Capybara from "../images/capybara.webp";

class Ex4_2_card_props extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", margin: "10px" }}>
        <CardComponent image={Sloth} name="A Sloth" description="Sloths live in the tropical forests of Central and South America." />
        <CardComponent image={Lion} name="A Lion" description="The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India" />
        <CardComponent image={Capybara} name="A capybara" description="The capybara is a semiaquatic mammal and the world’s largest rodent." />
      </div>
    );
  }
}

const CardComponent = (props) => {
  return (
    <div style={{ width: "320px", height: "400px", backgroundColor: "#FFF9C4", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px" }}>
      <div style={{ width: "280px", height: "360px", backgroundColor: "#f4f4f4", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", padding: "10px" }}>
        <div>
          <img src={props.image} alt="sloth" style={{ height: "150px" }}></img>
        </div>
        <h2 style={{ margin: "0px" }}>{props.name}</h2>
        <p>{props.description}</p>
        <div>
          <a href="http://www.google.com" style={{ padding: "5px", textDecoration: "none", color: "#333" }}>
            SHARE
          </a>
          <a href="http://www.google.com" style={{ padding: "5px", textDecoration: "none", color: "#333" }}>
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ex4_2_card_props;
