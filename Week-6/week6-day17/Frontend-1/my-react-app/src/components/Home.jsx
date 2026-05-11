import {useContext} from 'react'
import React from 'react'
import { counterContextObj } from '../contexts/CounterContext'

function Home() {

const {counter,changeCounter}=useContext(counterContextObj)

  return (
    <div>
      <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-500 p-6">Change</button>
    </div>
  );
}

export default Home