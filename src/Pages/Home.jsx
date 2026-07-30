import { Link } from "react-router-dom";
import { products } from "../data";
import { ArrowRight, ShieldCheck, Gem } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Indian Bridal Jewelry"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl py-12">
          <h4 className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs mb-6 font-bold">
            Authentic Craftsmanship
          </h4>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-2xl leading-tight">
            The Royal Legacy of <br className="hidden md:block" /> Indian
            Karigars
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
            Wearable history handcrafted in the royal courts of Rajasthan, the
            temples of the South, and the tribal heartlands.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#D4AF37] text-[#1A1A1A] px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white transition duration-300 shadow-xl"
          >
            View The Collections
          </Link>
        </div>
      </section>

      {/* Culture & History Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative p-4">
            <div className="aspect-[3/4] bg-[#7A1C21] rounded-t-full p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800"
                alt="Traditional Indian Jewelry Craft"
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37] rounded-full p-1 hidden md:block shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400"
                alt="Detail work"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="space-y-8 lg:pl-8">
            <div>
              <h4 className="text-[#7A1C21] font-bold tracking-widest uppercase text-xs mb-3">
                Our Heritage
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                Preserving 5,000 Years of Artistry
              </h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed">
              Indian jewelry is not merely ornamental; it is a profound
              expression of culture, spirituality, and status. From the
              intricate <span className="italic">Meenakari</span> enamel work
              brought by the Mughals to the sacred{" "}
              <span className="italic">Temple Jewelry</span> of the Chola
              dynasty, every piece carries the soul of its era.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-stone-200">
              <div className="flex gap-4">
                <ShieldCheck
                  className="text-[#D4AF37] w-10 h-10 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#1A1A1A]">
                    Ethically Sourced
                  </h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                    Directly from artisan families, ensuring fair trade and
                    preservation of skills.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Gem
                  className="text-[#D4AF37] w-10 h-10 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#1A1A1A]">
                    Pure Materials
                  </h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                    Authentic 22k gold plating, uncut polki diamonds, and pure
                    92.5 silver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Masterpieces */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-3">
              Curated Selection
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Masterpieces
            </h2>
            <div className="h-1 w-24 bg-[#7A1C21] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.slice(0, 3).map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group block bg-stone-900 border border-stone-800 hover:border-[#D4AF37] transition duration-500 rounded-t-full"
              >
                <div className="aspect-[4/5] overflow-hidden p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-full group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-8 text-center border-t border-stone-800 mt-2">
                  <p className="text-xs text-[#D4AF37] uppercase tracking-widest mb-3 font-semibold">
                    {product.artisan}
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-400 font-medium">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="inline-flex items-center text-[#D4AF37] font-bold uppercase tracking-widest hover:text-white transition text-sm border-b border-[#D4AF37] pb-1"
            >
              View All Masterpieces <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
