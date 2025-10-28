"use client";

import React, { useState } from "react";
import Link from "next/link";
import {  FaFacebookF, FaGoogle, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-blue-400 to-blue-600">
      <div className="w-full max-w-md p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-white-500" />
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-xl placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-white-500" />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-xl placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-white-500" />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-xl placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-white-500" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-xl placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition-all"
          >
            SIGN UP
          </button>

          {/* OR */}
          <div className="flex items-center justify-center my-4">
            <span className="text-white/70">- OR -</span>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-6">
             <button className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:bg-gray-100">
               <FaFacebookF size={20} />
             </button>
             <button className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:bg-gray-100">
               <FaGoogle size={20} />
             </button>
          </div>

          {/* Link back to Sign In */}
          <p className="text-center text-white/80 mt-6">
            Already have an account?{" "}
            <Link href="/signup" className="font-semibold text-white hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
