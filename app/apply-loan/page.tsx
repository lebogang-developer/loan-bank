"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ZOD SCHEMA
const loanSchema = z.object({
  loanType: z.enum(["car", "home", "study", "personal"]),
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),

  // financial
  employmentStatus: z.enum(["employed", "self-employed", "unemployed"]),
  monthlyIncome: z.string().min(1, "Monthly income required"),

  // loan-specific
  carModel: z.string().optional(),
  propertyAddress: z.string().optional(),
  varsityName: z.string().optional(),
  studyProgram: z.string().optional(),

  // file uploads
  idCopy: z.any(),
  payslip: z.any(),
  proofOfAddress: z.any(),
  varsityLetter: z.any().optional(),
});

export default function ApplyLoanPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loanSchema),
  });

  const selectedLoan = watch("loanType");

  const onSubmit = async (data: any) => {
    setLoading(true);

    console.log("Submitting Loan Application...", data);

    // TODO: send data to backend, upload files to storage bucket/upoadthing, etc.

    setLoading(false);
    toast.success("Application submitted!"); // use toastify from react
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Apply for a Loan
        </h1>
        <p className="text-gray-600 mb-8">
          Complete the form below and attach required documents.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          {/* LOAN TYPE */}
          <div>
            <label className="font-medium">Loan Type</label>
            <select
              {...register("loanType")}
              className="w-full p-3 border rounded-md mt-1"
            >
              <option value="car">Car Loan</option>
              <option value="home">Home Loan</option>
              <option value="study">Study Loan</option>
              <option value="personal">Personal Loan</option>
            </select>
          </div>

          {/* PERSONAL INFO */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label>Full Name</label>
              <input
                {...register("fullName")}
                className="w-full p-3 border rounded-md"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label>Email</label>
              <input
                {...register("email")}
                className="w-full p-3 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label>Phone Number</label>
            <input
              {...register("phone")}
              className="w-full p-3 border rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Employment */}
          <div>
            <label>Employment Status</label>
            <select
              {...register("employmentStatus")}
              className="w-full p-3 border rounded-md"
            >
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>

          {/* Income */}
          <div>
            <label>Monthly Salary (R)</label>
            <input
              {...register("monthlyIncome")}
              type="number"
              className="w-full p-3 border rounded-md"
            />
            {errors.monthlyIncome && (
              <p className="text-red-500 text-sm">
                {errors.monthlyIncome.message}
              </p>
            )}
          </div>

          {/* CONDITIONAL FIELDS */}
          {selectedLoan === "car" && (
            <div>
              <label>Car Model</label>
              <input
                {...register("carModel")}
                className="w-full p-3 border rounded-md"
              />
            </div>
          )}

          {selectedLoan === "home" && (
            <div>
              <label>Property Address</label>
              <input
                {...register("propertyAddress")}
                className="w-full p-3 border rounded-md"
              />
            </div>
          )}

          {selectedLoan === "study" && (
            <div className="space-y-4">
              <div>
                <label>University Name</label>
                <input
                  {...register("varsityName")}
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div>
                <label>Study Program</label>
                <input
                  {...register("studyProgram")}
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>
          )}

          {/* FILE UPLOADS */}
          <div className="space-y-4">
            <div>
              <label>ID Copy (PDF or Image)</label>
              <input
                {...register("idCopy")}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label>Payslip (PDF or Image)</label>
              <input
                {...register("payslip")}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label>Proof of Address (PDF or Image)</label>
              <input
                {...register("proofOfAddress")}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {selectedLoan === "study" && (
              <div>
                <label>Varsity Letter</label>
                <input
                  {...register("varsityLetter")}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  );
}
