import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { getProducts } from '@/services/productService';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div>
      <h2>Productos</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}€</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;