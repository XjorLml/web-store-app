import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Customize() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [textPosition, setTextPosition] = useState<'top' | 'center' | 'bottom'>('center');

  const handleAddToCart = () => {
    console.log(`Customized product ${id}`);
    console.log(`Text: ${customText}`);
    console.log(`Color: ${textColor}`);
    console.log(`Position: ${textPosition}`);
    navigate('/checkout');
  };

  const getTextPositionClass = () => {
    switch (textPosition) {
      case 'top':
        return 'top-4';
      case 'bottom':
        return 'bottom-4';
      default:
        return 'top-1/2 transform -translate-y-1/2';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Customize Your T-Shirt
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Preview */}
        <div className="relative bg-gray-100 rounded-xl shadow-lg p-6 flex items-center justify-center h-96">
          <img
            src="https://via.placeholder.com/300x300?text=T-Shirt+Preview"
            alt="T-Shirt preview"
            className="h-full object-contain drop-shadow"
          />
          {customText && (
            <div
              className={`absolute w-full px-2 text-center text-xl font-semibold ${getTextPositionClass()}`}
              style={{ color: textColor }}
            >
              {customText}
            </div>
          )}
        </div>

        {/* Right: Customization Form */}
        <div className="space-y-6">
          <div>
            <label htmlFor="customText" className="block mb-1 font-medium text-gray-700">
              Custom Text
            </label>
            <input
              id="customText"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., Your Name or Quote"
            />
          </div>

          <div>
            <label htmlFor="textColor" className="block mb-1 font-medium text-gray-700">
              Text Color
            </label>
            <input
              id="textColor"
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-16 h-10 p-1 border rounded-md cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="textPosition" className="block mb-1 font-medium text-gray-700">
              Text Position
            </label>
            <select
              id="textPosition"
              value={textPosition}
              onChange={(e) =>
                setTextPosition(e.target.value as 'top' | 'center' | 'bottom')
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="top">Top</option>
              <option value="center">Center</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
