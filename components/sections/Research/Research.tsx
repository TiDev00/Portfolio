"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { research } from "@/lib/portfolio";
import { ExternalLink, Github, FileText } from "lucide-react";

export function ResearchSection() {
  return (
    <div className="section-container space-y-8">
      <section aria-labelledby="research-heading">
        <SectionHeader
          id="research-heading"
          title="Research & Publications"
          subtitle="Selected papers, reproducible code, and shared datasets."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {research.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <h3 className="font-semibold text-card-foreground text-sm">{p.title}</h3>
              <p className="text-xs font-medium mt-0.5 text-muted-foreground">
                {p.authors} {p.venue ? `• ${p.venue}` : ""} {p.year ? `• ${p.year}` : ""}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.abstract}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.paper_url ? (
                  <Button asChild size="sm">
                    <Link href={p.paper_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="size-3" aria-hidden="true" />
                      Paper
                      <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
                    </Link>
                  </Button>
                ) : null}

                {p.github_url ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={p.github_url} target="_blank" rel="noopener noreferrer">
                      <Github className="size-3" aria-hidden="true" />
                      Code
                      <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
