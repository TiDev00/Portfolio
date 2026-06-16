import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { skills } from "@/lib/portfolio";
import type { SkillData } from "@/lib/types";

interface SkillCardProps {
  data: SkillData;
  title: string;
  bullets: string[];
}

function SkillCard({ data, title, bullets }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-card-foreground">
        {title}
      </h3>

      {/* Software skill chips */}
      <ul
        className="mb-5 flex flex-wrap gap-2"
        aria-label={`${title} technologies`}
        role="list"
      >
        {data.softwareSkills.map((skillName) => (
          <li key={skillName} className="data-chip px-3 py-1">
            {skillName}
          </li>
        ))}
      </ul>

      {/* Bullet points */}
      <ul
        className="space-y-2"
        aria-label={`${title} capabilities`}
        role="list"
      >
        {bullets.map((point) => (
          <li
            key={point}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Skills() {
  const tSection = await getTranslations("sections.skills");
  const tData = await getTranslations("skillsData");

  return (
    <section className="section-container" aria-labelledby="skills-heading">
      <SectionHeader
        id="skills-heading"
        title={tSection("title")}
        subtitle={tSection("subtitle")}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.data.map((skill) => (
          <SkillCard
            key={skill.translationKey}
            data={skill}
            title={tData(`${skill.translationKey}.title`)}
            bullets={tData.raw(`${skill.translationKey}.bullets`) as string[]}
          />
        ))}
      </div>
    </section>
  );
}
