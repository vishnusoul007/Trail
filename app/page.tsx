"use client";
import React, { useState } from "react";
import { useUser } from "./context/UserContext";
import { FaFacebookF, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";


export default function MainApp() {
  const { user, setUser, screen, setScreen } = useUser();

  // Temporary form data for SignUp
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 🟦 SignIn Page
if (screen === "signin") {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="w-[340px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-white">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-8">Sign In</h1>

        {/* Email Field */}
        <div className="mb-4">
          <label className="text-sm block mb-1">Email</label>
          <div className="flex items-center bg-white/20 rounded-lg px-3">
            <span className="text-white/70 mr-2">📧</span>
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent w-full p-2 outline-none placeholder-white/70 text-white"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label className="text-sm block mb-1">Password</label>
          <div className="flex items-center bg-white/20 rounded-lg px-3">
            <span className="text-white/70 mr-2">🔑</span>
            <input
              type="password"
              placeholder="******"
              className="bg-transparent w-full p-2 outline-none placeholder-white/70 text-white"
            />
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-sm my-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>
          <button className="text-white/80 hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-full mt-3 hover:bg-blue-100 transition">
          LOGIN
        </button>

        {/* Divider */}
        <div className="text-center my-4 text-white/80">- OR -</div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6">
          <button className="bg-white rounded-full p-4 text-blue-600 shadow hover:bg-gray-200 transition">
            <FaFacebookF size={20} />
          </button>
          <button className="bg-white rounded-full p-4 text-red-600 shadow hover:bg-gray-200 transition">
            <FaGoogle size={20} />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-sm text-white/80">
          Don’t have an Account?{" "}
          <span
            onClick={() => setScreen("signup")}
            className="font-semibold hover:underline cursor-pointer text-white"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

  // 🟩 SignUp Page
  if (screen === "signup") {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setUser(formData);
      setScreen("details");
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-80">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/20 placeholder-white/60"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/20 placeholder-white/60"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/20 placeholder-white/60"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/20 placeholder-white/60"
            />

            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-100 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setScreen("signin")}
              className="font-bold cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    );
  }

  // 🟨 Details Page
  if (screen === "details" && user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96">
          <h1 className="text-3xl font-bold text-center mb-6">User Details</h1>

          <div className="space-y-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Confirm Password:</strong> {user.confirmPassword}</p>
          </div>

          <button
            onClick={() => setScreen("signin")}
            className="mt-6 bg-white text-blue-600 font-semibold py-2 w-full rounded-full hover:bg-blue-100"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  return null;
}
