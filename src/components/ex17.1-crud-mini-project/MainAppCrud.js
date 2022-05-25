import React from "react";
import "./style.css";
import Person from "./person";
import Spinner from "./spinner";
import { API } from "./api";

class MainAppCrud extends React.Component {
  state = {
    originalData: [],
    persons: [],
    spinner: true,
    inputName: "",
    country: "",
    imageUrl: "",
  };

  async componentDidMount() {
    try {
      const { data } = await API.get("/person");
      this.setState({ originalData: data, persons: data, spinner: false });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    // console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCreateClick = async () => {
    this.setState({ spinner: true });
    const newPerson = {
      name: this.state.inputName,
      country: this.state.country,
      image: this.state.imageUrl,
    };
    try {
      const createdPerson = await API.post("/person", newPerson);

      this.setState((prev) => {
        return {
          persons: [...prev.persons, createdPerson.data],
          inputName: "",
          country: "",
          imageUrl: "",
          spinner: false,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };
  insertPersons = () => {
    return this.state.persons.map((person) => {
      return <Person key={person.id} id={person.id} personName={person.name} personCountry={person.country} personImage={person.image} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />;
    });
  };

  handleDelete = async (id) => {
    this.setState({ spinner: true });
    try {
      await API.delete(`/person/${id}`);
      this.setState((prev) => {
        const newPersonsArr = prev.persons.filter((person) => person.id !== id);
        return { persons: newPersonsArr, spinner: false };
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleUpdate = async (newName, newCountry, newImage, id) => {
    this.setState({ spinner: true });
    const updatedPerson = this.state.persons.find((personObj) => {
      return id === personObj.id;
    });
    try {
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h3>Create a new user card:</h3>
          <div className="inputs">
            <input id="inputName" value={this.state.inputName} type="text" placeholder="enter name" onChange={this.handleChange}></input>
            <input id="country" value={this.state.country} type="text" placeholder="enter country" onChange={this.handleChange}></input>
            <input id="imageUrl" value={this.state.imageUrl} type="text" placeholder="enter image url" onChange={this.handleChange}></input>
            <button className="create" onClick={this.handleCreateClick}>
              Create new user
            </button>
          </div>
        </div>
        {this.state.spinner ? <Spinner /> : <div className="card-container">{this.insertPersons()}</div>}
      </div>
    );
  }
}

export default MainAppCrud;
