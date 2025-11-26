export default function CTABanner() {
  return (
    <section
      className="w-full py-16 
      bg-gradient-to-r from-green-600 via-green-500 to-green-400 
      text-white"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to apply? Start your loan application today.
        </h2>

        <p className="mt-3 text-lg opacity-90">
          Fast approval • Secure process • 100% online
        </p>

        <button
          className="mt-6 px-10 py-3 bg-white text-green-700 
          font-semibold rounded-xl shadow-md 
          hover:bg-gray-100 transition"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
}
