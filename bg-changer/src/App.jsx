import { useState } from "react";

function App() {
  const [color, setColor] = useState("slategray");

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen flex justify-center items-center transition-all duration-500"
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">
          Background Color Changer
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("purple")}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Purple
          </button>

          <button
            onClick={() => setColor("slategray")}
            className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;