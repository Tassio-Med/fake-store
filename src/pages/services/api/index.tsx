import axios from "axios";
import { Product } from "@/types/product.interface";

export const apiProducts = async () => {
  const response = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products/");
  return response.data as Product[];
};
