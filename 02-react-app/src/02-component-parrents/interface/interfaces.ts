import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductButtonProps } from "../components/ProductButton";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";


export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps )=> JSX.Element;
  Image: (Props: ProductImageProps)=> JSX.Element;
  Button: (Props: ProductButtonProps) => JSX.Element
}