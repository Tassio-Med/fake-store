import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product.interface';
import * as S from "./styles"
import ProductCard from "../ProductCard";

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  return (
    <S.MotionDiv
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </S.MotionDiv>
  );
};

export default ProductSlider;
