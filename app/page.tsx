import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { pageMetadata } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata.home;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
    </>
  );
}
