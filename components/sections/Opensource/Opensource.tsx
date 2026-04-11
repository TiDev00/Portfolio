"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { PublicImage } from "@/components/shared/PublicImage";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { volunteerships } from "@/lib/portfolio";
import type { WorkExperience } from "@/lib/types";
import { isThemeVariant, toThemeVariant } from "@/lib/utils";
import { ExternalLink, Github, Users, Heart, Box, Database, GitFork, Smile } from "lucide-react";

type AccentStyle = CSSProperties & Record<"--entry-accent-light" | "--entry-accent-dark", string>;

function getAccentStyle(color: WorkExperience["color"]): AccentStyle {
  const accent = toThemeVariant(color);

  return {
    "--entry-accent-light": accent.light,
    "--entry-accent-dark": accent.dark,
  };
}

function VolunteerLogo({ exp }: { exp: WorkExperience }) {
  return isThemeVariant(exp.logo_path) ? (
    <>
      <PublicImage
        src={exp.logo_path.light}
        alt={`${exp.company} logo`}
        width={40}
        height={40}
        shape="circle"
        className="object-contain p-1 dark:hidden"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <PublicImage
        src={exp.logo_path.dark}
        alt={`${exp.company} logo`}
        width={40}
        height={40}
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
      width={40}
      height={40}
      shape="circle"
      className="object-contain p-1"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export function OpensourceSection() {
  return (
    <div className="section-container space-y-16">
      {/* Community involvement */}
      <section aria-labelledby="community-heading">
        <SectionHeader
          id="community-heading"
          title="Open Source"
          subtitle="Community contributions, open-source projects, and volunteering."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {volunteerships.map((exp) => {
            const accentStyle = getAccentStyle(exp.color);

            return (
              <article
                key={exp.company}
                className="themed-accent rounded-xl border border-border bg-card p-5 shadow-sm"
                style={{
                  ...accentStyle,
                  borderLeftColor: "var(--entry-accent)",
                  borderLeftWidth: 4,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="themed-accent flex size-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-card"
                    style={{ ...accentStyle, borderColor: "var(--entry-accent)" }}
                  >
                    <VolunteerLogo exp={exp} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">{exp.title}</h3>
                    <p
                      className="themed-accent mt-0.5 text-xs font-medium"
                      style={{ ...accentStyle, color: "var(--entry-accent)" }}
                    >
                      {exp.company}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section
        className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8 text-center"
        aria-labelledby="github-cta-heading"
      >
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
          <GitFork className="size-8 text-primary" aria-hidden="true" />
        </div>
        <h2 id="github-cta-heading" className="text-2xl font-bold text-foreground">
          Let&apos;s Build Together
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
          I actively contribute to open source and welcome collaborations. Found a bug? Have an
          improvement idea? PRs are always welcome.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center">
          <div className="w-full flex justify-center">
            <Button asChild size="lg" className="w-full max-w-sm">
              <Link
                href="https://github.com/TiDev00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
                <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="w-full flex justify-center">
            <Button asChild variant="outline" size="lg" className="w-full max-w-sm">
              <Link
                href="https://codesandbox.io/u/TiDev00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit CodeSandbox profile"
              >
                <Box className="size-4" aria-hidden="true" />
                CodeSandbox
                <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="w-full flex justify-center">
            <Button asChild size="lg" className="w-full max-w-sm">
              <Link
                href="https://huggingface.co/TiDev00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hugging Face profile"
              >
                <Smile className="size-4" aria-hidden="true" />
                Hugging Face
                <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="w-full flex justify-center">
            <Button asChild variant="outline" size="lg" className="w-full max-w-sm">
              <Link
                href="https://www.kaggle.com/TiDev00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Kaggle profile"
              >
                <Database className="size-4" aria-hidden="true" />
                Kaggle
                <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6 sm:max-w-sm mx-auto text-center">
          <div>
            <p className="text-2xl font-black text-primary">25+</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
              <Github className="size-3" aria-hidden="true" /> Public repos
            </p>
          </div>
          <div>
            <p className="text-2xl font-black text-primary">{volunteerships.length}</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
              <Users className="size-3" aria-hidden="true" /> Communities
            </p>
          </div>
          <div>
            <p className="text-2xl font-black text-primary">10+</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
              <Heart className="size-3" aria-hidden="true" /> Yrs active
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
