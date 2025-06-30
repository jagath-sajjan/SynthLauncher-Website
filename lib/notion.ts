import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "221091b8-efe2-8085-8a79-f0648d487ebd"

export async function addEmailToWaitlist(email: string) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        Email: {
          email: email,
        },
      },
    })

    return { success: true, id: response.id }
  } catch (error) {
    console.error("Error adding email to Notion:", error)

    // Check if it's a duplicate email error
    if (error instanceof Error && error.message.includes("already exists")) {
      return { success: false, error: "This email is already on the waitlist!" }
    }

    return { success: false, error: "Failed to add email to waitlist. Please try again." }
  }
}
