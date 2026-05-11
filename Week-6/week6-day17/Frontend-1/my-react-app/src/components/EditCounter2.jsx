import React, { useContext } from 'react'
import { decrementContext } from '../contexts/CounterContext'

function EditCounter2() {
  const { counter, changeCounter } = useContext(decrementContext)

  return (
    <div>
      <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-500 p-6">-</button>
    </div>
  );
}

export default EditCounter2
