import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 border">
        <h1 className="text-2xl font-bold text-center mb-4 text-green-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Sign in to continue your loan application journey.
        </p>

        <SignIn
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
