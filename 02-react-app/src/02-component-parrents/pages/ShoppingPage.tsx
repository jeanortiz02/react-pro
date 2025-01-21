import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"



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

          <ProductCard product={product }>
            <ProductCard.Image/>
            <ProductCard.Title title="Hola mundo"/>
            <ProductCard.Button/>
          </ProductCard>



          <ProductCard product={product }>
            <ProductImage/>
            <ProductTitle/>
            <ProductButton/>
          </ProductCard>

        </div>
    </div>
  )
}
