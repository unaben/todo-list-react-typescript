import React from "react";
import { ITask } from "../Interfaces";

interface props {
  task: ITask;
  completeTask(taskNameToDelete:string):void
}

const DisplayTodoList = ({ task, completeTask }: props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => {
          completeTask(task.taskName)
      }}>X</button>
    </div>
  );
};
export default DisplayTodoList;
