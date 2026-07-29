import { Link } from "react-router-dom";
import { products } from "../data";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-heritage-dark mb-4">
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
            to={`/product/${product.id}`}
            key={product.id}
            className="group flex flex-col bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-heritage-gold/30 rounded-t-arch"
          >
            {/* The wrapper forces a strict 4:5 aspect ratio so cards are uniformly sized */}
            <div className="w-full aspect-[4/5] overflow-hidden rounded-t-arch bg-stone-100 p-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-arch group-hover:scale-110 transition duration-1000 ease-in-out"
              />
            </div>
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <p className="text-xs text-heritage-gold font-bold uppercase tracking-widest mb-2">
                  {product.artisan}
                </p>
                <h3 className="font-serif text-lg text-heritage-dark line-clamp-2 leading-snug">
                  {product.name}
                </h3>
              </div>
              <p className="text-heritage-ruby font-bold mt-4">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
