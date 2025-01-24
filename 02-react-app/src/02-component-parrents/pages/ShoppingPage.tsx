import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-style.css';
import { products } from "../data/product";

const product = products[0];

// Other options interface in useState
// type cart = {[key: string] : ProductInCart};

export const ShoppingPage = () => {
  

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

          <ProductCard 
            key={product.id} 
            product={product}
            className="bg-dark text-white"
            initialValues={{
              count: 6,
              maxCount: 10,
            }}
          >

            {
              ({ reset, increaseBy, count, isMaxCountReached})=> (
                <>
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.20)'}}/>
                  <ProductTitle className="text-bold"/>
                  <ProductButton className="custom-bottons"/>
                  <button onClick={reset}>Reset</button>

                  <button onClick={() =>increaseBy(-2)}>-2</button>

                  {
                    (!isMaxCountReached && <button onClick={() =>increaseBy(2)}>+2</button>)
                  }
                  
                  <span>{count}</span>
                </>
              )
            }
          </ProductCard>

    </div>
  )}
