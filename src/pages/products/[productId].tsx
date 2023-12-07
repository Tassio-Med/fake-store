import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useCartContext } from '@/contexts/useCartContext';

import * as P from './styles';
import { FaTruck, FaCheck } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { apiProductById } from '../services/api/api';
import { Product } from '@/types/product.interface';

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart, isProductInCart } = useCartContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (typeof productId === 'string') {
          console.log(productId);
          const productData = await apiProductById(parseInt(productId, 10)); 
          setProduct(productData);
        }
      } catch (error) {
        console.error('Erro ao fazer fetch dos produtos:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <p>Carregando detalhes do produto...</p>;
  }

  return (
    <P.Container>
      <P.ProductGrid>
        <P.Photo>
          <Image src={product.image} alt={product.title} width={250} height={250} />
        </P.Photo>
        <P.Details>
          <h2>{product.title}</h2>
          <P.Price>
            <h1>R$ {product.price}</h1>
            <p>em 5x R$ {(Number(product.price) / 5).toFixed(2)} sem juros</p>
          </P.Price>
          <P.Description>{product.description}</P.Description>
        </P.Details>
        <P.Payment>
          <P.InfoPayment>
            <P.VerifiedAndDelivery>
              <P.Delivery>
                {(Number(product.price)) > 50 && (
                  <P.Frete>
                    <FaTruck style={{ fontSize: '20px', color: 'green' }}  />
                    <p>Frete Grátis</p>
                  </P.Frete>
                )}
              </P.Delivery>
              <P.Verified>
                <MdVerifiedUser  style={{ fontSize: '20px', color: '#4340ff' }}/>
                <p>Vendedor Verificado</p>
              </P.Verified>
            </P.VerifiedAndDelivery>
              {(Number(product.price)) > 100 && (
                <P.Frete>
                  <AiOutlineThunderbolt  style={{ fontSize: '20px', color: 'green' }}  />
                  <p>Fast Delivery</p>
                </P.Frete>
              )}
            <P.Stock>
              <FaCheck style={{ fontSize: '15px', color: 'green' }} />
              <p>Estoque disponível</p>
            </P.Stock>
          </P.InfoPayment>
          <P.Buttons>
            <P.BuyBtn>Comprar</P.BuyBtn>
            <P.CartBtn
              onClick={() => addToCart(product)}
              disabled={isProductInCart(product.id)}
            >
              {isProductInCart(product.id) ? "Produto no Carrinho" : "Adicionar ao carrinho"}
            </P.CartBtn>
          </P.Buttons>
        </P.Payment>
      </P.ProductGrid>
    </P.Container>
  );
};

export default ProductDetailPage;
