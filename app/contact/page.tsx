import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";
import { pageMetadata } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return <ContactSection />;
}
