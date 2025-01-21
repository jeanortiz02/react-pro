import { ReactElement } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

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
  Title: ({ title }: { title?: string; })=> JSX.Element;
  Image: ({ image }: { image?: string; })=> JSX.Element;
  Button: () => JSX.Element;
}