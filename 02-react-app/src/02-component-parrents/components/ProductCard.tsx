
import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { Product, ProductContextProps } from '../interface/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}


export const ProductCard = ({ children, product, className, style } : Props) => {

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter, 
      increaseBy,
      product
    }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >

        { children }

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
