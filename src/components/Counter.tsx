import { useState } from "react";

const Counter = () => {
    const [counterValue, setCounterValue]  = useState(0)
    const increment = ()=> {
        setCounterValue(counterValue + 1);
    }
    const decrement = ()=> {
        setCounterValue( counterValue => {
            return counterValue <= 1 ? 0:counterValue -1; 
        });
    }
    const reset = ()=> {
        setCounterValue(0);
    }
    return(
        <>
            <h1>counter <span>{counterValue}</span></h1>
            <div className="flex justify-center mb-2 mt-2 gap-4">
                <button onClick={decrement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
                <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
            <div>
                <button onClick={reset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">reset</button>
            </div>
        </>
    );
}
export default Counter;