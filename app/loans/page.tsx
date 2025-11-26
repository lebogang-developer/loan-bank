"use client";

import { useState } from "react";
import { Car, Home, BookOpen, UserCheck } from "lucide-react";

export default function LoansPage() {
  const [salary, setSalary] = useState<number | "">("");
  const [loanAmount, setLoanAmount] = useState<number | null>(null);

  // Simple eligibility calculator logic
  const calculateEligibility = () => {
    if (!salary || salary <= 0) return;
    // Assuming max 5x monthly salary
    const maxLoan = salary * 5;
    setLoanAmount(maxLoan);
  };

  const loans = [
    {
      icon: <Car size={40} className="text-green-600" />,
      title: "Car Loan",
      description:
        "Get financing for your new or used vehicle with flexible repayment options.",
      requirements: [
        "Valid South African ID",
        "Payslip of last 3 months",
        "Bank statement of last 3 months",
      ],
    },
    {
      icon: <Home size={40} className="text-green-600" />,
      title: "Home Loan",
      description:
        "Purchase your dream home with guided support and competitive interest rates.",
      requirements: [
        "Valid South African ID",
        "Payslip of last 3 months",
        "Bank statement of last 6 months",
        "Proof of residence",
      ],
    },
    {
      icon: <BookOpen size={40} className="text-green-600" />,
      title: "Student Loan",
      description:
        "Invest in your education with affordable repayment options.",
      requirements: [
        "Valid South African ID",
        "Acceptance letter from your university",
        "Payslip (if applicable) or proof of guardianship income",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Loans
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Find the perfect loan to achieve your goals and calculate your
          eligibility instantly.
        </p>
      </div>

      {/* Loan Types */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {loans.map((loan, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">{loan.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {loan.title}
            </h3>
            <p className="text-gray-600 text-center mb-4">{loan.description}</p>
            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {loan.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Loan Eligibility Calculator */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Loan Eligibility Calculator
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="number"
            placeholder="Enter your monthly salary (ZAR)"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 w-full md:w-2/3"
          />
          <button
            onClick={calculateEligibility}
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition w-full md:w-auto"
          >
            Calculate
          </button>
        </div>

        {loanAmount !== null && (
          <p className="mt-6 text-center text-lg font-medium text-gray-700">
            Based on your salary, you may be eligible for a loan up to{" "}
            <span className="text-green-600">
              ZAR {loanAmount.toLocaleString()}
            </span>
          </p>
        )}
      </div>

      {/* Apply Now Button */}
      <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition">
          Apply for a Loan
        </button>
      </div>
    </div>
  );
}
