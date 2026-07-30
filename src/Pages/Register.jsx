import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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

    try {
      // Replace with your actual backend URL
      const response = await axios.post(
        "https://e-commerce-backend-5q60.onrender.com/api/v1/user/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      );

      console.log("Registration successful:", response.data);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      // Display error message from backend if it exists, otherwise show a generic error
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF5] px-4 pt-24">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-[#D4AF37]/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-[#7A1C21] font-bold">
            Create Account
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Join us to experience authentic Indian heritage
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded transition-colors duration-300 font-medium tracking-wide mt-2 ${
              loading
                ? "bg-[#5a1418] opacity-70 cursor-not-allowed"
                : "bg-[#7A1C21] hover:bg-[#5a1418]"
            }`}
          >
            {loading ? "REGISTERING..." : "REGISTER"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#D4AF37] hover:text-[#b5952f] font-semibold transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
