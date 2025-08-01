import { useParams, Link } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Classic Tee',
    description: 'Simple and comfortable',
    price: 19.99,
    imageUrl: 'https://customized.com.ph/wp-content/uploads/2023/07/Mens-Tshirt-FRONT-20.jpg',
  },
  {
    id: 2,
    name: 'Graphic Tee',
    description: 'Express yourself',
    price: 24.99,
    imageUrl: 'https://hungernomore.ph/wp-content/uploads/2023/08/HUNGER-NO-MORE-T-SHIRT-DESIGN-GREEN-SLEEVE-FRONT.jpg',
  },
  {
    id: 3,
    name: 'Premium Tee',
    description: 'Soft cotton with quality print',
    price: 29.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xPNVlATnYjzBi3H5Afm6CCX4flDaKu1UjA&s',
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-600">
        Product not found.
        <div>
          <Link to="/" className="text-blue-600 hover:underline block mt-2">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-gray-600 text-lg mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-700 mb-6">${product.price.toFixed(2)}</p>

        <Link
          to={`/customize/${product.id}`}
          className="inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Customize This Product
        </Link>
      </div>
    </div>
  );
}
