import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Inside your handleSubmit function in Login.jsx:
    try {
      const response = await axios.post(
        "https://e-commerce-backend-5q60.onrender.com/api/v1/user/login",
        {
          email: formData.email,
          password: formData.password,
        },
      );

      const userData = response.data.user || {
        name: formData.email.split("@")[0],
      };

      // 1. Save directly to local storage
      localStorage.setItem("user", JSON.stringify(userData));

      // 2. Force a hard redirect so the Navbar catches the new data
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF5] px-4 pt-24">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-[#D4AF37]/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-[#7A1C21] font-bold">
            Welcome Back
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Sign in to access your royal treasury
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded transition-colors duration-300 font-medium tracking-wide ${
              loading
                ? "bg-[#5a1418] opacity-70 cursor-not-allowed"
                : "bg-[#7A1C21] hover:bg-[#5a1418]"
            }`}
          >
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#D4AF37] hover:text-[#b5952f] font-semibold transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
