import { createContext, Reducer, useState, ReactNode } from "react";
import { Product } from "@/types/product.interface";

export interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  itemCount: number;
  totalPrice: number;
  isProductInCart: (productId: number) => boolean;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [itemCount, setItemCount] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0);

  const isProductInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  const addToCart = (product: Product) => {
    if (!isProductInCart(product.id)) {
      setCart((prevCart) => [...prevCart, {...product, quantity: 1}]);
      setItemCount((prevCount) => prevCount + 1);
      setTotalPrice((prevTotal) => prevTotal + product.price);
    } else {
      increaseQuantity(product.id)
    }
  };


  const removeFromCart = (productId: number) => {
    const removedItem = cart.find((item) => item.id === productId);

    if (removedItem) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      setItemCount((prevCount) => Math.max(0, prevCount - removedItem.quantity));
      setTotalPrice((prevTotal) => prevTotal - removedItem.price * removedItem.quantity);
    }
  };

  
const increaseQuantity = (productId: number) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
  setItemCount((prevCount) => prevCount + 1);
  setTotalPrice((prevTotal) => prevTotal + cart.find((item) => item.id === productId)!.price);
  console.log('Cart after increase:', cart);
};

const decreaseQuantity = (productId: number) => {
  const targetProduct = cart.find((item) => item.id === productId);

  if (targetProduct && targetProduct.quantity > 1) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setItemCount((prevCount) => prevCount - 1);
    setTotalPrice((prevTotal) => prevTotal - targetProduct!.price);
  }
};



  return(
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        itemCount,
        totalPrice,
        isProductInCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      { children }
    </CartContext.Provider>
  )
}