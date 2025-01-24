import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from '../interface/interfaces';

interface useProductArgs  {
    product: Product,
    onChange?: (args : onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({onChange, product, value = 0, initialValues} : useProductArgs)=> {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    // const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        
        const newValue = Math.max(counter + value, 0);
        if( initialValues?.maxCount && newValue > initialValues.maxCount) return;
        setCounter(newValue);

        if (onChange) onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    };
    
    useEffect(() => {
        // Component isn't mounted return initialValue
        // if (!isMounted.current) return;
        setCounter(initialValues?.count || value);
    }, [value])
    
    // useEffect(() => {
    //     isMounted.current = true;
    // }, [])
    
    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset,
    }
}
