import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  const convertCurrency = async () => {
    if (amount === "") return;

    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${from}`
      );

      const data = await response.json();

      const rate = data.rates[to];

      const convertedAmount = (amount * rate).toFixed(2);

      setResult(`${amount} ${from} = ${convertedAmount} ${to}`);
    } catch (error) {
      console.log(error);
      setResult("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-[400px]">

        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Currency Converter
        </h1>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-slate-700 text-white"
        />

        <div className="flex justify-between gap-4 mb-4">

          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-slate-700 text-white"
          >
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-slate-700 text-white"
          >
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>

        </div>

        <button
          onClick={convertCurrency}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold"
        >
          Convert
        </button>

        <h2 className="text-white text-center mt-6 text-xl">
          {result}
        </h2>

      </div>
    </div>
  );
}

export default App;