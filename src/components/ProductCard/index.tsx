import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTruck } from 'react-icons/fa6';
import { BsCartFill } from 'react-icons/bs';
import * as S from './styles';
import { Product } from '@/types/product.interface';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <S.Card>
      <S.ProductItem>
        <S.Photo>
          <Image src={product.image} alt={product.title} width={150} height={150} loading="lazy" />
        </S.Photo>
        <S.Details>
          <h4>
            {product.title.split(' ').length > 4
                ? product.title.split(' ').slice(0, 3).join(' ') + '...'
                : product.title
            }
          </h4>
          <S.Price>R$ {(Number(product.price)).toFixed(2)}</S.Price>
          <h5>em 5x R${(Number(product.price) / 5).toFixed(2)} sem juros</h5>
          {(Number(product.price)) > 50 && (
            <S.Frete>
              <FaTruck style={{ fontSize: '20px', color: 'green' }} />
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
  );
};

export default ProductCard;
