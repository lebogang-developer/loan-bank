"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {UserButton, SignedIn, SignedOut } from "@clerk/nextjs"



export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          FinTrust Bank
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <Link href="/loans" className="hover:text-green-600">
            Loans
          </Link>
          <Link href="/contact" className="hover:text-green-600">
            Contact
          </Link>
          
            {/* AUTH BUTTONS */}
          
          {/* When user is logged out */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Login
            </Link>
          </SignedOut>

          {/* When user is logged in */}
          <SignedIn>
            {/* Dashboard link */}
            <Link
              href="/dashboard"
              className="text-green-600 font-medium hover:underline"
            >
              Dashboard
            </Link>

            {/* Clerk User Button (includes logout) */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col justtify-center align-items-center bg-white shadow-md px-4 pb-4 space-y-3 text-gray-700 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/loans" onClick={() => setOpen(false)}>
            Loans
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="/sign-in"
            className="px-4 py-1 ml-10 bg-green-600 hover:bg-green-700 text-white rounded-xl"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
