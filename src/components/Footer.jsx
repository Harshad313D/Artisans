import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-stone-300 pt-20 pb-10 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl text-[#D4AF37]">Virasat.</h3>
          <p className="text-sm leading-relaxed text-stone-400 pr-4">
            Reviving the lost arts of Indian jewelry. We work directly with
            generational Karigars to bring authentic, handcrafted heirlooms to
            the modern world.
          </p>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-stone-400 hover:text-[#D4AF37] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-[#D4AF37] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-[#D4AF37] transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-6 border-b border-stone-700 pb-3 inline-block">
            Explore
          </h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li>
              <Link to="/products" className=" hover:text-[#D4AF37] transition">
                All Collections
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#D4AF37] transition">
                Bridal Kundan
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#D4AF37] transition">
                Temple Jewelry
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#D4AF37] transition">
                Tribal Silver
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-6 border-b border-stone-700 pb-3 inline-block">
            Support
          </h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li>
              <Link to="/contact" className="hover:text-[#D4AF37] transition">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#D4AF37] transition">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D4AF37] transition">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D4AF37] transition">
                Jewelry Care
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-6 border-b border-stone-700 pb-3 inline-block">
            Newsletter
          </h4>
          <p className="text-sm mb-4 text-stone-400">
            Join our patron list for exclusive access to limited artisan drops.
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 bg-stone-800 text-white border border-stone-700 focus:border-[#D4AF37] focus:outline-none w-full transition"
            />
            <button className="bg-[#D4AF37] text-[#1A1A1A] px-4 py-3 font-bold tracking-widest uppercase text-xs hover:bg-white transition w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Virasat Jewels. All rights reserved.
        </p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
