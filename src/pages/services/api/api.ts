import axios from 'axios';
import { Product } from '@/types/product.interface';

export const apiProducts = async (limit = 24): Promise<Product[]> => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error ao fazer fetch dos produtos:', error);
    throw error;
  }
};

export const apiProductById = async (productId: number): Promise<Product>  => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error ao encontrar ID:', error);
    throw error;
  }
};

export const apiProductsByCategory = async (category: string, limit = 10): Promise<Product[]> => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(`Error ao fazer fetch dos produtos da categoria ${category}:`, error);
    throw error;
  }
};

