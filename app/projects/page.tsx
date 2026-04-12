import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/Projects";
import { getPinnedRepos } from "@/lib/github";
import { pageMetadata } from "@/lib/portfolio";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata.projects;

export default async function ProjectsPage() {
  const projects = await getPinnedRepos();
  return <ProjectsSection projects={projects} />;
}
