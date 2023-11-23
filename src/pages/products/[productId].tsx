import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiProductById } from '../services/api/api';
import { Product } from '@/types/product.interface';

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

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
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetailPage;
