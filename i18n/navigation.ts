/**
 * Locale-aware navigation helpers.
 * Use these instead of next/navigation in all components
 * so that Link, useRouter, and usePathname are locale-prefix aware.
 */
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
