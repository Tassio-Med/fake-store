import * as S from './styles';
import { Product } from '@/types/product.interface';
import ProductCard from "../ProductCard";

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
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </S.ProductsGrid>
    </S.Store>
  );
}
