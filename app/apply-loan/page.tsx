"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";

import { saveLoanApplication } from "../actions";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const requiredFileSchema = z
  .custom<FileList>(
    (value) =>
      typeof FileList !== "undefined" &&
      value instanceof FileList &&
      value.length === 1,
    "Please upload a document",
  )
  .refine(
    (files) => files instanceof FileList && files[0]?.size <= MAX_FILE_SIZE,
    "File must be 5MB or smaller",
  )
  .refine(
    (files) =>
      files instanceof FileList && ACCEPTED_FILE_TYPES.includes(files[0]?.type),
    "Only PDF, JPG and PNG files are allowed",
  );

const loanSchema = z
  .object({
    loanType: z.enum(["car", "home", "study", "personal"]),

    fullName: z.string().trim().min(3, "Full name is required"),

    email: z.string().email("Enter a valid email address"),

    phone: z
      .string()
      .trim()
      .regex(
        /^(?:\+27|0)[6-8]\d{8}$/,
        "Enter a valid South African mobile number",
      ),

    employmentStatus: z.enum(["employed", "self-employed", "unemployed"]),

    monthlyIncome: z
      .string()
      .min(1, "Monthly income is required")
      .refine(
        (value) => Number.isFinite(Number(value)) && Number(value) >= 0,
        "Enter a valid monthly income",
      ),

    carModel: z.string().optional(),
    propertyAddress: z.string().optional(),
    varsityName: z.string().optional(),
    studyProgram: z.string().optional(),

    idCopy: requiredFileSchema,
    payslip: requiredFileSchema,
    proofOfAddress: requiredFileSchema,
    varsityLetter: requiredFileSchema.optional(),
  })
  .superRefine((data, ctx) => {
    const requiredConditional = (
      field: "carModel" | "propertyAddress" | "varsityName" | "studyProgram",
      value: string | undefined,
    ) => {
      if (!value?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [field],
          message: "This field is required",
        });
      }
    };

    if (data.loanType === "car") {
      requiredConditional("carModel", data.carModel);
    }

    if (data.loanType === "home") {
      requiredConditional("propertyAddress", data.propertyAddress);
    }

    if (data.loanType === "study") {
      requiredConditional("varsityName", data.varsityName);
      requiredConditional("studyProgram", data.studyProgram);

      if (!data.varsityLetter) {
        ctx.addIssue({
          code: "custom",
          path: ["varsityLetter"],
          message: "University letter is required",
        });
      }
    }
  });

type LoanFormData = z.infer<typeof loanSchema>;

const inputClass =
  "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

const labelClass = "block text-sm font-semibold text-gray-700";

export default function ApplyLoanPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<LoanFormData>({
    resolver: zodResolver(loanSchema),
    defaultValues: {
      loanType: "personal",
      fullName: "",
      email: "",
      phone: "",
      employmentStatus: "employed",
      monthlyIncome: "",
      carModel: "",
      propertyAddress: "",
      varsityName: "",
      studyProgram: "",
    },
    shouldUnregister: true,
  });

  const selectedLoan = watch("loanType");

  const onSubmit = async (data: LoanFormData) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("loanType", data.loanType);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("employmentStatus", data.employmentStatus);
      formData.append("monthlyIncome", data.monthlyIncome);

      if (data.carModel) {
        formData.append("carModel", data.carModel);
      }

      if (data.propertyAddress) {
        formData.append("propertyAddress", data.propertyAddress);
      }

      if (data.varsityName) {
        formData.append("varsityName", data.varsityName);
      }

      if (data.studyProgram) {
        formData.append("studyProgram", data.studyProgram);
      }

      formData.append("idCopy", data.idCopy[0]);
      formData.append("payslip", data.payslip[0]);
      formData.append("proofOfAddress", data.proofOfAddress[0]);

      if (data.loanType === "study" && data.varsityLetter?.[0]) {
        formData.append("varsityLetter", data.varsityLetter[0]);
      }

      const result = await saveLoanApplication(formData);

      if (!result.success) {
        throw new Error(result.error || "Failed to submit application");
      }

      toast.success("Loan application submitted successfully!");

      reset();
      document
        .querySelectorAll<HTMLInputElement>('input[type="file"]')
        .forEach((input) => {
          input.value = "";
        });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SignedIn>
        <main className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-10 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                FinTrust Bank
              </span>

              <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
                Apply for a Loan
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Complete the application form and attach your supporting
                documents.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10"
            >
              {/* Loan Type */}
              <section>
                <h2 className="mb-5 text-xl font-bold text-gray-900">
                  1. Loan Details
                </h2>

                <label htmlFor="loanType" className={labelClass}>
                  Select Loan Type
                </label>

                <select
                  id="loanType"
                  {...register("loanType")}
                  className={inputClass}
                >
                  <option value="personal">Personal Loan</option>
                  <option value="car">Car Loan</option>
                  <option value="home">Home Loan</option>
                  <option value="study">Study Loan</option>
                </select>
              </section>

              <hr className="border-gray-100" />

              {/* Personal Details */}
              <section>
                <h2 className="mb-5 text-xl font-bold text-gray-900">
                  2. Personal Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                      className={inputClass}
                    />

                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      {...register("email")}
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="0712345678"
                      {...register("phone")}
                      className={inputClass}
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* Financial Information */}
              <section>
                <h2 className="mb-5 text-xl font-bold text-gray-900">
                  3. Financial Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="employmentStatus" className={labelClass}>
                      Employment Status
                    </label>

                    <select
                      id="employmentStatus"
                      {...register("employmentStatus")}
                      className={inputClass}
                    >
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="monthlyIncome" className={labelClass}>
                      Monthly Income (R)
                    </label>

                    <input
                      id="monthlyIncome"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="15000"
                      {...register("monthlyIncome")}
                      className={inputClass}
                    />

                    {errors.monthlyIncome && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.monthlyIncome.message}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Loan-Specific Fields */}
              {selectedLoan !== "personal" && (
                <>
                  <hr className="border-gray-100" />

                  <section>
                    <h2 className="mb-5 text-xl font-bold text-gray-900">
                      4. Additional Loan Information
                    </h2>

                    {selectedLoan === "car" && (
                      <div>
                        <label htmlFor="carModel" className={labelClass}>
                          Car Make and Model
                        </label>

                        <input
                          id="carModel"
                          placeholder="Toyota Corolla"
                          {...register("carModel")}
                          className={inputClass}
                        />

                        {errors.carModel && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.carModel.message}
                          </p>
                        )}
                      </div>
                    )}

                    {selectedLoan === "home" && (
                      <div>
                        <label htmlFor="propertyAddress" className={labelClass}>
                          Property Address
                        </label>

                        <input
                          id="propertyAddress"
                          placeholder="Enter property address"
                          {...register("propertyAddress")}
                          className={inputClass}
                        />

                        {errors.propertyAddress && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.propertyAddress.message}
                          </p>
                        )}
                      </div>
                    )}

                    {selectedLoan === "study" && (
                      <div className="space-y-5">
                        <div>
                          <label htmlFor="varsityName" className={labelClass}>
                            University / Institution
                          </label>

                          <input
                            id="varsityName"
                            placeholder="University name"
                            {...register("varsityName")}
                            className={inputClass}
                          />

                          {errors.varsityName && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.varsityName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="studyProgram" className={labelClass}>
                            Study Programme
                          </label>

                          <input
                            id="studyProgram"
                            placeholder="Diploma in IT"
                            {...register("studyProgram")}
                            className={inputClass}
                          />

                          {errors.studyProgram && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.studyProgram.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </section>
                </>
              )}

              <hr className="border-gray-100" />

              {/* Documents */}
              <section>
                <h2 className="mb-2 text-xl font-bold text-gray-900">
                  Supporting Documents
                </h2>

                <p className="mb-5 text-sm text-gray-500">
                  Accepted formats: PDF, JPG and PNG. Maximum file size: 5MB
                  each.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  {(
                    [
                      ["idCopy", "ID Copy"],
                      ["payslip", "Recent Payslip"],
                      ["proofOfAddress", "Proof of Address"],
                    ] as const
                  ).map(([name, label]) => (
                    <div key={name}>
                      <label htmlFor={name} className={labelClass}>
                        {label}
                      </label>

                      <input
                        id={name}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register(name)}
                        className={`${inputClass} text-sm`}
                      />

                      {errors[name] && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors[name]?.message}
                        </p>
                      )}
                    </div>
                  ))}

                  {selectedLoan === "study" && (
                    <div>
                      <label htmlFor="varsityLetter" className={labelClass}>
                        University Acceptance Letter
                      </label>

                      <input
                        id="varsityLetter"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register("varsityLetter")}
                        className={`${inputClass} text-sm`}
                      />

                      {errors.varsityLetter && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.varsityLetter.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </section>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting Application..."
                  : "Submit Loan Application"}
              </button>

              <p className="text-center text-xs text-gray-500">
                Submission does not guarantee loan approval.
              </p>
            </form>
          </div>
        </main>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
}
