"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function DetailsPage() 
{
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const confirmPassword = searchParams.get("confirmPassword");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">User Details</h1>

        <div className="space-y-3">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {password}</p>
          <p><strong>Confirm Password:</strong> {confirmPassword}</p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="bg-white text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-100 transition mt-6 w-full"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}
