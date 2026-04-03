"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SocialMedia } from "@/components/shared/SocialMedia";
import { greeting } from "@/lib/portfolio";
import { ExternalLink, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      className="section-container flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20"
      aria-label="Introduction"
    >
      {/* Text column */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Thierno Ibrahima
            <br />
            <span className="text-primary">Cissé</span>
          </h1>
        </div>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {greeting.subTitle}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume (opens in new tab)"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Resume
              <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <SocialMedia />
      </motion.div>

      {/* Illustration column */}
      <motion.div
        className="flex-shrink-0 lg:flex-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        aria-hidden="true"
      >
        {/* Monogram SVG placeholder — replace with FeelingProud.svg via next/image when available */}
        <div className="mx-auto flex size-72 items-center justify-center rounded-full bg-secondary lg:size-96">
          <div className="flex size-48 items-center justify-center rounded-full bg-primary/20">
            <span className="text-7xl font-black text-primary select-none">Ti</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
