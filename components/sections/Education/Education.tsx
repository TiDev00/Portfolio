import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { degrees, certifications, competitiveSites } from "@/lib/portfolio";
import type { Degree, Certification, CompetitiveSite } from "@/lib/types";
import { ExternalLink } from "lucide-react";

function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 size-14 rounded-lg overflow-hidden border border-border bg-white flex items-center justify-center">
          <Image
            src={degree.logo_path}
            alt={`${degree.alt_name} logo`}
            width={48}
            height={48}
            className="object-contain p-1"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground leading-snug">{degree.title}</h3>
          <p className="text-sm text-primary mt-0.5">{degree.subtitle}</p>
          <p className="text-xs text-muted-foreground mt-1">{degree.duration}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5">
        {degree.descriptions.map((desc) => (
          <li key={desc} className="text-sm text-muted-foreground leading-relaxed">
            {desc}
          </li>
        ))}
      </ul>

      {degree.website_link !== "#" && (
        <Link
          href={degree.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          Visit Website
          <ExternalLink className="size-3" aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <article
      className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-shadow hover:shadow-md"
      style={{
        borderTopColor: cert.color_code === "#ffffff" ? undefined : cert.color_code,
        borderTopWidth: 3,
      }}
    >
      <div className="p-5">
        <div className="mb-3 flex size-12 items-center justify-center rounded-lg border border-border bg-white">
          <Image
            src={cert.logo_path}
            alt={`${cert.alt_name} logo`}
            width={40}
            height={40}
            className="object-contain p-1"
          />
        </div>
        <h3 className="font-semibold text-card-foreground">{cert.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{cert.subtitle}</p>
        <Link
          href={cert.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          View Certificate
          <ExternalLink className="size-3" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function CompetitiveSiteItem({ site }: { site: CompetitiveSite }) {
  return (
    <Link
      href={site.profileLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Visit ${site.siteName} profile`}
    >
      <span className="text-3xl font-black leading-none" style={site.style} aria-hidden="true">
        {site.siteName.charAt(0)}
      </span>
      <span className="text-sm font-medium text-foreground">{site.siteName}</span>
    </Link>
  );
}

export function EducationSection() {
  return (
    <div className="section-container space-y-16">
      {/* Degrees */}
      <section aria-labelledby="degrees-heading">
        <SectionHeader
          id="degrees-heading"
          title="Education"
          subtitle="Academic degrees and qualifications."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {degrees.degrees.map((degree) => (
            <DegreeCard key={`${degree.title}-${degree.duration}`} degree={degree} />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section aria-labelledby="certifications-heading">
        <SectionHeader
          id="certifications-heading"
          title="Certifications"
          subtitle="Professional certifications from leading institutions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </section>

      {/* Competitive Sites */}
      <section aria-labelledby="competitive-heading">
        <SectionHeader id="competitive-heading" title="Certifications & Learning Platforms" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {competitiveSites.map((site) => (
            <CompetitiveSiteItem key={site.siteName} site={site} />
          ))}
        </div>
      </section>
    </div>
  );
}
