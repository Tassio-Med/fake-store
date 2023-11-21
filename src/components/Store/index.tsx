import { useEffect, useState } from 'react';
import Image from "next/image";
import * as S from './styles';
import { apiProducts } from '@/pages/services/api/api';
import { Product } from '@/types/product.interface';
import { FiShoppingBag } from 'react-icons/fi';
import { FaTruck } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs"

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await apiProducts();
        setProducts(productsData);
      } catch (error) {
        console.log('Erro aí hem', error);
      }
    };

    fetchData();
  }, []);


  function truncateDescription(title: string, maxLength: number): string {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  }
  


  // function handleAdd() {
  // }


  return (
    <S.Store>
      <S.ProductsGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <S.Card key={product.id}>
              <S.ProductItem>
                <S.Photo>
                  <Image src={product.image} alt={product.title} width={150} height={150} />
                </S.Photo>
                <S.Details>
                  <h4>{truncateDescription(product.title, 35)}</h4>
                  <S.Price>R${(Number(product.price)).toFixed(2)}</S.Price>
                  <h5>em 5x R${(Number(product.price) / 5).toFixed(2)} sem juros</h5>
                  {(Number(product.price)) > 50 && (
                    <S.Frete>
                      <FaTruck style={{ fontSize: '20px', color: 'green' }}  />
                      <p>Frete Grátis</p>
                    </S.Frete>
                  )}
                </S.Details>
              </S.ProductItem>
              <S.BuyBtn /* onClick={() => handleAdd(product)} */>
                <BsCartFill style={{ color: 'white', fontSize: '20px' }} />
                <span>COMPRAR</span>
              </S.BuyBtn>
            </S.Card>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </S.ProductsGrid>
    </S.Store>
  );
}
