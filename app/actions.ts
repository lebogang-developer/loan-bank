"use server";

import { prisma } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(10),
  message: z.string().trim().min(5),
});

export async function saveFormData(formData: FormData) {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  

  if (!result.success) {
    return {
      success: false,
      error: "Please complete all fields correctly.",
    };
  }

  try {
    await prisma.contactRequest.create({
      data: result.data,
    });

    revalidatePath("/contact");

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return {
      success: false,
      error: "Unable to send your message. Please try again.",
    };
  }
}

// Loan application action will be implemented next,
// once we confirm the Prisma model and private file storage.
export async function saveLoanApplication(_formData: FormData) {
  return {
    success: false,
    error: "Loan submissions are not configured yet.",
  };
}