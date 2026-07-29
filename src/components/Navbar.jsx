import React, { useState, useEffect } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#FAFAF5] border-[#D4AF37]/30 shadow-md" // Solid background when scrolled
          : "bg-transparent backdrop-blur-md border-transparent" // Completely transparent liquid blur at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-3xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-[#7A1C21]" : "text-white"
            }`}
          >
            Virasat<span className="text-[#D4AF37]">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className={`font-medium hover:text-[#D4AF37] transition-colors duration-300 tracking-widest uppercase text-xs ${
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-medium hover:text-[#D4AF37] transition-colors duration-300 tracking-widest uppercase text-xs ${
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`font-medium hover:text-[#D4AF37] transition-colors duration-300 tracking-widest uppercase text-xs ${
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              Our Artisans
            </Link>
            <Link
              to="/contact"
              className={`font-medium hover:text-[#D4AF37] transition-colors duration-300 tracking-widest uppercase text-xs ${
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
            <button
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
