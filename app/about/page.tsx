import { Building2, Users, HandCoins, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <section className="w-full bg-gradient-to-r from-green-600 to-green-400 py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About FinTrust Bank
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Building financial confidence through smart, accessible loans for
          every South African.
        </p>
      </section>

      {/* About Intro */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FinTrust Bank is a modern financial institution dedicated to helping
            individuals achieve their dreams. Whether you're buying your first
            car, securing a home for your family, or funding your education — we
            are here to support you every step of the way.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our loan application process is fast, transparent, and tailored for
            all income levels. With our digital-first approach, you can apply
            for a loan online, upload your documents, and get feedback
            instantly.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/bank-hero.jpg"
            alt="FinTrust Bank Office"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Building2 className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Trust</h3>
              <p className="text-gray-600">
                We maintain transparency in every step of the loan process.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your needs guide how we design our products and services.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <HandCoins className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Opportunity</h3>
              <p className="text-gray-600">
                We believe everyone deserves a fair chance to succeed.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Security</h3>
              <p className="text-gray-600">
                Your personal information and uploads are fully protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Loan Types We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Vehicle Loans</h3>
              <p className="text-gray-600">
                Get financing for your new or used car with flexible repayment
                options.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Home Loans</h3>
              <p className="text-gray-600">
                Buy your dream home with competitive interest rates and guided
                support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Student Loans</h3>
              <p className="text-gray-600">
                Invest in your education with affordable loan repayment terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-green-400 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Apply for a Loan?
        </h2>
        <p className="mb-8 text-lg max-w-xl mx-auto opacity-90">
          Join thousands of South Africans who trust FinTrust Bank for fast,
          secure, and reliable loan services.
        </p>
        <a
          href="/loans"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Start Application
        </a>
      </section>
    </div>
  );
}
