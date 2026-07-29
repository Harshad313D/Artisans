import { useParams, Link } from "react-router-dom";
import { products } from "../data";
import { ShieldCheck, Truck, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-serif text-stone-600">
        Jewel not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link
        to="/products"
        className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 mb-8 transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="bg-white p-4 border border-stone-200 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-heritage-gold uppercase">
              {product.artisan}
            </p>
            <h1 className="text-4xl font-serif text-stone-900 mt-2">
              {product.name}
            </h1>
            <p className="text-2xl text-heritage-ruby mt-4">{product.price}</p>
          </div>

          <p className="text-stone-600 leading-relaxed border-y border-stone-200 py-6">
            {product.description}
          </p>

          <div className="space-y-4 pt-4">
            <button className="w-full bg-stone-900 text-white py-4 font-semibold hover:bg-heritage-ruby transition shadow-lg">
              Add to Cart
            </button>
            <button className="w-full border border-stone-900 text-stone-900 py-4 font-semibold hover:bg-stone-50 transition">
              Inquire Customization
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-heritage-gold w-5 h-5" />{" "}
              Authenticity Certificate
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-heritage-gold w-5 h-5" /> Secured Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
