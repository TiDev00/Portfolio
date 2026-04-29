"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next = locale === "en" ? "fr" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label={locale === "en" ? "Switch to French" : "Passer en anglais"}
      className={cn(
        "rounded px-2.5 py-1 text-sm font-semibold tabular-nums",
        "border border-border text-muted-foreground",
        "hover:border-primary hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "transition-colors disabled:opacity-50",
        className,
      )}
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}
