import { Link } from 'react-router-dom';
import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Classic Tee',
    description: 'Simple and comfortable',
    price: 499.00,
    imageUrl: 'https://customized.com.ph/wp-content/uploads/2023/07/Mens-Tshirt-FRONT-20.jpg',
  },
  {
    id: 2,
    name: 'Graphic Tee',
    description: 'Express yourself',
    price: 499.00,
    imageUrl: 'https://hungernomore.ph/wp-content/uploads/2023/08/HUNGER-NO-MORE-T-SHIRT-DESIGN-GREEN-SLEEVE-FRONT.jpg',
  },
  {
    id: 3,
    name: 'Premium Tee',
    description: 'Soft cotton with quality print',
    price: 499.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xPNVlATnYjzBi3H5Afm6CCX4flDaKu1UjA&s',
  },
];

export default function ProductList() {
  const [products] = useState<Product[]>(initialProducts);

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
