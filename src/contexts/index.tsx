import { createContext, Reducer, useState, ReactNode } from "react";
import { Product } from "@/types/product.interface";

export interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  }

  return(
    <CartContext.Provider value={{ cart, addToCart }}>
      { children }
    </CartContext.Provider>
  )
}