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
    <div className="border p-4 rounded-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p>${product.price}</p>
      <a href={`/products/${product.id}`} className="text-blue-500 mt-2 block">View Details</a>
    </div>
  );
}
