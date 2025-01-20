
import { useProduct } from '../hooks/useProduct';
import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  image?: string;
}




export const ProductImage = ({ image  = ''})=> {
  return (
    <img className={ style.productImg } src={ image ? image : noImage} alt="Product Image" />
  )
}

export const ProductTitle = ({ title } : { title: string}) => {
  return (
    <span className={style.productDescription}>{title}</span>
  )
}

interface ProductButtonProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButton = ( { counter, increaseBy} : ProductButtonProps ) => {
  return (
    <div className={ style.buttonsContainer }>

      <button className={ style.buttonMinus } onClick={ ()=> increaseBy( -1 ) }>-</button>

      <div className={ style.countLabel }>{counter}</div>
      
      <button className={ style.buttonAdd } onClick={ ()=> increaseBy( 1 ) }>+</button>

    </div>
  )
}


export const ProductCard = ({ product } : Props) => {

    const { counter, increaseBy } = useProduct();

  return (
    <div className={style.productCard}>

      <ProductImage image={product.image} />

      <ProductTitle title={product.title}/>

      <ProductButton counter={counter} increaseBy={increaseBy} />


    </div>
  )
}
