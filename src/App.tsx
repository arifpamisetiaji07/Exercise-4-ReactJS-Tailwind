import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Create Guest Experience mobile check-in",
      completed: false,
    },
    { id: 2, title: "Document current CI/CD process", completed: false },
    {
      id: 3,
      title: "Perform Code Review for final Pillow-talk release",
      completed: false,
    },
    {
      id: 4,
      title: "Implement new color palette from design team",
      completed: false,
    },
    {
      id: 5,
      title: "Fix image uploading process for guest check-in",
      completed: false,
    },
    { id: 6, title: "Provide on-boarding documentation", completed: false },
  ]);

  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="bg-[#414142] text-white min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Chores ToDo List</h1>
        </div>

        <div className="w-full max-w-lg">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="w-5 h-5 border-2 border-green-500 text-green-500 rounded accent-green-500 focus:outline-none"
                />
                <p
                  className={`flex-grow ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </p>
              </div>
              <button
                className="bg-transparent text-red-300 border border-red-300 py-1 px-2 rounded-md hover:bg-red-300 hover:text-white transition"
                onClick={() => deleteTask(task.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-lg">
            Total Tasks : {tasks.length} ────𓇼──── Selected :{" "}
            {tasks.filter((task) => task.completed).length}
          </h2>
        </div>

        <div className="w-full max-w-lg mt-8">
          <div className="flex flex-col space-y-4">
            <label htmlFor="new-task" className="text-gray-300">
              Add todo
            </label>
            <input
              id="new-task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              className="border border-white-100 rounded w-full bg-transparent h-10 px-3 focus:border-blue-500 focus:outline-none"
              placeholder="Enter new task"
            />
            <button
              onClick={addTask}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;