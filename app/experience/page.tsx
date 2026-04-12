import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/Experience";
import { pageMetadata } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata.experience;

export default function ExperiencePage() {
  return <ExperienceSection />;
}
