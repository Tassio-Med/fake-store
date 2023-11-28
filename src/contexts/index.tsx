import { createContext, Reducer, useState, ReactNode } from "react";
import { Product } from "@/types/product.interface";

export interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  itemCount: number;
  isProductInCart: (productId: number) => boolean;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [cart, setCart] = useState<Product[]>([]);
  const [itemCount, setItemCount] = useState(0); 

  const isProductInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  const addToCart = (product: Product) => {
    if (!isProductInCart(product.id)) {
      setCart((prevCart) => [...prevCart, product]);
      setItemCount((prevCount) => prevCount + 1);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setItemCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return(
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, itemCount, isProductInCart }}>
      { children }
    </CartContext.Provider>
  )
}