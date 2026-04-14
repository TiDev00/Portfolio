import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("[contact] Missing Web3Forms configuration", {
        hasKey: !!WEB3FORMS_ACCESS_KEY,
      });
      return NextResponse.json(
        {
          message:
            "Email service not configured. Please set WEB3FORMS_ACCESS_KEY environment variable.",
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

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "[Portfolio] - New Message",
      name: data.name,
      email: data.email,
      message: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
      reply_to: data.email,
      data: {
        html,
      },
    } as const;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok || !(result && (result.success || result.success === undefined))) {
        // Web3Forms may return success:true on 200 and other shapes — log and return 502 on unexpected response
        console.error("[contact] Web3Forms error:", result);
        return NextResponse.json({ message: "Failed to send message" }, { status: 502 });
      }
    } catch (sendErr) {
      console.error("[contact] Web3Forms error:", sendErr);
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
