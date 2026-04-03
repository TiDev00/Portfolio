import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source projects including Wolof NLP tools, COVID-19 detection, drowsiness detection, neural machine translation, and more.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
