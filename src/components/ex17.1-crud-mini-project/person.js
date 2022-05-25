import React from "react";

class Person extends React.Component {
  state = {
    newName: "",
    newCountry: "",
    newImage: "",
  };

  onUpdateClick = () => {
    this.props.handleUpdate(this.state.newName, this.state.newCountry, this.state.newImage, this.props.id);
    this.setState({ newName: "", newCountry: "", newImage: "" });
  };

  render() {
    return (
      <div className="card-wrap">
        <div className="card-top">
          <div className="text">
            <h3> {this.props.personName}</h3>
            <p>{this.props.personCountry}</p>
          </div>
          <img src={this.props.personImage} alt="picture" />
        </div>
        <div className="inputs">
          <input type="text" placeholder="change name" value={this.state.newValue} onChange={(e) => this.setState({ newValue: e.target.value })} />
          <input type="text" placeholder="change country" value={this.state.newCountry} onChange={(e) => this.setState({ newCountry: e.target.value })} />
          <input type="text" placeholder="change image url" value={this.state.newImage} onChange={(e) => this.setState({ newImage: e.target.value })} />
        </div>
        <div className="buttons">
          <button className="update" onClick={this.onUpdateClick}>
            Update
          </button>
          <button className="delete" onClick={() => this.props.handleDelete(this.props.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Person;
