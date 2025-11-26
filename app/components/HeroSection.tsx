"use client";

import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Smart & Secure Loans Designed For Your Future
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Apply for personal, car, home or study loans with fast approvals,
            flexible repayment options, and full transparency.
          </p>

          <button
            onClick={() => router.push("/apply-loan")}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all"
          >
            Apply for a Loan
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="images/bank-hero.jpg"
            alt="Bank illustration"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
