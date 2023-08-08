import React from "react";
import { ITask } from "./Interface";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    
    <div className="w-100 h-13 flex items-center text-black mx-4 my-2  bg-green-300 rounded shadow rounded-r-lg border-l">
      <div className="flex-grow">
        <span className="text-lg not-italic font-semibold"> Todo : {task.taskName}</span>
        <br />
        <span className="text-black not-italic"> Deadline :  {task.deadline}  Time in Day</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
        className="w-14 h-14 flex items-center justify-center bg-red-400 text-white rounded-r-lg border-l border-gray-300 focus:outline-none hover:bg-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
                
        >
          <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default TodoTask;
