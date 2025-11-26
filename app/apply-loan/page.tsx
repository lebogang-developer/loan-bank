"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function ApplyLoanPage() {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Apply for a Loan</h1>
          <p className="text-gray-600 mb-6 text-center">
            Upload your documents and complete your application.
          </p>
          {/* TODO: Add loan form component here */}
        </div>
      </SignedIn>

      <SignedOut>{RedirectToSignIn({ redirectUrl: "/apply-loan" })}</SignedOut>
    </>
  );
}
