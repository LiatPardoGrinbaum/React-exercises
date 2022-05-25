import React from "react";
import "./style.css";
import todoList from "./todoList";
import Task from "./task";

class TodoApp extends React.Component {
  state = {
    tasks: [],
    inputVal: "",
  };
  //try to understand how to manage local storage!!!
  componentDidMount() {
    this.setState({ tasks: todoList }, () => {
      // let taskArr = JSON.stringify(this.state.tasks);
      // localStorage.setItem("tasks", taskArr);
    });
  }
  insertTodos = () => {
    return this.state.tasks.map((task) => {
      return <Task todo={task.todo} key={task.id} id={task.id} onClickUpdate={this.onClickUpdate} onClickDelete={this.onClickDelete} />;
    });
  };
  //create/ add
  addOnClick = (e) => {
    //preventDefault only beacuse its inside form..
    e.preventDefault();
    const newTask = {
      todo: this.state.inputVal,
      id: Math.random(),
    };
    this.setState((prev) => {
      return { tasks: [...prev.tasks, newTask], itemTitleValue: "" };
    });
  };
  addOnChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  onClickDelete = (id) => {
    //optional :
    // const filteredArr = this.state.tasks.filter((task) => {
    //   return task.id !== id;
    // });
    // this.setState({tasks: filteredArr})

    //better:
    this.setState((prevState) => {
      const filteredArr = this.state.tasks.filter((task) => {
        return task.id !== id;
      });
      return { tasks: filteredArr };
    });
  };

  onClickUpdate = (newId, newTodo) => {
    this.setState((prevState) => {
      const updatedArr = prevState.tasks.map((task) => {
        if (task.id === newId) {
          return { ...task, todo: newTodo };
          // or- return { id, title };
        } else {
          return task;
        }
      });
      return { tasks: updatedArr };
    });
  };

  render() {
    console.log(this.state.inputVal);
    return (
      <div className="appContianer">
        <form>
          <input type="text" onChange={this.addOnChange} value={this.state.inputVal}></input>
          <button onClick={this.addOnClick}>Add</button>
        </form>
        {this.insertTodos()}
      </div>
    );
  }
}

export default TodoApp;
