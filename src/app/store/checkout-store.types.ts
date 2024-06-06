import { Product, ProductsCart } from "../interfaces";

export interface Store{
  itemsAdded: number
  itemsCard: ProductsCart[]
  addProductToCart: (newItem: ProductsCart) => void
  removeItem: (itemSelected: ProductsCart) => void
  actualQuantityOfProducts: () => number
  incrementProductQty: (newItem: ProductsCart) => void
  decrementProductQty: (newItem: ProductsCart) => void
  calculateSubTotal: () => number
  calculateISV: () => number
  calculateTotal: () => number
  cleanCart: () => void
  };