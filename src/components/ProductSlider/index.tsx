import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Product } from '@/types/product.interface';
import * as S from "./styles"
import ProductCard from "../ProductCard";

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    console.log('Prev button clicked');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length));
  };

  const handleNext = () => {
    console.log('Next button clicked');
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };


  console.log('Current Index:', currentIndex);


  return (
    <S.MotionDiv>
      <S.BoxSlide>
        <S.ArrowButton onClick={handlePrev}>
          <FaArrowLeft style={{ color: '#1366e8', fontSize: '25px' }}/>
        </S.ArrowButton>
        <S.ProductsSlide
        >
          {products.map((product) => (
            <div key={product.id} >
              <ProductCard product={product} />
            </div>
          ))}
        </S.ProductsSlide>
        <S.ArrowButton onClick={handleNext}>
          <FaArrowRight style={{ color: '#1366e8', fontSize: '25px' }}/>
        </S.ArrowButton>
      </S.BoxSlide>
    </S.MotionDiv>
  );
};

export default ProductSlider;
