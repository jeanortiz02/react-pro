import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';

export const ProductImage = ({ image  = ''})=> {

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
      <img className={ style.productImg } src={ imgToShow} alt="Product Image" />
    )
  }