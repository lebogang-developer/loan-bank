import type { Metadata } from "next";
// import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTrust Bank",
  description:
    "A Banking App to apply for a Loan. Apply for loans easily and securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        bg-gray-50
      >
        <main className="min-h-screen max-w-7xl mx-auto px-4 py-6">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
