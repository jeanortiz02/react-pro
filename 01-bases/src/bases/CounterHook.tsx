import { useCounter } from "../hook/useCounter";



export const CounterHook = () => {

    const { counter, elementToAnimate, handleClick } = useCounter({ maxCount: 15 });
    

  return (
    <>
        <h1>Counter Hook:</h1>
        <h2 ref={ elementToAnimate }>{ counter }</h2>
        
        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}

