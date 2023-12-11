import Image from "next/image";
import Link from 'next/link';
import * as S from './styles';
import { Product } from '@/types/product.interface';
import { FaTruck } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs"

interface StoreProps {
  products: Product[];
}

export default function Store({ products }: StoreProps) {

  function truncateDescription(title: string, maxLength: number): string {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  }
  
  return (
    <S.Store>
      <S.ProductsGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <S.Card key={product.id}>
              <S.ProductItem>
                <S.Photo>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </S.Photo>
                <S.Details>
                  <h4>{truncateDescription(product.title, 35)}</h4>
                  <S.Price>R$ {(Number(product.price)).toFixed(2)}</S.Price>
                  <h5>em 5x R${(Number(product.price) / 5).toFixed(2)} sem juros</h5>
                  {(Number(product.price)) > 50 && (
                    <S.Frete>
                      <FaTruck style={{ fontSize: '20px', color: 'green' }}  />
                      <p>Frete Grátis</p>
                    </S.Frete>
                  )}
                </S.Details>
              </S.ProductItem>
              <Link href={`/products/${product.id}`} passHref>
                <S.BuyBtn>
                    <BsCartFill style={{ color: 'white', fontSize: '20px' }} />
                    <span>COMPRAR</span>
                </S.BuyBtn>
              </Link>
            </S.Card>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </S.ProductsGrid>
    </S.Store>
  );
}
