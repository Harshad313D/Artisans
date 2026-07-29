import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingBag, Menu } from "lucide-react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";






export default function App() {
  return (
      <div className="min-h-screen bg-heritage-cream font-sans flex flex-col selection:bg-heritage-gold/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

// import { Link, Route, Routes } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import Navbar from "./components/Navbar";
// import Services from "./components/Services";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer/>
//     </>
//   );
// }
