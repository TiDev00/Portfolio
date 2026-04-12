import type { Metadata } from "next";
import { EducationSection } from "@/components/sections/Education";
import { pageMetadata } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata.education;

export default function EducationPage() {
  return <EducationSection />;
}
