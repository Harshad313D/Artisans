import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto">
          For bespoke orders, bridal consultations, or general inquiries
          regarding our heritage collections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white shadow-2xl border border-stone-200 overflow-hidden">
        {/* Contact Form */}
        <div className="lg:col-span-3 p-10 md:p-16">
          <h3 className="text-3xl font-serif text-[#1A1A1A] mb-8">
            Send a Message
          </h3>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-stone-200 py-2 text-[#1A1A1A] focus:border-[#D4AF37] outline-none bg-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-stone-200 py-2 text-[#1A1A1A] focus:border-[#D4AF37] outline-none bg-transparent transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-stone-200 py-2 text-[#1A1A1A] focus:border-[#D4AF37] outline-none bg-transparent transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                Inquiry Type
              </label>
              <select className="w-full border-b-2 border-stone-200 py-2 text-[#1A1A1A] focus:border-[#D4AF37] outline-none bg-transparent transition cursor-pointer">
                <option>General Inquiry</option>
                <option>Bridal Consultation</option>
                <option>Custom Design</option>
                <option>Order Status</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full border-b-2 border-stone-200 py-2 text-[#1A1A1A] focus:border-[#D4AF37] outline-none bg-transparent transition resize-none"
              ></textarea>
            </div>
            <button className="bg-[#1A1A1A] text-white px-10 py-5 font-bold tracking-widest uppercase text-sm hover:bg-[#7A1C21] transition w-full shadow-lg mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Contact Info & Locations */}
        <div className="lg:col-span-2 bg-[#FAFAF5] p-10 md:p-16 border-l border-stone-200">
          <h3 className="text-3xl font-serif text-[#1A1A1A] mb-10">
            Headquarters
          </h3>

          <div className="space-y-10">
            <div className="flex gap-5">
              <MapPin
                className="text-[#7A1C21] shrink-0 mt-1"
                size={28}
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-bold text-xl font-serif text-[#1A1A1A]">
                  Mumbai Offices
                </h4>
                <p className="text-stone-600 mt-2 leading-relaxed">
                  14 Heritage Lane, Colaba
                  <br />
                  Mumbai, Maharashtra 400001
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin
                className="text-[#D4AF37] shrink-0 mt-1"
                size={28}
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-bold text-xl font-serif text-[#1A1A1A]">
                  Jaipur Atelier
                </h4>
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-1">
                  By Appointment Only
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Johari Bazaar, Near Hawa Mahal
                  <br />
                  Jaipur, Rajasthan 302003
                </p>
              </div>
            </div>

            <div className="w-16 h-px bg-[#D4AF37] my-8"></div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-5">
                <Phone className="text-stone-400 shrink-0" size={22} />
                <span className="text-stone-700 font-medium">
                  +91 22 1234 5678
                </span>
              </div>
              <div className="flex items-center gap-5">
                <Mail className="text-stone-400 shrink-0" size={22} />
                <span className="text-stone-700 font-medium">
                  namaste@virasatjewels.com
                </span>
              </div>
              <div className="flex items-center gap-5">
                <Clock className="text-stone-400 shrink-0" size={22} />
                <span className="text-stone-700 font-medium">
                  Mon - Sat, 10:00 AM - 6:00 PM IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
