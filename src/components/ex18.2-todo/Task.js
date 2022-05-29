import React, { useState } from "react";

const Task = (props) => {
  const [taskTodo, setTaskTodo] = useState(props.taskObj);
  const handleClick = () => {
    setTaskTodo((prev) => {
      return { completed: !prev.completed, name: prev.name };
    });
  };

  return (
    <div>
      <p> </p>
      <p className="task">
        <span onClick={handleClick}>{taskTodo.completed ? "✔" : "✘"}</span>
        <span className={taskTodo.completed ? "done" : "undone"}>{taskTodo.name}</span>
      </p>
    </div>
  );
};
export default Task;
