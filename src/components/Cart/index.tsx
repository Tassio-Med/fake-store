import { Product } from '@/types/product.interface';
import { useCartContext } from '@/contexts/useCartContext';
import { MdDeleteForever } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import * as A from "./styles";

interface CartProps {
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart } = useCartContext();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <A.Cart>
      <h2>Seus produtos</h2>
      <button onClick={handleClose}><FaWindowClose /></button>
      <A.Container>
        {cart.map((item: Product) => (
          <A.Lista key={item.id}>
            <A.Box>
              <p>{item.title}</p>
              <p>botão</p>
              <p>R$ {item.price}</p>
              <button><MdDeleteForever /></button>
            </A.Box>
          </A.Lista>
        ))}
      </A.Container>
      <button>Finalizar Compra</button>
    </A.Cart>
  );
};
