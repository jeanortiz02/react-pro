import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
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
            initialValues={{
              count: 6,
              maxCount: 10,
            }}
          >

            {
              ({ reset, increaseBy, count, isMaxCountReached})=> (
                <>
                  <ProductImage/>
                  <ProductTitle />
                  <ProductButton/>
                </>
              )
            }
          </ProductCard>

    </div>
  )}
