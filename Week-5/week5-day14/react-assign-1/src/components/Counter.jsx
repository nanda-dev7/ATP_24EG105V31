import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-sm rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">Counter</h2>
      <p className="mt-4 text-lg text-gray-700">Count: {count}</p>

      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-md border border-gray-400 px-4 py-2 hover:bg-gray-100"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md border border-gray-400 px-4 py-2 hover:bg-gray-100"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;