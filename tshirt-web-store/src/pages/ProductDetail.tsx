import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Product } from "../api/product";
import { getProductById } from "../api/product";
import { Box } from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      console.log("Fetching product with ID:", id);

      getProductById(Number(id))
        .then((res) => {
          console.log("Fetched product:", res);
          setProduct(res);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
          setError("Product not found");
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error || !product)
    return (
      <div className="p-6 text-center text-red-600">
        {error || "Unknown error"}
        <div>
          <Link to="/" className="text-blue-600 hover:underline block mt-2">
            Back to Products
          </Link>
        </div>
      </div>
    );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ebf8ff, #fce7f3)',
      }}
    >
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-700 mb-6">
            ₱{typeof product.price === "number" ? product.price.toFixed(2) : "0.00"}
          </p>

          <Link
            to={`/customize/${product.id}`}
            state={{ product }}
            className="inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Customize This Product
          </Link>
        </div>
      </div>
    </Box>
  );
}
