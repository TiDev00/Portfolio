import Link from "next/link";
import { socialMediaLinks } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

// Icon map — Font Awesome class names → lucide/SVG equivalents via inline SVG paths
// Using simple colored circles with initials as a fallback when FA is not loaded.
const iconMap: Record<string, string> = {
  "fas fa-newspaper": "📰",
  "fa-linkedin-in": "in",
  "fa-github": "gh",
  "fas fa-envelope": "✉",
  "fab fa-twitter": "𝕏",
};

interface SocialMediaProps {
  /** Render as small icon-only buttons (for Footer). */
  compact?: boolean;
}

export function SocialMedia({ compact = false }: SocialMediaProps) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-3", compact && "gap-2")}
      aria-label="Social media links"
      role="list"
    >
      {socialMediaLinks.map(({ name, link, iconClass, backgroundColor }) => (
        <li key={name}>
          <Link
            href={link}
            target={link.startsWith("mailto") ? undefined : "_blank"}
            rel={link.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={`Visit ${name}`}
            className={cn(
              "flex items-center justify-center rounded-full font-bold text-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              compact ? "size-8 text-xs" : "size-11 text-sm",
            )}
            style={{ backgroundColor }}
          >
            <span aria-hidden="true">{iconMap[iconClass] ?? name.charAt(0)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
