import axios from 'axios';

export const apiProducts = async (page = 1, rows = 8, sortBy = 'id', orderBy = 'ASC') => {
  try {
    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', {
      params: {
        page,
        rows,
        sortBy,
        orderBy,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response?.data);
    throw error;
  }
};
