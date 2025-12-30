import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      company,
      elevatorType,
      message,
    } = body

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: `"${process.env.EMAIL_NAME}" <${process.env.EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      cc: "ikiranrockrzz@gmail.com",
      subject: `New Quote Request – ${name}`,
      text: `
New Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "N/A"}
Elevator Type: ${elevatorType || "Not selected"}

Project Details:
${message || "No message provided"}

-- End of Quote --
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    })
  } catch (error) {
    console.error("Quote Email Error:", error)
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    )
  }
}
