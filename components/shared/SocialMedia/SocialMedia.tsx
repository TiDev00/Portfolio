import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import * as LucideIcons from "lucide-react";
import { socialMediaLinks } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

// Resolve lucide-react icon by export name provided in `iconClass`.
// If no match then return undefined and use fallback (initials).
function resolveIcon(iconClass?: string): ComponentType<SVGProps<SVGSVGElement>> | undefined {
  if (!iconClass) return undefined;
  const icons = LucideIcons as unknown as Record<string, ComponentType<SVGProps<SVGSVGElement>>>;
  const Icon = icons[iconClass];
  return Icon ? Icon : undefined;
}

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
      {socialMediaLinks.map(({ name, link, iconClass, backgroundColor }) => {
        const Icon = resolveIcon(iconClass);
        return (
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
              {Icon ? (
                <Icon aria-hidden="true" className={cn(compact ? "h-4 w-4" : "h-5 w-5")} />
              ) : (
                <span aria-hidden="true">{name.charAt(0)}</span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
