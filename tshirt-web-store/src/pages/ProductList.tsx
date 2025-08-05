import { useEffect, useState } from 'react';
import { getAllProducts, type Product } from '../api/product';
import ProductCard from '../components/ProductCard';
import { Box } from '@mui/material';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) return <div className="p-6 text-center text-gray-600">Loading products...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <Box  
    sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ebf8ff, #fce7f3)',
      }}
      >
     
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
    </Box>
  );
}
