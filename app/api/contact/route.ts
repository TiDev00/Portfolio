import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
function sanitizeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const data = contactSchema.parse(body);

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM = process.env.RESEND_FROM;
    const RESEND_TO = process.env.RESEND_TO;

    if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
      console.error("[contact] Missing Resend configuration", {
        hasKey: !!RESEND_API_KEY,
        hasFrom: !!RESEND_FROM,
        hasTo: !!RESEND_TO,
      });
      return NextResponse.json(
        {
          message:
            "Email service not configured. Please set RESEND_API_KEY, RESEND_FROM and RESEND_TO environment variables.",
        },
        { status: 500 },
      );
    }

    const html = `
      <div style="font-family: system-ui, -apple-system, sans-serif; line-height:1.4;">
        <p><strong>Name:</strong> ${sanitizeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(data.email)}</p>
        <p><strong>Subject:</strong> ${sanitizeHtml(data.subject)}</p>
        <hr />
        <div>${sanitizeHtml(data.message).replace(/\n/g, "<br />")}</div>
      </div>
    `;

    const resend = new Resend(RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: RESEND_FROM,
        to: RESEND_TO,
        subject: "[Portfolio] - New Message",
        html,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      });
    } catch (sendErr) {
      console.error("[contact] Resend error:", sendErr);
      return NextResponse.json({ message: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ errors: err.flatten().fieldErrors }, { status: 422 });
    }
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
