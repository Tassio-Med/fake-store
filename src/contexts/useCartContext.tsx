import { useContext } from "react";
import { CartContext } from ".";


export const useCartContext = () => {
  const context = useContext(CartContext);
  if(!context){
    throw new Error('useCartContext tem que ser usado com um Provider');
  }
  return context;
}
