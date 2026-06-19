const FaqSection = () => {
  const faqs = [
    {
      question: "What types of loans does FinTrust Bank offer?",
      answer:
        "We offer Personal Loans, Car Loans, Home Loans, and Study Loans tailored to meet different financial needs.",
    },
    {
      question: "How do I apply for a loan?",
      answer:
        "Simply create an account, choose a loan type, complete the application form, and upload the required documents.",
    },
    {
      question: "What documents are required?",
      answer:
        "Applicants typically need a valid ID, recent payslip, proof of address, and additional supporting documents depending on the loan type.",
    },
    {
      question: "How long does the approval process take?",
      answer:
        "Most applications are reviewed within 24–72 hours once all required documents have been submitted.",
    },
    {
      question: "Can I apply if I am self-employed?",
      answer:
        "Yes. Self-employed applicants may be required to provide additional proof of income or bank statements.",
    },
    {
      question: "Will applying for a loan affect my credit score?",
      answer:
        "Submitting an application does not automatically affect your credit score, but a lender may perform a credit assessment during the review process.",
    },
    {
      question: "How do I know if I qualify for a loan?",
      answer:
        "Use our Loan Eligibility Calculator to get an estimate based on your income, expenses, and loan requirements.",
    },
    {
      question: "Can I track my application status?",
      answer:
        "Yes. Once logged in, you can view your application status and receive updates through your dashboard.",
    },
    {
      question: "Are my documents secure?",
      answer:
        "Absolutely. We use secure authentication and encrypted storage practices to protect your personal information.",
    },
    {
      question: "What happens if my application is declined?",
      answer:
        "You will receive a notification explaining the outcome, and you may reapply once your circumstances change or additional information becomes available.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our loan products,
            application process, eligibility requirements, and document
            submissions.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;