import React from "react";
import data from "./data.js";

class Ex13_1_map extends React.Component {
  state = {
    allNames: [],
    yearsBefore1990: [],
  };
  getAllNames = (data) => {
    const names = data.map((person) => {
      return person.name + " ";
    });
    this.setState({ allNames: names });
  };

  getAllBefore1990 = (data) => {
    const filteredperson = data.filter((person) => {
      let year = person.birthday.split("-")[2];

      if (year < 1990) {
        return person;
      }
    });

    this.setState({ yearsBefore1990: filteredperson });
  };

  componentDidMount = () => {
    this.getAllNames(data);
    this.getAllBefore1990(data);
  };
  render() {
    console.log(this.state.allNames);
    console.log(this.state.yearsBefore1990);
    return (
      <div>
        {this.state.allNames.map((name, key) => {
          return <Name personName={name} id={key} />;
        })}
        <h2>There are {this.state.yearsBefore1990.length} persons that were born before 1990:</h2>
        {this.state.yearsBefore1990.map((person, key) => {
          return <Card personName={person.name} birthday={person.birthday} favoriteFish={person.favoriteFoods.fish} id={key + 1} favoriteMeats={person.favoriteFoods.meats} />;
        })}
      </div>
    );
  }
}

export default Ex13_1_map;

class Name extends React.Component {
  render() {
    return (
      <div>
        <p>The name is {this.props.personName}</p>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div style={{ width: "200px", height: "400px", border: "1px black solid" }}>
        <h3>Person {this.props.id}</h3>
        <p>name: {this.props.personName}</p>
        <p>birthday: {this.props.birthday}</p>
        {this.props.favoriteFish.map((fish, key) => {
          return (
            <p>
              favorite fish{key + 1}: {fish}
            </p>
          );
        })}
        {this.props.favoriteMeats.map((meat, key) => {
          return (
            <p>
              favorite meat{key + 1}: {meat}
            </p>
          );
        })}
      </div>
    );
  }
}
