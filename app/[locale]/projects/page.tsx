import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPinnedRepos } from "@/lib/github";
import { ProjectsSection } from "@/components/sections/Projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.projects" });
  return { title: t("title"), description: t("description") };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const projects = await getPinnedRepos();
  return <ProjectsSection projects={projects} />;
}
