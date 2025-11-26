import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          We're here to assist you — get in touch anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Message
              </label>
              <textarea
                // rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              ></textarea>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="flex items-start gap-4 mb-5">
              <Mail className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@fintrustbank.co.za</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+27 68 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  Bloemfontein, Free State, South Africa
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.8033523644593!2d26.1596!3d-29.0852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fd7542d9b9b8f%3A0x4b0a2bdd51d1b1c!2sBloemfontein%2C%20Free%20State!5e0!3m2!1sen!2sza!4v1700000000000"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
