import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional work experience and internships — from ML research at Ciena to full stack development at Pomerleau.",
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
