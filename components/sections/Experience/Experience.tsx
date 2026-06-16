"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { CSSProperties } from "react";
import { PublicImage } from "@/components/shared/PublicImage";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experience } from "@/lib/portfolio";
import type { WorkExperience } from "@/lib/types";
import { isThemeVariant, toThemeVariant } from "@/lib/utils";
import { MapPin, Calendar } from "lucide-react";

type AccentStyle = CSSProperties &
  Record<"--entry-accent-light" | "--entry-accent-dark", string>;

function getAccentStyle(color: WorkExperience["color"]): AccentStyle {
  const accent = toThemeVariant(color);

  return {
    "--entry-accent-light": accent.light,
    "--entry-accent-dark": accent.dark,
  };
}

function ExperienceLogo({ exp }: { exp: WorkExperience }) {
  return isThemeVariant(exp.logo_path) ? (
    <>
      <PublicImage
        src={exp.logo_path.light}
        alt={`${exp.company} logo`}
        width={48}
        height={48}
        shape="circle"
        className="object-contain p-1 dark:hidden"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <PublicImage
        src={exp.logo_path.dark}
        alt={`${exp.company} logo`}
        width={48}
        height={48}
        shape="circle"
        className="hidden object-contain p-1 dark:block"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </>
  ) : (
    <PublicImage
      src={exp.logo_path}
      alt={`${exp.company} logo`}
      width={48}
      height={48}
      shape="circle"
      className="object-contain p-1"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

function ExperienceCard({
  exp,
  index,
  jobTitle,
  description,
}: {
  exp: WorkExperience;
  index: number;
  jobTitle: string;
  description: string;
}) {
  const isEven = index % 2 === 0;
  const accentStyle = getAccentStyle(exp.color);

  return (
    <div
      className={`flex gap-4 ${isEven ? "flex-row" : "flex-row-reverse"} items-start`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <div
          className="themed-accent flex size-14 items-center justify-center overflow-hidden rounded-full border-2 bg-card"
          style={{ ...accentStyle, borderColor: "var(--entry-accent)" }}
        >
          <ExperienceLogo exp={exp} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-card-foreground">{jobTitle}</h3>
            <p
              className="themed-accent text-sm font-medium"
              style={{ ...accentStyle, color: "var(--entry-accent)" }}
            >
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
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const t = useTranslations("sections.experience");
  const tData = useTranslations("experienceData");

  return (
    <div className="section-container">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="space-y-16">
        {experience.sections.map((section) => (
          <div key={section.translationKey}>
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              {tData(section.translationKey)}
            </h2>
            <div className="relative space-y-6 pl-4">
              {/* Timeline line */}
              <div
                className="absolute left-0 top-0 h-full w-0.5 bg-border"
                aria-hidden="true"
              />
              {section.experiences.map((exp, i) => (
                <ExperienceCard
                  key={`${exp.company}-${exp.duration}`}
                  exp={exp}
                  index={i}
                  jobTitle={tData(`${exp.translationKey}.jobTitle`)}
                  description={tData(`${exp.translationKey}.description`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
