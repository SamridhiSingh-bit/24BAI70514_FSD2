import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl text-center w-[400px]">

        <h1 className="text-4xl font-bold text-white mb-8">
          Stopwatch
        </h1>

        <h2 className="text-7xl font-bold text-cyan-400 mb-8">
          {time}s
        </h2>

        <div className="flex justify-center gap-4">

          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
          >
            Start
          </button>

          <button
            onClick={stopTimer}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold"
          >
            Stop
          </button>

          <button
            onClick={resetTimer}
            className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-black font-semibold"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;