import { Product } from '@/types/product.interface';
import { useCartContext } from '@/contexts/useCartContext';
import { MdDeleteForever } from "react-icons/md";
import Image from 'next/image';

import * as A from "./styles";

interface CartProps {
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, removeFromCart, itemCount, totalPrice, increaseQuantity, decreaseQuantity } = useCartContext();

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
      <A.Top>
        <h2>Seus produtos</h2>
        <h3>
          {cart.length === 0
            ? "Você não possui produtos no carrinho"
            : `Você possui ${itemCount} produto(s) no carrinho`
          }
        </h3>
      </A.Top>
      <A.Container multipleProducts={cart.length > 2}>
        {cart.map((item: Product) => (
          <A.Lista key={item.id}>
            <A.Box>
              <A.Photo>
                <Image src={item.image} alt={item.title} width={70} height={70} />
              </A.Photo>
              <A.Details>
                <h4>
                  {item.title.split(' ').length > 4
                      ? item.title.split(' ').slice(0, 3).join(' ') + '...'
                      : item.title
                  }
                </h4>

                <A.BtnAndPrice>
                  <A.QuantityButtons>
                    <A.SubtractButton onClick={() => decreaseQuantity(item.id)}>-</A.SubtractButton>
                    <input type="text" value={item.quantity} readOnly />
                    <A.AddButton onClick={() => increaseQuantity(item.id)}>+</A.AddButton>
                  </A.QuantityButtons>
                  <p>R$ {item.price * (item.quantity)}</p>
                </A.BtnAndPrice>
              </A.Details>
            </A.Box>
            <A.DeleteBtn onClick={() => handleRemoveItem(item.id)}>
              <MdDeleteForever style={{ color: 'white', fontSize: '25px' }} />
            </A.DeleteBtn>
          </A.Lista>
        ))}
      </A.Container>
      <A.PriceAndBtn>
        <A.Total>
          <h4>Total</h4>
          <h2>R$ {totalPrice.toFixed(2)}</h2>
        </A.Total>
        <A.BuyBtn>Finalizar Compra</A.BuyBtn>
      </A.PriceAndBtn>
    </A.Cart>
  );
};
