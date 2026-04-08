import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/Projects";
import { getPinnedRepos } from "@/lib/github";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source projects including Wolof NLP tools, COVID-19 detection, drowsiness detection, neural machine translation, and more.",
};

export default async function ProjectsPage() {
  const projects = await getPinnedRepos();
  return <ProjectsSection projects={projects} />;
}
