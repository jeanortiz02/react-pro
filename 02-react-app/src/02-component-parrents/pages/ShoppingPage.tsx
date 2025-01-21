import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-style.css';


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

          <ProductCard 
            product={product }
            className="bg-dark text-white"
          >
            <ProductCard.Image className="custom-image"/>
            <ProductCard.Title className="text-bold"/>
            <ProductCard.Button className="custom-bottons"/>
          </ProductCard>



          <ProductCard 
            product={product }
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold"/>
            <ProductButton className="custom-bottons"/>
          </ProductCard>


          <ProductCard 
            product={product }
            style={{
              backgroundColor: '#70D1F8',
            }}
          >
            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
            <ProductTitle style={{ fontWeight: 'bold'}}/>
            <ProductButton style={{
              display: 'flex',
              justifyContent: 'center',
            }}/>
          </ProductCard>

        </div>
    </div>
  )
}
