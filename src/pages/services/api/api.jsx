import axios from 'axios';

export const apiProducts = async (limit = 24) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response?.data);
    throw error;
  }
};
