"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experience } from "@/lib/portfolio";
import type { WorkExperience } from "@/lib/types";
import { MapPin, Calendar } from "lucide-react";

function ExperienceCard({ exp, index }: { exp: WorkExperience; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex gap-4 ${isEven ? "flex-row" : "flex-row-reverse"} items-start`}>
      {/* Logo */}
      <div className="flex-shrink-0">
        <div
          className="flex size-14 items-center justify-center rounded-full border-2 overflow-hidden bg-card"
          style={{ borderColor: exp.color }}
        >
          <Image
            src={exp.logo_path}
            alt={`${exp.company} logo`}
            width={44}
            height={44}
            className="object-contain p-1"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-card-foreground">{exp.title}</h3>
            <p className="text-sm font-medium" style={{ color: exp.color }}>
              {exp.company_url !== "#" ? (
                <Link
                  href={exp.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {exp.company}
                </Link>
              ) : (
                exp.company
              )}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="size-3" aria-hidden="true" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3" aria-hidden="true" />
              {exp.location}
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="section-container">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey across research, industry, and teaching."
      />

      <div className="space-y-16">
        {experience.sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-8 text-2xl font-semibold text-foreground">{section.title}</h2>
            <div className="relative space-y-6 pl-4">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
              {section.experiences.map((exp, i) => (
                <ExperienceCard key={`${exp.company}-${exp.duration}`} exp={exp} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
