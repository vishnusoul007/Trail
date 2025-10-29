"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-400 to-blue-600 px-6">
      {/* Time and top icons area not needed in web layout */}

      <div className="w-full max-w-sm bg-transparent text-white">
        <h1 className="text-3xl font-semibold text-center mb-8">Sign In</h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center mt-2 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm">
            <FaEnvelope className="mr-3 text-white/70" />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full text-white placeholder-white/70 outline-none"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <label className="text-sm font-medium">Password</label>
          <div className="flex items-center mt-2 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm">
            <FaLock className="mr-3 text-white/70" />
            <input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-full text-white placeholder-white/70 outline-none"
            />
          </div>
        </div>

        {/* Remember & Forgot Password */}
        <div className="flex justify-between items-center text-sm mt-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-white" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-white hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="mt-6 w-full bg-white text-blue-600 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition">
          LOGIN
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-3 text-white/80 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-6 mb-6">
          <button className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:bg-gray-100">
            <FaFacebookF size={20} />
          </button>
          <button className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:bg-gray-100">
            <FaGoogle size={20} />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-white/90">
          Don’t have an Account?{" "}
          <a href="/signup" className="font-semibold underline hover:text-white">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
