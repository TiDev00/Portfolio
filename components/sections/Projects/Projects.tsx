"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/lib/types";
import { Star, GitFork, ExternalLink, Calendar } from "lucide-react";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col gap-3 transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-card-foreground leading-snug break-all">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground flex-shrink-0">
          <span className="flex items-center gap-1" aria-label={`${project.starCount} stars`}>
            <Star className="size-3.5" aria-hidden="true" />
            {project.starCount}
          </span>
          <span className="flex items-center gap-1" aria-label={`${project.forkCount} forks`}>
            <GitFork className="size-3.5" aria-hidden="true" />
            {project.forkCount}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Languages */}
      <ul className="flex flex-wrap gap-1.5" aria-label="Languages used" role="list">
        {project.languages.map((lang: string) => (
          <li key={lang} className="data-chip px-2.5 py-0.5">
            {lang}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-border mt-auto">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="size-3" aria-hidden="true" />
          {formatDate(project.createdAt)}
        </span>

        <div className="flex gap-2">
          <Modal
            trigger={
              <Button variant="ghost" size="sm" aria-label={`View details for ${project.name}`}>
                Details
              </Button>
            }
            title={project.name}
            description={project.description}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.languages.map((lang: string) => (
                  <span key={lang} className="data-chip px-3 py-1">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="size-4" aria-hidden="true" /> {project.starCount} stars
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="size-4" aria-hidden="true" /> {project.forkCount} forks
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-4" aria-hidden="true" /> {formatDate(project.createdAt)}
                </span>
              </div>
              <Button asChild className="w-full">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </Modal>

          <Button asChild variant="outline" size="sm">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} on GitHub`}
            >
              <ExternalLink className="size-3" aria-hidden="true" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <div className="section-container">
      <SectionHeader
        title="Projects"
        subtitle="Open-source work spanning NLP, computer vision, and applied ML."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link
            href="https://github.com/TiDev00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects on GitHub"
          >
            More Projects on GitHub
            <ExternalLink className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
