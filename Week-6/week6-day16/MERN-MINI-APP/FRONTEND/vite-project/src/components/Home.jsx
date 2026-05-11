import React from 'react'
import { useCounterStore } from "../store/CounterStore"

function Home() {
  const newCounter = useCounterStore((state) => state.newCounter)
  const newCounter1 = useCounterStore((state) => state.newCounter1)
  const newCounter2 = useCounterStore((state) => state.newCounter2)
  const incrementCounter = useCounterStore((state) => state.incrementCounter)
  const incrementCounter1 = useCounterStore((state) => state.incrementCounter1)
  const decrementCounter2 = useCounterStore((state) => state.decrementCounter2)

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-3">
        <h1 className="text-4xl">Counter A: {newCounter}</h1>
        <button onClick={incrementCounter} className="bg-amber-500 px-5 py-3 rounded-md text-white">
          Increment Counter A
        </button>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl">Counter B: {newCounter1}</h1>
        <button onClick={incrementCounter1} className="bg-amber-500 px-5 py-3 rounded-md text-white">
          Set Counter B to 500
        </button>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl">Counter C: {newCounter2}</h1>
        <button onClick={decrementCounter2} className="bg-amber-500 px-5 py-3 rounded-md text-white">
          Decrement Counter C by 20
        </button>
      </div>
    </div>
  )
}

export default Home