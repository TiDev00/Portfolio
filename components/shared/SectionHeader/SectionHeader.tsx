import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div
        className={cn("mt-3 h-1 w-16 rounded-full bg-primary", centered && "mx-auto")}
        aria-hidden="true"
      />
    </div>
  );
}
