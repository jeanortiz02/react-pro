import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export interface ProductImageProps {
  image?: string;  // Additional prop to accept an image URL
  className?: string;
  style?: React.CSSProperties;
}


export const ProductImage = ({ image, className, style} : ProductImageProps)=> {

    const {product} = useContext(ProductContext);
    let imgToShow: string;
  
    if (image) {
      imgToShow = image;
    } else if (product.image) {
      imgToShow = product.image;
    } else {
      imgToShow = noImage;
    }
  
    return (
      <img 
        className={ `${styles.productImg} ${className}` } 
        src={ imgToShow} 
        alt="Product Image" 
        style={style}  // Additional prop to accept additional styles for the image element.
      />
    )
  }