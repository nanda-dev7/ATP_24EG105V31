import React, { useContext } from 'react'
import { incrementContext } from '../contexts/CounterContext'

function EditCounter3() {
  const { counter, changeCounter } = useContext(incrementContext)

  return (
    <div>
      <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-500 p-6">+</button>
    </div>
  );
}

export default EditCounter3
