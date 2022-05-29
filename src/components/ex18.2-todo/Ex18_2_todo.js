import React, { useState } from "react";
import data from "./data";
import Task from "./Task";
import "./style.css";

const Ex18_2_todo = () => {
  const insetTasks = () => {
    return data.map((task) => {
      return (
        <React.Fragment key={task.name}>
          <Task taskObj={task} />
        </React.Fragment>
      );
    });
  };
  return <div className="tasks-container">{insetTasks()}</div>;
};

export default Ex18_2_todo;
