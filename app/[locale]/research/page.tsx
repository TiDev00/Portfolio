import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ResearchSection } from "@/components/sections/Research";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.research" });
  return { title: t("title"), description: t("description") };
}

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ResearchSection />;
}
