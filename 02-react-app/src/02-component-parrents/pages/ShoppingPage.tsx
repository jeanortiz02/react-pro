import { useState } from "react";
import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interface/interfaces";
import '../styles/custom-style.css';


const product = {
  id: '1',
  title: "Coffe Mug - Card",
  image: "./coffee-mug.png"
}
const product2 = {
  id: '2',
  title: "Coffe Mug - Meme",
  image: "./coffee-mug2.png"
}

const products : Product[] = [ product, product2 ];

interface ProductInCart extends Product {
  count: number;
}

// Other options interface in useState
// type cart = {[key: string] : ProductInCart};

export const ShoppingPage = () => {


  const [shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart }>({});

  const onProductCountChange = ({count, product} : {count: number, product: Product}) => {
    
    setShoppingCart(oldShoppingCart => {

        const productInCart : ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

        if( Math.max(productInCart.count + count, 0) > 0) {

          productInCart.count += count;

          return {
            ...oldShoppingCart,
            [product.id] : productInCart
          }

        }
        
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return {rest}
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id] : {...product, count}
      // }
    })
  }

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >

          {
            products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                className="bg-dark text-white"
                onChange={onProductCountChange }
                value={shoppingCart[product.id]?.count || 0}
              >
                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.20)'}}/>
                <ProductTitle className="text-bold"/>
                <ProductButton className="custom-bottons"/>
              </ProductCard>
            ))
          }

        </div>


        <div className="shopping-cart">

            {
              Object.entries(shoppingCart).map(([key, product]) => (
                <ProductCard
                  key={key}
                  product={product}
                  className="bg-dark text-white"
                  style={{
                    width: '100px',
                    margin: '10px',
                  }}
                  value={product.count}
                  onChange={onProductCountChange }
                  
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.20)'}}/>
                  <ProductButton className="custom-bottons" style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}/>
                </ProductCard>
              ))
            }


        </div>
    </div>
  )
}
