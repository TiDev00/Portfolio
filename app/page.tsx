import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { seo } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Home",
  description: seo.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
    </>
  );
}
