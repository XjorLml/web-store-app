export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold text-blue-700">Welcome to TeeStore 👕</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Customize your T-shirts and ship nationwide with ease.
        </p>

        <div className="mt-6">
          <img
            src="https://via.placeholder.com/300x200?text=T-Shirt+Preview"
            alt="T-shirt preview"
            className="mx-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mt-8 space-x-4">
          <a
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Start Shopping
          </a>
          <a
            href="/customize"
            className="bg-gray-200 text-blue-600 px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Customize Now
          </a>
        </div>
      </div>
    </div>
  );
}
