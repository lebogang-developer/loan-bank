import Link from "next/link";
import { FaEnvelope, FaPhoneSquareAlt, FaRegAddressCard } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">FinTrust Bank</h2>
          <p className="text-sm">
            A secure and modern digital bank that helps you apply for loans
            easily and safely.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/loans" className="hover:text-white">
                Loans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Info
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <FaEnvelope className="text-green-600" size={20} />{" "}
              info@leanofinance.com
            </li>

            <li>
              <FaPhoneSquareAlt className="text-green-600" size={20} /> +27
              71234 5678
            </li>

            <div className="flex flex-col">
              <li>
                <FaRegAddressCard className="text-green-600 mr-2" size={20} /> Free
                State, South Africa
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} FinTrust Bank. All rights reserved.
      </div>
    </footer>
  );
}
