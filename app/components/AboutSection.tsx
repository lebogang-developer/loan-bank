'use client'

import { FaCar, FaHome, FaGraduationCap, FaWallet } from "react-icons/fa";
import { useRouter } from 'next/navigation';




export default function AboutSection() {

  const router = useRouter();

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About FinTrust Bank
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            FinTrust Bank provides reliable and transparent financial solutions,
            helping individuals achieve their goals through flexible and secure
            loan options.
          </p>
        </div>

        {/* Loan Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {/* Car Loan */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <FaCar className="text-green-600 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mt-4">Car Loans</h3>
            <p className="mt-2 text-gray-600">
              Get approved for a vehicle loan with competitive interest rates
              and flexible repayment options.
            </p>
          </div>

          {/* Home Loan */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <FaHome className="text-green-600 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mt-4">Home Loans</h3>
            <p className="mt-2 text-gray-600">
              Finance your dream home with our affordable and convenient
              mortgage solutions.
            </p>
          </div>

          {/* Study Loan */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <FaGraduationCap className="text-green-600 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mt-4">Study Loans</h3>
            <p className="mt-2 text-gray-600">
              Invest in your education with low-interest student loans that
              support your academic journey.
            </p>
          </div>

          {/* Personal Loan */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <FaWallet className="text-green-600 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mt-4">Personal Loans</h3>
            <p className="mt-2 text-gray-600">
              Cover personal expenses with fast-approved loans tailored to your
              needs.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <button onClick={() => router.push('/apply-loan')} className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
