import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, type Product } from '../api/product';

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
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.imageUrl} alt={product.name} className="w-full h-90 object-cover" />
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">₱{product.price.toFixed(2)}</p>
          <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
