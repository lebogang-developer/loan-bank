"use client";

import { motion } from "framer-motion";
import { FileCheck, Upload, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <FileCheck size={40} className="text-green-600" />,
    title: "Create an Account",
    description:
      "Sign up securely using Clerk and verify your profile to start the application.",
  },
  {
    icon: <Upload size={40} className="text-green-600" />,
    title: "Upload Your Documents",
    description:
      "Submit your ID, proof of income, and payslip for fast approval.",
  },
  {
    icon: <CreditCard size={40} className="text-green-600" />,
    title: "Choose Your Loan",
    description:
      "Select from car, home, personal, or study loan options based on your needs.",
  },
  {
    icon: <CheckCircle size={40} className="text-green-600" />,
    title: "Get Approved",
    description:
      "Receive approval updates instantly via email and track your loan status online.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Applying for a loan with FinTrust Bank is simple, fast, and
            transparent. Follow these easy steps to get started.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
