import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get<Product>(`http://localhost:5000/api/product/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
      <Link to={`/customize/${product.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Customize This Product
      </Link>
    </div>
  );
}
