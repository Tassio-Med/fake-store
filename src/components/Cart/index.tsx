import { Product } from '@/types/product.interface';
import { useCartContext } from '@/contexts/useCartContext';
import { MdDeleteForever } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

import * as A from "./styles";

interface CartProps {
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, removeFromCart, itemCount } = useCartContext();

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
      <A.CloseBox>
        <A.CloseBtn onClick={handleClose}>
          <IoClose  style={{ fontSize: '25px', color: '#ffff' }}/>
        </A.CloseBtn>
      </A.CloseBox>
      <A.Top>
        <h2>Seus produtos</h2>
        <h3>Você possui {itemCount} produto(s) no carrinho</h3>
      </A.Top>
      <A.Container>
        {cart.length === 0 ? (
          <p>Você não possui produtos no carrinho</p>
        ) : (
          cart.map((item: Product) => (
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
                      <A.SubtractButton>-</A.SubtractButton>
                      <input type="text" value="0" readOnly />
                      <A.AddButton>+</A.AddButton>
                    </A.QuantityButtons>
                    <p>R$ {item.price}</p>
                  </A.BtnAndPrice>
                </A.Details>
              </A.Box>
              <A.DeleteBtn onClick={() => handleRemoveItem(item.id)}>
                <MdDeleteForever style={{ color: 'white', fontSize: '25px' }} />
              </A.DeleteBtn>
            </A.Lista>
          ))
        )}
      </A.Container>
      <A.BuyBtn>Finalizar Compra</A.BuyBtn>
    </A.Cart>
  );
};

