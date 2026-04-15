"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SocialMedia } from "@/components/shared/SocialMedia";
import { addressSection, sectionHeadings } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

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

type ContactFormData = z.infer<typeof contactSchema>;

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: sanitizeHtml(data.name),
          name: sanitizeHtml(data.name),
          email: sanitizeHtml(data.email),
          message: sanitizeHtml(data.message),
        }),
      });
      const result: { success: boolean } = await res.json();
      if (!res.ok || !result.success) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      "w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "transition-colors",
      hasError
        ? "border-red-500 focus-visible:ring-red-400"
        : "border-border hover:border-primary/50",
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass(!!errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass(!!errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
          Subject{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What is this about?"
          className={fieldClass(!!errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project or just say hi!"
          className={fieldClass(!!errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit status feedback */}
      {status === "success" && (
        <div
          role="status"
          className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400"
        >
          <CheckCircle className="size-4 flex-shrink-0" aria-hidden="true" />
          Message received! I&apos;ll be in touch soon.
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
        >
          <AlertCircle className="size-4 flex-shrink-0" aria-hidden="true" />
          Something went wrong. Please try again.
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactSection() {
  return (
    <div className="section-container">
      <SectionHeader {...sectionHeadings.contact} />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-card-foreground">Send a Message</h2>
          <ContactForm />
        </div>

        {/* Info side */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Connect with me</h2>
            <SocialMedia />
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-2 font-medium text-card-foreground flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {addressSection.title}
            </h3>
            <p className="text-sm text-muted-foreground">{addressSection.subtitle}</p>
            <Link
              href={addressSection.location_map_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              View on Google Maps →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
