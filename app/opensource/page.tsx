import type { Metadata } from "next";
import { OpensourceSection } from "@/components/sections/Opensource";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open-source contributions, GitHub activity, and community involvement — from Galsen Dev to GitHub Campus Expert.",
};

export default function OpensourcePage() {
  return <OpensourceSection />;
}
