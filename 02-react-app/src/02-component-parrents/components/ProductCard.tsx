
import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interface/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args : ProductCardHandlers)=> JSX.Element;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args : onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues } : Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

  return (
    <Provider value={{
      counter, 
      increaseBy,
      product,
      maxCount,
    }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >

        { children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          products: product,
          reset,
          increaseBy,
        }) }

        {/* <ProductImage image={product.image} />

        <ProductTitle title={product.title}/>

        <ProductButton counter={counter} increaseBy={increaseBy} /> */}


      </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Button = ProductButton;
