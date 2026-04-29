import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getOpenSourceStats } from "@/lib/github";
import { OpensourceSection } from "@/components/sections/Opensource";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.opensource" });
  return { title: t("title"), description: t("description") };
}

export default async function OpensourcePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const stats = await getOpenSourceStats();
  return <OpensourceSection stats={stats} />;
}
