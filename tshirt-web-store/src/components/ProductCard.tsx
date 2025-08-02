import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300 bg-white">
      <img
        src={product.imageUrl}
        alt={product.name || 'T-shirt'}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-green-700 font-semibold mt-1"> ₱{product.price.toFixed(2)}</p>

        <Link
          to={`/products/${product.id}`}
          className="inline-block mt-3 text-blue-600 font-medium hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
