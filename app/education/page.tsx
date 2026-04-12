import type { Metadata } from "next";
import { EducationSection } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background in artificial intelligence and software engineering, plus professional certifications and continuous learning.",
};

export default function EducationPage() {
  return <EducationSection />;
}
