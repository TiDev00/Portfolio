import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Thierno Ibrahima Cissé — available for freelance projects, full-time roles, and research collaborations.",
};

export default function ContactPage() {
  return <ContactSection />;
}
