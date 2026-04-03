import type { Metadata } from "next";
import { EducationSection } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic degrees, professional certifications, and competitive programming profiles — UQAM M.Sc. AI, ESP M.Eng. Software Engineering.",
};

export default function EducationPage() {
  return <EducationSection />;
}
