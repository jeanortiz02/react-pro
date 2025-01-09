import { useEffect, useState } from "react";


const MAXIMUM_COUNT = 10;

export const CounterEffects = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        // if (counter < MAXIMUM_COUNT) {
        //     setCounter(prev => prev + 1);
        // }
        // return;
        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT));
    }

    useEffect(() => {
        
        if ( counter >= 10) {
            console.log('Counter is more than 10');
        }
    }, [counter])
    

  return (
    <>
        <h1>Counter Effects: {counter}</h1>
        
        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}

