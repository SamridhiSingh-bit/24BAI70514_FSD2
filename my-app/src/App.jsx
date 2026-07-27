import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter(counter + 1);
  };

  const removeCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="bg-slate-800 w-96 p-8 rounded-2xl shadow-2xl text-center">

        <h1 className="text-4xl font-bold text-white mb-6">
          COUNTER
        </h1>

        <h2
          className={`text-7xl font-bold mb-8 ${
            counter >= 10 ? "text-green-400" : "text-cyan-400"
          }`}
        >
          {counter}
        </h2>

        <div className="flex justify-center gap-4">

          <button
            onClick={removeCount}
            disabled={counter === 0}
            className="bg-red-500 hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition duration-300 hover:scale-105"
          >
            Remove
          </button>

          <button
            onClick={addCount}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 hover:scale-105"
          >
            Add
          </button>

        </div>

        <button
          onClick={() => setCounter(0)}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition duration-300 hover:scale-105"
        >
          Reset
        </button>

      </div>
    </div>
  );
}

export default App;