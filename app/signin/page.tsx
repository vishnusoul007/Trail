"use client";
import { FaFacebookF, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { login, goToSignUp, setUser } from "app/store/userSlice";
import { useState } from "react";

export default function SignIn() {
  const dispatch = useDispatch();
  const { email: savedEmail, password: savedPassword } = useSelector(
    (state: RootState) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === savedEmail && password === savedPassword) {
      dispatch(login ({ email, password }));
      alert("Login Successful Buddy");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="w-96 bg-white text-gray-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-2">
          Welcome Back!
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full mb-6 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <span
              onClick={() => dispatch(goToSignUp())}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
          <div className="flex justify-center space-x-7 mb-9">
          <button className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:bg-gray-100">
            <FaFacebookF size={20} />
          </button>
          <button className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:bg-gray-100">
            <FaGoogle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
