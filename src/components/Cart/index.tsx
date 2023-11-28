import { Product } from '@/types/product.interface';
import { useCartContext } from '@/contexts/useCartContext';
import { MdDeleteForever } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import * as A from "./styles";

interface CartProps {
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, removeFromCart } = useCartContext();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  return (
    <A.Cart>
      <h2>Seus produtos</h2>
      <button onClick={handleClose}><FaWindowClose /></button>
      <A.Container>
        {cart.length === 0 ? (
          <p>Você não possui produtos no carrinho</p>
        ) : (
          cart.map((item: Product) => (
            <A.Lista key={item.id}>
              <A.Box>
                <p>{item.title}</p>
                <p>botão</p>
                <p>R$ {item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <MdDeleteForever />
                </button>
              </A.Box>
            </A.Lista>
          ))
        )}
      </A.Container>
      <button>Finalizar Compra</button>
    </A.Cart>
  );
};

