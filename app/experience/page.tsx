import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience spanning enterprise full-stack engineering, higher education, applied NLP research, and early-career internships.",
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
