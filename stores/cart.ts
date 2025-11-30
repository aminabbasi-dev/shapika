// src/store/cart.ts
import { create } from "zustand";
import ICartItem from "../types/carItem";

interface ICartStore {
  cartItems: ICartItem[];
  addItem: (item: Omit<ICartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const saveToLocalStorage = (items: ICartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const useCart = create<ICartStore>((set, get) => ({
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],

  addItem: (item) =>
    set((state) => {
      const existing = state.cartItems.find((i) => i.id === item.id);
      const newCart = existing
        ? state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.cartItems, { ...item, quantity: 1 }];
      saveToLocalStorage(newCart);
      return { cartItems: newCart };
    }),

  removeItem: (id) =>
    set((state) => {
      const newCart = state.cartItems
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i
        )
        .filter((i) => i.quantity > 0);
      saveToLocalStorage(newCart);
      return { cartItems: newCart };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const newCart = state.cartItems
        .map((i) => (i.id === id ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0);
      saveToLocalStorage(newCart);
      return { cartItems: newCart };
    }),

  clearCart: () => {
    saveToLocalStorage([]);
    set({ cartItems: [] });
  },

  getTotalItems: () =>
    get().cartItems.reduce((total, item) => total + item.quantity, 0),

  getTotalPrice: () =>
    get().cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    ),
}));
