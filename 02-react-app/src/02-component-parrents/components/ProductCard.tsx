
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import style from '../styles/styles.module.css';

import { ProductCardProps, ProductContextProps } from '../interface/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product } : ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter, 
      increaseBy,
      product
    }}>
      <div className={style.productCard}>

        { children };

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
