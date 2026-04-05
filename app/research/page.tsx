import type { Metadata } from "next";
import { ResearchSection } from "@/components/sections/Research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research publications, reproducible code, and datasets.",
};

export default function ResearchPage() {
  return <ResearchSection />;
}
