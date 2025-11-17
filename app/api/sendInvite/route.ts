import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/utils/email";
import { sendEmailTemplate } from "@/utils/email/sendEmailTemplate";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: NextRequest) {
  try {
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.ADMIN_EMAIL
    ) {
      throw new Error(
        "Missing email configuration. Please check environment variables."
      );
    }

    // Get form data
    const formData = await req.formData();

    // Extract fiel
    const email = formData.get("email") as string;

    // Validate data
    formSchema.parse({
      email,
    });

    // Send email
    await transporter.sendMail({
      from: `"Sayang Saya" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: process.env.ADMIN_EMAIL,
      subject: "Birthday Sayang Celebration",
      html: sendEmailTemplate(),
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Form submission error:", err);
    const message =
      err instanceof z.ZodError
        ? err.issues.map((e) => e.message).join(", ")
        : err instanceof Error
        ? err.message
        : "Failed to process form submission";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
