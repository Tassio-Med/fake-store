// Cart.tsx
import { Product } from '@/types/product.interface';
import { useCartContext } from '@/contexts/useCartContext';

export const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cart.map((item: Product) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
