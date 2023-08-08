import React, { ChangeEvent, FC, useState } from 'react';
import './index.css';
import { ITask } from "./Interface";
import TodoTask from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="header bg-blue-300 text-black py-6 w-full flex justify-center">
        <div className="todoList w-96 flex flex-col items-center">
          <input
            type="text"
            placeholder="Add a New Task ..."
            name="task"
            value={task}
            onChange={handleChange}
            className="w-full h-10 px-4 border rounded-tl-lg rounded-bl-lg border-gray-500 focus:outline-none focus:ring focus:border-blue-400"
          />
          <input
            type="number"
            placeholder="Deadline (in Days)"
            value={deadline}
            name="deadline"
            onChange={handleChange}
            className="w-full h-10 px-4 border-t border-gray-500 rounded-bl-lg border-l rounded-br-lg mt-2 focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            onClick={addTask}
            className="w-full bg-blue-500 text-white h-10 rounded-bl-lg rounded-br-lg border-t border-gray-500 mt-2 focus:outline-none hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="todoList flex-grow w-full py-8">
        <div className="w-96 mx-auto">
          {todoList.map((task: ITask, key: number) => (
            <TodoTask key={key} task={task} completeTask={completeTask} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <FontAwesomeIcon icon={faListAlt} className="text-4xl text-gray-500" />
      </div>
    </div>
  );
};

export default App;
