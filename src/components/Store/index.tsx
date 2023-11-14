import { useEffect, useState } from 'react';
import * as S from './styles';
import { apiProducts } from '@/pages/services/api/api';
import { Product } from '@/types/product.interface';
import { FaRegImage } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'


export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products: productsData } = await apiProducts();
        setProducts(productsData);
      } catch (error) {
        console.log('Erro aí hem', error)
      }
    };

    fetchData();
  }, []);

  return (
    <S.Store>
      <S.ProductsGrid>
        {products.map((product) => (
          <S.ProductItem key={product.id}>
            <S.Image>
              <FaRegImage styles={{ fontSize: '50px' }}/>
            </S.Image>
            <S.Details>
              <h4>{product.name}</h4>
              <S.Price>R$ {product.price}</S.Price>
            </S.Details>
            <S.Alert>Redesigned from scratch and completely revised.</S.Alert>
            <S.BuyBtn>
              <FiShoppingBag styles={{ fontSize: '24px', color: 'white' }}/>
              <span>Comprar</span>
            </S.BuyBtn>
          </S.ProductItem>
        ))}
      </S.ProductsGrid>
    </S.Store>
  );
};

