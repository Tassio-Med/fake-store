import { useEffect, useState } from 'react';
import Image from "next/image";
import noPhoto from  "../../../public/assets/images/no-photo.png";
import * as S from './styles';
import { apiProducts } from '@/pages/services/api/api';
import { Product } from '@/types/product.interface';
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
          <S.Card key={product.id}>
            <S.ProductItem >
              <S.Photo>
                <Image
                  src={noPhoto}
                  alt='Não há imagem'
                  height={100}
                  priority
                  />
              </S.Photo>
              <S.Details>
                <h4>{product.name}</h4>
                <S.Price>R$ {product.price}</S.Price>
              </S.Details>
              <S.Alert>Redesigned from scratch and completely revised.</S.Alert>
            </S.ProductItem>
            <S.BuyBtn>
              <FiShoppingBag style={{ fontSize: '20px', color: 'white' }}/>
              <span>COMPRAR</span>
            </S.BuyBtn>
          </S.Card>
        ))}
      </S.ProductsGrid>
    </S.Store>
  );
};

