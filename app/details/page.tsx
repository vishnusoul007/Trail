"use client";

import { useSelector } from "react-redux";
import { RootState } from "app/store/store";

export default function HomePage() {
  const user = useSelector((state: any) => state.user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-400 to-blue-600 px-6 text-white">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold mb-6">Welcome!</h1>
        <p className="text-lg mb-2">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-lg mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg">
          <strong>Password:</strong> {user.password}
        </p>
      </div>
    </div>
  );
}
