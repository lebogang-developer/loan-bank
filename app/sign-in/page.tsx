import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="p-4 w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
            },
          }}
        />
      </div>
    </section>
  );
}
