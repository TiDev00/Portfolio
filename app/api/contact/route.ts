import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const data = contactSchema.parse(body);

    // In production, integrate a transactional email provider (Resend, SendGrid, etc.).
    // For now, the validated payload is logged server-side.
    // Replace this block with your preferred mail sender.
    console.warn("[contact] Message received from:", data.email);

    return NextResponse.json(
      { message: "Message received. I will get back to you soon!" },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ errors: err.flatten().fieldErrors }, { status: 422 });
    }
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
