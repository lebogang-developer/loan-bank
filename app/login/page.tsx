import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome Back
        </h1>

        <p className="text-gray-600 mb-6">
          Login to manage your loan applications and dashboard.
        </p>

        {/* Main Login Button */}
        <SignedOut>
          <SignInButton mode="redirect">
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
              Log In
            </button>
          </SignInButton>
        </SignedOut>

        {/* Already logged-in state */}
        <SignedIn>
          <p className="text-green-600 font-semibold">
            You are already logged in.
          </p>
        </SignedIn>

        <div className="mt-6">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
