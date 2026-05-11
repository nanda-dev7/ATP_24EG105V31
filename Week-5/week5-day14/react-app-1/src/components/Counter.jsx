import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center gap-5 p-6 border rounded-lg shadow-md w-60 mx-auto mt-10">
      
      <h1 className="text-2xl font-bold">Counter</h1>

      <p className="text-3xl font-semibold">{count}</p>

      <div className="flex gap-4">
        {/* Decrease */}
        <button
          onClick={decrease}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          - Decrease
        </button>

        {/* Increase */}
        <button
          onClick={increase}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          + Increase
        </button>
      </div>

      {/* Reset */}
      <button
        onClick={reset}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mt-2"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;