import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>('http://localhost:5000/api/product')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
          <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline">View Details</Link>
        </div>
      ))}
    </div>
  );
}
