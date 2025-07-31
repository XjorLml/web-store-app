import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Customize() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customText, setCustomText] = useState('');

  const handleAddToCart = () => {
    // You'd store to context or global cart here
    console.log(`Customized product ${id} with text: ${customText}`);
    navigate('/checkout');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Customize Your T-Shirt</h2>
      <label className="block mb-2 font-medium">Custom Text</label>
      <input
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Enter your slogan or name"
      />
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
