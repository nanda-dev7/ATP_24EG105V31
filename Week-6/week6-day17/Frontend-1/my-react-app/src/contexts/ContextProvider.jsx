import {useState} from 'react'
// eslint-disable-next-line no-unused-vars
import { incrementContext, decrementContext } from './CounterContext'


function ContextProvider({children1, children2}){
    const [incrementCounter, setIncrementCounter] = useState(0);
    const increment = () => {
        setIncrementCounter(incrementCounter + 1);
    };

    const [decrementCounter, setDecrementCounter] = useState(0);
    const decrement = () => {
        setDecrementCounter(decrementCounter - 1);
    };

    return (
        <div>
            <incrementContext.Provider value={{counter: incrementCounter, changeCounter: increment}}>
                {children1}
            </incrementContext.Provider>
            <decrementContext.Provider value={{counter: decrementCounter, changeCounter: decrement}}>
                {children2}
            </decrementContext.Provider>
        </div>
    );
}

export default ContextProvider