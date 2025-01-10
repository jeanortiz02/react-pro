import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


const MAXIMUM_COUNT = 10;

export const CounterEffects = () => {

    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        // if (counter < MAXIMUM_COUNT) {
        //     setCounter(prev => prev + 1);
        // }
        // return;
        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT));
    }

    useEffect(() => {
        
        if ( counter === 10) {
            console.log('%cLlego a su valor maximo', 'color: red; background-color: black');

            const timeLine = gsap.timeline();

            // timeLine.to(counterElement.current, { y: -10, color: 'red', duration: 0.5, ease: 'easy.out' })
            // timeLine.to(counterElement.current, { y: 0, color: 'white', duration: 0.5, ease: 'easy.out' });

            timeLine.to(counterElement.current, { y: -10, color: 'red', duration: 0.5, ease: 'easy.out' })
                .to(counterElement.current, { y: 0, color: 'white', duration: 0.5, ease: 'easy.out' });

            // gsap.to(counterElement.current, { y: -10, color: 'red', duration: 0.5, ease: 'easy.out' }).then(() => {
            //     gsap.to(counterElement.current, { y: 0, color: 'white', duration: 0.5, ease: 'easy.out' });
            // })

        }
    }, [counter])
    

  return (
    <>
        <h1>Counter Effects:</h1>
        <h2 ref={counterElement}>{ counter }</h2>
        
        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}

