import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const order = {
      customerName: name,
      shippingAddress: address,
      items: [
        {
          productId: 1,
          quantity: 1
        }
      ]
    };

    try {
      await axios.post('http://localhost:5000/api/order', order);
      navigate('/confirmation');
    } catch (error) {
      alert('Order failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Full Name"
        className="w-full border p-2 mb-4 rounded"
      />
      <input
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="Shipping Address"
        className="w-full border p-2 mb-4 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
}
