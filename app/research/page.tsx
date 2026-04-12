import type { Metadata } from "next";
import { ResearchSection } from "@/components/sections/Research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research publications and code on Wolof spell correction, low-resource NLP, and reproducible language technology work.",
};

export default function ResearchPage() {
  return <ResearchSection />;
}
