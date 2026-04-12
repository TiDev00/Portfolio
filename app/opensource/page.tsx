import type { Metadata } from "next";
import { OpensourceSection } from "@/components/sections/Opensource";
import { getOpenSourceStats } from "@/lib/github";
import { pageMetadata } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata.opensource;

export default async function OpensourcePage() {
  const stats = await getOpenSourceStats();

  return <OpensourceSection stats={stats} />;
}
