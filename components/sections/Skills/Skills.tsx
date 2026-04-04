import { SectionHeader } from "@/components/shared/SectionHeader";
import { skills } from "@/lib/portfolio";
import type { SkillData } from "@/lib/types";

function SkillCard({ data }: { data: SkillData }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-card-foreground">{data.title}</h3>

      {/* Software skill chips */}
      <ul
        className="mb-5 flex flex-wrap gap-2"
        aria-label={`${data.title} technologies`}
        role="list"
      >
        {data.softwareSkills.map(({ skillName }) => (
          <li
            key={skillName}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {skillName}
          </li>
        ))}
      </ul>

      {/* Bullet points */}
      <ul className="space-y-2" aria-label={`${data.title} capabilities`} role="list">
        {data.skills.map((point) => (
          <li key={point} className="text-sm text-muted-foreground leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section className="section-container" aria-labelledby="skills-heading">
      <SectionHeader
        title="What I Do?"
        subtitle="A blend of scientific rigor and engineering craft."
        id="skills-heading"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.data.map((skill) => (
          <SkillCard key={skill.title} data={skill} />
        ))}
      </div>
    </section>
  );
}
