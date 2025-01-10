import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";


export const useCounter = ({ maxCount = 1} ) => {

    const [counter, setCounter] = useState(5);
    const timeLine = useRef(gsap.timeline())

    const elementToAnimate = useRef(null);

    const handleClick = () => {
        // if (counter < MAXIMUM_COUNT) {
        //     setCounter(prev => prev + 1);
        // }
        // return;
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => {

        if( !elementToAnimate.current) return;

        timeLine.current.to(elementToAnimate.current, { y: -10, color: 'red', duration: 0.5, ease: 'easy.out' })
            .to(elementToAnimate.current, { y: 0, color: 'white', duration: 0.5, ease: 'easy.out' })
            .pause();
    }, [])

    useEffect(() => {
        
        // if ( counter < maxCount) return;
        timeLine.current.play(0);
            console.log('%cLlego a su valor maximo', 'color: red; background-color: black')

    }, [counter])

  return {
    counter,
    handleClick,
    elementToAnimate,
  }
}
