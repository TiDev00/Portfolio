import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Thierno Cissé for software engineering roles, consulting work, teaching collaborations, or applied AI conversations.",
};

export default function ContactPage() {
  return <ContactSection />;
}
