import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-backend-5q60.onrender.com/api/v1/products",
        );

        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load the treasury. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center mt-10">
        <p className="text-2xl font-serif text-[#1A1A1A]">
          Unlocking the Treasury...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center mt-10">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-[#1A1A1A] mb-4">
          The Royal Treasury
        </h1>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto">
          Discover our complete collection of handcrafted heirlooms, directly
          sourced from India's master artisans.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <Link
            to={`/product/${product._id}`} // Using MongoDB's _id
            key={product._id}
            className="group flex flex-col bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-[#D4AF37]/30 rounded-t-arch"
          >
            <div className="w-full aspect-[4/5] overflow-hidden rounded-t-arch bg-stone-100 p-2">
              <img
                src={product.imageUrl} // Mapped to your schema's imageUrl
                alt={product.name}
                className="w-full h-full object-cover rounded-t-arch group-hover:scale-110 transition duration-1000 ease-in-out"
              />
            </div>

            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest mb-2">
                  {/* Using category as a fallback since 'artisan' is not in the schema */}
                  {product.category || "Master Artisan"}
                </p>
                <h3 className="font-serif text-lg text-[#1A1A1A] line-clamp-2 leading-snug">
                  {product.name}
                </h3>
              </div>
              <p className="text-[#7A1C21] font-bold mt-4">
                ₹{product.price.toLocaleString("en-IN")}{" "}
                {/* Formatted as Indian Rupees */}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
