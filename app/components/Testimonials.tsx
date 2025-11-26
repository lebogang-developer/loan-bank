"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Thabo Molefe",
    role: "Car Loan Client",
    text: "FinTrust Bank made my car loan approval fast and stress-free. Their process is transparent and the interest rates are fair. Highly recommended!",
    image: "/thabo.jpg",
  },
  {
    name: "Lerato Mokoena",
    role: "Home Loan Client",
    text: "I managed to secure my first home with the help of FinTrust Bank. The team guided me step by step, and the communication was excellent.",
    image: "/lerato.jpg",
  },
  {
    name: "Kabelo Nkosi",
    role: "Study Loan Client",
    text: "The study loan helped me pay my university fees with flexible repayment options. Thank you for making education more accessible!",
    image: "/kabelo.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real experiences from people who trusted FinTrust Bank for their
            loan needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mt-4 text-yellow-500">
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
