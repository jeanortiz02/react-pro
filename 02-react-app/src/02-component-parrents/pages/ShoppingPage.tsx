import { ProductCard } from "./ProductCard"


const product = {
  id: '1',
  title: "Coffe Mug",
  image: "./coffee-mug.png"
}

export const ShoppingPage = () => {
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
          <ProductCard product={product }/>
        </div>
    </div>
  )
}
