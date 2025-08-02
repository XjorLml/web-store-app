import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">TeeStore</Link>
      <div className="space-x-4">
        <Link to="/products">Login</Link>
        <Link to="/products">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}
