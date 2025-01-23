import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-style.css';
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";


// Other options interface in useState
// type cart = {[key: string] : ProductInCart};

export const ShoppingPage = () => {
          const {shoppingCart, onProductCountChange} = useShoppingCart()
  

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
  )}
