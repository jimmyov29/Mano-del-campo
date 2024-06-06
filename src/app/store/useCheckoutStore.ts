import { create } from "zustand";
import { Store } from "./checkout-store.types";
import { ProductsCart } from "../interfaces";

export const useCheckoutStore = create<Store>()((set, getState) => ({
  itemsAdded: 0,
  itemsCard: [],
  addProductToCart: (newItem: ProductsCart) =>
    set((state) => {
      const existingItemIndex = state.itemsCard.findIndex(
        (item) => item.id_product === newItem.id_product
      );

      if (existingItemIndex !== -1) {
        const updatedItemsCard = [...state.itemsCard];
        updatedItemsCard[existingItemIndex] = {
          ...updatedItemsCard[existingItemIndex],
          qty: updatedItemsCard[existingItemIndex].qty + newItem.qty,
        };

        return { itemsAdded: state.itemsAdded + newItem.qty, itemsCard: updatedItemsCard };
      } else {
        return {
          itemsAdded: state.itemsAdded + newItem.qty,
          itemsCard: [...state.itemsCard, newItem],
        };
      }
    }),
  removeItem: (itemSelected: ProductsCart) =>
    set((state) => {
      const existingItem = state.itemsCard.find(
        (item) => item.id_product === itemSelected.id_product
      );
      if (!existingItem) return state;

      const updatedItemsCard = state.itemsCard.filter(
        (item) => item.id_product !== itemSelected.id_product
      );

      return {
        itemsAdded: Math.max(0, state.itemsAdded - existingItem.qty),
        itemsCard: updatedItemsCard,
      };
    }),
  actualQuantityOfProducts: () =>
    getState().itemsCard.reduce((total, item) => total + item.qty, 0),
  incrementProductQty: (newItem: ProductsCart) =>
    set((state) => {
      const existingItemIndex = state.itemsCard.findIndex(
        (item) => item.id_product === newItem.id_product
      );

      if (existingItemIndex !== -1) {
        const updatedItemsCard = [...state.itemsCard];
        updatedItemsCard[existingItemIndex] = {
          ...updatedItemsCard[existingItemIndex],
          qty: updatedItemsCard[existingItemIndex].qty + 1,
        };

        return { itemsAdded: state.itemsAdded + 1, itemsCard: updatedItemsCard };
      } else {
        return {
          itemsAdded: state.itemsAdded + newItem.qty,
          itemsCard: [...state.itemsCard, { ...newItem, qty: 1 }],
        };
      }
    }),
  decrementProductQty: (itemAdded: ProductsCart) =>
    set((state) => {
      const existingItemIndex = state.itemsCard.findIndex(
        (item) => item.id_product === itemAdded.id_product
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.itemsCard[existingItemIndex];
        const updatedItemsCard = [...state.itemsCard];

        if (existingItem.qty > 1) {
          updatedItemsCard[existingItemIndex] = {
            ...existingItem,
            qty: existingItem.qty - 1,
          };
        } else {
          updatedItemsCard.splice(existingItemIndex, 1);
        }

        return {
          itemsAdded: Math.max(0, state.itemsAdded - 1),
          itemsCard: updatedItemsCard,
        };
      } else {
        return state;
      }
    }),
  calculateSubTotal: () => {
    const { itemsCard } = getState();
    return itemsCard.reduce((total, item) => total + item.price * item.qty, 0);
  },
  calculateISV: () => {
    const subtotal = getState().calculateSubTotal();
    return subtotal * 0.15;
  },
  calculateTotal: () => {
    const subtotal = getState().calculateSubTotal();
    const isv = getState().calculateISV();
    return subtotal + isv;
  },
  cleanCart: () => {
    set({
      itemsAdded: 0,
      itemsCard: [],
    })
  },
}));
