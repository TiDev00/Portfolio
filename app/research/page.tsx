import type { Metadata } from "next";
import { ResearchSection } from "@/components/sections/Research";
import { pageMetadata } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata.research;

export default function ResearchPage() {
  return <ResearchSection />;
}
