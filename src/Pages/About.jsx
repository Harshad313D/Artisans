import { MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pb-24">
      {/* Header - Fixed contrast issue */}
      <div className="bg-[#7A1C21] text-center py-32 px-4 text-white shadow-inner">
        <h1 className="text-5xl md:text-6xl font-serif mb-8 drop-shadow-md">
          The Hands Behind the Art
        </h1>
        <p className="text-xl max-w-3xl mx-auto font-light text-rose-100 leading-relaxed drop-shadow-sm">
          We travel to the narrow gullies of Jaipur, the riverbanks of Bengal,
          and the historic temples of the South to partner with India's last
          master craftsmen.
        </p>
      </div>

      {/* Regions Layout */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {/* Rajasthan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="flex items-center space-x-3 text-[#D4AF37] font-bold uppercase tracking-widest text-sm">
              <MapPin size={20} /> <span>Rajasthan: The Royal Court</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Masters of Kundan & Polki
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              In the heart of Jaipur and Bikaner, our{" "}
              <span className="font-semibold text-stone-800">Karigars</span>{" "}
              practice the 16th-century art of Kundan. This involves setting
              uncut diamonds (Polki) in pure gold foil. It is a painstaking
              process involving the <span className="italic">Chiterias</span>{" "}
              (designers), <span className="italic">Ghaarias</span> (engravers),
              and <span className="italic">Meenakars</span> (enamelers) working
              in unison to create a single heirloom.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="p-3 bg-white shadow-2xl rounded-t-full border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800"
                alt="Kundan Crafting"
                className="w-full h-[600px] object-cover rounded-t-full"
              />
            </div>
          </div>
        </div>

        {/* South India */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="p-3 bg-white shadow-2xl rounded-t-full border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1611591437151-574972e90e72?auto=format&fit=crop&q=80&w=800"
                alt="Temple Jewelry"
                className="w-full h-[600px] object-cover rounded-t-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-[#D4AF37] font-bold uppercase tracking-widest text-sm">
              <MapPin size={20} /> <span>Tamil Nadu: The Sacred Temples</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              The Divine Temple Motifs
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Originating in the 9th century during the Chola dynasty, Temple
              Jewelry was initially crafted to adorn deities. Our artisans in
              Madurai and Chennai still use traditional repoussé techniques to
              hammer pure gold and silver into intricate motifs of Goddess
              Lakshmi, peacocks, and lotus flowers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
