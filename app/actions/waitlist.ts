"use server"

import { addEmailToWaitlist } from "@/lib/notion"

export async function submitWaitlistEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      error: "Please enter a valid email address",
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    }
  }

  try {
    const result = await addEmailToWaitlist(email.toLowerCase().trim())

    if (result.success) {
      return {
        success: true,
        message: "🎉 Successfully added to waitlist! We'll notify you when SynthLauncher launches on July 8, 2025.",
      }
    } else {
      return {
        success: false,
        error: result.error || "Failed to add email to waitlist",
      }
    }
  } catch (error) {
    console.error("Server action error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}
