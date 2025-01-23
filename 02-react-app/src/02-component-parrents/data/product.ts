import { Product } from "../interface/interfaces";

const product = {
  id: '1',
  title: "Coffe Mug - Card",
  image: "./coffee-mug.png"
}
const product2 = {
  id: '2',
  title: "Coffe Mug - Meme",
  image: "./coffee-mug2.png"
}

export const products : Product[] = [ product, product2 ];