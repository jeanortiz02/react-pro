

import {ProductCard as ProductCardHOC} from './ProductCard';

import {ProductImage} from './ProductImage';
import {ProductTitle} from './ProductTitle';
import {ProductButton} from './ProductButton';
import { ProductCardHOCProps } from '../interface/interfaces';



// export {ProductCard} from './ProductCard';
export {ProductImage} from './ProductImage';
export {ProductTitle} from './ProductTitle';
export {ProductButton} from './ProductButton';

export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Button: ProductButton,
})