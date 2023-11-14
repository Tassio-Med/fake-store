import { useState, useEffect } from "react";
import { apiProducts } from "../../pages/services/api/index";
import { Product } from "@/types/product.interface";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    apiProducts().then((productsData) => {
      setProducts(productsData);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>R${product.price}</p>
        </div>
      ))}
    </div>
  );
}
