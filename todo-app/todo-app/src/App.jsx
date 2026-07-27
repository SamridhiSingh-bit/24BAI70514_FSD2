import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-[450px]">

        <h1 className="text-4xl font-bold text-white text-center mb-6">
          📝 Todo List
        </h1>

        <div className="flex gap-3 mb-6">

          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-3 rounded-lg outline-none border border-gray-600 bg-slate-700 text-white"
          />

          <button
            onClick={addTask}
            className="bg-cyan-500 hover:bg-cyan-600 px-5 rounded-lg text-white font-semibold transition duration-300"
          >
            Add
          </button>

        </div>

        <ul className="space-y-3">

          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-slate-700 px-4 py-3 rounded-lg text-white"
            >
              <span>{item}</span>

              <button
                onClick={() => removeTask(index)}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white transition duration-300"
              >
                Delete
              </button>
            </li>
          ))}

        </ul>

      </div>
    </div>
  );
}

export default App;