import type { Metadata } from "next";
import { OpensourceSection } from "@/components/sections/Opensource";
import { getOpenSourceStats } from "@/lib/github";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Public GitHub work, Wolof NLP research code, and community involvement across Galsen Dev, Galsen AI, Daara-IT, and GitHub Education.",
};

export default async function OpensourcePage() {
  const stats = await getOpenSourceStats();

  return <OpensourceSection stats={stats} />;
}
