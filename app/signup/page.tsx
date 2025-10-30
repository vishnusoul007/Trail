"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "app/store/userSlice";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUser(form));
    router.push("/details");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-400 to-blue-600 px-6 text-white">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center mb-8">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm text-white mt-2 mb-4 placeholder-white/70 outline-none"
          />

          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm text-white mt-2 mb-4 placeholder-white/70 outline-none"
          />

          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="******"
            className="w-full bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm text-white mt-2 mb-4 placeholder-white/70 outline-none"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-white text-blue-600 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
