import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface ProductButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButton = ({ className, style } : ProductButtonProps) => {

    const { counter, increaseBy, maxCount } = useContext(ProductContext);
  

    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);
    // console.log(isMaxReached());
    
    return (
      <div 
        className={ `${styles.buttonsContainer} ${className}` }
        style={style}
        >
  
        <button className={ styles.buttonMinus } onClick={ ()=> increaseBy( -1 ) }>-</button>
  
        <div className={ styles.countLabel }>{counter}</div>
        
        <button className={ `${styles.buttonAdd} ${isMaxReached() && styles.disabled } `} onClick={ ()=> increaseBy( 1 ) }>+</button>
  
      </div>
    )
  }