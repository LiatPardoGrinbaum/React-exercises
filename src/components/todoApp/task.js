import React from "react";
import "./style.css";

class Task extends React.Component {
  state = {
    value: "",
  };
  // handleDelete = () => {
  //   this.props.onClickDelete(this.props.id);
  // };
  // handleUpdate = () => {};
  render() {
    return (
      <div className="todosContainer">
        <div className="todoTask">{this.props.todo}</div>
        <div className="buttons">
          <button onClick={() => this.props.onClickDelete(this.props.id)}>Delete</button>
          <div className="update">
            <button onClick={() => this.props.onClickUpdate(this.props.id, this.state.value)}>Update</button>
          </div>
        </div>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}></input>
      </div>
    );
  }
}

export default Task;
