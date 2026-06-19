import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 border">
        <h1 className="text-2xl font-bold text-center mb-4 text-green-600">
          Create Your Account
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Join FinTrust Bank and start applying for smart, affordable loans.
        </p>

        <SignUp
          appearance={{
            elements: {
              card: "shadow-none border-none",
            },
          }}
        />
      </div>
    </section>
  );
}
